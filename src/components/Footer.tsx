import Link from "next/link";
import BrandLogo from "./BrandLogo";
import CTAButton from "./CTAButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary-green-dark)] text-white pt-20 pb-10 border-t border-[var(--color-gold)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Studio Brand Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col">
            <BrandLogo variant="dark" size="lg" layout="stacked" className="mb-6" />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm font-normal mb-8">
              Dev Elite Interiors is a premier interior architecture and bespoke furnishings studio. We craft considered, timeless spaces designed around the way you live.
            </p>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold-light)] font-semibold">
                Available for New Consultations
              </span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] mb-6"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Studio Directory
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-[var(--color-gold-light)] text-sm transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-white/70 hover:text-[var(--color-gold-light)] text-sm transition-colors"
                >
                  Selected Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-[var(--color-gold-light)] text-sm transition-colors"
                >
                  About the Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-[var(--color-gold-light)] text-sm transition-colors"
                >
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge & Contact (4 cols) */}
          <div className="md:col-span-4 flex flex-col">
            <h4
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] mb-6"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Private Consultation
            </h4>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Connect directly with our principal designers to discuss your floor plan and finish requirements.
            </p>
            <div className="text-xs text-white/60 space-y-1.5 mb-6">
              <p>Direct Line: <a href="tel:+917368032697" className="text-[var(--color-gold-light)] hover:underline">+91 73680 32697</a></p>
              <p>Email: <a href="mailto:info.develiteinteriors@gmail.com" className="text-[var(--color-gold-light)] hover:underline">info.develiteinteriors@gmail.com</a></p>
            </div>
            <div>
              <CTAButton variant="ghost-dark" size="sm">
                Chat with Designer ↗
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} Dev Elite Interiors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Elegance. Crafted with Intention.</span>
            <span className="text-[var(--color-gold)]">Luxury · Crafted · Yours</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
