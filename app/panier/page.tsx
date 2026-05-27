"use client";

import Link from "next/link";
import { ArrowRight, Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart, DELIVERY_FEE, FREE_DELIVERY_THRESHOLD } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function CartPage() {
  const lines = useCart((s) => s.lines);
  const subtotal = useCart((s) => s.subtotal());
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isEmpty = !mounted || lines.length === 0;
  const freeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;
  const delivery = isEmpty ? 0 : freeDelivery ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-berry">
        Votre commande
      </p>
      <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-cocoa">
        Le panier
      </h1>

      {isEmpty ? (
        <div className="mt-12 rounded-3xl bg-white p-16 text-center shadow-sm">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-cream-soft">
            <ShoppingBag className="h-8 w-8 text-cocoa/50" />
          </div>
          <p className="mt-6 font-display text-2xl font-semibold text-cocoa">
            Votre panier est vide
          </p>
          <p className="mx-auto mt-2 max-w-sm text-cocoa/60">
            Allez voir les 12 bonbons — au moins un va vous plaire.
          </p>
          <Link
            href="/menu"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-cocoa px-6 font-medium text-cream transition hover:bg-cocoa/90"
          >
            Voir le menu
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Lines */}
          <div className="divide-y divide-cocoa/5 rounded-3xl bg-white shadow-sm">
            {lines.map((line) => (
              <div
                key={line.slug}
                className="flex items-center gap-4 p-5 sm:gap-6 sm:p-6"
              >
                <Link
                  href={`/produit/${line.slug}`}
                  className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-3xl shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${line.accentColor}30, ${line.accentColor}10)`,
                  }}
                >
                  {line.emoji}
                </Link>
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/produit/${line.slug}`}
                    className="block font-display text-lg font-semibold text-cocoa hover:text-berry"
                  >
                    {line.name}
                  </Link>
                  <p className="mt-0.5 text-sm text-cocoa/50">
                    {formatPrice(line.price)} · {line.unit}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1 rounded-full bg-cream p-1">
                  <button
                    type="button"
                    onClick={() => setQty(line.slug, line.quantity - 1)}
                    className="grid h-8 w-8 place-items-center rounded-full text-cocoa transition hover:bg-white"
                    aria-label="Diminuer"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-6 text-center font-display font-semibold text-cocoa">
                    {line.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty(line.slug, line.quantity + 1)}
                    className="grid h-8 w-8 place-items-center rounded-full text-cocoa transition hover:bg-white"
                    aria-label="Augmenter"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="hidden w-20 text-right font-display font-semibold text-cocoa sm:block">
                  {formatPrice(line.price * line.quantity)}
                </div>

                <button
                  type="button"
                  onClick={() => remove(line.slug)}
                  className="grid h-8 w-8 place-items-center rounded-full text-cocoa/40 transition hover:bg-berry/10 hover:text-berry"
                  aria-label={`Retirer ${line.name}`}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <aside className="h-fit rounded-3xl bg-cocoa p-6 text-cream shadow-sm">
            <h2 className="font-display text-xl font-semibold">Récapitulatif</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-cream/70">Sous-total</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-cream/70">Livraison</dt>
                <dd>
                  {freeDelivery ? (
                    <span className="text-pistachio">Offerte</span>
                  ) : (
                    formatPrice(delivery)
                  )}
                </dd>
              </div>
              {!freeDelivery && (
                <div className="rounded-xl bg-cream/5 p-3 text-xs text-cream/60">
                  Ajoutez {formatPrice(FREE_DELIVERY_THRESHOLD - subtotal)} pour
                  la livraison offerte.
                </div>
              )}
              <div className="border-t border-cream/10 pt-3" />
              <div className="flex items-baseline justify-between">
                <dt className="font-display text-lg font-semibold">Total</dt>
                <dd className="font-display text-2xl font-semibold">
                  {formatPrice(total)}
                </dd>
              </div>
            </dl>

            <Link
              href="/commande"
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-berry font-medium text-white transition hover:bg-berry-dark"
            >
              Passer à la commande
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/menu"
              className="mt-3 block text-center text-sm text-cream/60 hover:text-cream"
            >
              Continuer mes achats
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
