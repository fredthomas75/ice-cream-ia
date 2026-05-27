import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 bg-cocoa text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-3xl font-semibold tracking-tight">
              <span
                className="grid h-10 w-10 place-items-center rounded-full text-xl"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #ffd1dc 0%, #f088a8 50%, #d63b6b 100%)",
                }}
                aria-hidden
              >
                🍬
              </span>
              <span>
                Bonbon<span className="text-berry">IA</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-cream/70">
              Confiserie artisanale née d&apos;un atelier d&apos;IA chez Talsom.
              Confectionnée en petits lots à Montréal. Livrée chez vous sous 24 h.
            </p>
            <p className="mt-6 text-xs text-cream/40">
              © {new Date().getFullYear()} Bonbon IA — Tous droits réservés.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-cream/50">
              Boutique
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/menu" className="text-cream/80 hover:text-berry">Tous les bonbons</Link></li>
              <li><Link href="/menu?cat=gommeux" className="text-cream/80 hover:text-berry">Gommeux & surs</Link></li>
              <li><Link href="/livraison" className="text-cream/80 hover:text-berry">Zones livrées</Link></li>
              <li><Link href="/panier" className="text-cream/80 hover:text-berry">Mon panier</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-cream/50">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-cream/80">bonjour@bonbon-ia.ca</li>
              <li className="text-cream/80">514 555-0136</li>
              <li className="text-cream/80">Plateau-Mont-Royal</li>
              <li className="text-cream/80">Montréal, QC</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-xs text-cream/40">
          Scaffold généré le jour de l&apos;atelier <em>T&apos;as faim pour l&apos;IA?</em> — Half-Hack Intact Assurance × Talsom.
        </div>
      </div>
    </footer>
  );
}
