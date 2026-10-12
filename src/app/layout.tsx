import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://develiteinteriors.com"),
  title: "Dev Elite Interiors | Elegance. Crafted with Intention.",
  description:
    "Luxury interior design, bespoke modular furniture, and turnkey residential architecture. A sophisticated interior experience, designed around your lifestyle.",
  keywords: [
    "luxury interior design",
    "bespoke furniture",
    "turnkey interior architecture",
    "Dev Elite Interiors",
    "modular kitchen",
    "designer residences",
    "Kolkata interior design",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/logo-emblem.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Dev Elite Interiors | Elegance. Crafted with Intention.",
    description:
      "A sophisticated interior experience, designed around your lifestyle. Bespoke timber joinery & turnkey spatial architecture.",
    siteName: "Dev Elite Interiors",
    images: [
      {
        url: "/logo.png",
        width: 970,
        height: 670,
        alt: "Dev Elite Interiors Luxury Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Elite Interiors | Elegance. Crafted with Intention.",
    description:
      "Luxury interior design, bespoke modular furniture, and turnkey residential architecture.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org application/ld+json Structured Data */}
        <StructuredData />
      </head>
      <body className="antialiased min-h-screen bg-white text-[var(--color-text-dark)]">
        {children}
      </body>
    </html>
  );
}
