// Company facts. Keep this file factual — it feeds visible copy and structured data.
const fromEnv =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
  "http://localhost:3000";

export const site = {
  name: "INOVATE LTD",
  shortName: "INOVATE",
  url: fromEnv.replace(/\/$/, ""),
  tagline: "Digital Solutions. Built to Grow.",
  positioning: "Software, Web & Digital Solutions Built for Growing Businesses.",
  description:
    "INOVATE LTD is a Scottish software development and digital solutions company based in Kirkcaldy, Fife. We build websites, custom software, web applications and e-commerce, and deliver SEO, digital marketing and advertising for businesses across the UK.",
  footerLine: "Digital solutions, software and advertising services for growing businesses.",
  email: "0004manzar@gmail.com",
  phone: "+44 7456 007546",
  phoneHref: "tel:+447456007546",
  address: {
    street: "37 Earn Road",
    locality: "Kirkcaldy",
    region: "Scotland",
    postcode: "KY1 3JU",
    country: "United Kingdom",
    countryCode: "GB",
  },
  company: {
    number: "SC905479",
    type: "Private Limited Company",
    incorporated: "2026-10-09",
    incorporatedLabel: "9 October 2026",
    sic: [
      "62012 — Business and domestic software development",
      "73110 — Advertising agencies",
    ],
    companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/SC905479",
  },
  areaServed: ["Kirkcaldy", "Fife", "Edinburgh", "Glasgow", "Scotland", "United Kingdom"],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;
