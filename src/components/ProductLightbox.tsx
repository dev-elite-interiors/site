"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { Product } from "@/lib/products";

interface ProductLightboxProps {
  product: Product | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const WHATSAPP_NUMBER = "919876543210";

export default function ProductLightbox({
  product,
  onClose,
  onNext,
  onPrev,
}: ProductLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (!product) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, handleKeyDown]);

  if (!product) return null;

  const whatsappMessage = `Namaste Dev Elite Interiors,\n\nI am interested in this design from your website catalog:\n- Design: ${product.title}\n- ID: #${product.id}\n- Category: ${product.category}\n\nPlease share design specifications, material options, and a pricing estimate.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={product.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative bg-white rounded-[16px] max-w-5xl w-full max-h-[92vh] flex flex-col md:flex-row overflow-hidden shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          ✕
        </button>

        {/* Previous Button */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors hidden md:flex"
            aria-label="Previous image"
          >
            ←
          </button>
        )}

        {/* Next Button */}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 md:right-[380px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors hidden md:flex"
            aria-label="Next image"
          >
            →
          </button>
        )}

        {/* Image Showcase */}
        <div className="relative w-full md:w-3/5 h-[50vh] md:h-[82vh] bg-neutral-900 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-2 sm:p-4"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        </div>

        {/* Sidebar / Inquire Details */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-white overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="badge-green text-[11px]">
                {product.category}
              </span>
              <span className="text-xs font-mono text-[var(--color-gold-dark)] font-semibold">
                #{product.id}
              </span>
            </div>

            <h2
              className="text-2xl sm:text-3xl font-normal text-[var(--color-primary-green)] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {product.title}
            </h2>

            <p className="text-sm text-[var(--color-text-medium)] leading-relaxed font-light mb-6">
              Precision crafted by Dev Elite Interiors using boiling-water-resistant marine substrate, premium European hardware, and bespoke artisanal finishes.
            </p>

            <div className="space-y-2.5 py-4 border-t border-b border-[var(--color-border-subtle)] text-xs text-[var(--color-text-dark)] mb-6">
              <div className="flex justify-between">
                <span className="text-[var(--color-text-light)]">Design Category</span>
                <span className="font-semibold text-[var(--color-primary-green)]">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-text-light)]">Studio Warranty</span>
                <span className="font-semibold text-[var(--color-primary-green)]">5-Year Comprehensive</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-text-light)]">Material Standard</span>
                <span className="font-semibold text-[var(--color-primary-green)]">100% ISI BWR Marine Grade</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-text-light)]">Turnkey Hardware</span>
                <span className="font-semibold text-[var(--color-primary-green)]">Blum / Hettich Soft-Close</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-primary py-3.5 text-sm sm:text-base font-semibold flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Inquire This Design on WhatsApp ↗</span>
            </a>

            <button
              onClick={onClose}
              className="w-full btn-secondary py-2.5 text-xs font-semibold justify-center"
            >
              Continue Browsing Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
