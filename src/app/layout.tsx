import type { Metadata } from "next";
import Script from "next/script";
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KGVFQWWX');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1507510584732428');
fbq('track', 'PageView');`,
          }}
        />
        {/* End Meta Pixel Code */}

        {/* Schema.org application/ld+json Structured Data */}
        <StructuredData />
      </head>
      <body className="antialiased min-h-screen bg-white text-[var(--color-text-dark)]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGVFQWWX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Meta Pixel (noscript) */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1507510584732428&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel (noscript) */}

        {children}

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SCRG1VN15V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SCRG1VN15V');
          `}
        </Script>
      </body>
    </html>
  );
}
