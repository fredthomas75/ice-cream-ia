import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Scoop } from "@/components/scoop";

export const metadata: Metadata = {
  title: "Notre histoire — Glacé IA",
  description: "Comment un atelier d'IA chez Talsom a accouché d'une crème glacée.",
};

export default function StoryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-20">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-berry">
        Notre histoire
      </p>
      <h1 className="mt-2 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cocoa sm:text-6xl">
        Né d&apos;un atelier d&apos;IA.
        <br />
        <span className="italic text-berry">Brassé à la main.</span>
      </h1>

      <div className="prose-custom mt-12 space-y-6 text-lg leading-relaxed text-cocoa/80">
        <p>
          L&apos;idée est venue lors d&apos;un atelier <em>T&apos;as faim pour l&apos;IA?</em>
          {" "}organisé par <strong>Talsom</strong> chez un grand assureur québécois.
          Le mandat était simple: explorer comment l&apos;IA générative pouvait nous
          aider à concrétiser une idée d&apos;affaires en quelques heures.
        </p>
        <p>
          Le scénario proposé: lancer une boutique gourmande. Études de marché,
          profils clients, Business Model Canvas, branding — tout devait être
          dégrossi avec l&apos;aide de Copilot. À la fin de la journée, nous avions
          un projet de boutique de bonbons.
        </p>
        <p>
          Mais en repartant, l&apos;un d&apos;entre nous a dit: <em>«&nbsp;Pourquoi pas la
          crème glacée?&nbsp;»</em> Trois semaines plus tard, on brassait notre
          premier lot de Vanille Madagascar dans un local du Plateau.
        </p>

        <div className="my-12 flex justify-center">
          <Scoop
            gradient="radial-gradient(circle at 30% 30%, #ffd1dc 0%, #f088a8 50%, #d63b6b 100%)"
            emoji="🍦"
            size="lg"
          />
        </div>

        <h2 className="font-display text-3xl font-semibold tracking-tight text-cocoa">
          Ce qu&apos;on a gardé de l&apos;atelier
        </h2>
        <p>
          L&apos;IA nous a aidés à <strong>aller plus vite</strong> sur ce qui n&apos;est
          pas notre métier: recherche, rédaction, branding, fiches produits.
          Pour la glace elle-même, on s&apos;est appuyés sur des artisans et un chef
          glacier qui sait ce qu&apos;il fait depuis vingt ans.
        </p>
        <p>
          Notre règle: l&apos;IA fait le pénible, l&apos;humain fait l&apos;essentiel.
        </p>

        <h2 className="font-display text-3xl font-semibold tracking-tight text-cocoa">
          Comment on travaille
        </h2>
        <ul className="ml-6 list-disc space-y-2">
          <li>Du lait québécois, jamais reconstitué.</li>
          <li>Des fruits de saison — quand ils ne sont pas bons, on attend.</li>
          <li>Pas d&apos;arôme artificiel, pas de colorant, pas de stabilisant industriel.</li>
          <li>Brassée en lots de 8 pintes. Livraison congelée sous 90 minutes.</li>
        </ul>
      </div>

      <div className="mt-16 rounded-3xl bg-cocoa p-8 text-cream sm:p-12">
        <p className="font-display text-3xl font-semibold leading-tight">
          Vous voulez goûter avant d&apos;y croire&nbsp;?
        </p>
        <Link
          href="/menu"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-berry px-6 py-3 text-sm font-medium text-white transition hover:bg-berry-dark"
        >
          Voir les douze parfums
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
