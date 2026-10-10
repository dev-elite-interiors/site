export type ProductCategory =
  | "sofa"
  | "bed"
  | "wardrobe"
  | "kitchen"
  | "tv-unit"
  | "dining"
  | "office"
  | "outdoor"
  | "custom";

export type RoomCategory =
  | "living"
  | "bedroom"
  | "dining"
  | "kitchen"
  | "office"
  | "outdoor";

export interface Product {
  id: string;
  title: string;
  slug: string;
  category: ProductCategory;
  categoryLabel: string;
  room: RoomCategory;
  roomLabel: string;
  price?: string; // e.g. "Starting ₹48,000" or custom quote
  badge?: "Best Seller" | "Trending" | "New Launch" | "Exclusive" | "Handcrafted";
  woodOptions: string[]; // e.g. ["Solid Teak", "American Walnut", "White Oak"]
  dimensions?: string; // e.g. "84\" W x 36\" D x 32\" H"
  images: string[];
  description: string;
  features: string[];
  isFeatured?: boolean;
  createdAt?: string;
}

export interface CategoryInfo {
  id: ProductCategory;
  label: string;
  description: string;
  iconName: string;
  image: string;
  itemCount?: number;
}
