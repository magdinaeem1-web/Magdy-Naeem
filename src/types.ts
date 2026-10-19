export interface ColorSwatch {
  name: string;
  hex: string;
  description: string;
}

export interface StemRecipeItem {
  flowerName: string;
  botanicalName: string;
  count: number;
  role: 'focal' | 'secondary' | 'airy' | 'foliage' | 'accent';
  colorDescription: string;
  notes: string;
}

export interface PhotographyMeta {
  lighting: string;
  lensAngle: string;
  mood: string;
  backstory: string;
  paletteHex: string[];
}

export interface BouquetArticle {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  category: 'Flemish Baroque' | 'Wild Meadow' | 'Ikebana & Wabi-Sabi' | 'French Romance' | 'Sculptural Avant-Garde';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  image: string;
  imageAlt: string;
  aspectRatio: string;
  isHeroFeatured?: boolean;
  editorialLead: string;
  bodyParagraphs: string[];
  pullQuote?: {
    text: string;
    attribution: string;
  };
  keyBotanicals: string[];
  swatches: ColorSwatch[];
  recipe: {
    vessel: string;
    mechanics: string;
    waterTemperature: string;
    vaseLife: string;
    stems: StemRecipeItem[];
    stepByStepCare: string[];
  };
  photoMeta: PhotographyMeta;
}

export interface FlowerFieldItem {
  id: string;
  commonName: string;
  botanicalName: string;
  family: string;
  season: 'Spring' | 'Early Summer' | 'Late Summer' | 'Autumn' | 'All Year';
  scentProfile: 'Honeyed' | 'Spicy Clove' | 'Powdery Clean' | 'Herbal Citrus' | 'Subtle Green';
  vaseLifeDays: number;
  stemCareTip: string;
  meaning: string;
  featuredInBouquetId: string;
}

export interface CustomStemChoice {
  id: string;
  name: string;
  botanicalName: string;
  type: 'focal' | 'secondary' | 'airy' | 'foliage';
  season: string;
  count: number;
}
