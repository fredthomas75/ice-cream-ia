"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Lock, CheckCircle2 } from "lucide-react";
import { useCart, DELIVERY_FEE, FREE_DELIVERY_THRESHOLD } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const router = useRouter();
  const lines = useCart((s) => s.lines);
  const subtotal = useCart((s) => s.subtotal());
  const clear = useCart((s) => s.clear);

  const [mounted, setMounted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (mounted && lines.length === 0) {
      router.replace("/panier");
    }
  }, [mounted, lines.length, router]);

  const freeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;
  const delivery = freeDelivery ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    clear();
    router.push("/confirmation");
  }

  if (!mounted || lines.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-berry">
        Étape finale
      </p>
      <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-cocoa">
        Votre commande
      </h1>

      <form
        onSubmit={onSubmit}
        className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]"
      >
        <div className="space-y-8">
          {/* Coordonnées */}
          <fieldset className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <legend className="font-display text-xl font-semibold text-cocoa">
              Coordonnées
            </legend>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Prénom" name="firstName" autoComplete="given-name" required />
              <Field label="Nom" name="lastName" autoComplete="family-name" required />
              <Field
                label="Courriel"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="sm:col-span-2"
              />
              <Field
                label="Téléphone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="sm:col-span-2"
              />
            </div>
          </fieldset>

          {/* Livraison */}
          <fieldset className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <legend className="font-display text-xl font-semibold text-cocoa">
              Adresse de livraison
            </legend>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field
                label="Adresse"
                name="address"
                autoComplete="address-line1"
                required
                className="sm:col-span-2"
              />
              <Field label="Ville" name="city" autoComplete="address-level2" required defaultValue="Montréal" />
              <Field label="Code postal" name="postal" autoComplete="postal-code" required placeholder="H2T 1J7" />
              <Field
                label="Instructions de livraison (optionnel)"
                name="notes"
                className="sm:col-span-2"
                placeholder="Sonnez deux coups, le chien aboie."
              />
            </div>
          </fieldset>

          {/* Paiement */}
          <fieldset className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <legend className="flex items-center gap-2 font-display text-xl font-semibold text-cocoa">
              Paiement
              <span className="inline-flex items-center gap-1 rounded-full bg-pistachio-deep/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-pistachio-deep">
                <Lock className="h-2.5 w-2.5" /> Sécurisé
              </span>
            </legend>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field
                label="Numéro de carte"
                name="card"
                placeholder="4242 4242 4242 4242"
                required
                className="sm:col-span-2"
              />
              <Field label="Expiration" name="expiry" placeholder="MM / AA" required />
              <Field label="CVC" name="cvc" placeholder="123" required />
            </div>
            <p className="mt-4 text-xs text-cocoa/50">
              Démonstration uniquement — aucune vraie transaction n&apos;est traitée.
            </p>
          </fieldset>
        </div>

        {/* Summary */}
        <aside className="h-fit rounded-3xl bg-cocoa p-6 text-cream shadow-sm lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-semibold">Votre panier</h2>
          <ul className="mt-5 divide-y divide-cream/10">
            {lines.map((l) => (
              <li key={l.slug} className="flex items-center gap-3 py-3">
                <span
                  className="grid h-10 w-10 place-items-center rounded-xl text-xl"
                  style={{
                    background: `linear-gradient(135deg, ${l.accentColor}50, ${l.accentColor}20)`,
                  }}
                >
                  {l.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{l.name}</p>
                  <p className="text-xs text-cream/50">
                    {l.quantity} × {formatPrice(l.pricePerPint)}
                  </p>
                </div>
                <span className="text-sm font-semibold">
                  {formatPrice(l.pricePerPint * l.quantity)}
                </span>
              </li>
            ))}
          </ul>

          <dl className="mt-5 space-y-3 border-t border-cream/10 pt-5 text-sm">
            <div className="flex justify-between">
              <dt className="text-cream/70">Sous-total</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-cream/70">Livraison</dt>
              <dd>{freeDelivery ? <span className="text-pistachio">Offerte</span> : formatPrice(delivery)}</dd>
            </div>
            <div className="flex items-baseline justify-between border-t border-cream/10 pt-3">
              <dt className="font-display text-lg font-semibold">Total</dt>
              <dd className="font-display text-2xl font-semibold">{formatPrice(total)}</dd>
            </div>
          </dl>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-berry font-medium text-white transition hover:bg-berry-dark disabled:opacity-70"
          >
            {submitting ? (
              "Traitement…"
            ) : (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Confirmer la commande
              </>
            )}
          </button>
          <p className="mt-3 text-center text-xs text-cream/50">
            En confirmant, vous acceptez nos conditions de livraison.
          </p>
        </aside>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
  defaultValue,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-cocoa/60">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="block w-full rounded-2xl border border-cocoa/10 bg-cream/40 px-4 py-3 text-cocoa placeholder:text-cocoa/30 outline-none transition focus:border-berry focus:bg-white focus:ring-2 focus:ring-berry/20"
      />
    </label>
  );
}
