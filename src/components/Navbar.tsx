"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import CTAButton from "./CTAButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-frosted transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Emblem + Wordmark */}
          <BrandLogo variant="light" size="md" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-item"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA — Deep Emerald Primary Button */}
          <div className="hidden md:flex items-center gap-3">
            <CTAButton size="sm" variant="primary">
              Start a Project ↗
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-md text-[var(--color-primary-green)] hover:bg-[var(--color-off-white)] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden py-5 border-t border-[var(--color-border)] bg-white/98">
            <div className="flex flex-col gap-3 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary-green)] rounded-md hover:bg-[var(--color-off-white)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-[var(--color-border-subtle)]">
                <CTAButton size="md" variant="primary" className="w-full justify-center">
                  Start a Project ↗
                </CTAButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
