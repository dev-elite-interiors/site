"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import ProductQuickView from "./ProductQuickView";
import { Sparkles, ArrowRight, PlusCircle } from "lucide-react";

interface FeaturedProductsProps {
  initialProducts?: Product[];
}

const FILTER_TABS = [
  { id: "all", label: "All Featured" },
  { id: "sofa", label: "Sofas" },
  { id: "bed", label: "Luxury Beds" },
  { id: "wardrobe", label: "Wardrobes" },
  { id: "kitchen", label: "Kitchens" },
  { id: "dining", label: "Dining" },
  { id: "tv-unit", label: "TV Units" },
];

export default function FeaturedProducts({ initialProducts = [] }: FeaturedProductsProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    }

    if (initialProducts.length === 0) {
      loadProducts();
    }
  }, [initialProducts.length]);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 sm:py-28 bg-white" id="featured-collections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-off-white)] border border-[var(--color-border)] shadow-2xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--color-primary-green)]">
                Handcrafted Collections
              </span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Featured Masterpieces
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-medium)] mt-3 leading-relaxed">
              Explore our most requested bespoke creations. Each item can be customized in dimensions, wood finish, fabric, and internal configurations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/products"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-medium)] hover:text-[var(--color-primary-green)] hover:bg-[var(--color-off-white)] transition-colors"
            >
              <PlusCircle className="w-4 h-4 text-[var(--color-gold)]" />
              <span>Upload Photos</span>
            </Link>
            <Link
              href="/products"
              className="btn-primary !py-2.5 !px-5 text-xs sm:text-sm inline-flex items-center gap-2"
            >
              <span>View All ({products.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {FILTER_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-[var(--color-primary-green)] text-white shadow-xs"
                    : "bg-[var(--color-off-white)] border border-[var(--color-border)] text-[var(--color-text-medium)] hover:text-[var(--color-primary-green)] hover:border-[var(--color-primary-green)]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.slice(0, 6).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        {/* Quick View Modal */}
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </section>
  );
}
