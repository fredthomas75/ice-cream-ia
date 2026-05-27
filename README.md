# Bonbon IA 🍬

Site transactionnel de confiserie artisanale québécoise — scaffold démonstratif construit avec l'aide de l'IA lors du Half-Hack **« T'as faim pour l'IA? »** pour Intact Assurance, animé par Talsom.

> **L'histoire.** L'atelier proposait de bâtir une boutique de bonbons avec Copilot. Trois semaines plus tard, on a sorti notre premier lot de Tire Sainte-Catherine — et on a scaffold le site en direct avec Claude Code.

## Stack

- **Next.js 16** (App Router) + Turbopack
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Zustand** — panier persisté en localStorage
- **Stripe Checkout** — paiement réel (fallback simulé sans clé)
- **lucide-react** — icônes
- **Fraunces + Inter** — typographie

## Fonctionnalités

- 12 bonbons artisanaux québécois avec fiches détaillées (SSG)
- Panier client persisté (zustand + localStorage)
- Tunnel de commande complet via Stripe Checkout (hosted)
- Fallback simulé si Stripe n'est pas configuré (dev sans clés)
- Filtres par catégorie (Traditions · Classiques · Gommeux & surs · Premium · Vegan)
- Pages: accueil, menu, fiche produit, panier, commande, succès, histoire, livraison
- Design responsive — mobile, tablette, desktop
- Identité visuelle dédiée: palette berry + crème + pistache, blobs morphés

## Démarrage

```bash
npm install
cp .env.example .env.local  # éditer pour ajouter STRIPE_SECRET_KEY (optionnel)
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

Sans clé Stripe, le tunnel fonctionne en mode simulé — utile pour le développement local.

## Build production

```bash
npm run build
npm start
```

## Structure

```
app/
  page.tsx              # Accueil
  menu/                 # Catalogue + filtres
  produit/[slug]/       # Fiche produit (SSG pour les 12)
  panier/               # Panier
  commande/             # Checkout (POST /api/checkout)
  commande/success/     # Page succès (récupère la session Stripe)
  notre-histoire/       # À propos
  livraison/            # Zones livrées
  api/checkout/         # Création session Stripe
components/             # Header, Footer, Scoop, ProductCard, AddToCart…
lib/
  products.ts           # Données des 12 bonbons
  cart.ts               # Store zustand
  shipping.ts           # Constantes livraison (server-safe)
  stripe.ts             # Client Stripe + helpers
  utils.ts              # cn(), formatPrice()
```

## Variables d'environnement

Voir [.env.example](./.env.example) pour la liste complète.

- `STRIPE_SECRET_KEY` (optionnel) — active le paiement Stripe réel
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (optionnel)
- `NEXT_PUBLIC_SITE_URL` (auto-détecté sur Vercel)

## Déploiement

Connecté à Vercel via GitHub — chaque push sur `main` déclenche un déploiement.
Ajouter les variables d'environnement dans **Vercel → Settings → Environment Variables**.

---

**Atelier Half-Hack Intact Assurance** — animé par Adil Mansouri, Paul Léné et Frédéric Thomas (Talsom).
