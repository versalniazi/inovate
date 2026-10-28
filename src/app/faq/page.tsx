import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { allFaqs, faqs } from "@/content/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ | Website, Software & Pricing Questions",
  description:
    "Answers to common questions about website costs, timelines, custom software, e-commerce, SEO, digital marketing, advertising, maintenance and getting a quote from INOVATE LTD.",
  path: "/faq",
});

const slug = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, "-");

export default function FaqPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "FAQ", href: "/faq" }]}
        eyebrow="FAQ"
        title="Frequently asked questions"
        text="Everything you need to know about working with INOVATE — pricing, timelines, services and how to get started."
      />
      <section className="py-16 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <nav aria-label="FAQ topics" className="lg:sticky lg:top-28 lg:self-start">
            <ul className="flex flex-wrap gap-2 lg:flex-col">
              {faqs.map((g) => (
                <li key={g.group}>
                  <a
                    href={`#${slug(g.group)}`}
                    className="inline-flex rounded-full px-4 py-2 text-sm font-semibold text-navy ring-1 ring-inset ring-line hover:bg-surface lg:rounded-xl lg:ring-0"
                  >
                    {g.group}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-14">
            {faqs.map((g) => (
              <section key={g.group} id={slug(g.group)} className="scroll-mt-28" aria-labelledby={`${slug(g.group)}-h`}>
                <h2 id={`${slug(g.group)}-h`} className="mb-6 font-display text-2xl font-semibold text-navy">
                  {g.group}
                </h2>
                <FAQ items={g.items} />
              </section>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Still have a question?" text="Get in touch and we’ll give you a straight, honest answer." secondary={{ href: "/contact", label: "Contact INOVATE" }} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </>
  );
}
