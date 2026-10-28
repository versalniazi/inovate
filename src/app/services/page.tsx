import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { Process } from "@/components/Process";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software, Web & Digital Services in Scotland",
  description:
    "Explore INOVATE LTD services: website development, custom software, web applications, e-commerce, UI/UX, SEO, digital marketing, advertising, API integration and maintenance.",
  path: "/services",
});

const extras = [
  { title: "Landing Pages", text: "Focused campaign and product pages built around one call to action.", href: "/services/website-development" },
  { title: "Website Redesign", text: "Modernising existing sites for clarity, speed and mobile usability.", href: "/services/website-development" },
  { title: "Business Automation", text: "Removing repetitive manual work by connecting tools and data.", href: "/services/software-development" },
  { title: "SaaS & Platforms", text: "Planning and building subscription products and online platforms.", href: "/services/web-applications" },
  { title: "Technical Support", text: "A dependable point of contact for fixes, changes and questions.", href: "/services/maintenance" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", href: "/services" }]}
        eyebrow="Services"
        title="Software, web and digital services under one roof"
        text="Whether you need your first website, a custom system for your team or a campaign to reach new customers, we plan, build and support it — with clear scopes and transparent pricing."
      >
        <Button href="/contact" size="lg" arrow>
          Get a Free Quote
        </Button>
        <Button href="/pricing" variant="secondary" size="lg">
          View Pricing
        </Button>
      </PageHero>

      <section className="py-20 sm:py-24" aria-labelledby="all-services">
        <div className="container">
          <SectionHeading id="all-services" eyebrow="What we do" title="Our core services" text="Select a service to see what’s included, how we approach it and where to start." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-20 sm:py-24" aria-labelledby="also">
        <div className="container">
          <SectionHeading id="also" eyebrow="Also available" title="Specialist work within our services" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {extras.map((e) => (
              <li key={e.title} data-reveal>
                <Link href={e.href} className="card group flex h-full flex-col p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue">
                  <span className="font-display font-semibold text-navy">{e.title}</span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-muted">{e.text}</span>
                  <Icon name="arrow" className="mt-4 h-4 w-4 text-blue transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process />
      <CTASection title="Not sure which service you need?" text="Describe what you want to achieve and we’ll recommend the right approach — or book a £15 Quick Consultation to talk it through." secondary={{ href: "/contact?package=consultation", label: "Book a Consultation" }} />
    </>
  );
}
