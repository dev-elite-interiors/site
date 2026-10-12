export default function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://develiteinteriors.com/#organization",
        "name": "Dev Elite Interiors",
        "url": "https://develiteinteriors.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://develiteinteriors.com/logo.png",
          "caption": "Dev Elite Interiors Logo"
        },
        "description": "Luxury bespoke interior architecture, turnkey residential execution, and custom timber furniture ateliers.",
        "telephone": "+91 73680 32697",
        "email": "info.develiteinteriors@gmail.com",
        "sameAs": [
          "https://www.instagram.com/develiteinteriors",
          "https://www.facebook.com/develiteinteriors"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91 73680 32697",
            "contactType": "Customer Concierge & Studio Consultation",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          }
        ]
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://develiteinteriors.com/#localbusiness",
        "name": "Dev Elite Interiors",
        "url": "https://develiteinteriors.com",
        "logo": "https://develiteinteriors.com/logo.png",
        "image": "https://develiteinteriors.com/logo.png",
        "telephone": "+91 73680 32697",
        "email": "info.develiteinteriors@gmail.com",
        "priceRange": "$$$$",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Salt Lake Sector V",
            "addressLocality": "Kolkata",
            "addressRegion": "West Bengal",
            "postalCode": "700091",
            "addressCountry": "IN"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "South Extension / Connaught Place Liaison",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110001",
            "addressCountry": "IN"
          }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:30",
            "closes": "19:30"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://develiteinteriors.com/#website",
        "name": "Dev Elite Interiors",
        "url": "https://develiteinteriors.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://develiteinteriors.com/products?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://develiteinteriors.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does Dev Elite Interiors manufacture furniture in-house or outsource it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All furniture, modular cabinetry, and architectural woodwork are crafted in Dev Elite Interiors' dedicated manufacturing workshops by master artisans, ensuring strict quality control and direct factory pricing."
            }
          },
          {
            "@type": "Question",
            "name": "What materials and timber are used in custom joinery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use 100% seasoned CP teakwood, European white oak, IS:710 Marine Grade BWP/BWR plywood, and certified hardware from Blum (Austria) and Häfele (Germany)."
            }
          },
          {
            "@type": "Question",
            "name": "What warranty is provided on interior execution and modular furniture?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide a 5-year structural warranty on all handcrafted timber furniture and a 10-year warranty on modular kitchen and wardrobe core carcasses."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical completion timeline for turnkey projects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A complete turnkey residential project typically completes within 45 to 75 working days from finalized design approval, tracked with milestone-based delivery."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
