"use client";

import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  layout?: "horizontal" | "full";
  className?: string;
}

export default function BrandLogo({
  variant = "light",
  size = "md",
  layout = "horizontal",
  className = "",
}: BrandLogoProps) {
  // Full stacked graphic dimensions
  const fullSizes = {
    sm: { width: 68, height: 47 },
    md: { width: 88, height: 61 },
    lg: { width: 130, height: 90 },
    xl: { width: 180, height: 124 },
  };

  // Horizontal emblem dimensions
  const emblemSizes = {
    sm: { width: 32, height: 44 },
    md: { width: 40, height: 55 },
    lg: { width: 52, height: 72 },
    xl: { width: 68, height: 94 },
  };

  const textColor =
    variant === "dark"
      ? "text-white"
      : "text-[var(--color-primary-green)]";

  const subtextColor =
    variant === "dark"
      ? "text-[var(--color-gold-light)]"
      : "text-[var(--color-gold)]";

  // If layout is "full", render the complete stacked graphic logo
  if (layout === "full") {
    const cur = fullSizes[size];
    const logoSrc = variant === "dark" ? "/logo-dark.png" : "/logo.png";

    return (
      <Link
        href="/"
        className={`inline-flex flex-col items-center group transition-transform duration-300 hover:scale-[1.02] ${className}`}
      >
        <div
          className="relative flex-shrink-0"
          style={{ width: cur.width, height: cur.height }}
        >
          <Image
            src={logoSrc}
            alt="Dev Elite Interiors Logo"
            width={cur.width * 2}
            height={cur.height * 2}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </Link>
    );
  }

  // Default "horizontal" layout (Emblem + Typographic Wordmark)
  const curEmb = emblemSizes[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 group ${className}`}
    >
      {/* Crown + Shield Emblem */}
      <div
        className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: curEmb.width, height: curEmb.height }}
      >
        <Image
          src="/logo-emblem.png"
          alt="Dev Elite Interiors Emblem"
          width={curEmb.width * 2}
          height={curEmb.height * 2}
          className="w-full h-full object-contain drop-shadow-xs"
          priority
        />
      </div>

      {/* Typographic Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-display text-lg sm:text-xl font-bold tracking-[0.06em] ${textColor} transition-colors`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          DEV ELITE
        </span>
        <span
          className={`font-ui text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase mt-1 ${subtextColor}`}
          style={{ fontFamily: "var(--font-ui)" }}
        >
          INTERIORS
        </span>
      </div>
    </Link>
  );
}
