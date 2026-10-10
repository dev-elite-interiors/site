"use client";

import Link from "next/link";
import {
  Armchair,
  Bed,
  DoorClosed,
  ChefHat,
  Tv,
  UtensilsCrossed,
  Briefcase,
  Trees,
  Hammer,
} from "lucide-react";

export const CATEGORIES_LIST = [
  {
    id: "sofa",
    label: "Sofas & Loungers",
    icon: Armchair,
    badge: "50+ Designs",
  },
  {
    id: "bed",
    label: "Luxury Beds",
    icon: Bed,
    badge: "Hydraulic",
  },
  {
    id: "wardrobe",
    label: "Modular Wardrobes",
    icon: DoorClosed,
    badge: "Floor to Ceiling",
  },
  {
    id: "kitchen",
    label: "Modular Kitchens",
    icon: ChefHat,
    badge: "German Hafele",
  },
  {
    id: "tv-unit",
    label: "TV Consoles",
    icon: Tv,
    badge: "Fluted Marble",
  },
  {
    id: "dining",
    label: "Dining Tables",
    icon: UtensilsCrossed,
    badge: "Solid Teak",
  },
  {
    id: "office",
    label: "Executive Desks",
    icon: Briefcase,
    badge: "Ergonomic",
  },
  {
    id: "outdoor",
    label: "Balcony & Patio",
    icon: Trees,
    badge: "All-Weather",
  },
  {
    id: "custom",
    label: "Bespoke Woodwork",
    icon: Hammer,
    badge: "Made to Measure",
  },
];

interface CategoryBarProps {
  activeCategory?: string;
  onSelectCategory?: (id: string) => void;
  className?: string;
}

export default function CategoryBar({
  activeCategory,
  onSelectCategory,
  className = "",
}: CategoryBarProps) {
  return (
    <section className={`py-6 bg-white border-y border-[var(--color-border-subtle)] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar scroll-smooth py-2">
          {CATEGORIES_LIST.map((item) => {
            const Icon = item.icon;
            const isSelected = activeCategory === item.id;

            const content = (
              <div
                className={`flex flex-col items-center flex-shrink-0 group cursor-pointer transition-all duration-200 ${
                  isSelected ? "scale-105" : "hover:-translate-y-0.5"
                }`}
              >
                {/* Circle Icon Container */}
                <div
                  className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
                    isSelected
                      ? "bg-[var(--color-primary-green)] text-white shadow-md border-2 border-[var(--color-gold)]"
                      : "bg-[var(--color-off-white)] border border-[var(--color-border)] text-[var(--color-primary-green)] group-hover:border-[var(--color-gold)] group-hover:bg-white group-hover:shadow-xs"
                  }`}
                >
                  <Icon className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110 ${isSelected ? "text-[var(--color-gold-light)]" : "text-[var(--color-primary-green)]"}`} />
                  
                  {item.badge && (
                    <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-[var(--color-gold)] text-white shadow-2xs">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Label */}
                <span
                  className={`text-xs sm:text-[13px] font-semibold tracking-tight mt-2.5 text-center transition-colors whitespace-nowrap ${
                    isSelected
                      ? "text-[var(--color-primary-green)] font-bold"
                      : "text-[var(--color-text-medium)] group-hover:text-[var(--color-primary-green)]"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            );

            if (onSelectCategory) {
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectCategory(item.id)}
                  className="focus:outline-none"
                >
                  {content}
                </button>
              );
            }

            return (
              <Link
                key={item.id}
                href={`/products?category=${item.id}`}
                className="focus:outline-none"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
