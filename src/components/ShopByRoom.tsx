"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Check } from "lucide-react";

const ROOM_TABS = [
  {
    id: "living",
    title: "Living Room",
    subtitle: "Conversation, Comfort & Presence",
    image: "/products/living-room/LR-001.webp",
    description: "Architectural sectionals, marble coffee tables, bespoke media walls, and warm ambient illumination designed for hosting.",
    items: [
      "Custom Chesterfield & L-Shape Loungers",
      "Acoustic fluted wood TV media consoles",
      "Sculptural marble & brass accent tables",
      "Concealed architectural cove lighting",
    ],
    link: "/products?room=living",
  },
  {
    id: "bedroom",
    title: "Master Bedroom",
    subtitle: "Sanctuary of Rest & Tailored Storage",
    image: "/products/bedroom/BR-001.webp",
    description: "Cantilevered floating teak beds, acoustic headboard panels, walk-in fluted glass wardrobes, and vanity suites.",
    items: [
      "Hydraulic storage platform beds with soft-lift",
      "Floor-to-ceiling tinted glass sliding wardrobes",
      "Floating bed-side nightstands with concealed cables",
      "Integrated dressing consoles with LED mirrors",
    ],
    link: "/products?room=bedroom",
  },
  {
    id: "dining",
    title: "Dining Room",
    subtitle: "Celebrations Around Heirloom Wood",
    image: "/products/signature-showcase/SIG-003.webp",
    description: "Single-slab solid teak live-edge dining tables, ergonomic velvet dining chairs, and illuminated crockery showcases.",
    items: [
      "6 & 8-Seater live edge solid timber tables",
      "High-resilience foam dining armchairs",
      "Floating buffet credenzas with quartz counter",
      "Concealed wine & glass storage units",
    ],
    link: "/products?room=dining",
  },
  {
    id: "kitchen",
    title: "Modular Kitchen",
    subtitle: "Culinary Precision & Zero Maintenance",
    image: "/products/modular-kitchen/MK-001.webp",
    description: "Boiling water-proof marine plywood cabinetry, scratch-resistant acrylic and PU shutters, and quartz waterfall islands.",
    items: [
      "Blum Legrabox soft-close drawer assemblies",
      "Anti-fingerprint matte and high-gloss acrylic finishes",
      "Pull-out spice racks, tall pantry units & magic corners",
      "Under-cabinet sensor illumination profiles",
    ],
    link: "/products?room=kitchen",
  },
  {
    id: "office",
    title: "Home Office",
    subtitle: "Focus, Prestige & Ergonomic Grace",
    image: "/products/tv-unit/TV-001.webp",
    description: "Solid wood executive desks with wire docks, floor-to-ceiling library shelving, and bespoke executive acoustics.",
    items: [
      "Teak executive desks with leather writing inlays",
      "Built-in biometric locking drawers for documents",
      "Modular library shelves with LED task strip",
      "Cable-free cable routing conduits",
    ],
    link: "/products?room=office",
  },
];

export default function ShopByRoom() {
  const [activeTab, setActiveTab] = useState("living");
  const currentRoom = ROOM_TABS.find((r) => r.id === activeTab) || ROOM_TABS[0];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-off-white)] border border-[var(--color-border)] shadow-2xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--color-primary-green)]">
                Spatial Curations
              </span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Shop & Explore by Room
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-medium)] mt-3 leading-relaxed">
              Every room has a distinct rhythm. Explore tailored furniture ensembles engineered to maximize spatial harmony and visual elegance.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-primary-green)] hover:text-[var(--color-luxury-green)] transition-colors group"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Tab Buttons Strip */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {ROOM_TABS.map((room) => {
            const isActive = activeTab === room.id;
            return (
              <button
                key={room.id}
                type="button"
                onClick={() => setActiveTab(room.id)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--color-primary-green)] text-white shadow-sm"
                    : "bg-[var(--color-off-white)] border border-[var(--color-border)] text-[var(--color-text-medium)] hover:border-[var(--color-primary-green)] hover:text-[var(--color-primary-green)]"
                }`}
              >
                {room.title}
              </button>
            );
          })}
        </div>

        {/* Room Feature Card Banner */}
        <div className="bg-[var(--color-off-white)] rounded-3xl border border-[var(--color-border)] overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12 transition-all duration-300">
          {/* Image Showcase (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] lg:min-h-full">
            <Image
              src={currentRoom.image}
              alt={currentRoom.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-4 left-4 lg:hidden text-white">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-gold-light)] font-bold">
                {currentRoom.subtitle}
              </span>
              <h3 className="text-2xl font-normal" style={{ fontFamily: "var(--font-display)" }}>
                {currentRoom.title}
              </h3>
            </div>
          </div>

          {/* Details & Inclusions (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-gold)] font-bold block mb-1">
                {currentRoom.subtitle}
              </span>
              <h3
                className="text-2xl sm:text-4xl font-normal text-[var(--color-primary-green)] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {currentRoom.title} Solutions
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-medium)] leading-relaxed mb-6">
                {currentRoom.description}
              </p>

              {/* Items List */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] block">
                  Signature Inclusions:
                </span>
                {currentRoom.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--color-text-dark)]">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-green-tint)] border border-[var(--color-primary-green)]/20 flex items-center justify-center flex-shrink-0 text-[var(--color-primary-green)]">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Action */}
            <div className="pt-6 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center gap-4">
              <Link
                href={currentRoom.link}
                className="btn-primary !py-3 !px-6 text-xs sm:text-sm inline-flex items-center gap-2"
              >
                <span>Browse {currentRoom.title} Furniture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
