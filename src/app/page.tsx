import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
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
  Palette,
  Hammer,
  ChevronRight,
  MapPin,
} from "lucide-react";

const curatedWorks = [
  {
    title: "The Alipore Grand Residence",
    category: "Turnkey Architecture & Living",
    location: "Alipore, Kolkata",
    image: "/products/signature-showcase/SIG-001.webp",
    aspect: "col-span-12 lg:col-span-7",
    specs: "Double-height living space, customized solid teak fluted joinery, and architectural ambient lighting.",
  },
  {
    title: "Precision Marine Modular Kitchen",
    category: "Custom Modular Millwork",
    location: "Ballygunge, Kolkata",
    image: "/products/modular-kitchen/MK-001.webp",
    aspect: "col-span-12 lg:col-span-5",
    specs: "Boiling Water Proof marine ply, Blum Aventos lift systems, and seamless sintered stone island.",
  },
  {
    title: "Master Architectural Suite",
    category: "Bespoke Bedroom Suite",
    location: "Chhatarpur, New Delhi",
    image: "/products/bedroom/BR-001.webp",
    aspect: "col-span-12 lg:col-span-5",
    specs: "Hydraulic upholstered king bed, integrated warm cove lighting, and tailored floor-to-ceiling wardrobe.",
  },
  {
    title: "Executive Private Study & Lounge",
    category: "Bespoke Commercial & Study",
    location: "Camac Street, Kolkata",
    image: "/products/office/OFF-001.webp",
    aspect: "col-span-12 lg:col-span-7",
    specs: "Acoustic timber wall paneling, live-edge teak executive desk, and concealed cable infrastructure.",
  },
];

const studioDisciplines = [
  {
    title: "Bespoke Timber Joinery",
    description: "Seasoned solid teak, hydraulic storage suites, and precision millwork customized to your exact millimeter dimensions.",
    icon: <Hammer className="w-6 h-6 text-[var(--color-gold)]" />,
    features: [
      "100% Solid Seasoned Teak & BWP Marine Ply",
      "Concealed soft-close Blum & Hettich hardware",
      "Acoustic fluted wooden accents & consoles",
      "Single-slab solid dining collections",
    ],
    message: "Namaste Dev Elite Interiors, I would like to discuss bespoke solid timber woodwork for my home.",
  },
  {
    title: "Turnkey Spatial Architecture",
    description: "Full-scale interior architecture from structural shell to turnkey handover, including 3D photorealistic renderings and layout planning.",
    icon: <Compass className="w-6 h-6 text-[var(--color-gold)]" />,
    features: [
      "Photorealistic 3D visualization & zoning",
      "Curated material and finishes specification",
      "False ceiling and architectural illumination",
      "Dedicated site architect supervision",
    ],
    message: "Namaste Dev Elite Interiors, I want to explore complete turnkey interior architecture for my property.",
  },
  {
    title: "Artisan Wall Treatments & PU",
    description: "Transformative tactile finishes, Italian lime-wash stucco, luxury imported wallpapers, and automotive-grade PU spray finishes.",
    icon: <Palette className="w-6 h-6 text-[var(--color-gold)]" />,
    features: [
      "Authentic Italian marble plaster & lime wash",
      "Dust-free multi-coat PU spray finishes",
      "Anti-fungal and moisture-defensive coatings",
      "Designer wallpapers & fluted accent walls",
    ],
    message: "Namaste Dev Elite Interiors, I would like an estimate for artisan wall treatments and luxury PU finishes.",
  },
  {
    title: "Architectural Illumination",
    description: "Concealed ambient illumination, architectural magnetic tracks, and scene automation engineered for effortless calm.",
    icon: <Sparkles className="w-6 h-6 text-[var(--color-gold)]" />,
    features: [
      "Magnetic track lighting & anti-glare COBs",
      "High CRI 95+ warm circadian dimming",
      "Smart scene automation & silent relays",
      "Concealed cove and profile lighting",
    ],
    message: "Namaste Dev Elite Interiors, I would like a consultation for architectural illumination and smart lighting.",
  },
];

const clientSteps = [
  {
    num: "01",
    title: "Private Consultation",
    desc: "An in-depth review of your architectural floor plans, spatial requirements, lifestyle preferences, and aesthetic sensibilities.",
  },
  {
    num: "02",
    title: "3D Spatial Visualization",
    desc: "Photorealistic 3D renders with exact millimeter proportions, lighting studies, and curated material mood-boards.",
  },
  {
    num: "03",
    title: "Workshop Crafting",
    desc: "Direct fabrication in our master workshop. Clients are invited to inspect raw teak structures and hardware prior to polish.",
  },
  {
    num: "04",
    title: "Turnkey Handover",
    desc: "Flawless on-site installation by master artisans, white-glove site cleaning, and issuance of your 10-year structural warranty.",
  },
];

const testimonials = [
  {
    quote: "Dev Elite delivered bespoke solid teak furniture that feels like an art installation. The millimeter fit of our sliding fluted wardrobes and the structural warranty gave us complete peace of mind.",
    client: "Vikramaditya Singhania",
    location: "Alipore, Kolkata",
    property: "Duplex Villa",
  },
  {
    quote: "Unlike ready-made retailers selling compressed particle board, Dev Elite's direct workshop access allowed us to inspect the raw wood before polish. The quality is truly heirloom grade.",
    client: "Dr. Radhika Sen",
    location: "South City, Kolkata",
    property: "Penthouse Residence",
  },
  {
    quote: "From photorealistic 3D concepts to the final coat of Italian PU, the entire execution was handled with quiet competence. Our kitchen and living lounge are breathtaking.",
    client: "Aditya & Priyanka Verma",
    location: "New Delhi",
    property: "Luxury 4 BHK",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-text-dark)] font-sans selection:bg-[var(--color-gold)]/20 selection:text-[var(--color-primary-green)]">
      <Navbar />

      {/* ─── 1. EDITORIAL LUXURY HERO (70-80% Pure White Canvas) ─── */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-32 overflow-hidden bg-white border-b border-[var(--color-border)]">
        {/* Subtle Architectural Atmosphere */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--color-green-tint)]/60 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[var(--color-gold-tint)]/50 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-14">
            {/* Fine Luxury Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--color-border)] shadow-2xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[var(--color-primary-green)]">
                Bespoke Interior Architecture · Since 2014
              </span>
            </div>

            {/* Timeless Editorial Title */}
            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-normal text-[var(--color-primary-green)] tracking-tight leading-[1.08] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Elegance. Crafted With Intention.
            </h1>

            {/* Refined Subtitle */}
            <p className="text-base sm:text-xl text-[var(--color-text-medium)] leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              A sophisticated interior experience designed around your lifestyle. Heirloom teak joinery, noble natural materials, and turnkey spatial execution.
            </p>

            {/* Apple-Inspired Dual Restrained CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <CTAButton
                size="lg"
                variant="primary"
                message="Namaste Dev Elite Interiors, I would like to schedule a private interior architecture consultation."
              >
                Start a Project on WhatsApp ↗
              </CTAButton>

              <Link
                href="/portfolio"
                className="btn-gold-outline !px-8 !py-3.5 text-base inline-flex items-center gap-2"
              >
                <span>Explore Selected Works</span>
                <ArrowRight className="w-4 h-4 text-[var(--color-gold)]" />
              </Link>
            </div>

            {/* 4 Quiet Trust Metrics */}
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
                <span>Direct Workshop Pricing</span>
              </div>
            </div>
          </div>

          {/* Hero Architectural Showcase Gallery Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-xl bg-gray-50 aspect-[16/9] sm:aspect-[21/9]">
            <Image
              src="/products/signature-showcase/SIG-001.webp"
              alt="Dev Elite Interiors signature architectural project"
              fill
              priority
              className="object-cover object-center transform hover:scale-[1.01] transition-transform duration-700"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-green-dark)]/80 via-transparent to-transparent flex items-end p-6 sm:p-10">
              <div className="text-white max-w-xl">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-gold-light)] block mb-1">
                  Signature Showcase
                </span>
                <p
                  className="text-xl sm:text-2xl font-normal text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  The Grand Residence · Alipore Atelier
                </p>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  Full spatial curation featuring customized solid teak paneling, travertine surfaces, and warm ambient illumination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. PHILOSOPHY & THREE PILLARS (Clean Editorial Whitespace) ─── */}
      <section className="py-24 sm:py-32 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] mb-3 block">
                Design Philosophy
              </span>
              <h2
                className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Luxury Without Unnecessary Visual Noise.
              </h2>
              <p className="text-base text-[var(--color-text-medium)] leading-relaxed mb-6">
                We believe true luxury is not loud ornament, but pure intentionality. Clean proportions, honest natural timber, and millimeter-accurate joinery produce spaces of lasting quiet authority.
              </p>
              <div className="border-l-2 border-[var(--color-gold)] pl-4 py-1 italic text-sm text-[var(--color-text-dark)] font-medium">
                &ldquo;Every dimension serves a functional purpose; every surface reflects enduring craftsmanship.&rdquo;
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-[var(--color-off-white)] border border-[var(--color-border-subtle)]">
                <span className="text-2xl font-normal text-[var(--color-gold)] mb-3 block" style={{ fontFamily: "var(--font-display)" }}>
                  01
                </span>
                <h3 className="text-base font-semibold text-[var(--color-primary-green)] mb-2">
                  Spatial Harmony
                </h3>
                <p className="text-xs text-[var(--color-text-medium)] leading-relaxed">
                  Carefully considered circulation paths, balanced ceiling heights, and tailored sightlines throughout your home.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[var(--color-off-white)] border border-[var(--color-border-subtle)]">
                <span className="text-2xl font-normal text-[var(--color-gold)] mb-3 block" style={{ fontFamily: "var(--font-display)" }}>
                  02
                </span>
                <h3 className="text-base font-semibold text-[var(--color-primary-green)] mb-2">
                  Noble Materials
                </h3>
                <p className="text-xs text-[var(--color-text-medium)] leading-relaxed">
                  Authentic seasoned CP teak, certified marine plywood, sintered surfaces, and automotive-grade Italian PU coatings.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[var(--color-off-white)] border border-[var(--color-border-subtle)]">
                <span className="text-2xl font-normal text-[var(--color-gold)] mb-3 block" style={{ fontFamily: "var(--font-display)" }}>
                  03
                </span>
                <h3 className="text-base font-semibold text-[var(--color-primary-green)] mb-2">
                  Direct Workshop
                </h3>
                <p className="text-xs text-[var(--color-text-medium)] leading-relaxed">
                  Complete in-house manufacturing eliminating dealer markups, with raw structure inspection before polishing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. CURATED PORTFOLIO SHOWCASE (4 Selected Works Bento) ─── */}
      <section className="py-24 sm:py-32 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] mb-3 block">
                Selected Commissions
              </span>
              <h2
                className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Curated Living Spaces
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary-green)] hover:text-[var(--color-gold-dark)] transition-colors group"
            >
              <span>Explore All 429+ Architectural Works</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {curatedWorks.map((work, idx) => (
              <div
                key={idx}
                className={`${work.aspect} group rounded-2xl overflow-hidden bg-white border border-[var(--color-border)] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-semibold text-[var(--color-primary-green)] shadow-xs">
                      <MapPin className="w-3 h-3 text-[var(--color-gold)]" />
                      <span>{work.location}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-gold-dark)] block mb-1">
                      {work.category}
                    </span>
                    <h3
                      className="text-xl sm:text-2xl font-normal text-[var(--color-primary-green)] mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {work.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-text-medium)] leading-relaxed">
                      {work.specs}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                    <Link
                      href="/portfolio"
                      className="text-xs font-bold text-[var(--color-primary-green)] hover:text-[var(--color-gold)] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>View Gallery Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={`https://wa.me/917368032697?text=${encodeURIComponent(
                        `Namaste Dev Elite Interiors, I am interested in a design similar to your "${work.title}" project.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[var(--color-gold-dark)] hover:underline inline-flex items-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Request Preview</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. FULL STUDIO DISCIPLINES (Clean Architectural Service Cards) ─── */}
      <section className="py-24 sm:py-32 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] mb-3 block">
              Core Capabilities
            </span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Comprehensive Atelier Disciplines
            </h2>
            <p className="text-base text-[var(--color-text-medium)] leading-relaxed">
              From individual statement furniture to full residential turnkey handover, our architectural team supervises every millimeter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studioDisciplines.map((item, idx) => (
              <ServiceCard
                key={idx}
                title={item.title}
                description={item.description}
                icon={item.icon}
                features={item.features}
                message={item.message}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. THE 4-STEP CLIENT JOURNEY (Structured, Calm, Transparent) ─── */}
      <section className="py-24 sm:py-32 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] mb-3 block">
              Execution Process
            </span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The 4-Step Client Journey
            </h2>
            <p className="text-base text-[var(--color-text-medium)] leading-relaxed">
              A transparent, stress-free architectural journey with clear milestones, 3D previews, and continuous site updates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-[var(--color-border)] shadow-2xs relative flex flex-col justify-between"
              >
                <div>
                  <span
                    className="text-3xl sm:text-4xl font-normal text-[var(--color-gold)] mb-4 block"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.num}
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--color-primary-green)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-medium)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. CLIENT STORIES & TESTIMONIALS (Restrained Editorial Quotes) ─── */}
      <section className="py-24 sm:py-32 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] mb-3 block">
              Client Commendations
            </span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-[var(--color-primary-green)] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Trusted by Discerning Homeowners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-off-white)] p-8 rounded-2xl border border-[var(--color-border-subtle)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[var(--color-gold)] mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--color-gold)]" />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--color-text-dark)] leading-relaxed italic mb-8">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <p className="text-sm font-bold text-[var(--color-primary-green)]">
                    {item.client}
                  </p>
                  <p className="text-xs text-[var(--color-text-medium)]">
                    {item.location} · {item.property}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. PRIVATE CONSULTATION BOOKING CARD (Selective Gold + Deep Emerald) ─── */}
      <section className="py-24 sm:py-32 bg-[var(--color-primary-green-dark)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-luxury-green)]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-light)] mb-4 block">
            Private Consultation
          </span>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-normal text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Design Your Space With Intention.
          </h2>

          <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Connect directly with our principal interior architect on WhatsApp. Share your floor plan or schedule a private studio consultation in Kolkata or New Delhi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://wa.me/917368032697?text=Namaste%20Dev%20Elite%20Interiors%2C%20I%20would%20like%20to%20request%20a%20private%20architectural%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-primary-green-dark)] font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Connect on WhatsApp ↗</span>
            </a>

            <a
              href="tel:+917368032697"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-medium text-sm px-8 py-4 rounded-lg border border-white/30 transition-all"
            >
              <span>Call Direct: +91 73680 32697</span>
            </a>
          </div>

          <div className="inline-flex items-center gap-3 text-xs text-white/70">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Accepting residential & commercial projects across Kolkata, Delhi NCR, and Pan India</span>
          </div>
        </div>
      </section>

      {/* ─── 8. FOOTER (Deep Emerald Authority, No Admin Leaks) ─── */}
      <Footer />
    </div>
  );
}
