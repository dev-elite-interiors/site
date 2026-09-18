import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Bespoke Furniture",
    description: "Handcrafted joinery and customized modular units built to your exact specifications, from walk-in wardrobes to entertainment suites.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    features: [
      "Precision modular kitchen systems",
      "Custom wardrobes with soft-close hardware",
      "Integrated TV consoles & bookshelves",
      "Bespoke dining and living seating",
    ],
    message: "Namaste, I would like to discuss custom furniture and modular woodwork for my home.",
  },
  {
    title: "Interior Architecture",
    description: "End-to-end residential spatial planning, 3D visualizations, material curations, and turnkey project management.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: [
      "Photorealistic 3D design previews",
      "Architectural space planning & zoning",
      "Curated material & lighting schemes",
      "False ceiling and cove illumination",
    ],
    message: "Namaste, I want to explore complete interior design & architecture services for my property.",
  },
  {
    title: "Artisan Wall Finishes",
    description: "Transformative wall textures, Italian stucco, luxury wallpapers, and authorized premium coatings from Asian Paints and Berger.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: [
      "Italian lime-wash & metallic textures",
      "Moisture-proof defensive wall coatings",
      "Curated international wallpapers",
      "Specialty wood polish and PU spray",
    ],
    message: "Namaste, I would like an estimate for premium textured painting and designer wall treatments.",
  },
  {
    title: "Smart Living & Electrical",
    description: "Certified electrical infrastructure, architectural warm illumination, and smart automation tailored for effortless comfort.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: [
      "Complete structured wiring & safety audits",
      "Smart switch boards and remote dimming",
      "Architectural magnetic track lights",
      "Inverter, UPS, and backup planning",
    ],
    message: "Namaste, I want a consultation for smart home wiring and lighting installation.",
  },
];

const selectedProjects = [
  {
    title: "The Royal Symphony Villa",
    category: "Full Residence",
    location: "Private Residence",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80",
    description: "A 4,200 sq.ft private estate featuring custom teak millwork, imported marble flooring, and layered warm illumination.",
  },
  {
    title: "Minimalist Quartz Kitchen",
    category: "Custom Modular",
    location: "Urban Penthouse",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80",
    description: "Seamless matte sage-green cabinetry with soft-close blum fittings, an expansive quartzite island, and concealed pantry.",
  },
  {
    title: "The Heritage Master Suite",
    category: "Interior Architecture",
    location: "Duplex Villa",
    image: "https://images.unsplash.com/photo-1522771731478-44fb94bd104e?auto=format&fit=crop&q=80",
    description: "Fluted wood feature walls, recessed velvet headboard, ambient cove lighting, and a glass-enclosed wardrobe suite.",
  },
];

const stats = [
  { value: "500+", label: "Homes Transformed" },
  { value: "10+", label: "Years of Experience" },
  { value: "5-Year", label: "Furniture Warranty" },
  { value: "100%", label: "Quality Assurance" },
];

const steps = [
  {
    number: "01",
    name: "Discover",
    tagline: "Private Consultation & Briefing",
    description: "We understand your daily lifestyle, aesthetic preferences, floor plan constraints, and investment range during a detailed consultation.",
  },
  {
    number: "02",
    name: "Design",
    tagline: "3D Visuals & Material Palette",
    description: "Our design team develops comprehensive photorealistic 3D layouts, sample boards, and finish selections before any fabrication begins.",
  },
  {
    number: "03",
    name: "Refine",
    tagline: "Transparent Quotes & Detailing",
    description: "Every line item, hardware specification, and timeline milestone is clearly documented and locked with zero hidden costs.",
  },
  {
    number: "04",
    name: "Deliver",
    tagline: "Turnkey Execution & Handover",
    description: "Master craftsmen execute on site with strict quality checkpoints, followed by deep cleaning, inspection, and formal handover.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-text-dark)]">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════
          02 — HERO SECTION (White Canvas, Editorial Headline, Cinematic Visual)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            {/* Subtle Brand Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--color-off-white)] border border-[var(--color-border)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-gold)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-green)]">
                Luxury Interior Design & Furnishings
              </span>
            </div>

            {/* Apple-Inspired Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal text-[var(--color-primary-green)] leading-[1.12] mb-6">
              Spaces that feel{" "}
              <span className="italic text-[var(--color-gold-dark)]">
                uniquely yours.
              </span>
            </h1>

            {/* Paragraph conforming to 600-680px rule */}
            <p className="prose-editorial mx-auto text-lg sm:text-xl text-[var(--color-text-medium)] font-light leading-relaxed mb-10">
              Thoughtful interior design, bespoke craftsmanship, and timeless residential spaces crafted around the way you live.
            </p>

            {/* CTAs: Deep Emerald Primary + Outlined Secondary */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton size="lg" variant="primary">
                Start a Project ↗
              </CTAButton>
              <Link href="/portfolio" className="btn-secondary w-full sm:w-auto">
                Explore Our Work
              </Link>
            </div>
          </div>

          {/* Wide Cinematic Hero Visual (14px soft radius, clean crop) */}
          <div className="relative w-full h-[400px] sm:h-[520px] md:h-[620px] rounded-[16px] overflow-hidden shadow-lg border border-[var(--color-border)]">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=85"
              alt="Luxury Living Room by Dev Elite Interiors"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle vignette for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Floating Editorial Badge on Image */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-white/95 backdrop-blur-md px-5 py-3 rounded-lg border border-white/60 shadow-md max-w-xs sm:max-w-sm">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--color-gold-dark)] font-semibold block mb-0.5">
                The Curated Residence
              </span>
              <p className="text-xs sm:text-sm text-[var(--color-primary-green)] font-medium">
                Harmonizing Italian marble, custom brass hardware & fluted oak.
              </p>
            </div>
          </div>

          {/* Trust Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-14 border-b border-[var(--color-border)] pb-14">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div
                  className="text-3xl sm:text-4xl md:text-5xl font-normal text-[var(--color-primary-green)] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-light)] font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          03 — BRAND INTRODUCTION (Philosophy & Restraint)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <span className="badge-gold mb-4">Design Philosophy</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[var(--color-primary-green)] mb-6 leading-tight">
                Luxury is not noise. It is{" "}
                <span className="italic text-[var(--color-gold-dark)]">
                  considered detail.
                </span>
              </h2>
              <div className="brand-divider left" />
            </div>
            <div className="md:col-span-7 space-y-5 text-base sm:text-lg text-[var(--color-text-medium)] font-light leading-relaxed">
              <p>
                At Dev Elite Interiors, we believe true luxury emerges when architecture, functional ergonomics, and personal history converge. Every home we undertake is an intimate reflection of its inhabitants—never a copy of a catalogue.
              </p>
              <p>
                From private estate residences to high-end apartments, our studio provides turnkey design, structural woodworking, and precision execution backed by over a decade of dedication.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-[var(--color-primary-green)] hover:text-[var(--color-gold-dark)] transition-colors"
                >
                  Read Our Full Story <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          04 — SELECTED PROJECTS (Curated Gallery)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="badge-green mb-4">Portfolio Highlights</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[var(--color-primary-green)]">
                Selected Works
              </h2>
              <div className="brand-divider left" />
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-[var(--color-primary-green)] hover:text-[var(--color-gold-dark)] transition-colors"
            >
              View Full Portfolio ({selectedProjects.length * 3}+ projects) <span>→</span>
            </Link>
          </div>

          {/* Projects Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedProjects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-[14px] border border-[var(--color-border)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[var(--color-soft-gold)]"
              >
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[var(--color-off-white)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-green)]">
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
                  <div className="pt-2 border-t border-[var(--color-border-subtle)]">
                    <Link
                      href="/portfolio"
                      className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold-dark)] group-hover:text-[var(--color-primary-green)] transition-colors inline-flex items-center gap-1.5"
                    >
                      Explore Project Details <span>↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          05 — SERVICES (Curated Structured Services)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-gold mb-4">Turnkey Offerings</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[var(--color-primary-green)] mb-4">
              Comprehensive Studio Services
            </h2>
            <div className="brand-divider" />
            <p className="text-[var(--color-text-medium)] text-base sm:text-lg font-light leading-relaxed">
              From architectural blueprint to the final custom dining chair, we manage every facet of execution under a single accountable standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 items-stretch">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          06 — THE 4-STEP PROCESS (Discover · Design · Refine · Deliver)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="badge-green mb-4">Transparent Workflow</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[var(--color-primary-green)] mb-4">
              The Dev Elite Process
            </h2>
            <div className="brand-divider" />
            <p className="text-[var(--color-text-medium)] text-base sm:text-lg font-light leading-relaxed">
              A smooth, predictable client journey designed to eliminate friction and ensure complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col p-8 rounded-[14px] bg-[var(--color-off-white)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border)] transition-all"
              >
                <div
                  className="text-4xl sm:text-5xl font-normal text-[var(--color-gold)] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.number}
                </div>
                <h3 className="text-2xl font-normal text-[var(--color-primary-green)] mb-1">
                  {step.name}
                </h3>
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--color-gold-dark)] font-semibold mb-4 block">
                  {step.tagline}
                </span>
                <p className="text-sm text-[var(--color-text-medium)] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          07 — TRUST & ABOUT (Proof & Warranty)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative rounded-[16px] overflow-hidden h-[420px] sm:h-[480px] shadow-md border border-[var(--color-border)]">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85"
                alt="Craftsmanship detail by Dev Elite Interiors"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="badge-gold mb-4 self-start">The Dev Elite Promise</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[var(--color-primary-green)] mb-6 leading-tight">
                Built to last. Guaranteed for five years.
              </h2>
              <p className="text-[var(--color-text-medium)] text-base sm:text-lg font-light leading-relaxed mb-8">
                We believe true quality is proven over time. That is why all modular woodwork and handcrafted furniture created in our facility carries a comprehensive 5-year studio warranty, backed by ISI-certified materials and European fittings.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "100% ISI-certified moisture-resistant marine-grade ply",
                  "Original Blum & Hettich soft-close architectural hardware",
                  "Dedicated site supervisor and weekly photo progress updates",
                  "Transparent material audits and bill-of-quantities before commencement",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[var(--color-gold-tint)] border border-[var(--color-soft-gold)] flex items-center justify-center text-[var(--color-gold-dark)] text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base text-[var(--color-text-dark)] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <CTAButton size="md" variant="primary">
                  Book a Studio Consultation ↗
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          08 — FINAL CTA SECTION (Deep Emerald, Champagne Gold details)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[var(--color-primary-green)] text-white relative overflow-hidden">
        {/* Subtle radial gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(182,154,84,0.12)_0%,_transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-gold-light)] font-semibold mb-4">
            Begin Your Interior Journey
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white mb-6 leading-tight">
            Ready to design a home that inspires?
          </h2>
          <div className="w-12 h-0.5 bg-[var(--color-gold)] mx-auto mb-8" />
          <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Share your floor plan or schedule a private consultation with our principal designers. We are ready to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton size="lg" variant="gold-outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/40">
              Chat on WhatsApp ↗
            </CTAButton>
            <Link
              href="/contact"
              className="btn-ghost-dark w-full sm:w-auto"
            >
              Send Floor Plan Online
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
