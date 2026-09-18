import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  ],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-white text-[var(--color-text-dark)]">
        {children}
      </body>
    </html>
  );
}
