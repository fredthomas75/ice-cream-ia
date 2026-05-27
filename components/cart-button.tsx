"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useEffect, useState } from "react";

export function CartButton() {
  const count = useCart((s) => s.count());
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Link
      href="/panier"
      className="relative inline-flex h-11 items-center gap-2 rounded-full bg-cocoa pl-4 pr-5 text-cream transition hover:scale-[1.02] active:scale-[0.98]"
      aria-label="Voir le panier"
    >
      <ShoppingBag className="h-4 w-4" strokeWidth={2.2} />
      <span className="text-sm font-medium">Panier</span>
      {mounted && count > 0 && (
        <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-berry px-1 text-[11px] font-semibold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
