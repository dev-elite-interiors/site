"use client";

import { Check, X, ShieldCheck, Sparkles, Hammer } from "lucide-react";
import CTAButton from "./CTAButton";

const COMPARISON_ROWS = [
  {
    parameter: "Core Material Quality",
    devElite: "100% Seasoned Solid Hardwood (Teak/Sal) & BWP Marine Plywood",
    readyMade: "Low-density particle board, MDF & compressed sawdust paper",
    isWin: true,
  },
  {
    parameter: "Sizing & Spatial Fit",
    devElite: "Bespoke millimeter precision designed specifically for your floor plan",
    readyMade: "Fixed pre-fabricated sizes leaving awkward gaps and wasted space",
    isWin: true,
  },
  {
    parameter: "Moisture & Termite Defense",
    devElite: "Termite-treated, boiling water-resistant (BWR/BWP) and sealed with PU",
    readyMade: "Swells, bends, and decomposes upon moisture contact; prone to termites",
    isWin: true,
  },
  {
    parameter: "Structural Lifespan",
    devElite: "20+ Years heirloom longevity with comprehensive 10-Yr Warranty",
    readyMade: "Typically 2 to 4 years before hinges loosen and veneer peels off",
    isWin: true,
  },
  {
    parameter: "Hardware & Fittings",
    devElite: "German Blum, Hafele & Hettich soft-close mechanisms with life guarantees",
    readyMade: "Generic unbranded friction hinges that squeak and fail quickly",
    isWin: true,
  },
  {
    parameter: "Finish & Surface Polish",
    devElite: "Italian PU polyurethane spray, food-grade natural oil, or anti-scratch acrylic",
    readyMade: "Thin paper foil or cheap PVC edge-banding that chips easily",
    isWin: true,
  },
  {
    parameter: "Direct Workshop Value",
    devElite: "Direct transparent workshop pricing with zero showroom or middleman retail markup",
    readyMade: "Heavy 45%–60% retail brand and dealer margins built into price",
    isWin: true,
  },
];

export default function ComparisonMatrix() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--color-off-white)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[var(--color-border)] shadow-2xs mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-gold)]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--color-primary-green)]">
              Quality Benchmark
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Custom Furniture vs. Ready-Made
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-medium)] leading-relaxed">
            Why invest in flat-pack furniture meant to be replaced in three years when you can commission bespoke, heirloom-grade woodwork tailored to your residence?
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white rounded-3xl border border-[var(--color-border)] shadow-lg overflow-hidden max-w-5xl mx-auto">
          {/* Table Header Strip */}
          <div className="grid grid-cols-12 bg-white border-b border-[var(--color-border)]">
            <div className="col-span-4 sm:col-span-4 p-4 sm:p-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--color-text-light)] font-mono flex items-center">
              Feature / Standard
            </div>
            <div className="col-span-4 sm:col-span-4 p-4 sm:p-6 bg-[var(--color-primary-green)] text-white text-center flex flex-col items-center justify-center relative">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-gold-light)] font-bold mb-0.5">
                Dev Elite Interiors
              </span>
              <span className="text-sm sm:text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                Custom Woodcraft
              </span>
              <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[var(--color-gold)] text-white shadow-2xs hidden sm:inline-block">
                RECOMMENDED
              </span>
            </div>
            <div className="col-span-4 sm:col-span-4 p-4 sm:p-6 bg-[var(--color-off-white)] text-center flex flex-col items-center justify-center border-l border-[var(--color-border-subtle)]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-light)] mb-0.5">
                Market Standard
              </span>
              <span className="text-xs sm:text-base font-semibold text-[var(--color-text-dark)]">
                Ready-Made Furniture
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[var(--color-border-subtle)]">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 hover:bg-[var(--color-off-white)]/60 transition-colors"
              >
                {/* Column 1: Feature Title */}
                <div className="col-span-4 sm:col-span-4 p-4 sm:p-5 flex items-center text-xs sm:text-sm font-bold text-[var(--color-text-dark)]">
                  {row.parameter}
                </div>

                {/* Column 2: Dev Elite (Highlighted Green Column) */}
                <div className="col-span-4 sm:col-span-4 p-4 sm:p-5 bg-[var(--color-green-tint)] flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--color-primary-green)] border-x border-[var(--color-primary-green)]/10">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-snug">{row.devElite}</span>
                </div>

                {/* Column 3: Ready-Made */}
                <div className="col-span-4 sm:col-span-4 p-4 sm:p-5 flex items-center gap-2 text-xs sm:text-sm text-[var(--color-text-medium)] bg-[var(--color-off-white)]/30">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-snug">{row.readyMade}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Bottom Action Footer */}
          <div className="p-6 sm:p-8 bg-[var(--color-off-white)] border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-sm font-bold text-[var(--color-primary-green)] block">
                Have specific room dimensions or a custom furniture reference?
              </span>
              <span className="text-xs text-[var(--color-text-medium)]">
                Our master artisans build exactly what you envision with zero compromises.
              </span>
            </div>

            <CTAButton
              variant="primary"
              size="sm"
              message="Namaste, I want to discuss custom furniture vs ready-made options for my residence."
            >
              Get Custom Quote on WhatsApp ↗
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
