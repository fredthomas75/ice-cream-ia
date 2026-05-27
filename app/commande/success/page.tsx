import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Mail } from "lucide-react";
import { Scoop } from "@/components/scoop";
import { stripe, isStripeEnabled } from "@/lib/stripe";
import { formatPrice } from "@/lib/utils";
import { ClearCartOnMount } from "./clear-cart-on-mount";

export const metadata: Metadata = {
  title: "Commande confirmée — Bonbon IA",
};

type SearchParams = Promise<{ session_id?: string }>;

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { session_id } = await searchParams;

  let amountTotal: number | null = null;
  let email: string | null = null;
  let ref: string;
  let isPaid = false;

  if (session_id && isStripeEnabled && stripe) {
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id);
      isPaid = session.payment_status === "paid";
      amountTotal =
        typeof session.amount_total === "number" ? session.amount_total / 100 : null;
      email = session.customer_details?.email ?? null;
      ref = session.id.slice(-8).toUpperCase();
    } catch {
      ref = `IA-${Math.floor(100000 + Math.random() * 900000)}`;
    }
  } else {
    ref = `IA-${Math.floor(100000 + Math.random() * 900000)}`;
    isPaid = true;
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <ClearCartOnMount />

      <div className="relative">
        <Scoop
          gradient="radial-gradient(circle at 30% 30%, #d4ede0 0%, #8fc9a8 50%, #5a9874 100%)"
          emoji="🎉"
          size="lg"
        />
        <span className="absolute -right-2 -top-2 grid h-10 w-10 place-items-center rounded-full bg-pistachio-deep text-white shadow-lg">
          <CheckCircle2 className="h-5 w-5" />
        </span>
      </div>

      <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-berry">
        {isPaid ? "Paiement reçu" : "Commande enregistrée"}
      </p>
      <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.1] tracking-tight text-cocoa">
        Merci, vos bonbons arrivent.
      </h1>
      <p className="mt-4 max-w-md text-lg text-cocoa/70">
        Nous préparons votre commande dès maintenant — livrée chez vous dans
        les 24 prochaines heures.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl bg-white px-6 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-cocoa/50">
            Numéro de commande
          </p>
          <p className="mt-1 font-display text-2xl font-semibold text-cocoa">
            {ref}
          </p>
        </div>
        {amountTotal !== null && (
          <div className="rounded-2xl bg-white px-6 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-cocoa/50">
              Total payé
            </p>
            <p className="mt-1 font-display text-2xl font-semibold text-cocoa">
              {formatPrice(amountTotal)}
            </p>
          </div>
        )}
      </div>

      {email && (
        <p className="mt-6 inline-flex items-center gap-2 text-sm text-cocoa/60">
          <Mail className="h-4 w-4" />
          Confirmation envoyée à <span className="font-medium text-cocoa">{email}</span>
        </p>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/menu"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-cocoa px-6 font-medium text-cream transition hover:bg-cocoa/90"
        >
          Voir les autres bonbons
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-cocoa/15 px-6 font-medium text-cocoa transition hover:bg-cocoa/5"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
