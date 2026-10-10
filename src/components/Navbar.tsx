"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import CTAButton from "./CTAButton";
import {
  Phone,
  MessageSquare,
  Search,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Selected Works" },
  { href: "/products", label: "Furniture Catalog" },
  { href: "/services", label: "Disciplines" },
  { href: "/about", label: "About Studio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all">
      {/* Top Subtle Luxury Bar */}
      <div className="bg-[var(--color-primary-green-dark)] text-white text-[11px] sm:text-xs py-2 px-4 border-b border-[var(--color-gold)]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Studio Phone & Pan-India Quality */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+917368032697"
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-[var(--color-gold-light)] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--color-gold)]" />
              <span className="font-mono font-medium">+91 73680 32697</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-1.5 text-white/80">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>10-Yr Structural Warranty · 35+ Quality Checks</span>
            </span>
          </div>

          {/* Right: Direct Concierge WhatsApp */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/917368032697?text=Namaste%20Dev%20Elite%20Interiors%2C%20I%20would%20like%20to%20request%20a%20Free%203D%20Design%20Consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-[var(--color-gold-light)] transition-colors font-medium text-[11px] sm:text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[var(--color-gold)]" />
              <span>Free 3D Design Preview on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Nav */}
      <nav className="navbar-frosted border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <BrandLogo variant="light" size="md" />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link-item !text-sm font-medium tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center gap-4">
              <Link
                href="/products"
                className="p-2.5 rounded-full text-[var(--color-text-dark)] hover:text-[var(--color-primary-green)] hover:bg-[var(--color-off-white)] border border-[var(--color-border-subtle)] transition-colors"
                title="Search furniture catalog"
              >
                <Search className="w-4 h-4" />
              </Link>
              <CTAButton size="sm" variant="primary">
                Start a Project ↗
              </CTAButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-[var(--color-primary-green)] hover:bg-[var(--color-off-white)] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-[var(--color-border)] bg-white/98 shadow-xl">
              <div className="flex flex-col gap-1 px-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-3.5 py-2.5 text-sm font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary-green)] rounded-lg hover:bg-[var(--color-off-white)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 mt-2 border-t border-[var(--color-border-subtle)] flex flex-col gap-2">
                  <CTAButton size="md" variant="primary" className="w-full justify-center">
                    Start a Project ↗
                  </CTAButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
