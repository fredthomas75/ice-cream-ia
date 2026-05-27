export type Category = "classique" | "gommeux" | "tradition" | "premium";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  unit: string;
  category: Category;
  origin: string;
  allergens: string[];
  isVegan?: boolean;
  isNew?: boolean;
  emoji: string;
  gradient: string;
  accentColor: string;
  pairs: string[];
};

export const products: Product[] = [
  {
    slug: "tire-sainte-catherine",
    name: "Tire Sainte-Catherine",
    tagline: "Le 25 novembre en bouche",
    description: "Mélasse cuite à 116 °C, tirée à la main jusqu'au blond doré.",
    longDescription:
      "Recette héritée d'une grand-mère de Saint-Hyacinthe. Mélasse fine, sucre, beurre — on tire à la main jusqu'à ce qu'elle pâlisse, puis on la coupe au ciseau encore tiède. Texture qui résiste un instant, puis qui fond.",
    price: 9.5,
    unit: "sachet de 150 g",
    category: "tradition",
    origin: "Mélasse — Crosby's, vinaigre — Maison Orphée",
    allergens: ["Lait"],
    emoji: "🍯",
    gradient:
      "radial-gradient(circle at 30% 30%, #f5d896 0%, #d4a042 50%, #8b5a1f 100%)",
    accentColor: "#8b5a1f",
    pairs: ["Thé noir", "Pomme rôtie", "Bourbon"],
  },
  {
    slug: "sucre-a-la-creme-beauce",
    name: "Sucre à la Crème de la Beauce",
    tagline: "Recette de grand-maman",
    description: "Cassonade dorée, crème 35 %, beurre d'érable. Coupé en cubes.",
    longDescription:
      "On part d'une cassonade dorée du Brésil, de la crème 35 % de la Laiterie Charlevoix et du beurre d'érable de la cabane Lévesque. Cuisson lente jusqu'au stade « petit boulé », repos une nuit, puis coupe en cubes de 25 g. Texture friable qui s'effondre sous la dent.",
    price: 11,
    unit: "boîte de 200 g",
    category: "tradition",
    origin: "Crème — Charlevoix · Érable — Beauce",
    allergens: ["Lait"],
    emoji: "🧈",
    gradient:
      "radial-gradient(circle at 30% 30%, #fff4d6 0%, #f5d896 45%, #c78a3f 100%)",
    accentColor: "#c78a3f",
    pairs: ["Café noir", "Tarte aux pommes", "Whisky tourbé"],
  },
  {
    slug: "fraises-suedoises-premium",
    name: "Fraises Suédoises Premium",
    tagline: "Le dépanneur, version chef",
    description: "Gommeux à la fraise des bois, glacés au sucre cristal.",
    longDescription:
      "Notre version du classique du dépanneur, avec une vraie purée de fraises des bois et de la pectine de pomme. Pas de colorant rouge nº 40 — la teinte rose vient du fruit. Texture plus moelleuse que l'original, parfum plus net.",
    price: 8.5,
    unit: "sachet de 180 g",
    category: "classique",
    origin: "Fraises — Île d'Orléans",
    allergens: [],
    isVegan: true,
    isNew: true,
    emoji: "🍓",
    gradient:
      "radial-gradient(circle at 30% 30%, #ffd1dc 0%, #f088a8 50%, #d63b6b 100%)",
    accentColor: "#d63b6b",
    pairs: ["Cinéma", "Soda au gingembre", "Yogourt nature"],
  },
  {
    slug: "cornichons-surs-geants",
    name: "Cornichons Surs Géants",
    tagline: "L'apéro en gommeux",
    description: "Gommeux acidulés à l'aneth, 6 cm de pure provocation.",
    longDescription:
      "On a infusé de vrais cornichons à l'aneth dans le sirop de base, puis on a moulé des gommeux de 6 cm. Acide en surface (acide citrique pur), salé en profondeur, finale d'aneth. Surprenant. Addictif. Pas pour tout le monde.",
    price: 9,
    unit: "sachet de 200 g",
    category: "gommeux",
    origin: "Aneth — Ferme Saint-Lambert",
    allergens: ["Soya"],
    isNew: true,
    emoji: "🥒",
    gradient:
      "radial-gradient(circle at 30% 30%, #d4e6b8 0%, #8fb96d 55%, #5a8a3e 100%)",
    accentColor: "#5a8a3e",
    pairs: ["Bière IPA", "Sandwich pastrami", "Bloody Caesar"],
  },
  {
    slug: "reglisse-calabrese",
    name: "Réglisse Noire de Calabrese",
    tagline: "Importée, intense, vraie",
    description: "Réglisse pure d'Italie, sans sucre ajouté, anisée.",
    longDescription:
      "Importée directement de Calabrese (Calabre, Italie) — extrait pur de racine de réglisse, sans sucre ajouté ni colorant. Goût intense, presque salin, longue persistance. Pour les vrais amateurs.",
    price: 12.5,
    unit: "boîte métal 100 g",
    category: "classique",
    origin: "Réglisse — Calabre, Italie",
    allergens: [],
    isVegan: true,
    emoji: "⚫",
    gradient:
      "radial-gradient(circle at 30% 30%, #6b3a1f 0%, #2a1408 50%, #000000 100%)",
    accentColor: "#1a0c04",
    pairs: ["Espresso", "Anis étoilé", "Pastis"],
  },
  {
    slug: "boule-gomme-arc-en-ciel",
    name: "Boule de Gomme Arc-en-Ciel",
    tagline: "Souvenir d'enfance, taille XL",
    description: "Gomme à mâcher 5 cm, 6 saveurs en couches, dure une heure.",
    longDescription:
      "Diamètre 5 cm. Six couches de saveurs (fraise, citron, raisin, cerise, orange, melon d'eau) qui se révèlent à mesure que vous mâchez. Dure environ 45 minutes. Faite sur commande chez un confiseur de Boucherville.",
    price: 6,
    unit: "1 boule",
    category: "classique",
    origin: "Confiseur — Boucherville",
    allergens: ["Soya"],
    emoji: "🌈",
    gradient:
      "radial-gradient(circle at 30% 30%, #ffd1dc 0%, #f0d860 30%, #8fb96d 55%, #87ceeb 80%, #b07cc6 100%)",
    accentColor: "#b07cc6",
    pairs: ["Bande dessinée", "Soccer du dimanche", "Voyage en auto"],
  },
  {
    slug: "vers-acidules-multicolores",
    name: "Vers Acidulés Multicolores",
    tagline: "Sur, salé, sucré, encore",
    description: "Vers gommeux 6 saveurs, glaçage acide cristallisé.",
    longDescription:
      "Six saveurs (pomme verte, fraise, citron, cerise, orange, raisin), gommeux mou, recouverts d'un glaçage d'acide tartrique cristallisé qui pique la langue avant que le sucre prenne le dessus. Parfait pour partager — chacun a sa saveur préférée.",
    price: 8,
    unit: "sachet de 250 g",
    category: "gommeux",
    origin: "Confiserie québécoise",
    allergens: ["Soya"],
    emoji: "🐛",
    gradient:
      "radial-gradient(circle at 30% 30%, #ffe5a3 0%, #ff6b6b 35%, #87ceeb 70%, #8fb96d 100%)",
    accentColor: "#ff6b6b",
    pairs: ["Limonade", "Film d'horreur", "Pause goûter"],
  },
  {
    slug: "oursons-charlevoix",
    name: "Oursons Gommeux Artisanaux",
    tagline: "Le classique, sans le sirop de maïs",
    description: "Gélatine de bœuf de Charlevoix, sucre de canne, pas de glucose.",
    longDescription:
      "Nous fabriquons nos propres oursons avec de la gélatine de bœuf élevé en pâturage à Charlevoix. Aucun sirop de maïs à haute teneur en fructose. Cinq saveurs naturelles: orange sanguine, framboise, pomme verte, citron, ananas.",
    price: 10,
    unit: "sachet de 200 g",
    category: "gommeux",
    origin: "Gélatine — Bœuf de Charlevoix",
    allergens: [],
    emoji: "🐻",
    gradient:
      "radial-gradient(circle at 30% 30%, #ffe5a3 0%, #ffb347 50%, #e87b00 100%)",
    accentColor: "#e87b00",
    pairs: ["Lunch des enfants", "Jus de pomme", "Randonnée"],
  },
  {
    slug: "pommes-surs-granny",
    name: "Pommes Surs Granny Smith",
    tagline: "Vert acide, pure pulpe",
    description: "Bonbons à mâcher 100 % pomme verte, pas de colorant.",
    longDescription:
      "Pure pulpe de pommes Granny Smith réduite, mélangée à du sucre de canne et de la pectine. La couleur vert pâle vient uniquement de la pomme — aucun colorant. Acide vif à l'attaque, finale plus douce.",
    price: 9,
    unit: "sachet de 150 g",
    category: "classique",
    origin: "Pommes — Verger Léahy, Frelighsburg",
    allergens: [],
    isVegan: true,
    emoji: "🍏",
    gradient:
      "radial-gradient(circle at 30% 30%, #d4ede0 0%, #8fc9a8 50%, #5a9874 100%)",
    accentColor: "#5a9874",
    pairs: ["Cidre brut", "Fromage cheddar fort", "Marche d'automne"],
  },
  {
    slug: "caramel-mou-iles",
    name: "Caramel Mou au Beurre Salé",
    tagline: "Sucre, beurre, sel — c'est tout",
    description: "Caramel mou à la fleur de sel des Îles-de-la-Madeleine.",
    longDescription:
      "Sucre cuit à sec jusqu'au brun foncé, beurre baratté de l'Île-aux-Grues, fleur de sel des Îles-de-la-Madeleine. Pas de glucose, pas de sirop de maïs. Les cubes ramollissent à la chaleur de la bouche.",
    price: 11.5,
    unit: "boîte de 175 g",
    category: "premium",
    origin: "Sel — Îles-de-la-Madeleine",
    allergens: ["Lait"],
    emoji: "🍪",
    gradient:
      "radial-gradient(circle at 30% 30%, #f5e6d3 0%, #c9a378 50%, #5a3820 100%)",
    accentColor: "#5a3820",
    pairs: ["Pomme cuite", "Bourbon", "Café noir"],
  },
  {
    slug: "truffes-erable-pacane",
    name: "Truffes Érable & Pacane",
    tagline: "Beauce × cabane",
    description: "Ganache érable, pacanes caramélisées, enrobage chocolat noir.",
    longDescription:
      "Ganache au sirop d'érable foncé de la cabane Lévesque (Beauce), pacanes du Texas caramélisées chez nous, enrobage de chocolat 70 % de l'Équateur. Roulées à la main. Édition limitée — quand il n'y a plus de sirop foncé, il n'y en a plus.",
    price: 14.5,
    unit: "coffret de 12",
    category: "premium",
    origin: "Érable — Beauce, Québec",
    allergens: ["Lait", "Soya", "Fruits à coque"],
    emoji: "🍁",
    gradient:
      "radial-gradient(circle at 30% 30%, #f5d896 0%, #c98a3c 50%, #5a3018 100%)",
    accentColor: "#c98a3c",
    pairs: ["Whisky canadien", "Café espresso", "Tarte au sucre"],
  },
  {
    slug: "chocolats-surs-framboise",
    name: "Chocolats Surs Framboise",
    tagline: "Coque dure, cœur surprise",
    description: "Coque chocolat 70 %, garniture sure à la framboise sauvage.",
    longDescription:
      "Coque mince de chocolat 70 % de l'Équateur qui craque sous la dent, puis garniture sure à base de framboises sauvages du Lac-Saint-Jean et d'acide citrique. Le contraste amer-acide-sucré est dosé pour ne dominer aucune note.",
    price: 13,
    unit: "boîte de 16",
    category: "premium",
    origin: "Framboises — Lac-Saint-Jean",
    allergens: ["Lait", "Soya"],
    emoji: "🍒",
    gradient:
      "radial-gradient(circle at 30% 30%, #ffd1dc 0%, #d63b6b 45%, #4a2818 100%)",
    accentColor: "#a72553",
    pairs: ["Champagne rosé", "Café filtre", "Soirée jeux"],
  },
];

export const productBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const categoryLabels: Record<Category, string> = {
  classique: "Classiques rétro",
  gommeux: "Gommeux & surs",
  tradition: "Traditions québécoises",
  premium: "Premium chocolat-caramel",
};
