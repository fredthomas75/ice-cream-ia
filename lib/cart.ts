"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "./products";

export type CartLine = {
  slug: string;
  name: string;
  pricePerPint: number;
  quantity: number;
  emoji: string;
  accentColor: string;
};

type CartState = {
  lines: CartLine[];
  add: (p: Product, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: () => number;
  subtotal: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      add: (p, qty = 1) =>
        set((s) => {
          const existing = s.lines.find((l) => l.slug === p.slug);
          if (existing) {
            return {
              lines: s.lines.map((l) =>
                l.slug === p.slug ? { ...l, quantity: l.quantity + qty } : l,
              ),
            };
          }
          return {
            lines: [
              ...s.lines,
              {
                slug: p.slug,
                name: p.name,
                pricePerPint: p.pricePerPint,
                emoji: p.emoji,
                accentColor: p.accentColor,
                quantity: qty,
              },
            ],
          };
        }),
      remove: (slug) =>
        set((s) => ({ lines: s.lines.filter((l) => l.slug !== slug) })),
      setQty: (slug, qty) =>
        set((s) => ({
          lines: s.lines
            .map((l) => (l.slug === slug ? { ...l, quantity: qty } : l))
            .filter((l) => l.quantity > 0),
        })),
      clear: () => set({ lines: [] }),
      count: () => get().lines.reduce((acc, l) => acc + l.quantity, 0),
      subtotal: () =>
        get().lines.reduce((acc, l) => acc + l.pricePerPint * l.quantity, 0),
    }),
    {
      name: "glace-ia-cart",
      partialize: (s) => ({ lines: s.lines }),
    },
  ),
);

export const DELIVERY_FEE = 6.5;
export const FREE_DELIVERY_THRESHOLD = 60;
