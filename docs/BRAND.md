# INOVATE LTD — Brand Guidelines

## Brand direction

**Positioning:** Software, Web & Digital Solutions Built for Growing Businesses.

INOVATE is a newly incorporated Scottish technology company (Companies House SC905479, Kirkcaldy, Fife). The brand earns trust through precision, clarity and craft, not through claims. The look is premium, minimal and technical: deep navy, an electric-blue to cyan accent, generous whitespace, strong geometric typography and restrained motion.

**Personality:** precise · forward-moving · honest · modern · approachable.

**Voice:** plain English, confident but never exaggerated. Say what we do and what it costs. Never invent statistics, clients, awards or results. Label all examples "Concept Project".

## Tagline

Shortlist:

1. **Digital Solutions. Built to Grow.** ← selected
2. Software & Web, Built for What's Next.
3. Build Better. Grow Further.
4. Smart Technology for Growing Businesses.
5. Precision Digital, Built Around You.

**Why it was selected:** "Digital Solutions. Built to Grow." names the whole offer (software, web, marketing) in two words, ties directly to the positioning line, and its two-beat rhythm reads well in the footer, on social media and in the Open Graph image. "Built" fits a build-led company, and "to Grow" speaks to the client's outcome rather than to us.

## Logo

### Concept: the forward "i"

The mark is a lowercase **i** made of two parallelograms that share a 23° forward lean:

- **The stem** has a blue→cyan gradient and stands for foundation and engineering.
- **The spark** is a detached cyan square-dot that stands for the idea and innovation.

Leaning forward suggests momentum and growth. The hard geometric edges suggest precision. The gap between the stem and the spark is the moment when an idea becomes a build. The mark is two flat shapes, so it reproduces cleanly at 16 px and in one colour.

**The wordmark** is INOVATE in custom geometric capitals drawn as SVG strokes, so it does not depend on any installed font. It has wide tracking and a perfect-circle O. On the website it is rendered inline from the same geometry (`src/components/Logo.tsx`).

### Asset files (`/public`)

| File | Use |
| --- | --- |
| `logo.svg` | Primary horizontal logo (default, for light backgrounds) |
| `logo-light.svg` | Light-background version (navy wordmark) |
| `logo-dark.svg` | Dark-background version (white wordmark) |
| `logo-mono.svg` | Monochrome navy, for single-colour print and stamps |
| `logo-mono-white.svg` | Monochrome white, for single-colour use on dark/photo backgrounds |
| `logo-stacked.svg` / `logo-stacked-dark.svg` | Primary stacked lockup (mark above wordmark), for square or centred layouts |
| `mark.svg` | Icon / mark on its own, transparent background |
| `icon.svg` | Mark on a navy rounded tile (64 px) |
| `favicon.svg`, `favicon.ico` | Browser favicon |
| `social-icon.svg` / `.png` | Social profile picture (400×400, square; platforms crop to a circle) |
| `app-icon.svg` / `.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` | App, PWA and home-screen icons |
| `og-image.png` | Open Graph / social share image (1200×630) |

All SVGs are generated from one source file, `scripts/brand.mjs`. To change the geometry, edit that file and run `npm run brand:png`. This regenerates the SVGs, then the PNG and ICO files (Playwright is required).

### Usage rules

- Clear space: keep at least the height of the spark on every side.
- Minimum size: horizontal logo at 96 px wide on screen, mark at 16 px.
- Do not recolour the gradient, rotate, outline, add shadows or stretch the mark.
- On photography, use `logo-mono-white.svg` over a dark overlay.

## Colour

Tokens are defined once as CSS variables in `src/app/globals.css` and mapped into Tailwind (`tailwind.config.ts`).

| Token | Hex | Role |
| --- | --- | --- |
| `--c-navy` | `#0B1530` | Primary: Deep Navy. Headings, dark UI, logo wordmark |
| `--c-navy-950` | `#070D1F` | Dark sections: near-black navy (footer, process) |
| `--c-blue` | `#1F5BFF` | Secondary: Electric Blue. Buttons, links, icons |
| `--c-blue-600` | `#1246E0` | Hover state for blue |
| `--c-cyan` | `#12C2E9` | Accent: gradient end, highlights on dark (not for text on white) |
| `--c-ink` | `#1A2233` | Body text: Charcoal |
| `--c-muted` | `#566175` | Secondary text: Slate grey |
| `--c-line` | `#E3E8F0` | Borders and dividers |
| `--c-surface` | `#F6F8FB` | Light grey section background |
| white | `#FFFFFF` | Main background |

**Brand gradient:** `linear-gradient(135deg, #1F5BFF 0%, #12C2E9 100%)`. Use it sparingly: the mark, key highlights and step numbers.

**Contrast (WCAG 2.1):** ink on white 15.9:1, muted on white 6.3:1 (5.9:1 on surface grey), blue on white 5.3:1, white on blue 5.3:1, white on navy 18:1, cyan on near-black 9.1:1. All meet AA for body text.

## Typography

- **Display / headings: Sora** (600, 700). Geometric, technical and premium.
- **Body / UI: Inter** (400–600). Highly legible at small sizes.

Both are self-hosted at build time with `next/font` (no runtime request to Google, no layout shift).

## Imagery

No stock photography. Use original abstract UI compositions, grids, soft gradients and the mark. Portfolio visuals are illustrative concept mockups built in code.
