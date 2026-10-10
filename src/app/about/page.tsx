import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

const values = [
  {
    title: "Material Integrity",
    subtitle: "No compromises on substrate",
    desc: "We exclusively employ boiling-water-resistant (BWR) marine ply, anti-warp internal framing, and authentic certified hardware.",
  },
  {
    title: "Transparent Dealing",
    subtitle: "Clear pricing, zero surprises",
    desc: "Every line item, hardware model, and cubic volume is specified in a detailed bill-of-quantities prior to work commencement.",
  },
  {
    title: "Turnkey Accountability",
    subtitle: "Single point of contact",
    desc: "You never need to manage separate carpenters, painters, and electricians. Our dedicated studio supervisor handles everything.",
  },
  {
    title: "5-Year Studio Warranty",
    subtitle: "Long-term peace of mind",
    desc: "Our confidence in our master joinery and precision fittings is backed by a written 5-year warranty card upon handover.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-text-dark)]">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="badge-gold mb-4">About the Studio</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[var(--color-primary-green)] mb-6">
            Elegance. Crafted with{" "}
            <span className="italic text-[var(--color-gold-dark)]">
              Intention.
            </span>
          </h1>
          <p className="prose-editorial mx-auto text-base sm:text-lg text-[var(--color-text-medium)] font-light leading-relaxed mb-6">
            Dev Elite Interiors was founded on a simple conviction: every discerning family deserves access to world-class interior architecture, uncompromising material quality, and dependable craftsmanship.
          </p>
        </div>
      </section>

      {/* Origin Story (Editorial Split) */}
      <section className="py-20 md:py-28 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="md:col-span-6 relative h-[440px] sm:h-[540px] rounded-[16px] overflow-hidden border border-[var(--color-border)] shadow-md">
              <Image
                src="/products/signature-showcase/SIG-002.webp"
                alt="Dev Elite studio interior architecture craftsmanship"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-lg border border-white/60 shadow-sm">
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-dark)] font-semibold block">
                  Studio Founded
                </span>
                <span
                  className="text-2xl font-normal text-[var(--color-primary-green)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Over 10 Years of Trust
                </span>
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col justify-center">
              <span className="badge-green mb-4 self-start">The Dev Elite Journey</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[var(--color-primary-green)] mb-6 leading-tight">
                Bringing metropolitan finesse to your doorstep.
              </h2>
              <div className="space-y-4 text-base text-[var(--color-text-medium)] font-light leading-relaxed mb-8">
                <p>
                  While metropolitan centers have always enjoyed access to bespoke architects, growing tier-3 and tier-4 regions were frequently left with unreliable contractors, ambiguous pricing, and compromised materials.
                </p>
                <p>
                  Dev Elite Interiors changed that paradigm. By bringing industrial woodworking machinery, certified European hardware partnerships, and dedicated 3D visualization teams under one roof, we provide clients with an effortless, transparent turnkey experience.
                </p>
                <p>
                  Today, with over 500 residences successfully delivered, we remain committed to creating spaces that feel calm, sophisticated, and deeply personal.
                </p>
              </div>

              <div>
                <CTAButton size="md" variant="primary">
                  Speak With Principal Designers ↗
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Commitments */}
      <section className="py-20 md:py-28 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-gold mb-3">Our Principles</span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[var(--color-primary-green)] mb-3">
              What Defines Our Standard
            </h2>
            <div className="brand-divider" />
            <p className="text-sm sm:text-base text-[var(--color-text-medium)] font-light">
              Principles that guide every joint cut, finish applied, and handover signed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="card-clean bg-white p-8">
                <div
                  className="text-2xl font-normal text-[var(--color-gold)] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-normal text-[var(--color-primary-green)] mb-1">
                  {val.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--color-gold-dark)] font-semibold mb-3 block">
                  {val.subtitle}
                </span>
                <p className="text-xs sm:text-sm text-[var(--color-text-medium)] font-light leading-relaxed">
                  {val.desc}
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
            Experience the Dev Elite standard.
          </h2>
          <p className="text-white/80 text-sm sm:text-base font-light mb-8 max-w-xl mx-auto">
            Book an introductory consultation with our studio team to review your site, discuss floor plans, and receive design guidance.
          </p>
          <CTAButton size="lg" variant="gold-outline" className="bg-white/10 text-white border-white/40">
            Chat on WhatsApp ↗
          </CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
