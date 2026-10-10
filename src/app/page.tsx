import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import CategoryBar from "@/components/CategoryBar";
import FeaturedProducts from "@/components/FeaturedProducts";
import BespokeConfigurator from "@/components/BespokeConfigurator";
import ShopByRoom from "@/components/ShopByRoom";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import SpaceSolutions from "@/components/SpaceSolutions";
import CraftsmanshipShowcase from "@/components/CraftsmanshipShowcase";
import ServiceCard from "@/components/ServiceCard";
import {
  Sparkles,
  ShieldCheck,
  Award,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Clock,
  Compass,
  Star,
  Layers,
  Palette,
  Hammer,
} from "lucide-react";

const services = [
  {
    title: "Bespoke Solid Furniture",
    description: "Handcrafted timber joinery, hydraulic beds, and customized modular units built to your exact millimeter specifications.",
    icon: <Hammer className="w-6 h-6 text-[var(--color-gold)]" />,
    features: [
      "100% Solid Seasoned Teak & Marine Plywood",
      "Floor-to-ceiling wardrobes with Blum fittings",
      "Acoustic fluted wood TV consoles & consoles",
      "Single-slab live-edge dining collections",
    ],
    message: "Namaste, I would like to discuss custom furniture and modular woodwork for my home.",
  },
  {
    title: "Turnkey Interior Architecture",
    description: "End-to-end residential spatial planning, photorealistic 3D visualizations, material curations, and hassle-free turnkey execution.",
    icon: <Compass className="w-6 h-6 text-[var(--color-gold)]" />,
    features: [
      "Photorealistic 3D design previews",
      "Architectural space planning & zoning",
      "Curated material & lighting schemes",
      "False ceiling and cove illumination",
    ],
    message: "Namaste, I want to explore complete interior design & architecture services for my property.",
  },
  {
    title: "Artisan Wall Treatments & PU",
    description: "Transformative wall textures, Italian stucco, luxury wallpapers, and specialized automotive-grade PU spray polish.",
    icon: <Palette className="w-6 h-6 text-[var(--color-gold)]" />,
    features: [
      "Italian lime-wash & metallic textures",
      "Moisture-proof defensive wall coatings",
      "Curated international wallpapers",
      "Specialty wood polish and PU spray",
    ],
    message: "Namaste, I would like an estimate for premium textured painting and designer wall treatments.",
  },
  {
    title: "Smart Living & Illumination",
    description: "Certified electrical infrastructure, architectural magnetic track illumination, and smart automation tailored for effortless comfort.",
    icon: <Sparkles className="w-6 h-6 text-[var(--color-gold)]" />,
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
    title: "Signature Estate Showcase",
    category: "Turnkey Architecture",
    location: "Private Residence",
    image: "/products/signature-showcase/SIG-001.webp",
    description: "Flagship luxury residence featuring customized teak millwork, bespoke joinery, and architectural ambient lighting.",
  },
  {
    title: "Precision Modular Kitchen",
    category: "Custom Modular",
    location: "Luxury Penthouse",
    image: "/products/modular-kitchen/MK-001.webp",
    description: "Waterproof marine-grade kitchen cabinetry with Blum soft-close fittings, quartzite island, and concealed pantry storage.",
  },
  {
    title: "Master Architectural Suite",
    category: "Master Bedroom",
    location: "Duplex Villa",
    image: "/products/bedroom/BR-001.webp",
    description: "Fluted feature woodwork, integrated warm cove illumination, and bespoke upholstered bed suite.",
  },
];

const testimonials = [
  {
    name: "Vikramaditya Singhania",
    location: "Gurugram, Penthouse",
    text: "Dev Elite Interiors delivered bespoke solid teak furniture that feels like an art installation. The millimeter fit of the sliding fluted wardrobes and the 10-year structural warranty gave us absolute peace of mind.",
    rating: 5,
  },
  {
    name: "Dr. Radhika Sen",
    location: "South Delhi, Villa",
    text: "Unlike ready-made brands where you deal with cheap particle board and hidden delays, Dev Elite's direct workshop access allowed us to inspect the raw wood before polish. Outstanding craftsmanship.",
    rating: 5,
  },
  {
    name: "Aditya & Priyanka Verma",
    location: "Noida Expressway, 3 BHK",
    text: "The 5-step custom furniture builder made ordering our hydraulic bed and modular kitchen so seamless. Their WhatsApp team shared 3D layouts within 24 hours.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-text-dark)] font-sans">
      <Navbar />

      {/* ─── 1. HERO SECTION (Editorial Luxury + OrgoWood Trust Authority) ─── */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-[var(--color-off-white)] to-white border-b border-[var(--color-border)]">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--color-green-tint)] rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[var(--color-gold-tint)] rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--color-border)] shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[var(--color-primary-green)]">
                Bespoke Furniture & Turnkey Interiors · Since 2014
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-normal text-[var(--color-primary-green)] tracking-tight leading-[1.08] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Furniture That Fits Your Life. <br className="hidden sm:inline" />
              <span className="italic text-[var(--color-luxury-green)]">
                Crafted With Intention.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl text-[var(--color-text-medium)] leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Heirloom-grade solid teak woodwork and architectural spatial design. Built to your exact millimeter dimensions directly from our master workshop.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <CTAButton
                size="lg"
                variant="primary"
                message="Namaste Dev Elite Interiors, I would like to consult with an interior architect and request a 3D preview."
              >
                Design Your Space on WhatsApp ↗
              </CTAButton>

              <Link
                href="/products"
                className="btn-gold-outline !px-7 !py-3.5 text-base inline-flex items-center gap-2"
              >
                <span>Browse Furniture Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 4 Trust Badges Strip (Inspired by OrgoWood header authority) */}
            <div className="pt-8 border-t border-[var(--color-border-subtle)] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-text-dark)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>35+ Quality Checks</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-text-dark)]">
                <ShieldCheck className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0" />
                <span>10-Yr Structural Warranty</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-text-dark)]">
                <Award className="w-4 h-4 text-[var(--color-primary-green)] flex-shrink-0" />
                <span>100% Solid Seasoned Teak</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-text-dark)]">
                <Clock className="w-4 h-4 text-[var(--color-gold-dark)] flex-shrink-0" />
                <span>Pan-India Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. CATEGORY QUICK EXPLORER BAR ─── */}
      <CategoryBar />

      {/* ─── 3. FEATURED PRODUCTS CATALOG ─── */}
      <FeaturedProducts />

      {/* ─── 4. INTERACTIVE 5-STEP BESPOKE CONFIGURATOR ─── */}
      <div id="bespoke-engine">
        <BespokeConfigurator />
      </div>

      {/* ─── 5. SHOP BY ROOM TABBED SHOWCASE ─── */}
      <div id="shop-by-room">
        <ShopByRoom />
      </div>

      {/* ─── 6. CUSTOM FURNITURE VS READY-MADE COMPARISON MATRIX ─── */}
      <ComparisonMatrix />

      {/* ─── 7. TURNKEY SPATIAL PACKAGES (2 BHK, 3 BHK, VILLA) ─── */}
      <SpaceSolutions />

      {/* ─── 8. FACTORY-TO-HOME CRAFTSMANSHIP & 35+ QUALITY CHECKS ─── */}
      <div id="craftsmanship">
        <CraftsmanshipShowcase />
      </div>

      {/* ─── 9. FULL-SERVICE STUDIO CAPABILITIES ─── */}
      <section className="py-20 sm:py-28 bg-[var(--color-off-white)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[var(--color-border)] shadow-2xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--color-primary-green)]">
                Turnkey Capabilities
              </span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Comprehensive Studio Disciplines
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-medium)] leading-relaxed">
              Beyond individual furniture commissions, our architectural team provides complete spatial transformation from shell to turnkey handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                message={service.message}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. RECENT RESIDENTIAL COMMISSIONS ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-gold)] block mb-2">
                Portfolio of Distinction
              </span>
              <h2
                className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Selected Architectural Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-primary-green)] hover:text-[var(--color-luxury-green)] transition-colors group"
            >
              <span>Browse Complete Design Catalogue (425+ Designs)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {selectedProjects.map((project, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[var(--color-border)] overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-off-white)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-[var(--color-primary-green)] shadow-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-gold)] font-bold mb-1">
                    {project.location}
                  </span>
                  <h3
                    className="text-xl font-normal text-[var(--color-primary-green)] mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-medium)] leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <CTAButton
                    size="sm"
                    variant="secondary"
                    className="w-full justify-center"
                    message={`Namaste, I am inspired by "${project.title}" and would like to explore a similar interior architectural design.`}
                  >
                    Inquire Similar Project ↗
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11. VERIFIED CLIENT TESTIMONIALS ─── */}
      <section className="py-20 sm:py-28 bg-[var(--color-off-white)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-gold)] block mb-2">
              Client Experiences
            </span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Words from Discerning Homeowners
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-medium)] leading-relaxed">
              We judge our success by the serenity, longevity, and pride felt by families living in homes we furnish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[var(--color-border)] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-[var(--color-gold)]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--color-text-dark)] leading-relaxed italic mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--color-border-subtle)]">
                  <h4 className="text-sm font-bold text-[var(--color-primary-green)]">
                    {t.name}
                  </h4>
                  <span className="text-xs text-[var(--color-text-light)]">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 12. BOTTOM CONCIERGE BANNER ─── */}
      <section className="py-20 sm:py-24 bg-[var(--color-primary-green-dark)] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--color-gold-light)] block mb-3">
            Private Design Consultation
          </span>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-normal text-white mb-6 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Commission Your Bespoke Living Space?
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Send us your floor plan or furniture references. Receive a photorealistic 3D visualization and detailed direct-from-workshop quotation within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              size="lg"
              variant="secondary"
              message="Namaste Dev Elite Interiors, I would like to schedule a private consultation and share my floor plan for 3D estimation."
            >
              Chat Directly with Lead Designer on WhatsApp ↗
            </CTAButton>
            <Link
              href="/admin/products"
              className="text-xs sm:text-sm font-semibold text-[var(--color-gold-light)] hover:text-white underline underline-offset-4"
            >
              Studio Staff: Upload New Product Photos →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
