import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { PortfolioCard } from "@/components/PortfolioCard";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { Icon, type IconName } from "@/components/Icon";
import { services } from "@/content/services";
import { getPackage, pricingDisclaimer } from "@/content/pricing";
import { projects } from "@/content/portfolio";
import { allFaqs } from "@/content/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "INOVATE LTD | Software & Web Development Company in Scotland",
  absoluteTitle: true,
  description:
    "Websites, custom software, web applications, e-commerce, SEO and digital marketing from INOVATE LTD in Kirkcaldy, Fife. Transparent starter pricing for businesses across Scotland and the UK.",
  path: "/",
});

const reasons: { icon: IconName; title: string; text: string }[] = [
  { icon: "pound", title: "Transparent starter pricing", text: "Clear packages from £15 with defined scopes, and written quotes for anything larger. No surprises." },
  { icon: "device", title: "Mobile-first by default", text: "Everything we build is designed for phones first, then scaled up for tablets and desktops." },
  { icon: "code", title: "Modern, maintainable code", text: "We use current, well-supported technologies so your website or software is fast and easy to extend." },
  { icon: "search", title: "SEO-ready foundations", text: "Semantic structure, metadata and performance are built in from day one, not added afterwards." },
  { icon: "chat", title: "Clear communication", text: "Plain-English updates, agreed milestones and a direct line to the people doing the work." },
  { icon: "pin", title: "Scottish & UK-based", text: "Registered in Scotland and based in Kirkcaldy, Fife, working with businesses throughout the UK." },
];

const featured = ["landing-page", "business-website", "professional-website"].map((id) => getPackage(id)!);
const homeFaqs = allFaqs.filter((f) =>
  ["How much does a website cost?", "How long does a project take?", "Do you build custom software?", "Do you work with businesses across the UK?", "How do I start a project?"].includes(f.q),
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="py-20 sm:py-28" aria-labelledby="services-title">
        <div className="container">
          <SectionHeading
            id="services-title"
            eyebrow="Our services"
            title="Solutions for the Modern Business"
            text="From a first website to custom software and campaigns, we cover the technology and marketing that help businesses grow."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="secondary" arrow>
              View Services
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-20 sm:py-28" aria-labelledby="why-title">
        <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="why-title"
              align="left"
              eyebrow="Why INOVATE"
              title="A modern technology partner, built around your goals"
              text="We are a newly established Scottish company, and we earn trust the right way: clear pricing, honest advice and carefully built work."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-reveal>
              <Button href="/about" variant="secondary">
                About INOVATE
              </Button>
              <Button href="/contact" variant="ghost" arrow>
                Discuss Your Project
              </Button>
            </div>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r.title} className="card group p-6" data-reveal>
                <span className="icon-tile">
                  <Icon name={r.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">{r.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="pricing-title">
        <div className="container">
          <SectionHeading
            id="pricing-title"
            eyebrow="Transparent pricing"
            title="Starter packages with clear, honest scopes"
            text="Start with a defined package or request a custom quote. Every price is a starting price for the scope described."
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 pt-3 md:grid-cols-3">
            {featured.map((p) => (
              <PricingCard key={p.id} pkg={p} />
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">{pricingDisclaimer}</p>
          <div className="mt-8 text-center">
            <Button href="/pricing" variant="secondary" arrow>
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <Process tone="light" />

      <section className="py-20 sm:py-28" aria-labelledby="portfolio-title">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              id="portfolio-title"
              align="left"
              eyebrow="Portfolio"
              title="Example builds"
              text="Concept projects that show the kind of websites, stores and applications we design and develop."
            />
            <Button href="/portfolio" variant="secondary" arrow className="self-start md:self-auto">
              View Portfolio
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <PortfolioCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-20 sm:py-28" aria-labelledby="faq-title">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading id="faq-title" align="left" eyebrow="FAQ" title="Questions, answered" text="Quick answers to the questions we hear most often." />
            <div className="mt-8" data-reveal>
              <Button href="/faq" variant="secondary" arrow>
                Read all FAQs
              </Button>
            </div>
          </div>
          <FAQ items={homeFaqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
