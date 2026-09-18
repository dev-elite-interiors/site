# DEV ELITE INTERIORS
## Premium Website Brand Guide v1

> **Core Direction:**
> White canvas. Deep emerald green for premium trust. Gold for ultra-premium luxury. Clean, calm, editorial layouts with a smooth product-like experience.
>
> **Apple-Inspired Product Design Principles:** Simplicity, whitespace, typography hierarchy, smooth interactions, and intentional layouts — without copying Apple's visual identity.

---

## 1. Brand Foundation

- **Brand Name:** Dev Elite Interiors
- **Category:** Luxury Interior Design & Home Architecture
- **Tagline:** Elegance. Crafted with Intention. *(Luxury · Crafted · Yours)*
- **Positioning:** Dev Elite Interiors should feel like a premium interior design studio, not a generic construction website or a template-based SaaS brand.
- **Audience:** Upper-middle to luxury segment homeowners, real estate developers, and corporate clients seeking refined taste and turnkey execution.

### Brand Personality Attributes
| Attribute | Direction |
|---|---|
| **Premium** | Refined, spacious, high quality, calm |
| **Luxury** | Champagne gold accents, elegant typography, curated visuals |
| **Trustworthy** | Clear information, transparent 4-step process, warranty |
| **Modern** | Minimal layouts, clean interactions, responsive performance |
| **Human** | Warm, thoughtful, personalized concierge design service |
| **Exclusive** | Selective emphasis, restraint over excessive decoration |

---

## 2. Color System

The primary website canvas is **Pure White**. Deep Emerald creates brand authority, and Champagne Gold is reserved for ultra-premium highlights.

### Color Hierarchy
- **White (70–80%):** Canvas & breathing room
- **Deep Emerald (15–25%):** Brand identity, headers, primary buttons, key CTA blocks
- **Champagne Gold (2–5%):** Selective luxury accents (crown, fine borders, star details)

### Color Tokens
```css
:root {
  /* CANVAS & NEUTRALS */
  --color-white:        #FFFFFF;   /* Primary website background */
  --color-off-white:    #FAF7F2;   /* Soft warm canvas for cards & alternate strips */
  --color-cream:        #F5EFE6;   /* Subtle divider backgrounds */
  --color-border:       #E8E4DD;   /* Refined minimal borders */
  --color-border-subtle:#F0ECE6;

  /* BRAND GREEN */
  --color-primary-green:      #063F2B;  /* Deep Emerald — Main brand color, buttons, hero accents */
  --color-primary-green-dark: #042A1D;  /* Ultra dark green — footer, contrast sections */
  --color-luxury-green:       #0D6045;  /* Secondary brand green — hover states, badges */
  --color-green-light:        #1A7A5A;  /* Accent green */

  /* LUXURY GOLD ACCENTS (Strictly 2–5% usage) */
  --color-gold:         #B69A54;   /* Champagne Gold — ultra-premium highlight */
  --color-gold-dark:    #987E3E;   /* Deep gold */
  --color-soft-gold:    #D6C18A;   /* Soft gold — fine borders, subtle badges */
  --color-gold-light:   #EBDCBA;   /* Pale gold highlight */

  /* TEXT COLORS */
  --color-text-dark:    #1F2924;   /* Charcoal — Main readable text */
  --color-text-medium:  #4D5953;   /* Secondary body text & descriptions */
  --color-text-light:   #7D8A83;   /* Captions & metadata */
  --color-text-on-dark: #FAF7F2;   /* Text on dark green surfaces */
}
```

*Rule:* Gold must NEVER be used on every button or background. It stays selective — logo crown, delicate 1px borders, key highlights, and fine icons.

---

## 3. Typography System

The logo's classic serif elegance pairs with a modern, ultra-legible geometric sans-serif.

### Type Hierarchy
- **Display & Headings:** `DM Serif Display` (Google Fonts)
  - Luxury headlines, brand statements, editorial moments.
  - *Example:* "Transforming spaces into timeless experiences."
- **Body, UI & Navigation:** `Manrope` (Google Fonts)
  - Navigation, body copy, buttons, forms, service details.
  - *Example:* "We design interiors that feel personal, refined, and made to last."
- **Badges & Monospace Details:** `JetBrains Mono` or `Manrope` with uppercase tracking.

### Typography Scale
| Style | Desktop | Mobile | Weight |
|---|---|---|---|
| **Display** | 64–80px | 40–52px | 400 |
| **H1** | 52–64px | 36–44px | 400 |
| **H2** | 40–48px | 30–36px | 400 |
| **H3** | 24–32px | 22–26px | 400 / 500 |
| **Body Large** | 20px | 18px | 300 / 400 |
| **Body** | 16–18px | 15–16px | 400 |
| **Caption / Label** | 12–14px | 12–13px | 500 / 600 (uppercase) |

*Rules:*
- Paragraph max width: 600–680px for optimal readability.
- Display serif reserved for meaningful headlines.
- Uppercase text restricted to labels, navigation links, and small captions.

---

## 4. Logo Usage

- **Primary Logo:** Gold Crown + DE Shield (Deep Emerald + Gold outline) + "DEV ELITE INTERIORS" wordmark.
- **Clear Space:** Minimum clear space = 25% of crown height.
- **Backgrounds:**
  - White / light background: Full-color emblem (green + gold) + charcoal/green wordmark.
  - Dark green background: White + Gold emblem variant.
- **Prohibitions:** Never stretch, never use neon yellow, never apply heavy drop-shadows or glow effects.

---

## 5. Website Visual Direction & Apple-Inspired UX

- **White Space First:** Generous breathing room between sections (80–128px).
- **Editorial Luxury:** High-contrast editorial photography, calm rhythm.
- **Restraint Over Excess:** No unnecessary floating shapes, no heavy neon gradients, no clutter.
- **Button Radii:** 6–10px (Apple-inspired subtle curvature; not 0px brutalist, not 50px pill).
- **Cards & Media Radii:** 12–16px soft radius with delicate 1px borders (`#E8E4DD` or subtle gold).
- **Animation Timing:**
  - Micro-interactions: 150–200ms
  - Hover & Button: 200–300ms
  - Section transitions: 400–600ms calm ease

---

## 6. Website Structure (Homepage)

1. **Header / Navigation:** Logo emblem + wordmark, Services, Projects, About, Contact + Deep Emerald CTA.
2. **Hero Section:** Clean editorial headline, cinematic interior photography, single primary CTA.
3. **Brand Introduction:** Design philosophy & statement on bespoke living.
4. **Selected Projects:** Editorial photography gallery with category filters and hover reveals.
5. **Core Services:** Custom Furniture, Interior Design & Architecture, Professional Painting, Electrical & Smart Home.
6. **4-Step Process:** Discover → Design → Refine → Deliver.
7. **Trust & Proof:** 500+ homes transformed, 10+ years experience, 5-year warranty, client testimonials.
8. **Final CTA:** Deep Emerald block with subtle gold detail & direct WhatsApp consultation.
9. **Footer:** Comprehensive sitemap, contact info, social channels, and copyright.

---

*Dev Elite Interiors | Brand Guide v1*
