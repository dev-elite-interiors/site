"use client";

import Image from "next/image";
import { ShieldCheck, Sparkles, CheckCircle2, Truck, Award, Hammer } from "lucide-react";
import CTAButton from "./CTAButton";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Kiln-Dried Timber Seasoning",
    desc: "Every solid teak and hardwood slab undergoes automated moisture testing and kiln-drying to reduce moisture below 10%, ensuring zero warping, bending, or splitting.",
  },
  {
    number: "02",
    title: "Precision Joinery & Mortise-Tenon",
    desc: "Master joiners combine traditional woodcraft mortise & tenon interlocking joints with modern CNC precision for lifetime acoustic silence and structural strength.",
  },
  {
    number: "03",
    title: "Multi-Coat Italian PU & Polish",
    desc: "Automated spray booths apply dust-free Italian polyurethane primer, stain, and matte/gloss protective finishes resistant to hot water, alcohol, and turmeric.",
  },
  {
    number: "04",
    title: "35-Point Rigorous Quality Inspection",
    desc: "Before dispatch, each piece undergoes a 35-point audit checking hinge alignment, hydraulic pressure, edge-sealing, load test, and surface finish.",
  },
];

const METRICS = [
  { value: "35+", label: "Rigorous Quality Audits" },
  { value: "10-Yr", label: "Structural Warranty" },
  { value: "100%", label: "Seasoned BWP & Hardwood" },
  { value: "Pan-India", label: "White-Glove Delivery" },
];

export default function CraftsmanshipShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-off-white)] border border-[var(--color-border)] shadow-2xs mb-4">
            <Award className="w-3.5 h-3.5 text-[var(--color-gold)]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--color-primary-green)]">
              Factory to Your Home
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Artisanal Integrity. Modern Precision.
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-medium)] leading-relaxed">
            From raw seasoned logs to the finished piece inside your living room, discover how our master craftsmen bring bespoke luxury to life without middlemen.
          </p>
        </div>

        {/* 4 Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[var(--color-off-white)] border border-[var(--color-border)] text-center transition-all hover:-translate-y-1 hover:shadow-xs"
            >
              <span
                className="text-3xl sm:text-4xl font-normal text-[var(--color-primary-green)] block mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[var(--color-text-dark)] uppercase tracking-wider font-mono">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Split Showcase: Process on Left, Workshop Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 4-Step Process (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-off-white)]/60 hover:bg-white hover:border-[var(--color-gold)]/50 hover:shadow-sm transition-all duration-300 flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-green)] text-[var(--color-gold-light)] font-mono font-bold text-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  {step.number}
                </div>
                <div>
                  <h3
                    className="text-lg sm:text-xl font-normal text-[var(--color-primary-green)] mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-medium)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Imagery Banner with Floating Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-[var(--color-border)] shadow-xl bg-[var(--color-off-white)]">
              <Image
                src="/products/wardrobe/WD-001.webp"
                alt="Dev Elite Artisanal Wood Workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-green-dark)]/80 via-transparent to-transparent" />

              {/* Floating Quality Badge on Photo */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 text-[var(--color-text-dark)] shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-green-tint)] text-[var(--color-primary-green)] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-primary-green)]">
                      Direct-to-Client Workshop Access
                    </h4>
                    <p className="text-xs text-[var(--color-text-medium)]">
                      Visit our workshop to inspect raw timber before polishing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
