import { NextResponse } from "next/server";
import { stripe, isStripeEnabled, getSiteUrl } from "@/lib/stripe";
import { productBySlug } from "@/lib/products";
import { DELIVERY_FEE, FREE_DELIVERY_THRESHOLD } from "@/lib/shipping";

type CheckoutLine = { slug: string; quantity: number };
type CheckoutBody = {
  lines: CheckoutLine[];
  customer?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    postal?: string;
    notes?: string;
  };
};

export async function POST(req: Request) {
  const body = (await req.json()) as CheckoutBody;
  const lines = (body.lines ?? []).filter((l) => l.slug && l.quantity > 0);

  if (lines.length === 0) {
    return NextResponse.json({ error: "Panier vide." }, { status: 400 });
  }

  // Resolve products from the server-side catalogue (avoid trusting client prices).
  const resolved = lines
    .map((l) => {
      const product = productBySlug(l.slug);
      if (!product) return null;
      return { product, quantity: Math.max(1, Math.floor(l.quantity)) };
    })
    .filter((x): x is { product: NonNullable<ReturnType<typeof productBySlug>>; quantity: number } => x !== null);

  if (resolved.length === 0) {
    return NextResponse.json({ error: "Articles introuvables." }, { status: 400 });
  }

  const subtotal = resolved.reduce(
    (acc, l) => acc + l.product.pricePerPint * l.quantity,
    0,
  );
  const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;

  // No Stripe configured — return a sentinel so the client falls back to the simulated flow.
  if (!isStripeEnabled || !stripe) {
    return NextResponse.json({
      simulated: true,
      message:
        "Stripe non configuré. Définir STRIPE_SECRET_KEY pour activer le paiement réel.",
      subtotal,
      deliveryFee,
      total: subtotal + deliveryFee,
    });
  }

  const line_items = resolved.map(({ product, quantity }) => ({
    quantity,
    price_data: {
      currency: "cad",
      unit_amount: Math.round(product.pricePerPint * 100),
      product_data: {
        name: product.name,
        description: product.tagline,
        metadata: { slug: product.slug },
      },
    },
  }));

  if (deliveryFee > 0) {
    line_items.push({
      quantity: 1,
      price_data: {
        currency: "cad",
        unit_amount: Math.round(deliveryFee * 100),
        product_data: {
          name: "Livraison congelée",
          description: "Glace sèche · -18 °C garanti",
          metadata: { slug: "delivery" },
        },
      },
    });
  }

  const siteUrl = getSiteUrl(req);
  const customer = body.customer ?? {};
  const fullName = [customer.firstName, customer.lastName].filter(Boolean).join(" ");

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items,
      success_url: `${siteUrl}/commande/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/panier`,
      customer_email: customer.email,
      shipping_address_collection:
        customer.address && customer.postal
          ? undefined
          : { allowed_countries: ["CA"] },
      phone_number_collection: customer.phone ? undefined : { enabled: true },
      locale: "fr-CA",
      metadata: {
        customer_name: fullName,
        address: customer.address ?? "",
        city: customer.city ?? "",
        postal: customer.postal ?? "",
        notes: customer.notes ?? "",
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe n'a pas retourné d'URL de session." },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url, id: session.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur inconnue";
    return NextResponse.json(
      { error: `Stripe: ${message}` },
      { status: 500 },
    );
  }
}
