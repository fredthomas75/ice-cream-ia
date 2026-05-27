import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { Scoop } from "./scoop";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produit/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-[0_2px_0_rgba(74,40,24,0.04),0_20px_40px_-20px_rgba(74,40,24,0.15)] transition hover:-translate-y-1 hover:shadow-[0_2px_0_rgba(74,40,24,0.04),0_30px_50px_-15px_rgba(74,40,24,0.25)]"
    >
      {product.isNew && (
        <span className="absolute right-5 top-5 z-10 rounded-full bg-berry px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          Nouveau
        </span>
      )}
      {product.isVegan && !product.isNew && (
        <span className="absolute right-5 top-5 z-10 rounded-full bg-pistachio-deep px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          Vegan
        </span>
      )}

      <div className="mb-6 flex h-44 items-center justify-center">
        <Scoop gradient={product.gradient} emoji={product.emoji} size="md" />
      </div>

      <div className="flex-1">
        <p
          className="mb-1 text-[11px] font-semibold uppercase tracking-widest"
          style={{ color: product.accentColor }}
        >
          {product.tagline}
        </p>
        <h3 className="font-display text-xl font-semibold leading-tight text-cocoa">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-cocoa/60">
          {product.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-cocoa/5 pt-4">
        <span className="font-display text-xl font-semibold text-cocoa">
          {formatPrice(product.price)}
          <span className="ml-1 text-[11px] font-normal text-cocoa/50">
            · {product.unit}
          </span>
        </span>
        <span className="text-sm font-medium text-berry opacity-0 transition group-hover:opacity-100">
          Voir →
        </span>
      </div>
    </Link>
  );
}
