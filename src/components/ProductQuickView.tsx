"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import {
  X,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Check,
  Ruler,
  Clock,
  Layers,
} from "lucide-react";

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917368032697";

export default function ProductQuickView({
  product,
  onClose,
}: ProductQuickViewProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) return null;

  const images = product.images.length > 0 ? product.images : ["/logo.png"];
  const currentImage = images[selectedImageIndex] || images[0];

  const whatsappMessage = `Namaste Dev Elite Interiors, I am reviewing "${product.title}" (${product.categoryLabel} - ${product.price || "Custom Quote"}). I would like to get a personalized quote, inspect 3D options, and discuss customized dimensions.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl border border-[var(--color-border)] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[var(--color-text-dark)] flex items-center justify-center shadow-md transition-all hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery (md: 50%) */}
        <div className="w-full md:w-1/2 bg-[var(--color-off-white)] p-6 flex flex-col justify-between">
          <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden border border-[var(--color-border)] bg-white shadow-xs">
            <Image
              src={currentImage}
              alt={product.title}
              fill
              className="object-cover transition-all duration-300"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary-green)] text-white shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                {product.badge}
              </span>
            )}
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                    selectedImageIndex === idx
                      ? "border-[var(--color-primary-green)] scale-105 shadow-xs"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Quick Trust badges */}
          <div className="mt-4 pt-4 border-t border-[var(--color-border-subtle)] grid grid-cols-2 gap-2 text-[11px] text-[var(--color-text-medium)]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[var(--color-primary-green)] flex-shrink-0" />
              <span>10-Yr Structural Warranty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0" />
              <span>Pan-India Delivery</span>
            </div>
          </div>
        </div>

        {/* Right Column: Product Specs & Direct WhatsApp Action */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Category & Room pill */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold bg-[var(--color-green-tint)] text-[var(--color-primary-green)] border border-[var(--color-primary-green)]/20">
                {product.categoryLabel}
              </span>
              <span className="text-xs text-[var(--color-text-light)] font-mono">
                {product.roomLabel}
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-2xl sm:text-3xl font-normal text-[var(--color-primary-green)] mb-3 leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {product.title}
            </h2>

            {/* Price Box */}
            <div className="p-3.5 rounded-xl bg-[var(--color-off-white)] border border-[var(--color-border)] mb-5 flex items-baseline justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--color-text-light)] block">
                  Estimated Direct Workshop Price
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[var(--color-primary-green)] font-mono">
                  {product.price || "Custom Quote on Request"}
                </span>
              </div>
              <span className="text-[11px] text-[var(--color-text-medium)]">
                Includes Polish & Hardware
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[var(--color-text-medium)] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Dimensions */}
            {product.dimensions && (
              <div className="mb-5 pb-5 border-b border-[var(--color-border-subtle)]">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] block mb-1.5 flex items-center gap-1.5">
                  <Ruler className="w-4 h-4 text-[var(--color-gold)]" />
                  Standard Dimensions (Customizable)
                </span>
                <p className="text-xs sm:text-sm text-[var(--color-text-medium)] font-mono bg-white px-3 py-1.5 rounded-lg border border-[var(--color-border-subtle)] inline-block">
                  {product.dimensions}
                </p>
              </div>
            )}

            {/* Wood & Material Options */}
            {product.woodOptions && product.woodOptions.length > 0 && (
              <div className="mb-5 pb-5 border-b border-[var(--color-border-subtle)]">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] block mb-2 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[var(--color-gold)]" />
                  Available Wood Species & Finishes
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.woodOptions.map((wood, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs bg-[var(--color-off-white)] border border-[var(--color-border)] text-[var(--color-text-dark)] font-medium flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                      {wood}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] block mb-2">
                  Bespoke Highlights
                </span>
                <ul className="space-y-1.5">
                  {product.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-[var(--color-text-medium)]"
                    >
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Strip */}
          <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.01]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get WhatsApp Quote & 3D Preview</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="py-3.5 px-5 rounded-xl border border-[var(--color-border)] text-xs font-semibold text-[var(--color-text-medium)] hover:bg-[var(--color-off-white)] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
