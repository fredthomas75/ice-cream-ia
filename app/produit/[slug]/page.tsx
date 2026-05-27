import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Truck, Leaf, AlertCircle } from "lucide-react";
import { productBySlug, products, categoryLabels } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { Scoop } from "@/components/scoop";
import { AddToCart } from "@/components/add-to-cart";
import { ProductCard } from "@/components/product-card";

type RouteParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: RouteParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return { title: "Bonbon introuvable — Bonbon IA" };
  return {
    title: `${p.name} — Bonbon IA`,
    description: p.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: RouteParams;
}) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/menu"
        className="inline-flex items-center gap-2 text-sm font-medium text-cocoa/60 hover:text-cocoa"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au menu
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <div className="relative flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-cream-soft to-cream p-12">
          <Scoop
            gradient={product.gradient}
            emoji={product.emoji}
            size="xl"
            className="!h-80 !w-80 sm:!h-96 sm:!w-96"
          />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
            {product.isVegan && (
              <span className="inline-flex items-center gap-1 rounded-full bg-pistachio-deep px-3 py-1 text-xs font-medium text-white">
                <Leaf className="h-3 w-3" /> Vegan
              </span>
            )}
            {product.isNew && (
              <span className="rounded-full bg-berry px-3 py-1 text-xs font-medium text-white">
                Nouveau
              </span>
            )}
            <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-cocoa">
              {categoryLabels[product.category]}
            </span>
          </div>
        </div>

        {/* Detail */}
        <div className="flex flex-col">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: product.accentColor }}
          >
            {product.tagline}
          </p>
          <h1 className="mt-2 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cocoa">
            {product.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-cocoa/70">
            {product.longDescription}
          </p>

          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-display text-4xl font-semibold text-cocoa">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-cocoa/60">— {product.unit}</span>
          </div>

          <div className="mt-6">
            <AddToCart product={product} />
          </div>

          {/* Specs grid */}
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-cocoa/10">
            <div className="bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-cocoa/50">
                Origine
              </p>
              <p className="mt-1 text-sm font-medium text-cocoa">
                {product.origin}
              </p>
            </div>
            <div className="bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-cocoa/50">
                Format
              </p>
              <p className="mt-1 text-sm font-medium text-cocoa">
                {product.unit}
              </p>
            </div>
            <div className="bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-cocoa/50 flex items-center gap-1">
                <Truck className="h-3 w-3" /> Livraison
              </p>
              <p className="mt-1 text-sm font-medium text-cocoa">
                Sous 24 heures
              </p>
            </div>
            <div className="bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-cocoa/50 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> Allergènes
              </p>
              <p className="mt-1 text-sm font-medium text-cocoa">
                {product.allergens.length ? product.allergens.join(", ") : "Aucun"}
              </p>
            </div>
          </div>

          {/* Pairings */}
          <div className="mt-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cocoa/50">
              Idéal avec
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.pairs.map((pair) => (
                <span
                  key={pair}
                  className="rounded-full border border-cocoa/15 bg-white px-4 py-1.5 text-sm text-cocoa/80"
                >
                  {pair}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="mb-8 font-display text-3xl font-semibold tracking-tight text-cocoa">
            À découvrir aussi
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
