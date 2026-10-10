import productsData from "@/data/products.json";

export interface Product {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  image: string;
  width: number;
  height: number;
  sizeKb: number;
  featured?: boolean;
}

export const CATEGORIES = [
  { slug: "all", name: "All Designs" },
  { slug: "modular-kitchen", name: "Modular Kitchens" },
  { slug: "living-room", name: "Living Rooms & Sofas" },
  { slug: "bedroom", name: "Luxury Bedrooms" },
  { slug: "wardrobe", name: "Custom Wardrobes" },
  { slug: "tv-unit", name: "TV Units & Consoles" },
  { slug: "false-ceiling", name: "False Ceilings & Lighting" },
  { slug: "signature-showcase", name: "Signature Showcase" },
] as const;

export function getAllProducts(): Product[] {
  return productsData as Product[];
}

export function getFeaturedProducts(limit = 6): Product[] {
  const all = getAllProducts();
  const featured = all.filter((p) => p.featured);
  return featured.slice(0, limit);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const all = getAllProducts();
  if (categorySlug === "all") return all;
  return all.filter((p) => p.categorySlug === categorySlug);
}

export function getCategoryCounts(): Record<string, number> {
  const all = getAllProducts();
  const counts: Record<string, number> = { all: all.length };
  for (const p of all) {
    counts[p.categorySlug] = (counts[p.categorySlug] || 0) + 1;
  }
  return counts;
}
