"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "Full Residence",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = `Namaste Dev Elite Interiors,\n\nI would like to schedule a private consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nProperty / Service: ${formData.propertyType}\nProject Notes: ${formData.message || "Please contact me for initial floor plan review."}`;

    window.open(
      `https://wa.me/917368032697?text=${encodeURIComponent(whatsappText)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white text-[var(--color-text-dark)]">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-14 md:pt-44 md:pb-16 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="badge-gold mb-4">Studio Inquiries</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[var(--color-primary-green)] mb-6">
            Begin Your{" "}
            <span className="italic text-[var(--color-gold-dark)]">
              Consultation.
            </span>
          </h1>
          <p className="prose-editorial mx-auto text-base sm:text-lg text-[var(--color-text-medium)] font-light leading-relaxed mb-4">
            Connect directly with our principal designers to discuss your floor plan, woodwork requirements, or complete turnkey architectural execution.
          </p>
        </div>
      </section>

      {/* Main Content (Form + Details) */}
      <section className="py-20 md:py-28 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Consultation Form (7 cols) */}
            <div className="lg:col-span-7 card-clean p-8 sm:p-10">
              <span className="badge-green mb-3">Direct Studio Booking</span>
              <h2 className="text-3xl font-normal text-[var(--color-primary-green)] mb-2">
                Share Project Details
              </h2>
              <p className="text-sm text-[var(--color-text-medium)] font-light mb-8">
                Fill in the details below and we will prepare a preliminary consultation outline for you on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-medium)] mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikramaditya Sharma"
                    className="w-full px-4 py-3.5 rounded-[8px] bg-white border border-[var(--color-border)] text-[var(--color-text-dark)] text-sm focus:outline-none focus:border-[var(--color-primary-green)] focus:ring-1 focus:ring-[var(--color-primary-green)] transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-medium)] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-[8px] bg-white border border-[var(--color-border)] text-[var(--color-text-dark)] text-sm focus:outline-none focus:border-[var(--color-primary-green)] focus:ring-1 focus:ring-[var(--color-primary-green)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-medium)] mb-2">
                      Project Category
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-[8px] bg-white border border-[var(--color-border)] text-[var(--color-text-dark)] text-sm focus:outline-none focus:border-[var(--color-primary-green)] focus:ring-1 focus:ring-[var(--color-primary-green)] transition-all"
                    >
                      <option value="Full Residence">Full Residence (Turnkey)</option>
                      <option value="Modular Kitchen & Wardrobes">Modular Kitchen & Wardrobes</option>
                      <option value="Living Room & False Ceiling">Living Room & False Ceiling</option>
                      <option value="Artisan Painting & Wallpaper">Artisan Painting & Wallpaper</option>
                      <option value="Commercial / Office Interior">Commercial / Office Interior</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-medium)] mb-2">
                    Scope or Floor Plan Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the property dimensions, city location, and key requirements..."
                    className="w-full px-4 py-3.5 rounded-[8px] bg-white border border-[var(--color-border)] text-[var(--color-text-dark)] text-sm focus:outline-none focus:border-[var(--color-primary-green)] focus:ring-1 focus:ring-[var(--color-primary-green)] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-base font-semibold"
                >
                  Send Consultation Request via WhatsApp ↗
                </button>
              </form>
            </div>

            {/* Direct Studio Contact Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Card */}
              <div className="card-offwhite p-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold-dark)] font-semibold">
                    Instant Studio Response
                  </span>
                </div>
                <h3 className="text-2xl font-normal text-[var(--color-primary-green)] mb-2">
                  Direct WhatsApp Liaison
                </h3>
                <p className="text-sm text-[var(--color-text-medium)] font-light leading-relaxed mb-6">
                  Share floor plan PDFs, photos of your site, or reference images directly with our principal designers.
                </p>
                <CTAButton size="md" variant="primary" className="w-full justify-center">
                  Open WhatsApp Chat ↗
                </CTAButton>
              </div>

              {/* Studio Concierge & Phone */}
              <div className="card-clean p-7">
                <h3 className="text-xl font-normal text-[var(--color-primary-green)] mb-4">
                  Studio Concierge & Inquiries
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-[var(--color-border-subtle)] pb-2">
                    <span className="text-[var(--color-text-medium)] font-light">Official Line</span>
                    <a href="tel:+917368032697" className="font-semibold text-[var(--color-primary-green)] hover:text-[var(--color-gold-dark)]">
                      +91 73680 32697
                    </a>
                  </div>
                  <div className="flex justify-between border-b border-[var(--color-border-subtle)] pb-2">
                    <span className="text-[var(--color-text-medium)] font-light">Direct Email</span>
                    <a href="mailto:info.develiteinteriors@gmail.com" className="font-semibold text-[var(--color-primary-green)] hover:text-[var(--color-gold-dark)]">
                      info.develiteinteriors@gmail.com
                    </a>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[var(--color-text-medium)] font-light">Atelier Hubs</span>
                    <span className="font-semibold text-[var(--color-gold-dark)]">Kolkata & New Delhi</span>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="card-clean p-7">
                <h3 className="text-xl font-normal text-[var(--color-primary-green)] mb-4">
                  Studio Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-[var(--color-border-subtle)] pb-2">
                    <span className="text-[var(--color-text-medium)] font-light">Monday – Saturday</span>
                    <span className="font-semibold text-[var(--color-primary-green)]">09:30 AM – 07:30 PM</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[var(--color-text-medium)] font-light">Sunday</span>
                    <span className="font-semibold text-[var(--color-gold-dark)]">By Private Appointment</span>
                  </div>
                </div>
              </div>

              {/* Service Regions */}
              <div className="card-clean p-7">
                <h3 className="text-xl font-normal text-[var(--color-primary-green)] mb-2">
                  Service Coverage
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-medium)] font-light leading-relaxed">
                  Dedicated in-house execution teams servicing Tier-3 & Tier-4 residential developments, independent bungalows, and luxury apartment complexes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
