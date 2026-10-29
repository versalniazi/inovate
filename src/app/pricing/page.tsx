import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingCard } from "@/components/PricingCard";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { pricingDisclaimer, pricingGroups } from "@/content/pricing";
import { faqs } from "@/content/faqs";
import { absoluteUrl } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing | Website & Software Packages from £15",
  description:
    "Transparent starter pricing from INOVATE LTD: consultations from £15, landing pages from £45, business websites from £85, SEO from £100, advertising from £115, e-commerce from £125 and a full growth package at £300.",
  path: "/pricing",
});

const pricingFaqs = faqs.find((g) => g.group === "Pricing & quotes")!.items;

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Pricing", href: "/pricing" }]}
        eyebrow="Pricing"
        title="Transparent starter pricing"
        text="Clear packages with defined scopes, so you know exactly what you’re getting. For larger or more complex work, we provide an individual written quote."
      >
        <Button href="/contact" size="lg" arrow>
          Request a Custom Quote
        </Button>
      </PageHero>

      <div className="border-b border-line bg-blue-50/60">
        <p className="container flex items-start gap-3 py-5 text-sm text-navy sm:items-center">
          <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-blue sm:mt-0" />
          {pricingDisclaimer}
        </p>
      </div>

      {pricingGroups.map((g, i) => (
        <section key={g.id} className={`py-16 sm:py-24 ${i % 2 ? "border-y border-line bg-surface" : ""}`} aria-labelledby={`g-${g.id}`}>
          <div className="container">
            <SectionHeading id={`g-${g.id}`} align="left" title={g.title} text={g.text} />
            <div className="mt-12 grid gap-6 pt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {g.packages.map((p) => (
                <PricingCard key={p.id} pkg={p} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 sm:py-20" aria-labelledby="custom">
        <div className="container">
          <div className="card flex flex-col items-start gap-6 p-8 sm:p-10 md:flex-row md:items-center md:justify-between" data-reveal>
            <div>
              <h2 id="custom" className="font-display text-2xl font-semibold text-navy">
                Need something more specific?
              </h2>
              <p className="mt-2 max-w-xl text-muted">Request a custom quote. Tell us what you need and we’ll reply with a clear scope, timeline and price.</p>
            </div>
            <Button href="/contact" size="lg" arrow className="shrink-0">
              Request a Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-20 sm:py-24" aria-labelledby="pricing-faq">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading id="pricing-faq" align="left" eyebrow="FAQ" title="Pricing questions" />
          <FAQ items={pricingFaqs} />
        </div>
      </section>

      <CTASection title="Start with a package, or start a conversation" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "INOVATE LTD starter packages",
          url: absoluteUrl("/pricing"),
          itemListElement: pricingGroups.flatMap((g) =>
            g.packages.map((p) => ({
              "@type": "Offer",
              name: p.name,
              description: p.description,
              seller: { "@id": absoluteUrl("/#organization") },
              priceSpecification: { "@type": "PriceSpecification", minPrice: p.price, priceCurrency: "GBP" },
            })),
          ),
        }}
      />
    </>
  );
}
