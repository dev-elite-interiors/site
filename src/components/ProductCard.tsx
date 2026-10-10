"use client";

import Image from "next/image";
import { Product } from "@/types/product";
import { Eye, MessageSquare, Sparkles, Check, Ruler } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917368032697";

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const whatsappMessage = `Namaste Dev Elite Interiors, I would like to inquire about "${product.title}" (${product.categoryLabel} - ${product.price || "Custom Quote"}). Can you share finish options, 3D design possibilities, and custom sizing?`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="card-clean group flex flex-col h-full bg-white relative transition-all duration-300 hover:shadow-lg border border-[var(--color-border)] rounded-2xl overflow-hidden">
      {/* Image Container with Badges */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-off-white)]">
        <Image
          src={product.images[0] || "/logo.png"}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {product.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[var(--color-primary-green)] text-white shadow-xs">
              <Sparkles className="w-3 h-3 text-[var(--color-gold)]" />
              {product.badge}
            </span>
          )}
        </div>

        {/* Category Pill on top right */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[var(--color-text-dark)] border border-white/60 shadow-2xs">
            {product.categoryLabel}
          </span>
        </div>

        {/* Quick View Hover Action Button */}
        {onQuickView && (
          <button
            type="button"
            onClick={() => onQuickView(product)}
            className="absolute inset-0 m-auto w-32 h-10 rounded-full bg-white/95 backdrop-blur-xs text-[var(--color-primary-green)] font-semibold text-xs flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:bg-[var(--color-primary-green)] hover:text-white"
          >
            <Eye className="w-4 h-4" />
            <span>Quick View</span>
          </button>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {/* Room / Collection Tag */}
        <div className="flex items-center justify-between text-xs text-[var(--color-text-light)] mb-1.5">
          <span className="font-mono uppercase tracking-wider font-semibold text-[var(--color-gold)]">
            {product.roomLabel}
          </span>
          {product.dimensions && (
            <span className="inline-flex items-center gap-1 text-[11px] text-[var(--color-text-medium)]">
              <Ruler className="w-3 h-3 text-[var(--color-gold)]" />
              {product.dimensions}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-lg sm:text-xl font-normal text-[var(--color-primary-green)] line-clamp-1 group-hover:text-[var(--color-luxury-green)] transition-colors mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {product.title}
        </h3>

        {/* Description snippet */}
        <p className="text-xs sm:text-[13px] text-[var(--color-text-medium)] line-clamp-2 leading-relaxed mb-4 flex-grow">
          {product.description}
        </p>

        {/* Wood / Material Tags */}
        {product.woodOptions && product.woodOptions.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-[var(--color-border-subtle)]">
            {product.woodOptions.slice(0, 3).map((wood, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] bg-[var(--color-off-white)] border border-[var(--color-border)] text-[var(--color-text-dark)] font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                {wood}
              </span>
            ))}
          </div>
        )}

        {/* Bottom Price & Direct WhatsApp Action */}
        <div className="mt-auto pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] uppercase font-mono tracking-wider text-[var(--color-text-light)]">
              Pricing
            </span>
            <span className="text-sm sm:text-base font-bold text-[var(--color-primary-green)] font-mono">
              {product.price || "Custom Quote"}
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366] text-[#075E54] hover:text-white border border-[#25D366]/30 text-xs font-bold transition-all duration-200 shadow-2xs"
            title="Inquire on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
