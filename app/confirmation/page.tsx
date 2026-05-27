import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Scoop } from "@/components/scoop";

export const metadata: Metadata = {
  title: "Commande confirmée — Glacé IA",
};

export default function ConfirmationPage() {
  const ref = `IA-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <div className="relative">
        <Scoop
          gradient="radial-gradient(circle at 30% 30%, #d4ede0 0%, #8fc9a8 50%, #5a9874 100%)"
          emoji="🎉"
          size="lg"
        />
        <span className="absolute -right-2 -top-2 grid h-10 w-10 place-items-center rounded-full bg-pistachio-deep text-white shadow-lg">
          <CheckCircle2 className="h-5 w-5" />
        </span>
      </div>

      <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-berry">
        Commande confirmée
      </p>
      <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.1] tracking-tight text-cocoa">
        Merci, vos pintes arrivent.
      </h1>
      <p className="mt-4 max-w-md text-lg text-cocoa/70">
        Nous préparons votre commande dès maintenant — livrée congelée chez vous
        dans les 90 prochaines minutes.
      </p>

      <div className="mt-8 rounded-2xl bg-white px-6 py-4 shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-cocoa/50">
          Numéro de commande
        </p>
        <p className="mt-1 font-display text-2xl font-semibold text-cocoa">
          {ref}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/menu"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-cocoa px-6 font-medium text-cream transition hover:bg-cocoa/90"
        >
          Voir les autres parfums
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-cocoa/15 px-6 font-medium text-cocoa transition hover:bg-cocoa/5"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
