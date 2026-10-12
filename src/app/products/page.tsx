"use client";

import { Suspense, useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryBar from "@/components/CategoryBar";
import ProductCard from "@/components/ProductCard";
import ProductQuickView from "@/components/ProductQuickView";
import { Product, ProductCategory, RoomCategory } from "@/types/product";
import {
  Search,
  Filter,
  Sparkles,
  SlidersHorizontal,
  MessageSquare,
  X,
  Layers,
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Categories" },
  { id: "sofa", label: "Sofas & Loungers" },
  { id: "bed", label: "Luxury Beds" },
  { id: "wardrobe", label: "Modular Wardrobes" },
  { id: "kitchen", label: "Modular Kitchens" },
  { id: "tv-unit", label: "TV Units" },
  { id: "dining", label: "Dining Tables" },
  { id: "office", label: "Executive Desks" },
  { id: "outdoor", label: "Balcony & Patio" },
  { id: "custom", label: "Bespoke Woodwork" },
];

const ROOMS = [
  { id: "all", label: "All Rooms" },
  { id: "living", label: "Living Room" },
  { id: "bedroom", label: "Master Bedroom" },
  { id: "dining", label: "Dining Room" },
  { id: "kitchen", label: "Modular Kitchen" },
  { id: "office", label: "Home Office" },
  { id: "outdoor", label: "Balcony & Patio" },
];

function ProductsCatalogContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const roomParam = searchParams.get("room");

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");
  const [selectedRoom, setSelectedRoom] = useState(roomParam || "all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    if (roomParam) {
      setSelectedRoom(roomParam);
    }
  }, [roomParam]);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const res = await fetch("/api/products");
        const data = await res.json();
        if (data.products) {
          setProducts(data.products);
        }
      } catch (err) {
        console.error("Failed to load products", err);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // Room filter
      if (selectedRoom !== "all" && item.room !== selectedRoom) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchCat = item.categoryLabel.toLowerCase().includes(q);
        const matchWoods = item.woodOptions?.some((w) =>
          w.toLowerCase().includes(q)
        );
        if (!matchTitle && !matchDesc && !matchCat && !matchWoods) {
          return false;
        }
      }
      return true;
    });
  }, [products, selectedCategory, selectedRoom, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-[var(--color-text-dark)] font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-12 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[var(--color-border)] shadow-2xs mb-3 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--color-primary-green)]">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                <span>Dev Elite Bespoke Catalog</span>
              </div>
              <h1
                className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Custom Furniture Gallery
              </h1>
              <p className="text-sm sm:text-base text-[var(--color-text-medium)] mt-3 max-w-2xl leading-relaxed">
                Handcrafted from seasoned solid hardwoods and certified marine ply. Every creation is tailored to millimeter precision for your floor plan.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917368032697?text=Namaste%20Dev%20Elite%20Interiors%2C%20I%20am%20exploring%20your%20furniture%20catalog%20and%20would%20like%20to%20request%20a%20custom%20design%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2.5 !px-5 text-xs sm:text-sm inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[var(--color-gold)]" />
                <span>Custom Order on WhatsApp ↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Bar Strip */}
      <CategoryBar
        activeCategory={selectedCategory === "all" ? undefined : selectedCategory}
        onSelectCategory={(id) => {
          setSelectedCategory(id);
          window.scrollTo({ top: 350, behavior: "smooth" });
        }}
      />

      {/* Search & Filter Toolbar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[var(--color-border)] py-4 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-light)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sofas, beds, teak dining, wardrobes..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary-green)] text-xs sm:text-sm bg-[var(--color-off-white)]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-light)] hover:text-black"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Room & Category Filters */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Category Dropdown */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-[var(--color-text-light)] hidden sm:inline">
                  Category:
                </span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-[var(--color-border)] text-xs font-medium bg-[var(--color-off-white)] focus:outline-none focus:border-[var(--color-primary-green)]"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Room Dropdown */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-[var(--color-text-light)] hidden sm:inline">
                  Room:
                </span>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-[var(--color-border)] text-xs font-medium bg-[var(--color-off-white)] focus:outline-none focus:border-[var(--color-primary-green)]"
                >
                  {ROOMS.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset filter button if any active */}
              {(selectedCategory !== "all" || selectedRoom !== "all" || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedRoom("all");
                    setSearchQuery("");
                  }}
                  className="text-xs font-semibold text-red-600 hover:underline px-2"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Catalog Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="py-24 text-center">
            <div className="w-12 h-12 border-3 border-[var(--color-primary-green)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm text-[var(--color-text-medium)]">Loading bespoke furniture catalog...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="py-24 text-center bg-[var(--color-off-white)] rounded-3xl border border-[var(--color-border)] p-8 max-w-xl mx-auto">
            <Layers className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-3" />
            <h3 className="text-xl font-bold text-[var(--color-primary-green)] mb-1">
              No matching pieces found
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-medium)] mb-6">
              Try adjusting your search keywords or resetting category filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedRoom("all");
                setSearchQuery("");
              }}
              className="btn-primary !py-2.5 !px-5 text-xs sm:text-sm"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-8 text-xs text-[var(--color-text-light)]">
              <span>
                Showing <strong>{filteredProducts.length}</strong> bespoke piece
                {filteredProducts.length > 1 ? "s" : ""}
              </span>
              <span className="font-mono text-[var(--color-gold-dark)]">
                100% Solid Woodwork & Marine Ply
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setSelectedProduct(p)}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Quick View Modal */}
      <ProductQuickView
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <Footer />
    </div>
  );
}

export default function ProductsCatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-3 border-[var(--color-primary-green)] border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-sm font-medium text-[var(--color-text-medium)]">Loading catalog...</p>
        </div>
      }
    >
      <ProductsCatalogContent />
    </Suspense>
  );
}
