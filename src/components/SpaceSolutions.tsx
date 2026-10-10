"use client";

import Link from "next/link";
import { Check, Sparkles, ArrowRight, MessageSquare } from "lucide-react";
import CTAButton from "./CTAButton";

const PACKAGES = [
  {
    title: "2 BHK Complete Spatial Suite",
    tagline: "Smart, Ergonomic & Clutter-Free",
    idealFor: "Modern Apartments (750–1,100 sq.ft)",
    priceEstimate: "Custom Packages Available",
    inclusions: [
      "Custom 3-Seater Sofa + Ottoman in Living Room",
      "Full Modular TV Wall Unit with hidden wire conduits",
      "Master Bedroom King Hydraulic Bed + 2 Nightstands",
      "Floor-to-Ceiling 3-Door Sliding Wardrobe with Organizers",
      "Modular Kitchen Cabinetry with soft-close Blum runners",
      "Guest Bedroom Queen Bed + 2-Door Wardrobe",
    ],
    highlight: "Popular for Apartments",
  },
  {
    title: "3 BHK Luxury Executive Suite",
    tagline: "Expanded Hospitality & Tailored Prestige",
    idealFor: "Penthouses & High-Rises (1,300–2,200 sq.ft)",
    priceEstimate: "Bespoke Curation",
    inclusions: [
      "L-Shape Sectional Velvet Sofa + Marble Center Table",
      "6-Seater Live Edge Solid Teak Dining Table & Chairs",
      "Acoustic fluted wood TV console with cove illumination",
      "Master Suite Fluted Bronze Glass Walk-in Wardrobe",
      "2 Designer Hydraulic Beds with integrated headboards",
      "Complete European Acrylic Island Kitchen Suite",
      "Home study executive desk with cable management",
    ],
    highlight: "Most Selected",
    isFeatured: true,
  },
  {
    title: "Villa & Duplex Bespoke Commission",
    tagline: "Architectural Statement & Heirloom Joinery",
    idealFor: "Independent Estates (2,500+ sq.ft)",
    priceEstimate: "Turnkey Architecture",
    inclusions: [
      "Full spatial architectural 3D visualizations",
      "Grand double-height statement foyer credenza",
      "8 to 10-Seater Solid Timber banquet dining setup",
      "Master walk-in wardrobe dressing rooms with jewelry trays",
      "Bar counter with illuminated glass shelves & wine chillers",
      "All-weather outdoor teak daybeds for private terrace",
      "Dedicated senior interior project manager on-site",
    ],
    highlight: "Ultra-Luxury Segment",
  },
];

export default function SpaceSolutions() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--color-off-white)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[var(--color-border)] shadow-2xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--color-primary-green)]">
              Turnkey Spatial Solutions
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Solutions for Every Scale
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-medium)] leading-relaxed">
            Whether furnishing a curated 2 BHK apartment or commissioning an expansive private villa, our turnkey furniture programs eliminate the stress of coordinating multiple carpenters.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isFeatured
                  ? "bg-white border-2 border-[var(--color-gold)] shadow-xl -translate-y-2"
                  : "bg-white border border-[var(--color-border)] shadow-sm hover:shadow-md"
              }`}
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    pkg.isFeatured
                      ? "bg-[var(--color-primary-green)] text-white"
                      : "bg-[var(--color-off-white)] text-[var(--color-primary-green)] border border-[var(--color-border)]"
                  }`}
                >
                  {pkg.highlight}
                </span>
                <span className="text-[11px] font-mono text-[var(--color-text-light)]">
                  {pkg.idealFor}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3
                  className="text-2xl font-normal text-[var(--color-primary-green)] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pkg.title}
                </h3>
                <p className="text-xs text-[var(--color-text-medium)] mb-6">
                  {pkg.tagline}
                </p>

                {/* Inclusions */}
                <div className="space-y-3 mb-8 pt-5 border-t border-[var(--color-border-subtle)]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-dark)] font-mono block">
                    Curated Suite Inclusions:
                  </span>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--color-text-medium)]">
                      <div className="w-4 h-4 rounded-full bg-[var(--color-green-tint)] text-[var(--color-primary-green)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-[var(--color-border-subtle)]">
                <CTAButton
                  variant={pkg.isFeatured ? "primary" : "secondary"}
                  size="sm"
                  className="w-full justify-center"
                  message={`Namaste Dev Elite Interiors, I would like to consult on the "${pkg.title}" turnkey package for my home.`}
                >
                  Inquire Package on WhatsApp ↗
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
