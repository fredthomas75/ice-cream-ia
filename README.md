# Glacé IA 🍦

Site transactionnel de crème glacée artisanale — scaffold démonstratif construit avec l'aide de l'IA lors du Half-Hack **« T'as faim pour l'IA? »** pour Intact Assurance, animé par Talsom.

> **L'histoire.** L'atelier proposait de bâtir une boutique de bonbons avec Copilot. En sortant, on a pivoté vers la crème glacée — et on a scaffold le site en direct avec Claude Code.

## Stack

- **Next.js 16** (App Router) + Turbopack
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Zustand** — panier persisté en localStorage
- **lucide-react** — icônes
- **Fraunces + Inter** — typographie

## Fonctionnalités

- 12 parfums artisanaux avec fiches détaillées
- Panier client persisté (zustand + localStorage)
- Tunnel de commande complet (coordonnées, livraison, paiement)
- Filtres par catégorie (Classiques · Signatures · Sorbets · Vegan)
- Pages: accueil, menu, fiche produit, panier, commande, confirmation, histoire, livraison
- Design responsive — mobile, tablette, desktop
- Identité visuelle dédiée: palette berry + crème + pistache, scoops morphés

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

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
  commande/             # Checkout
  confirmation/         # Confirmation
  notre-histoire/       # À propos
  livraison/            # Zones livrées
components/             # Header, Footer, Scoop, ProductCard, AddToCart…
lib/
  products.ts           # Données des 12 parfums
  cart.ts               # Store zustand
  utils.ts              # cn(), formatPrice()
```

## Déploiement

Optimisé pour Vercel — `vercel deploy` ou push sur GitHub puis import dans Vercel.

---

**Atelier Half-Hack Intact Assurance** — animé par Adil Mansouri, Paul Léné et Frédéric Thomas (Talsom).
