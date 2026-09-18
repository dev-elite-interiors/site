import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Bespoke Modular Furniture",
    description: "Tailor-made woodwork, factory-finished modular kitchens, sliding and hinged wardrobes, TV units, and statement dining furniture crafted with German precision hardware.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    features: [
      "Waterproof, boiling-water-resistant (BWR) marine ply",
      "Anti-scratch acrylic and premium matte laminates",
      "Blum / Hettich soft-close hinges & tandem drawers",
      "Ergonomic kitchen cutlery and pantry pull-outs",
      "Integrated warm LED profile lighting",
      "5-Year comprehensive studio warranty",
    ],
    message: "Namaste, I want to discuss custom modular furniture and woodwork for my home.",
  },
  {
    title: "Full Interior Architecture",
    description: "End-to-end spatial planning, 2D architectural drawings, 3D photorealistic renderings, material consultation, and dedicated turnkey on-site supervision.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: [
      "Comprehensive 3D walkthroughs before starting",
      "Complete false ceiling and gypsum acoustic detailing",
      "Italian marble flooring selection and mirror polishing",
      "Color psychology, fabric, and soft furnishing guidance",
      "Glass partition systems and sliding metal doors",
      "Strict project timeline adherence and milestones",
    ],
    message: "Namaste, I am interested in complete turnkey interior architecture for my residence.",
  },
  {
    title: "Artisan Wall Finishes & Coatings",
    description: "Transform your walls into bespoke works of art with authorized application of textured finishes, Italian lime plasters, stencils, and luxury wallpapers.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: [
      "Asian Paints Royale & Berger certified applicators",
      "Luxury Italian stucco, travertine, and concrete textures",
      "Imported metallic and organic texture wallpapers",
      "Anti-dampness, anti-efflorescence waterproofing primer",
      "PU and melamine polishing for teak and oak wood",
      "Dust-free mechanized sanding and clean handover",
    ],
    message: "Namaste, I want to explore designer painting and textured wall treatments.",
  },
  {
    title: "Smart Lighting & Electrical Infrastructure",
    description: "Intelligent electrical infrastructure, architectural warm illumination, magnetic track lights, and voice/phone-controlled automation built with certified safety.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: [
      "Fire-retardant concealed multi-strand copper wiring",
      "Modular touch switchboards & glass plates",
      "Magnetic architectural track lighting systems",
      "CRI 90+ warm architectural cove and spotlighting",
      "Inverter, stabilizer, and home automation integration",
      "Thorough circuit balance and safety audit certificate",
    ],
    message: "Namaste, I need an estimate for smart electrical wiring and lighting design.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-text-dark)]">
      <Navbar />

      {/* Header Section */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="badge-gold mb-4">Craftsmanship & Execution</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[var(--color-primary-green)] mb-6">
            Turnkey Services,{" "}
            <span className="italic text-[var(--color-gold-dark)]">
              Crafted to Last.
            </span>
          </h1>
          <p className="prose-editorial mx-auto text-base sm:text-lg text-[var(--color-text-medium)] font-light leading-relaxed mb-8">
            Dev Elite Interiors combines in-house woodworking capability, specialized interior architecture, and rigorous quality control to deliver a flawless residential experience.
          </p>
          <div className="flex justify-center gap-4">
            <CTAButton size="md" variant="primary">
              Consult on WhatsApp ↗
            </CTAButton>
            <Link href="/portfolio" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-[var(--color-primary-green)] mb-3">
              Explore Our Core Disciplines
            </h2>
            <div className="brand-divider" />
            <p className="text-sm sm:text-base text-[var(--color-text-medium)] font-light">
              Every discipline is executed by dedicated master specialists under our unified standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* The 4-Step Process Strip */}
      <section className="py-20 md:py-28 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-green mb-3">Execution Transparency</span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[var(--color-primary-green)] mb-3">
              How We Work Together
            </h2>
            <div className="brand-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Briefing", desc: "Site assessment, architectural floor plan study, and lifestyle requirements alignment." },
              { num: "02", title: "Visuals", desc: "Detailed 3D designs, color schemes, and sample swatches approved before execution." },
              { num: "03", title: "Fabrication", desc: "Precision factory woodworking and on-site civil and electrical execution." },
              { num: "04", title: "Handover", desc: "Deep cleaning, 50-point quality audit, 5-year warranty card handover." },
            ].map((p, idx) => (
              <div key={idx} className="card-clean bg-white p-7">
                <div
                  className="text-3xl font-normal text-[var(--color-gold)] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.num}
                </div>
                <h3 className="text-xl font-normal text-[var(--color-primary-green)] mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-medium)] font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-primary-green)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4">
            Need guidance on your floor plan?
          </h2>
          <p className="text-white/80 text-sm sm:text-base font-light mb-8 max-w-xl mx-auto">
            Our principal designers are available for private consultations. Share your requirements and get personalized suggestions.
          </p>
          <CTAButton size="lg" variant="gold-outline" className="bg-white/10 text-white border-white/40">
            Book a Free Consultation ↗
          </CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
