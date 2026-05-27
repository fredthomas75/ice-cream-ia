"use client";

import { useState } from "react";
import { ShoppingBag, Check, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

export function AddToCart({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    add(product, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="inline-flex items-center gap-1 rounded-full bg-white p-1 shadow-sm">
        <button
          type="button"
          onClick={() => setQty(Math.max(1, qty - 1))}
          className="grid h-10 w-10 place-items-center rounded-full text-cocoa transition hover:bg-cocoa/5 disabled:opacity-30"
          disabled={qty <= 1}
          aria-label="Diminuer la quantité"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center font-display text-lg font-semibold text-cocoa">
          {qty}
        </span>
        <button
          type="button"
          onClick={() => setQty(qty + 1)}
          className="grid h-10 w-10 place-items-center rounded-full text-cocoa transition hover:bg-cocoa/5"
          aria-label="Augmenter la quantité"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className={cn(
          "inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full px-6 font-medium text-cream transition active:scale-[0.98]",
          justAdded ? "bg-pistachio-deep" : "bg-cocoa hover:bg-cocoa/90",
        )}
      >
        {justAdded ? (
          <>
            <Check className="h-4 w-4" strokeWidth={3} />
            Ajouté au panier
          </>
        ) : (
          <>
            <ShoppingBag className="h-4 w-4" />
            Ajouter — {qty} pinte{qty > 1 ? "s" : ""}
          </>
        )}
      </button>
    </div>
  );
}
