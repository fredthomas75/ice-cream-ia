export type Category = "classique" | "signature" | "sorbet" | "vegan";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  pricePerPint: number;
  category: Category;
  origin: string;
  allergens: string[];
  isVegan?: boolean;
  isNew?: boolean;
  emoji: string;
  // Layered radial-gradient strings used for the scoop visuals
  gradient: string;
  accentColor: string;
  pairs: string[];
};

export const products: Product[] = [
  {
    slug: "vanille-madagascar",
    name: "Vanille Bourbon de Madagascar",
    tagline: "La classique réinventée",
    description:
      "Crème glacée riche infusée de gousses de vanille Bourbon. Lente macération 48h.",
    longDescription:
      "Nous infusons des gousses de vanille Bourbon directement dans une base de crème québécoise pendant 48 heures. Le résultat: une vanille profonde, presque caramélisée, mouchetée de grains noirs visibles. Notre best-seller depuis le jour 1.",
    pricePerPint: 12.5,
    category: "classique",
    origin: "Vanille — Madagascar",
    allergens: ["Lait", "Œufs"],
    emoji: "🍦",
    gradient:
      "radial-gradient(circle at 30% 30%, #fff4d6 0%, #f5d896 45%, #c78a3f 100%)",
    accentColor: "#c78a3f",
    pairs: ["Café", "Tarte aux pommes", "Gaufre tiède"],
  },
  {
    slug: "chocolat-noir-70",
    name: "Chocolat Noir 70 %",
    tagline: "Pour les vrais",
    description: "Chocolat de couverture 70 % cacao, intense, peu sucré.",
    longDescription:
      "Du chocolat de couverture 70 % de l'Équateur, fondu lentement et incorporé à chaud. Une glace presque amère, dense, qui se tient à la cuillère. Recommandée pour ceux qui trouvent que les autres chocolats manquent de profondeur.",
    pricePerPint: 13,
    category: "classique",
    origin: "Cacao — Équateur",
    allergens: ["Lait", "Soya (traces)"],
    emoji: "🍫",
    gradient:
      "radial-gradient(circle at 30% 30%, #6b3a1f 0%, #4a2818 50%, #2a1408 100%)",
    accentColor: "#4a2818",
    pairs: ["Espresso", "Framboise", "Sel de Maldon"],
  },
  {
    slug: "fraise-des-champs",
    name: "Fraise des Champs du Québec",
    tagline: "Juin en pinte",
    description: "Fraises de l'Île d'Orléans, écrasées au mortier, jamais filtrées.",
    longDescription:
      "Les fraises arrivent de l'Île d'Orléans en juin. On les écrase au mortier le matin même, on garde les morceaux, on incorpore juste assez de crème pour porter le fruit. C'est une glace de saison — quand il n'y a plus de fraises, il n'y a plus de Fraise des Champs.",
    pricePerPint: 13.5,
    category: "signature",
    origin: "Île d'Orléans — Québec",
    allergens: ["Lait"],
    isNew: true,
    emoji: "🍓",
    gradient:
      "radial-gradient(circle at 30% 30%, #ffd1dc 0%, #f088a8 50%, #d63b6b 100%)",
    accentColor: "#d63b6b",
    pairs: ["Basilic frais", "Champagne", "Shortcake"],
  },
  {
    slug: "pistache-sicilienne",
    name: "Pistache Sicilienne",
    tagline: "L'unique, la vraie",
    description: "Pâte de pistache de Bronte, grillée maison. Vert pâle, riche.",
    longDescription:
      "Nous importons directement les pistaches de Bronte (DOP) du flanc de l'Etna. Grillées chez nous le matin, broyées en pâte. Pas de colorant — la vraie pistache n'est pas fluo, elle est vert pâle, presque beige. Texture incomparable.",
    pricePerPint: 14.5,
    category: "signature",
    origin: "Pistaches — Bronte, Sicile",
    allergens: ["Lait", "Œufs", "Fruits à coque"],
    emoji: "🥜",
    gradient:
      "radial-gradient(circle at 30% 30%, #d4e6b8 0%, #8fb96d 55%, #5a8a3e 100%)",
    accentColor: "#5a8a3e",
    pairs: ["Miel", "Chocolat noir", "Cannoli"],
  },
  {
    slug: "caramel-sale-quebec",
    name: "Caramel Salé du Québec",
    tagline: "Sucre, beurre, sel — c'est tout",
    description: "Caramel à la fleur de sel des Îles-de-la-Madeleine.",
    longDescription:
      "Du sucre blanc cuit à sec jusqu'au brun foncé, du beurre baratté de l'Île-aux-Grues, de la fleur de sel des Îles-de-la-Madeleine. Pas de glucose, pas de sirop de maïs. Le caramel craque sous la cuillère et fond sur la langue.",
    pricePerPint: 13,
    category: "classique",
    origin: "Sel — Îles-de-la-Madeleine",
    allergens: ["Lait"],
    emoji: "🍯",
    gradient:
      "radial-gradient(circle at 30% 30%, #f5d896 0%, #d4a042 50%, #8b5a1f 100%)",
    accentColor: "#8b5a1f",
    pairs: ["Pomme cuite", "Bourbon", "Brownie"],
  },
  {
    slug: "menthe-stracciatella",
    name: "Menthe Cacao Stracciatella",
    tagline: "Vert frais, éclats noirs",
    description: "Menthe fraîche infusée à froid, éclats de chocolat 70 %.",
    longDescription:
      "Pas de sirop vert fluo. On infuse des feuilles de menthe fraîche dans la crème pendant 12 heures, puis on incorpore du chocolat 70 % fondu qui se fige en filaments fins. Le goût est subtil, herbacé, vraiment menthe.",
    pricePerPint: 13,
    category: "signature",
    origin: "Menthe — Ferme québécoise",
    allergens: ["Lait", "Œufs"],
    emoji: "🌿",
    gradient:
      "radial-gradient(circle at 30% 30%, #d4ede0 0%, #8fc9a8 50%, #5a9874 100%)",
    accentColor: "#5a9874",
    pairs: ["Espresso", "Brownie", "Glace vanille"],
  },
  {
    slug: "mangue-passion",
    name: "Sorbet Mangue-Passion",
    tagline: "Soleil en cuillère",
    description: "Pulpe de mangue Alphonso et fruit de la passion. Sans produits laitiers.",
    longDescription:
      "Pulpe de mangue Alphonso d'Inde, mélangée au jus brut de fruit de la passion. Pas d'eau ajoutée — juste les fruits, un peu de sucre de canne, et du jus de citron pour l'équilibre. Sorbet ultra concentré.",
    pricePerPint: 12,
    category: "sorbet",
    origin: "Mangue — Inde · Passion — Pérou",
    allergens: [],
    isVegan: true,
    emoji: "🥭",
    gradient:
      "radial-gradient(circle at 30% 30%, #ffe5a3 0%, #ffb347 50%, #e87b00 100%)",
    accentColor: "#e87b00",
    pairs: ["Rhum blanc", "Coco", "Gâteau au yogourt"],
  },
  {
    slug: "yaourt-bleuet-sauvage",
    name: "Yaourt & Bleuet Sauvage",
    tagline: "Lac-Saint-Jean en pinte",
    description: "Yaourt nature québécois, bleuets sauvages du Lac-Saint-Jean.",
    longDescription:
      "Yaourt nature de la Laiterie Charlevoix, fouetté dans une base allégée. Les bleuets sauvages du Lac-Saint-Jean sont incorporés en marbrures, jamais broyés. Acidulé, frais, parfait après un repas.",
    pricePerPint: 13.5,
    category: "signature",
    origin: "Bleuets — Lac-Saint-Jean",
    allergens: ["Lait"],
    emoji: "🫐",
    gradient:
      "radial-gradient(circle at 30% 30%, #e0d0f0 0%, #8e6db0 50%, #4a2870 100%)",
    accentColor: "#4a2870",
    pairs: ["Granola", "Citron", "Tarte au sucre"],
  },
  {
    slug: "cookies-cream",
    name: "Cookies & Cream",
    tagline: "Le classique du dimanche",
    description: "Biscuits chocolat-crème écrasés à la main, jamais broyés.",
    longDescription:
      "Nous achetons les biscuits chez un boulanger de Rosemont. On les casse en gros morceaux, jamais en poudre, et on les incorpore à la base vanille. Texture: crémeuse avec des éclats croquants généreux.",
    pricePerPint: 12.5,
    category: "classique",
    origin: "Biscuits — Boulangerie Rosemont",
    allergens: ["Lait", "Œufs", "Gluten", "Soya"],
    emoji: "🍪",
    gradient:
      "radial-gradient(circle at 30% 30%, #f5e6d3 0%, #c9a378 50%, #5a3820 100%)",
    accentColor: "#5a3820",
    pairs: ["Lait froid", "Brownie", "Café"],
  },
  {
    slug: "espresso-cafe-saint-henri",
    name: "Espresso Café Saint-Henri",
    tagline: "Café X glace",
    description: "Espresso double extraction des Cafés Saint-Henri, pour adultes.",
    longDescription:
      "Double extraction des Cafés Saint-Henri (mélange Diablo), infusée à chaud dans la base. Caféine bien présente. À éviter avant le coucher, à servir avec un affogato d'espresso supplémentaire.",
    pricePerPint: 13.5,
    category: "signature",
    origin: "Café — Saint-Henri, Montréal",
    allergens: ["Lait", "Œufs"],
    emoji: "☕",
    gradient:
      "radial-gradient(circle at 30% 30%, #d4b89c 0%, #8b5a3c 50%, #3a1f10 100%)",
    accentColor: "#3a1f10",
    pairs: ["Vanille", "Chocolat noir", "Biscotti"],
  },
  {
    slug: "citron-basilic",
    name: "Sorbet Citron-Basilic",
    tagline: "L'apéro en glace",
    description: "Citron Meyer, basilic frais. Sans produits laitiers.",
    longDescription:
      "Citrons Meyer pressés le matin même, basilic frais d'une ferme de Saint-Lambert, sucre de canne. Pas de feuille — l'infusion donne tout le parfum sans le côté herbacé. Idéal en mid-course pour nettoyer le palais.",
    pricePerPint: 12,
    category: "sorbet",
    origin: "Basilic — Saint-Lambert, Québec",
    allergens: [],
    isVegan: true,
    isNew: true,
    emoji: "🍋",
    gradient:
      "radial-gradient(circle at 30% 30%, #fff9c4 0%, #f0d860 50%, #b8a020 100%)",
    accentColor: "#b8a020",
    pairs: ["Gin tonic", "Truite fumée", "Pavlova"],
  },
  {
    slug: "erable-pacane",
    name: "Érable & Pacane Caramélisée",
    tagline: "Le Québec en pinte",
    description: "Sirop d'érable foncé, pacanes caramélisées au sucre brut.",
    longDescription:
      "Sirop d'érable foncé de la cabane Lévesque (Beauce), pacanes du Texas caramélisées au sucre brut chez nous. La glace prend une teinte ambrée naturelle. Goût intense d'érable de fin de saison.",
    pricePerPint: 14,
    category: "signature",
    origin: "Érable — Beauce, Québec",
    allergens: ["Lait", "Œufs", "Fruits à coque"],
    emoji: "🍁",
    gradient:
      "radial-gradient(circle at 30% 30%, #f5d896 0%, #c98a3c 50%, #5a3018 100%)",
    accentColor: "#c98a3c",
    pairs: ["Tarte au sucre", "Whisky", "Bacon"],
  },
];

export const productBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const categoryLabels: Record<Category, string> = {
  classique: "Classiques",
  signature: "Signatures",
  sorbet: "Sorbets",
  vegan: "Vegan",
};

export function filterByCategory(cat: Category | "all") {
  if (cat === "all") return products;
  if (cat === "vegan") return products.filter((p) => p.isVegan);
  return products.filter((p) => p.category === cat);
}
