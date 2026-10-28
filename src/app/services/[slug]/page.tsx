import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingCard } from "@/components/PricingCard";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { getService, services } from "@/content/services";
import { getPackage, pricingDisclaimer } from "@/content/pricing";
import { absoluteUrl, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

// Lower-case words for use mid-sentence while keeping acronyms such as SEO, UI/UX and API.
const inSentence = (t: string) => t.replace(/\b[A-Z][a-z]+\b/g, (w) => w.toLowerCase());

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const packages = service.pricingIds.map((id) => getPackage(id)!).filter(Boolean);
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const contactHref = `/contact?service=${encodeURIComponent(service.title)}`;

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Services", href: "/services" },
          { name: service.navTitle, href: `/services/${service.slug}` },
        ]}
        eyebrow={service.title}
        title={service.h1}
        text={service.intro}
      >
        <Button href={contactHref} size="lg" arrow>
          Get a Free Quote
        </Button>
        <Button href="#packages" variant="secondary" size="lg">
          View Pricing
        </Button>
      </PageHero>

      <section className="py-20 sm:py-24" aria-labelledby="offer">
        <div className="container">
          <SectionHeading id="offer" align="left" eyebrow="What’s included" title={`Our ${inSentence(service.title)} services`} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.offerings.map((o) => (
              <li key={o.title} className="card group p-6" data-reveal>
                <span className="icon-tile h-10 w-10 rounded-xl">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display font-semibold text-navy">{o.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{o.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-20 sm:py-24" aria-labelledby="approach">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading id="approach" align="left" eyebrow="Our approach" title="How we deliver it" />
            <ol className="mt-10 space-y-4">
              {service.approach.map((step, i) => (
                <li key={step} className="flex gap-4" data-reveal>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-gradient font-display text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-1.5 text-ink">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl bg-navy p-8 text-white sm:p-10" data-reveal>
            <h2 className="font-display text-2xl font-semibold">Who this is for</h2>
            <ul className="mt-6 space-y-3">
              {service.suitedFor.map((s) => (
                <li key={s} className="flex gap-3 text-white/85">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-cyan" strokeWidth={2.2} />
                  {s}
                </li>
              ))}
            </ul>
            {service.note ? <p className="mt-8 border-t border-white/10 pt-6 text-sm text-white/60">{service.note}</p> : null}
            <Button href={contactHref} variant="light" className="mt-8" arrow>
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>

      {packages.length ? (
        <section id="packages" className="scroll-mt-24 py-20 sm:py-24" aria-labelledby="packages-title">
          <div className="container">
            <SectionHeading id="packages-title" eyebrow="Pricing" title="Where to start" text="Starter packages relevant to this service." />
            <div className={`mx-auto mt-14 grid gap-6 pt-3 sm:grid-cols-2 ${packages.length >= 3 ? "lg:grid-cols-3" : "max-w-3xl"} ${packages.length === 4 ? "xl:grid-cols-4 xl:max-w-none" : ""}`}>
              {packages.map((p) => (
                <PricingCard key={p.id} pkg={p} />
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
              {pricingDisclaimer}{" "}
              <Link href="/pricing" className="font-semibold text-blue hover:underline">
                See all pricing
              </Link>
              .
            </p>
          </div>
        </section>
      ) : null}

      <section className="border-t border-line bg-surface py-20 sm:py-24" aria-labelledby="svc-faq">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading id="svc-faq" align="left" eyebrow="FAQ" title={`${service.title} questions`} />
          <FAQ items={service.faqs} />
        </div>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="related">
        <div className="container">
          <h2 id="related" className="font-display text-2xl font-semibold text-navy">
            Related services
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/services/${r.slug}`} className="card group flex items-center gap-4 p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue">
                  <span className="icon-tile h-10 w-10 shrink-0 rounded-xl">
                    <Icon name={r.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-display font-semibold text-navy">{r.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title={`Let’s talk about your ${inSentence(service.title)} project`} primary={{ href: contactHref, label: "Get a Free Quote" }} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.navTitle,
          serviceType: service.title,
          description: service.metaDescription,
          url: absoluteUrl(`/services/${service.slug}`),
          provider: { "@id": absoluteUrl("/#organization") },
          areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
          ...(packages.length
            ? {
                offers: packages.map((p) => ({
                  "@type": "Offer",
                  name: p.name,
                  description: p.description,
                  priceSpecification: { "@type": "PriceSpecification", minPrice: p.price, priceCurrency: "GBP" },
                })),
              }
            : {}),
        }}
      />
    </>
  );
}
