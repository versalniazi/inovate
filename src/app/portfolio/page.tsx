import { PageHero } from "@/components/PageHero";
import { PortfolioCard } from "@/components/PortfolioCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { projects } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio | Website, App & Software Concept Projects",
  description:
    "Concept projects from INOVATE LTD showing business websites, e-commerce stores, web applications, SaaS dashboards, landing pages, software systems and digital campaigns.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Portfolio", href: "/portfolio" }]}
        eyebrow="Portfolio"
        title="Example builds and concept projects"
        text="A selection of concept projects that demonstrate the websites, stores, applications and campaigns we design and build."
      >
        <Button href="/case-studies" variant="secondary" size="lg">
          Read Case Studies
        </Button>
      </PageHero>

      <div className="border-b border-line bg-blue-50/60">
        <p className="container flex items-start gap-3 py-5 text-sm text-navy sm:items-center">
          <Icon name="spark" className="mt-0.5 h-5 w-5 shrink-0 text-blue sm:mt-0" />
          Every item below is a Concept Project created to illustrate our capabilities. They do not represent real clients. Genuine client work will be
          added here as projects are completed and approved for publication.
        </p>
      </div>

      <section className="py-16 sm:py-24" aria-label="Concept projects">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <PortfolioCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <CTASection title="Could your project be next?" text="Tell us what you’d like to build and we’ll show you how we would approach it." />
    </>
  );
}
