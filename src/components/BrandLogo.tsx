"use client";

import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function BrandLogo({
  variant = "light",
  size = "md",
  className = "",
}: BrandLogoProps) {
  const emblemSizes = {
    sm: { width: 34, height: 48 },
    md: { width: 42, height: 58 },
    lg: { width: 54, height: 74 },
  };

  const currentSize = emblemSizes[size];

  const textColor =
    variant === "dark"
      ? "text-white"
      : "text-[var(--color-primary-green)]";

  const subtextColor =
    variant === "dark"
      ? "text-[var(--color-gold-light)]"
      : "text-[var(--color-gold)]";

  return (
    <Link href="/" className={`inline-flex items-center gap-3.5 group ${className}`}>
      {/* Crown + Shield Emblem */}
      <div
        className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: currentSize.width, height: currentSize.height }}
      >
        <Image
          src="/logo.png"
          alt="Dev Elite Interiors Emblem"
          width={currentSize.width * 2}
          height={currentSize.height * 2}
          className="w-full h-full object-contain"
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
