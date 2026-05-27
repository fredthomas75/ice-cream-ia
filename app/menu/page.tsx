import type { Metadata } from "next";
import Link from "next/link";
import { products, type Category } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export const metadata: Metadata = {
  title: "Le menu — Bonbon IA",
  description: "12 bonbons artisanaux. Traditions québécoises, gommeux, premium, vegan.",
};

const filters: { value: Category | "all" | "vegan"; label: string }[] = [
  { value: "all", label: "Tout" },
  { value: "tradition", label: "Traditions" },
  { value: "classique", label: "Classiques" },
  { value: "gommeux", label: "Gommeux & surs" },
  { value: "premium", label: "Premium" },
  { value: "vegan", label: "Vegan" },
];

type SearchParams = Promise<{ cat?: string }>;

export default async function MenuPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const active = (params.cat ?? "all") as Category | "all" | "vegan";

  const shown =
    active === "all"
      ? products
      : active === "vegan"
        ? products.filter((p) => p.isVegan)
        : products.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-12 max-w-2xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-berry">
          Le menu
        </p>
        <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-cocoa sm:text-6xl">
          Douze bonbons. Aucun raccourci.
        </h1>
        <p className="mt-4 text-lg text-cocoa/70">
          Chaque lot est confectionné à la main au Plateau-Mont-Royal. Les
          recettes traversent les saisons — quand un ingrédient n&apos;est pas
          au rendez-vous, on attend.
        </p>
      </div>

      {/* Filter pills */}
      <div className="-mx-4 mb-10 overflow-x-auto px-4 pb-2">
        <div className="flex gap-2 whitespace-nowrap">
          {filters.map((f) => {
            const isActive = active === f.value;
            const href = f.value === "all" ? "/menu" : `/menu?cat=${f.value}`;
            return (
              <Link
                key={f.value}
                href={href}
                className={
                  isActive
                    ? "inline-flex h-10 items-center rounded-full bg-cocoa px-5 text-sm font-medium text-cream"
                    : "inline-flex h-10 items-center rounded-full border border-cocoa/15 bg-white px-5 text-sm font-medium text-cocoa/70 transition hover:border-cocoa/40 hover:text-cocoa"
                }
              >
                {f.label}
              </Link>
            );
          })}
        </div>
      </div>

      {shown.length === 0 ? (
        <p className="text-cocoa/60">Aucun bonbon dans cette catégorie.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}

      <div className="mt-16 rounded-3xl bg-white p-8 text-center shadow-sm">
        <p className="font-display text-2xl font-semibold text-cocoa">
          Vous cherchez une saveur particulière&nbsp;?
        </p>
        <p className="mx-auto mt-2 max-w-xl text-cocoa/70">
          Nos lots changent toutes les deux semaines. Écrivez-nous et nous
          essaierons de la confectionner pour vous.
        </p>
        <a
          href="mailto:bonjour@bonbon-ia.ca"
          className="mt-6 inline-flex h-11 items-center rounded-full bg-berry px-6 text-sm font-medium text-white transition hover:bg-berry-dark"
        >
          bonjour@bonbon-ia.ca
        </a>
      </div>
    </div>
  );
}
