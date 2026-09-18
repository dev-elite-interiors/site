"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

const categories = ["All", "Full Residence", "Living & Lounges", "Modular Kitchens", "Master Suites", "Artisan Finishes"];

const projects = [
  {
    title: "The Royal Symphony Villa",
    category: "Full Residence",
    location: "4,200 sq.ft Private Estate",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=85",
    description: "Turnkey luxury execution featuring custom teak millwork, book-matched Italian marble, and automated magnetic track illumination.",
    highlights: ["Custom Teakwood Paneling", "Italian Statuario Marble", "Concealed Smart Automation"],
  },
  {
    title: "Minimalist Quartz Kitchen",
    category: "Modular Kitchens",
    location: "Sky Penthouse",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=85",
    description: "Matte sage-green cabinetry with Blum soft-close fittings, an expansive waterfall quartzite island, and concealed walk-in pantry.",
    highlights: ["BWR Marine Ply Structure", "Blum Tandembox Systems", "Quartzite Island Surface"],
  },
  {
    title: "The Heritage Master Suite",
    category: "Master Suites",
    location: "Duplex Residence",
    image: "https://images.unsplash.com/photo-1522771731478-44fb94bd104e?auto=format&fit=crop&q=85",
    description: "Fluted oak feature backdrop, recessed velvet headboard, warm indirect cove lighting, and a glass walk-in wardrobe.",
    highlights: ["Acoustic Fabric Paneling", "Fluted Oak Woodwork", "Glass Wardrobe Suite"],
  },
  {
    title: "Contemporary Grand Salon",
    category: "Living & Lounges",
    location: "Luxury Apartment",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=85",
    description: "A double-height living room anchored by a custom marble TV console, bespoke curved velvet seating, and architectural brass pendants.",
    highlights: ["Double-Height Feature Wall", "Bespoke Curved Sectional", "Warm Architectural Glow"],
  },
  {
    title: "Venetian Stucco Gallery Wall",
    category: "Artisan Finishes",
    location: "Modern Residence",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=85",
    description: "Hand-troweled Italian travertine stucco finish paired with concealed warm uplighting, creating dramatic organic textures.",
    highlights: ["Italian Lime Stucco", "Dust-Free Mechanized Finish", "Moisture Resistant Sealant"],
  },
  {
    title: "Nordic Warmth Dining Suite",
    category: "Living & Lounges",
    location: "Suburban Villa",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85",
    description: "Solid ash wood 8-seater dining table with custom leather chairs, integrated bar counter, and fluted glass showcase.",
    highlights: ["Solid Ash Wood Joinery", "Built-In Wine Credenza", "PU High-Resilience Finish"],
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-[var(--color-text-dark)]">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-14 md:pt-44 md:pb-16 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="badge-green mb-4">Curated Projects</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[var(--color-primary-green)] mb-6">
            A Gallery of{" "}
            <span className="italic text-[var(--color-gold-dark)]">
              Considered Living.
            </span>
          </h1>
          <p className="prose-editorial mx-auto text-base sm:text-lg text-[var(--color-text-medium)] font-light leading-relaxed mb-6">
            Explore our completed residences and bespoke joinery projects across tier-3 and tier-4 regions, where thoughtful design meets precision craftsmanship.
          </p>
        </div>
      </section>

      {/* Filter Tabs (Apple-inspired clean pill tabs) */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-[var(--color-border)] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar justify-start sm:justify-center">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[var(--color-primary-green)] text-white shadow-sm"
                      : "bg-[var(--color-off-white)] text-[var(--color-text-medium)] hover:text-[var(--color-primary-green)] hover:bg-[var(--color-cream)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group flex flex-col bg-white rounded-[14px] border border-[var(--color-border)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[var(--color-soft-gold)]"
              >
                {/* Photo with clean 14px radius container */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[var(--color-off-white)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-green)]">
                    {project.category}
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-grow">
                  <span className="text-xs text-[var(--color-text-light)] uppercase tracking-wider font-medium mb-1">
                    {project.location}
                  </span>
                  <h3 className="text-2xl font-normal text-[var(--color-primary-green)] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-medium)] leading-relaxed font-light mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-4 border-t border-[var(--color-border-subtle)] space-y-1.5 mb-6">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[var(--color-text-medium)]">
                        <span className="w-1 h-1 rounded-full bg-[var(--color-gold)]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <CTAButton
                    message={`Namaste, I am interested in knowing more about your project: ${project.title}.`}
                    size="sm"
                    variant="secondary"
                    className="w-full justify-center"
                  >
                    Inquire About This Style ↗
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[var(--color-primary-green)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4">
            Have a specific vision in mind?
          </h2>
          <p className="text-white/80 text-sm sm:text-base font-light mb-8 max-w-xl mx-auto">
            Connect directly with our lead architect on WhatsApp to explore custom solutions tailored to your floor plan.
          </p>
          <CTAButton size="lg" variant="gold-outline" className="bg-white/10 text-white border-white/40">
            Request Private Walkthrough ↗
          </CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
