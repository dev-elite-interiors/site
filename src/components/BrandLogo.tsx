"use client";

import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  layout?: "horizontal" | "stacked";
  className?: string;
}

export default function BrandLogo({
  variant = "light",
  size = "md",
  layout = "horizontal",
  className = "",
}: BrandLogoProps) {
  // Dimensions for Horizontal Layout (Aspect ratio 3.25)
  const horizontalSizes = {
    sm: { width: 140, height: 43 },
    md: { width: 180, height: 55 },
    lg: { width: 220, height: 68 },
    xl: { width: 280, height: 86 },
  };

  // Dimensions for Stacked Layout (Aspect ratio 1.45)
  const stackedSizes = {
    sm: { width: 70, height: 48 },
    md: { width: 95, height: 65 },
    lg: { width: 130, height: 90 },
    xl: { width: 180, height: 124 },
  };

  const isDark = variant === "dark";

  // Select the graphic based on layout and background variant
  let logoSrc = "/logo.png";
  let curDim = stackedSizes[size];

  if (layout === "horizontal") {
    logoSrc = isDark ? "/logo-horizontal-dark.png?v=2" : "/logo-horizontal.png?v=2";
    curDim = horizontalSizes[size];
  } else {
    logoSrc = isDark ? "/logo-dark.png?v=2" : "/logo.png?v=2";
    curDim = stackedSizes[size];
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center group transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      <div
        className="relative flex-shrink-0"
        style={{ width: curDim.width, height: curDim.height }}
      >
        <Image
          src={logoSrc}
          alt="Dev Elite Interiors Logo"
          width={curDim.width * 2}
          height={curDim.height * 2}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </Link>
  );
}
