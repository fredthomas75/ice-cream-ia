import Link from "next/link";
import { ArrowRight, Snowflake, Leaf, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Scoop } from "@/components/scoop";
import { products } from "@/lib/products";

const taglineLoop = [
  "Brassée en petits lots",
  "Lait québécois",
  "Sans agents de conservation",
  "Livrée congelée",
  "Vanille Madagascar",
  "Cacao d'Équateur",
];

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-soft via-cream to-cream" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-20">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-cocoa/10 bg-white/60 px-4 py-1.5 text-xs font-medium text-cocoa/70 backdrop-blur">
              <Sparkles className="h-3 w-3 text-berry" />
              Nouveau — Sorbet Citron-Basilic
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cocoa sm:text-6xl lg:text-7xl">
              La crème glacée,{" "}
              <span className="italic text-berry">comme il faut.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cocoa/70">
              Brassée à Montréal en petits lots, livrée congelée à votre porte
              en moins de 90 minutes. Lait québécois, fruits de saison, jamais de
              raccourcis.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/menu"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-cocoa px-6 font-medium text-cream transition hover:bg-cocoa/90"
              >
                Voir le menu
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/notre-histoire"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-cocoa/15 px-6 font-medium text-cocoa transition hover:bg-cocoa/5"
              >
                Notre histoire
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-cocoa/60">
              <div className="flex items-center gap-2">
                <Snowflake className="h-4 w-4 text-berry" />
                <span>Livraison congelée</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-pistachio-deep" />
                <span>4 sorbets vegan</span>
              </div>
            </div>
          </div>

          {/* Scoop stack visual */}
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Scoop
                gradient="radial-gradient(circle at 30% 30%, #ffd1dc 0%, #f088a8 50%, #d63b6b 100%)"
                emoji="🍓"
                size="xl"
              />
            </div>
            <div className="absolute -left-4 top-8">
              <Scoop
                gradient="radial-gradient(circle at 30% 30%, #d4e6b8 0%, #8fb96d 55%, #5a8a3e 100%)"
                emoji="🥜"
                size="lg"
              />
            </div>
            <div className="absolute -right-2 bottom-8">
              <Scoop
                gradient="radial-gradient(circle at 30% 30%, #fff4d6 0%, #f5d896 45%, #c78a3f 100%)"
                emoji="🍦"
                size="lg"
              />
            </div>
            <div className="absolute -bottom-4 left-12">
              <Scoop
                gradient="radial-gradient(circle at 30% 30%, #ffe5a3 0%, #ffb347 50%, #e87b00 100%)"
                emoji="🥭"
                size="md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="border-y border-cocoa/5 bg-cocoa py-4 text-cream">
        <div className="flex overflow-hidden">
          <div className="marquee flex shrink-0 items-center gap-12 whitespace-nowrap pr-12 font-display text-xl italic">
            {[...taglineLoop, ...taglineLoop].map((t, i) => (
              <span key={i} className="flex items-center gap-12">
                {t}
                <span className="text-berry">●</span>
              </span>
            ))}
          </div>
          <div className="marquee flex shrink-0 items-center gap-12 whitespace-nowrap pr-12 font-display text-xl italic" aria-hidden>
            {[...taglineLoop, ...taglineLoop].map((t, i) => (
              <span key={i} className="flex items-center gap-12">
                {t}
                <span className="text-berry">●</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-berry">
              Le menu
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-cocoa sm:text-5xl">
              Nos quatre coups de cœur
            </h2>
          </div>
          <Link
            href="/menu"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-cocoa/70 hover:text-berry sm:inline-flex"
          >
            Voir les 12 parfums
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 rounded-3xl bg-cocoa p-8 text-cream sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-berry">
              Notre histoire
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Né d&apos;un atelier d&apos;IA. Brassé à la main.
            </h2>
            <p className="mt-6 text-cream/70">
              L&apos;idée est venue lors d&apos;un atelier <em>T&apos;as faim pour l&apos;IA?</em>
              {" "}organisé par Talsom: <em>et si on lançait une boutique avec
              l&apos;aide de l&apos;IA?</em> Trois semaines plus tard, nous brassions
              notre premier lot de Vanille Madagascar dans un local du Plateau.
            </p>
            <p className="mt-4 text-cream/70">
              On a utilisé l&apos;IA pour la recherche, le branding, les fiches
              produits. Mais la glace, on l&apos;a faite nous-mêmes — et on continue.
            </p>
            <Link
              href="/notre-histoire"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-berry px-6 py-3 text-sm font-medium text-white transition hover:bg-berry-dark"
            >
              Lire la suite
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-2xl bg-cream/5 p-6 backdrop-blur-sm">
              <p className="font-display text-4xl font-semibold text-berry">12</p>
              <p className="mt-1 text-xs text-cream/60">Parfums au menu</p>
            </div>
            <div className="rounded-2xl bg-cream/5 p-6 backdrop-blur-sm">
              <p className="font-display text-4xl font-semibold text-pistachio">90 min</p>
              <p className="mt-1 text-xs text-cream/60">Livraison max</p>
            </div>
            <div className="rounded-2xl bg-cream/5 p-6 backdrop-blur-sm">
              <p className="font-display text-4xl font-semibold text-gold">0</p>
              <p className="mt-1 text-xs text-cream/60">Agent de conservation</p>
            </div>
            <div className="col-span-3 rounded-2xl bg-cream/5 p-6 backdrop-blur-sm">
              <p className="font-display text-2xl italic text-cream">
                « Pas d&apos;arôme artificiel, pas de colorant. Si c&apos;est rose, c&apos;est
                qu&apos;il y a des fraises. »
              </p>
              <p className="mt-3 text-xs text-cream/50">— Notre chef glacier</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold tracking-tight text-cocoa sm:text-5xl">
          Prêt à fondre pour vos prochaines pintes&nbsp;?
        </h2>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/menu"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-cocoa px-6 font-medium text-cream transition hover:bg-cocoa/90"
          >
            Commander maintenant
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
