import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, site } from "@/content/site";
import { services } from "@/content/services";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "INOVATE LTD | Software & Web Development Company in Scotland",
    template: "%s | INOVATE",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
  openGraph: { type: "website", locale: "en_GB", siteName: site.name },
};

export const viewport: Viewport = {
  themeColor: "#0B1530",
  width: "device-width",
  initialScale: 1,
};

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: site.name,
      legalName: site.name,
      url: site.url,
      logo: absoluteUrl("/app-icon.png"),
      email: site.email,
      telephone: site.phone,
      foundingDate: site.company.incorporated,
      identifier: { "@type": "PropertyValue", propertyID: "Companies House company number", value: site.company.number },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        postalCode: site.address.postcode,
        addressCountry: site.address.countryCode,
      },
      sameAs: [site.company.companiesHouseUrl],
    },
    {
      "@type": "ProfessionalService",
      "@id": absoluteUrl("/#business"),
      name: site.name,
      url: site.url,
      image: absoluteUrl("/og-image.png"),
      email: site.email,
      telephone: site.phone,
      priceRange: "££",
      parentOrganization: { "@id": absoluteUrl("/#organization") },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        postalCode: site.address.postcode,
        addressCountry: site.address.countryCode,
      },
      areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
      knowsAbout: services.map((s) => s.title),
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: site.url,
      name: site.name,
      inLanguage: "en-GB",
      publisher: { "@id": absoluteUrl("/#organization") },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer />
        <RevealObserver />
        <Analytics gaId={process.env.ANALYTICS_ID || undefined} pixelId={process.env.META_PIXEL_ID || undefined} />
        <JsonLd data={organization} />
      </body>
    </html>
  );
}
