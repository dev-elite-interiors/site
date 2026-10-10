"use client";

import { useState } from "react";
import {
  Sparkles,
  Check,
  ArrowRight,
  MessageSquare,
  Home,
  Palette,
  Layers,
  Ruler,
  FileCheck2,
} from "lucide-react";

const SPACES = [
  { id: "living", title: "Living Room", icon: "🛋️", desc: "Sofas, Consoles, Loungers" },
  { id: "bedroom", title: "Master Bedroom", icon: "🛏️", desc: "Hydraulic Beds, Wardrobes" },
  { id: "kitchen", title: "Modular Kitchen", icon: "🍳", desc: "Islands, Acrylic Cabinetry" },
  { id: "dining", title: "Dining Room", icon: "🍽️", desc: "Live-Edge Tables, Chairs" },
  { id: "office", title: "Home Office", icon: "💼", desc: "Executive Desks, Bookshelves" },
  { id: "outdoor", title: "Balcony / Patio", icon: "🌿", desc: "All-Weather Teak Daybeds" },
];

const STYLES = [
  {
    id: "minimalist",
    title: "Modern Minimalist",
    desc: "Clean geometry, concealed hardware, sleek monolithic forms.",
  },
  {
    id: "neo-luxury",
    title: "Neo-Luxury Emerald",
    desc: "Deep rich emerald tones, brushed champagne brass, fluted accents.",
  },
  {
    id: "warm-japandi",
    title: "Warm Wood & Cane",
    desc: "Natural grain, woven wicker cane, understated organic elegance.",
  },
  {
    id: "royal-classic",
    title: "Timeless Classical",
    desc: "Intricate crown mouldings, tufted velvets, hand-carved solid teak.",
  },
];

const MATERIALS = [
  {
    id: "solid-teak",
    title: "100% Solid Seasoned Teak",
    desc: "Kiln-dried plantation teak with heirloom natural oil or Italian PU coating.",
    tag: "Most Durable",
  },
  {
    id: "marine-ply-pu",
    title: "BWP Marine Ply + High-Gloss PU",
    desc: "Boiling water-proof core with automotive-grade mirror or matte PU spray.",
    tag: "Kitchen & Wardrobes",
  },
  {
    id: "american-walnut",
    title: "American Walnut Veneer",
    desc: "Book-matched natural crown-cut veneers with deep chocolate striations.",
    tag: "Ultra Luxury",
  },
  {
    id: "marble-brass",
    title: "Italian Marble & Champagne Brass",
    desc: "Imported Calacatta / Statuario slabs paired with laser-cut brass trestles.",
    tag: "Statement Pieces",
  },
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917368032697";

export default function BespokeConfigurator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSpace, setSelectedSpace] = useState("living");
  const [selectedStyle, setSelectedStyle] = useState("neo-luxury");
  const [selectedMaterial, setSelectedMaterial] = useState("solid-teak");
  const [dimensions, setDimensions] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const spaceObj = SPACES.find((s) => s.id === selectedSpace) || SPACES[0];
  const styleObj = STYLES.find((s) => s.id === selectedStyle) || STYLES[0];
  const materialObj = MATERIALS.find((m) => m.id === selectedMaterial) || MATERIALS[0];

  const generateWhatsAppMessage = () => {
    return `Namaste Dev Elite Interiors! 
I would like a custom 3D design and quotation for my home:

• Selected Space: ${spaceObj.title}
• Aesthetic Style: ${styleObj.title}
• Preferred Material: ${materialObj.title}
• Room / Piece Dimensions: ${dimensions.trim() || "To be measured with designer"}
• Special Requests: ${additionalNotes.trim() || "Standard luxury finish"}

Please connect me with a senior interior architect for 3D renderings and estimate.`;
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <section className="py-20 sm:py-28 bg-[var(--color-off-white)] border-y border-[var(--color-border)] relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-green-tint)] rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-gold-tint)] rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[var(--color-border)] shadow-2xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--color-primary-green)]">
              Interactive Customization Engine
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Design Your Custom Furniture
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-medium)] leading-relaxed">
            Every space is distinct. Follow our 5-step bespoke process to configure dimensions, wood finishes, and style, and receive your 3D design preview with transparent workshop pricing.
          </p>
        </div>

        {/* 5-Step Progress Indicators */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-10 max-w-4xl mx-auto">
          {[
            { step: 1, label: "1. Space", icon: Home },
            { step: 2, label: "2. Style", icon: Palette },
            { step: 3, label: "3. Material", icon: Layers },
            { step: 4, label: "4. Sizing", icon: Ruler },
            { step: 5, label: "5. 3D Quote", icon: FileCheck2 },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = currentStep === item.step;
            const isCompleted = currentStep > item.step;

            return (
              <button
                key={item.step}
                type="button"
                onClick={() => setCurrentStep(item.step)}
                className={`py-3 px-2 sm:px-4 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 transition-all text-center sm:text-left ${
                  isActive
                    ? "bg-[var(--color-primary-green)] text-white shadow-sm"
                    : isCompleted
                    ? "bg-white text-[var(--color-primary-green)] border border-[var(--color-primary-green)]/30 font-semibold"
                    : "bg-white/60 text-[var(--color-text-light)] border border-[var(--color-border-subtle)]"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                    isActive
                      ? "bg-[var(--color-gold)] text-white"
                      : isCompleted
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-[var(--color-border-subtle)] text-[var(--color-text-light)]"
                  }`}
                >
                  {isCompleted ? <Check className="w-3.5 h-3.5" /> : item.step}
                </div>
                <span className="text-[11px] sm:text-xs font-medium tracking-tight truncate">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Step Content Container */}
        <div className="bg-white rounded-3xl border border-[var(--color-border)] p-6 sm:p-10 shadow-md max-w-4xl mx-auto min-h-[380px] flex flex-col justify-between">
          {/* STEP 1: SELECT SPACE */}
          {currentStep === 1 && (
            <div>
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-gold)] font-bold">
                  Step 1 of 5
                </span>
                <h3 className="text-2xl font-normal text-[var(--color-primary-green)] mt-1" style={{ fontFamily: "var(--font-display)" }}>
                  Which space are you crafting?
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-medium)]">
                  Select the primary area you want to design or furnish.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {SPACES.map((space) => (
                  <div
                    key={space.id}
                    onClick={() => setSelectedSpace(space.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      selectedSpace === space.id
                        ? "border-[var(--color-primary-green)] bg-[var(--color-green-tint)] ring-2 ring-[var(--color-primary-green)]/20 shadow-xs"
                        : "border-[var(--color-border)] hover:border-[var(--color-primary-green)]/40 bg-[var(--color-off-white)]"
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl block mb-2">{space.icon}</span>
                    <h4 className="text-sm font-bold text-[var(--color-primary-green)]">
                      {space.title}
                    </h4>
                    <p className="text-[11px] text-[var(--color-text-medium)] mt-0.5">
                      {space.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: CHOOSE STYLE */}
          {currentStep === 2 && (
            <div>
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-gold)] font-bold">
                  Step 2 of 5
                </span>
                <h3 className="text-2xl font-normal text-[var(--color-primary-green)] mt-1" style={{ fontFamily: "var(--font-display)" }}>
                  Choose your design aesthetic
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-medium)]">
                  Every home tells a story. Select the mood that resonates with your taste.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STYLES.map((style) => (
                  <div
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                      selectedStyle === style.id
                        ? "border-[var(--color-primary-green)] bg-[var(--color-green-tint)] ring-2 ring-[var(--color-primary-green)]/20 shadow-xs"
                        : "border-[var(--color-border)] hover:border-[var(--color-primary-green)]/40 bg-[var(--color-off-white)]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-[var(--color-primary-green)]">
                        {style.title}
                      </h4>
                      {selectedStyle === style.id && (
                        <div className="w-5 h-5 rounded-full bg-[var(--color-primary-green)] text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-[var(--color-text-medium)] leading-relaxed">
                      {style.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: PICK MATERIAL */}
          {currentStep === 3 && (
            <div>
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-gold)] font-bold">
                  Step 3 of 5
                </span>
                <h3 className="text-2xl font-normal text-[var(--color-primary-green)] mt-1" style={{ fontFamily: "var(--font-display)" }}>
                  Select timber species & finish
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-medium)]">
                  We use only seasoned, termite-proof hardwoods and certified marine ply.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MATERIALS.map((mat) => (
                  <div
                    key={mat.id}
                    onClick={() => setSelectedMaterial(mat.id)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                      selectedMaterial === mat.id
                        ? "border-[var(--color-primary-green)] bg-[var(--color-green-tint)] ring-2 ring-[var(--color-primary-green)]/20 shadow-xs"
                        : "border-[var(--color-border)] hover:border-[var(--color-primary-green)]/40 bg-[var(--color-off-white)]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-sm font-bold text-[var(--color-primary-green)]">
                        {mat.title}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--color-gold)] text-white font-bold">
                        {mat.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-medium)] leading-relaxed">
                      {mat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: SHARE DIMENSIONS */}
          {currentStep === 4 && (
            <div>
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-gold)] font-bold">
                  Step 4 of 5
                </span>
                <h3 className="text-2xl font-normal text-[var(--color-primary-green)] mt-1" style={{ fontFamily: "var(--font-display)" }}>
                  Provide space dimensions or floor plan
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-medium)]">
                  Approximate room size or furniture dimensions (leave blank if you need our on-site measurement service).
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] mb-2">
                    Room Size or Furniture Dimensions
                  </label>
                  <input
                    type="text"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    placeholder="e.g. 14 ft x 16 ft Living Room, or 8 ft x 10 ft Wardrobe wall"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary-green)] text-sm bg-[var(--color-off-white)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] mb-2">
                    Specific requirements or features
                  </label>
                  <textarea
                    rows={3}
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="e.g. Hydraulic storage required, built-in cove lighting channel, fluted bronze glass shutters..."
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary-green)] text-sm bg-[var(--color-off-white)] resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: 3D PREVIEW & QUOTE */}
          {currentStep === 5 && (
            <div>
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-gold)] font-bold">
                  Step 5 of 5
                </span>
                <h3 className="text-2xl font-normal text-[var(--color-primary-green)] mt-1" style={{ fontFamily: "var(--font-display)" }}>
                  Your Custom Furniture Summary
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-medium)]">
                  Review your specifications. Connect with our principal designer on WhatsApp for instant 3D layout options.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-6 rounded-2xl bg-[var(--color-off-white)] border border-[var(--color-border)] mb-6 space-y-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[var(--color-text-light)] block">Space</span>
                    <strong className="text-[var(--color-primary-green)]">{spaceObj.title}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[var(--color-text-light)] block">Aesthetic</span>
                    <strong className="text-[var(--color-primary-green)]">{styleObj.title}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[var(--color-text-light)] block">Material</span>
                    <strong className="text-[var(--color-primary-green)]">{materialObj.title}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[var(--color-text-light)] block">Dimensions</span>
                    <strong className="text-[var(--color-primary-green)]">{dimensions.trim() || "To be measured"}</strong>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs text-emerald-800 font-semibold">
                  <span>✓ 10-Year Structural Timber Guarantee Included</span>
                  <span className="text-[var(--color-gold-dark)]">✓ Factory Direct Workshop Pricing</span>
                </div>
              </div>

              <div className="text-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !py-4 !px-8 text-base inline-flex items-center justify-center gap-3 w-full sm:w-auto shadow-md hover:scale-[1.02] transition-transform"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span>Receive 3D Design & Instant WhatsApp Quotation ↗</span>
                </a>
                <p className="text-[11px] text-[var(--color-text-light)] mt-2.5">
                  Direct conversation with Dev Elite Interior architects. No automated bots.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-xs font-semibold text-[var(--color-text-medium)] hover:bg-[var(--color-off-white)] transition-colors"
              >
                ← Previous Step
              </button>
            ) : <div />}

            {currentStep < 5 && (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => prev + 1)}
                className="btn-primary !py-2.5 !px-6 text-xs sm:text-sm inline-flex items-center gap-2"
              >
                <span>Next Step</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
