# INOVATE LTD — Website

This is the production website for **INOVATE LTD**, a software, web and digital solutions company in Kirkcaldy, Scotland (Companies House SC905479).

It is built with **Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS**. Almost every page is pre-rendered as static HTML. The only server code is the contact-form API route.

The brand guidelines are in [`docs/BRAND.md`](docs/BRAND.md).

---

## Quick start

```bash
npm install
cp .env.example .env.local     # then edit values
npm run dev                    # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (type-checks and pre-renders every page) |
| `npm start` | Serve the production build |
| `npm run typecheck` | TypeScript check only |
| `npm run brand:png` | Regenerate logo SVGs, then PNG/ICO icons and the OG image (needs Playwright + Chromium) |

Node.js 18.18 or newer is required. Node 20 or 22 is recommended.

## Project structure

```
public/                 Logos, icons, favicon, OG image, web manifest
scripts/                Brand asset generators (SVG → PNG/ICO)
docs/BRAND.md           Brand guidelines
src/app/                Routes (App Router)
  page.tsx              Home
  about/ services/ services/[slug]/ pricing/ portfolio/ case-studies/
  faq/ contact/ privacy-policy/ terms-and-conditions/ cookie-policy/
  api/contact/route.ts  Contact form endpoint (server only)
  sitemap.ts robots.ts not-found.tsx layout.tsx globals.css
src/components/         Header, Navbar, MobileMenu, Footer, Hero, Button, Logo,
                        ServiceCard, PricingCard, PortfolioCard, FAQ, ContactForm,
                        CTASection, …
src/content/            ALL site copy and data — edit these to change content
  site.ts               Company details, contact info, navigation
  services.ts           The 10 service pages
  pricing.ts            Packages and pricing disclaimer
  faqs.ts               FAQs
  portfolio.ts          Concept projects and case studies
src/lib/                Form validation, mailer, SEO helpers
```

### Editing content

Most changes happen in `src/content/*.ts`. The pages, sitemap, structured data and contact-form options all update automatically.

- **Add genuine portfolio work:** add an entry to `src/content/portfolio.ts`. Concept projects are labelled "Concept Project" everywhere. Remove or relabel them once real, client-approved work is available.
- **Change prices:** edit `src/content/pricing.ts`. Set `popular: true` on the one package you want marked "Most Popular".

---

## Deployment (Vercel — recommended)

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/new), click **Import** and select the repository. Vercel detects Next.js automatically: build command `next build`, output `.next`.
3. Under **Settings → Environment Variables**, add the variables listed in the table below.
4. Deploy. Every push to the main branch redeploys the site, and pull requests get preview URLs.

### Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | **Yes (production)** | Live URL, e.g. `https://www.your-domain.co.uk`. Used for canonical URLs, the sitemap, Open Graph tags and schema. If it is not set, Vercel's production URL is used. |
| `EMAIL_SERVICE` | Yes | `smtp` to send enquiries by email, `console` to log them (development). |
| `EMAIL_FROM` | Yes (smtp) | Sender, e.g. `INOVATE Website <no-reply@your-domain.co.uk>` |
| `EMAIL_TO` | Yes (smtp) | Inbox that receives enquiries, e.g. `0004manzar@gmail.com` |
| `SMTP_HOST` | Yes (smtp) | SMTP server hostname |
| `SMTP_PORT` | No | Defaults to `587` (STARTTLS). Use `465` for implicit TLS. |
| `SMTP_USER` | Yes (smtp) | SMTP username |
| `SMTP_PASSWORD` | Yes (smtp) | SMTP password or API key |
| `ANALYTICS_ID` | No | Google Analytics 4 measurement ID (`G-…`) |
| `META_PIXEL_ID` | No | Meta Pixel ID |
| `GOOGLE_SITE_VERIFICATION` | No | Google Search Console verification token |

Secrets are only read on the server (`src/lib/mailer.ts`, which imports `server-only`). They are never bundled into browser code. Never commit `.env.local`.

### Other hosts

The site is a standard Next.js app and runs anywhere that supports Node.js, such as Netlify, Render, Railway or a VPS:

```bash
npm ci
```

```bash
npm run build
```

```bash
PORT=3000 npm start
```

Set the same environment variables on the host. The contact form needs a Node.js runtime, so a purely static export is not supported.

---

## Domain setup

1. Buy a domain (for example a `.co.uk`) from any registrar.
2. In Vercel, go to **Project → Settings → Domains** and add both `your-domain.co.uk` and `www.your-domain.co.uk`. Choose `www` as the primary domain and redirect the apex to it.
3. At your registrar, create the DNS records that Vercel shows. These are typically:
   - `A` record for `@` → `76.76.21.21`
   - `CNAME` record for `www` → `cname.vercel-dns.com`

   (Always use the exact values Vercel displays.)
4. Wait for DNS to propagate. HTTPS certificates are issued automatically.
5. Set `NEXT_PUBLIC_SITE_URL=https://www.your-domain.co.uk` and redeploy.

## Contact form and email

The form (`src/components/ContactForm.tsx`) posts to `/api/contact`, which:

- validates every field on the server with the same rules as the browser (`src/lib/enquiry.ts`);
- blocks spam with a hidden honeypot field, a minimum time to fill in the form and a per-IP rate limit (5 submissions per 10 minutes per server instance);
- sends the enquiry with `Reply-To` set to the visitor, so you can reply directly from your inbox.

**Option A — Gmail (quickest).** Turn on 2-Step Verification for the Google account, then create an **App Password** (Google Account → Security → App passwords). Set:

```
EMAIL_SERVICE=smtp
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=0004manzar@gmail.com
SMTP_PASSWORD=<16-character app password>
EMAIL_FROM="INOVATE Website <0004manzar@gmail.com>"
EMAIL_TO=0004manzar@gmail.com
```

**Option B — Transactional email provider (recommended once you have a domain).** Providers such as Resend, Postmark, Brevo or Amazon SES give better deliverability. Verify your domain with the provider (add the SPF/DKIM DNS records it gives you), then use its SMTP credentials and an address on your domain for `EMAIL_FROM`.

If email is not configured in production, the form shows a friendly error with the email address so that enquiries are not lost silently. Test it after every deployment by sending a real enquiry.

**For heavier traffic,** replace the in-memory rate limiter in `src/app/api/contact/route.ts` with a shared store such as Upstash Redis.

## Analytics and Search Console

Analytics are **off until configured**, and they load **only after the visitor accepts analytics cookies**. This is required by UK GDPR/PECR. The cookie banner appears only when an analytics ID is set.

- **Google Analytics 4:** create a GA4 property and set `ANALYTICS_ID=G-XXXXXXXXXX`.
- **Meta Pixel:** set `META_PIXEL_ID` if you run Meta ads.
- **Google Search Console:** add a URL-prefix property, choose the *HTML tag* method, and copy the `content` value into `GOOGLE_SITE_VERIFICATION`. After verification, submit `https://www.your-domain.co.uk/sitemap.xml`.
- If you enable a tool, update the Cookie Policy and Privacy Policy pages to name it.

## Before going live — checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real domain.
- [ ] Configure SMTP and send a test enquiry.
- [ ] Have the **Privacy Policy, Terms & Conditions and Cookie Policy** reviewed by a legal adviser, and complete every item in `[square brackets]`. They are starter templates, not legal advice.
- [ ] Register with the ICO if required (most UK businesses that process personal data must pay the data protection fee) and add the registration number to the Privacy Policy.
- [ ] Confirm your VAT status and state it on the Terms page.
- [ ] Submit the sitemap in Google Search Console.
- [ ] Create a Google Business Profile using the registered office address, if appropriate.
- [ ] Replace concept projects with real, client-approved work as it becomes available.

## SEO, accessibility and performance

- **Metadata:** each page has a unique title, meta description, canonical URL, Open Graph and Twitter tags (`src/lib/seo.ts`).
- **Structured data (JSON-LD):** Organization, ProfessionalService (LocalBusiness), WebSite, Service and Offer (on service pages), OfferCatalog (on pricing), FAQPage (on FAQ) and BreadcrumbList (on every inner page). It uses only factual company data.
- **Crawling:** `sitemap.xml` and `robots.txt` are generated by `src/app/sitemap.ts` and `src/app/robots.ts`. There is a custom 404 page.
- **Accessibility:** semantic landmarks, a skip link, one `h1` per page, visible focus styles, a keyboard-operable mobile menu (focus cycling and Esc to close), native `<details>` FAQs, labelled form fields with linked error messages, and `prefers-reduced-motion` support. Colour contrast meets WCAG AA.
- **Performance:** static pre-rendering, self-hosted fonts via `next/font`, about 106 kB of first-load JavaScript, no stock images (the visuals are CSS/SVG), and long-lived caching for brand assets.

## QA performed

The production build was checked in Chromium at 360, 390, 430, 768, 1024, 1280, 1440 and 1920 px. Results:

- every page returns 200, and unknown URLs return the custom 404;
- no horizontal overflow at any width;
- no console errors;
- every internal link resolves;
- every page has exactly one `h1`, a meta description and a canonical URL;
- form validation, prefilling from pricing links, successful submission, spam rejection and server-side validation all work;
- the mobile menu opens, traps focus, closes on Esc and closes on navigation.
