import type { Metadata } from "next";
import { Package, Clock, MapPin, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Livraison — Bonbon IA",
  description: "Livraison soignée à Montréal et environs, sous 24 heures.",
};

const zones = [
  { name: "Plateau-Mont-Royal", code: "H2H, H2J, H2T, H2W, H2X" },
  { name: "Mile-End", code: "H2T, H2V" },
  { name: "Rosemont", code: "H1X, H1Y, H2G, H2S" },
  { name: "Villeray–Saint-Michel", code: "H2P, H2R, H1Z" },
  { name: "Outremont", code: "H2V" },
  { name: "Centre-ville", code: "H2L, H2Y, H2Z, H3A, H3B" },
  { name: "Hochelaga-Maisonneuve", code: "H1V, H1W" },
  { name: "Verdun", code: "H4G, H4H" },
];

export default function DeliveryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-berry">
        Logistique
      </p>
      <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-cocoa sm:text-6xl">
        Livré chez vous
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-cocoa/70">
        Nos bonbons voyagent dans des sachets et boîtes scellés, emballés à la
        main, glissés dans une enveloppe matelassée recyclable. Pas de plastique
        inutile.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Feature
          icon={<Clock className="h-5 w-5" />}
          title="Sous 24 heures"
          body="De la confection à votre porte."
          color="#d63b6b"
        />
        <Feature
          icon={<Package className="h-5 w-5" />}
          title="Emballage soigné"
          body="Scellés sous vide pour la fraîcheur."
          color="#5a9874"
        />
        <Feature
          icon={<Truck className="h-5 w-5" />}
          title="Livraison gratuite"
          body="Sur les commandes de 60 $ et plus."
          color="#c78a3f"
        />
        <Feature
          icon={<MapPin className="h-5 w-5" />}
          title="Montréal central"
          body="8 quartiers actuellement desservis."
          color="#5a8a3e"
        />
      </div>

      <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-cocoa">
          Quartiers desservis
        </h2>
        <p className="mt-2 text-cocoa/70">
          Si votre code postal n&apos;est pas dans la liste, écrivez-nous —
          nous étendons les zones chaque mois.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {zones.map((z) => (
            <div
              key={z.name}
              className="rounded-2xl bg-white p-5 shadow-sm"
            >
              <p className="font-display text-lg font-semibold text-cocoa">
                {z.name}
              </p>
              <p className="mt-1 text-xs text-cocoa/50">{z.code}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 rounded-3xl bg-cocoa p-8 text-center text-cream sm:p-12">
        <p className="font-display text-3xl font-semibold">
          Hors zone&nbsp;? On peut s&apos;arranger.
        </p>
        <p className="mx-auto mt-3 max-w-md text-cream/70">
          Pour les commandes de groupe, événements corporatifs, ou cadeaux
          d&apos;entreprise — écrivez-nous.
        </p>
        <a
          href="mailto:bonjour@bonbon-ia.ca"
          className="mt-6 inline-flex h-12 items-center rounded-full bg-berry px-6 font-medium text-white transition hover:bg-berry-dark"
        >
          bonjour@bonbon-ia.ca
        </a>
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  body,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  color: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div
        className="grid h-10 w-10 place-items-center rounded-full text-white"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <p className="mt-4 font-display text-lg font-semibold text-cocoa">
        {title}
      </p>
      <p className="mt-1 text-sm text-cocoa/60">{body}</p>
    </div>
  );
}
