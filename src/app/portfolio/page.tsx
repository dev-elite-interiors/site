"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import ProductLightbox from "@/components/ProductLightbox";
import {
  getAllProducts,
  CATEGORIES,
  getCategoryCounts,
  Product,
} from "@/lib/products";

const ITEMS_PER_PAGE = 24;

export default function PortfolioPage() {
  const allProducts = useMemo(() => getAllProducts(), []);
  const categoryCounts = useMemo(() => getCategoryCounts(), []);

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products by category and search
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.categorySlug === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.id.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [allProducts, activeCategory, searchQuery]);

  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  // Lightbox Next/Prev Navigation
  const currentProductIndex = useMemo(() => {
    if (!selectedProduct) return -1;
    return filteredProducts.findIndex((p) => p.id === selectedProduct.id);
  }, [selectedProduct, filteredProducts]);

  const handleNextProduct = () => {
    if (currentProductIndex >= 0 && currentProductIndex < filteredProducts.length - 1) {
      setSelectedProduct(filteredProducts[currentProductIndex + 1]);
    }
  };

  const handlePrevProduct = () => {
    if (currentProductIndex > 0) {
      setSelectedProduct(filteredProducts[currentProductIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[var(--color-text-dark)]">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-12 md:pt-44 md:pb-16 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="badge-gold mb-4">Official Product Catalogue</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[var(--color-primary-green)] mb-5">
            Architecture & Design{" "}
            <span className="italic text-[var(--color-gold-dark)]">
              Gallery.
            </span>
          </h1>
          <p className="prose-editorial mx-auto text-base sm:text-lg text-[var(--color-text-medium)] font-light leading-relaxed mb-6">
            Browse our complete collection of 425+ authentic residential designs. Click on any design to inspect details or request an instant quotation on WhatsApp.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(ITEMS_PER_PAGE);
              }}
              placeholder="Search by room, design name, or ID (e.g. MK-012, Sofa, Ceiling)..."
              className="w-full px-5 py-3.5 pl-11 rounded-[10px] bg-white border border-[var(--color-border)] text-sm text-[var(--color-text-dark)] placeholder:text-[var(--color-text-light)] focus:outline-none focus:border-[var(--color-primary-green)] focus:ring-1 focus:ring-[var(--color-primary-green)] shadow-sm transition-all"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-light)] text-base">
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--color-text-light)] hover:text-black"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Sticky Category Tabs */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-[var(--color-border)] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar justify-start lg:justify-center">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.slug;
              const count = categoryCounts[cat.slug] || 0;
              return (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-4 py-2 rounded-[8px] text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? "bg-[var(--color-primary-green)] text-white shadow-sm"
                      : "bg-[var(--color-off-white)] text-[var(--color-text-medium)] hover:text-[var(--color-primary-green)] hover:bg-[var(--color-cream)]"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-black/5 text-[var(--color-text-light)]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Active Status Info */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 text-xs text-[var(--color-text-light)]">
            <div>
              Showing <span className="font-semibold text-[var(--color-primary-green)]">{displayedProducts.length}</span> of{" "}
              <span className="font-semibold text-[var(--color-primary-green)]">{filteredProducts.length}</span> designs
              {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[var(--color-gold-dark)] font-semibold">
              Tap any photo to view full details & WhatsApp inquiry
            </div>
          </div>

          {displayedProducts.length === 0 ? (
            <div className="text-center py-24 bg-[var(--color-off-white)] rounded-[14px] border border-[var(--color-border-subtle)]">
              <span className="text-4xl mb-3 block">🔍</span>
              <h3 className="text-xl font-normal text-[var(--color-primary-green)] mb-2">
                No designs found matching your search.
              </h3>
              <p className="text-sm text-[var(--color-text-medium)] font-light mb-6">
                Try searching for different keywords or reset your category filter.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {displayedProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group flex flex-col bg-white rounded-[14px] border border-[var(--color-border)] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-[var(--color-soft-gold)] hover:-translate-y-1"
                >
                  {/* Image Container with Aspect Ratio */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-off-white)]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                    />

                    {/* Category Label Overlay */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-green)] shadow-sm">
                      {product.category}
                    </div>

                    {/* ID Tag */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-white">
                      #{product.id}
                    </div>

                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="bg-white text-[var(--color-primary-green)] px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                        View Details ↗
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom Content */}
                  <div className="p-4 flex items-center justify-between bg-white border-t border-[var(--color-border-subtle)]">
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--color-primary-green)] truncate">
                        {product.title}
                      </h4>
                      <span className="text-[11px] text-[var(--color-text-light)]">
                        5-Year Studio Warranty
                      </span>
                    </div>
                    <span className="text-xs text-[var(--color-gold-dark)] font-semibold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < filteredProducts.length && (
            <div className="mt-14 text-center">
              <button
                onClick={handleLoadMore}
                className="btn-secondary px-8 py-3.5 text-sm font-semibold"
              >
                Load More Designs ({filteredProducts.length - visibleCount} remaining) ⤓
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <ProductLightbox
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onNext={handleNextProduct}
        onPrev={handlePrevProduct}
      />

      {/* Bottom CTA */}
      <section className="py-20 bg-[var(--color-primary-green)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-gold-light)] font-semibold mb-3">
            Custom Manufacturing & Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4">
            Found a design you love?
          </h2>
          <p className="text-white/80 text-sm sm:text-base font-light mb-8 max-w-xl mx-auto">
            Connect directly with our principal designers on WhatsApp with your room dimensions to receive a tailored 3D quotation.
          </p>
          <CTAButton size="lg" variant="gold-outline" className="bg-white/10 text-white border-white/40">
            Discuss Your Custom Floor Plan ↗
          </CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
