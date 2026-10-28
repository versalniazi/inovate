import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Process } from "@/components/Process";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { Icon, type IconName } from "@/components/Icon";
import { LogoMark } from "@/components/Logo";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About INOVATE LTD | Scottish Software & Digital Company",
  description:
    "INOVATE LTD is a Scottish technology company based in Kirkcaldy, Fife, focused on software development, web development, advertising and digital solutions for UK businesses.",
  path: "/about",
});

const values: { icon: IconName; title: string; text: string }[] = [
  { icon: "compass", title: "Clarity", text: "Plain-English advice, clear scopes and prices you can understand before work starts." },
  { icon: "target", title: "Business focus", text: "Technology is a tool. We start with what you need to achieve and work back from there." },
  { icon: "shield", title: "Honesty", text: "No inflated promises, no invented statistics. If something isn’t right for you, we’ll say so." },
  { icon: "spark", title: "Craft", text: "Careful, modern, maintainable work — the kind that still serves you well years later." },
];

const facts = [
  ["Company name", site.name],
  ["Company number", site.company.number],
  ["Company type", site.company.type],
  ["Incorporated", site.company.incorporatedLabel],
  ["Registered office", `${site.address.street}, ${site.address.locality}, ${site.address.region}, ${site.address.postcode}`],
  ["Nature of business (SIC)", site.company.sic.join("; ")],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }]}
        eyebrow="About INOVATE"
        title="Technology and Digital Solutions Built Around Your Goals"
        text="INOVATE LTD is a Scottish technology company based in Kirkcaldy, Fife. We help businesses across the UK build, improve and grow online through software development, web development, advertising and digital solutions."
      >
        <Button href="/contact" size="lg" arrow>
          Start Your Project
        </Button>
        <Button href="/services" variant="secondary" size="lg">
          View Services
        </Button>
      </PageHero>

      <section className="py-20 sm:py-24" aria-labelledby="story">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading id="story" align="left" eyebrow="Who we are" title="A new company with a clear purpose" />
            <div className="prose-content mt-6" data-reveal>
              <p>
                INOVATE LTD was incorporated in Scotland in October 2026. We were set up to give growing businesses access to modern, well-built
                digital work — websites, custom software, web applications and marketing — without the confusion or opaque pricing that often comes with
                it.
              </p>
              <p>
                We bring software development, web development and advertising together, because in practice they are connected: a campaign needs a page
                that converts, a website needs to be found, and a business process often needs a small piece of software to run smoothly.
              </p>
              <p>
                As a newly established company we don’t lean on claims we can’t back up. Instead, we focus on doing excellent work, communicating clearly
                and pricing transparently — and we’re happy to start small with a defined package so you can see how we work.
              </p>
            </div>
          </div>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy p-10 sm:p-14" data-reveal>
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid-dark" />
            <div aria-hidden="true" className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full bg-blue/40 blur-3xl" />
            <LogoMark className="h-16 w-auto" id="about-mark" />
            <p className="mt-8 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">{site.tagline}</p>
            <p className="mt-4 text-white/70">
              Our mark is a forward-leaning “i” — innovation in motion. It reflects how we work: precise, purposeful and always moving your business
              forward.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-20 sm:py-24" aria-labelledby="values">
        <div className="container">
          <SectionHeading id="values" eyebrow="What we value" title="How we work with clients" />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title} className="card group p-6" data-reveal>
                <span className="icon-tile">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="where">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              id="where"
              align="left"
              eyebrow="Where we work"
              title="Based in Fife, working across the UK"
              text="Our registered office is in Kirkcaldy, Fife. We work with businesses locally, across Scotland — including Edinburgh and Glasgow — and throughout the United Kingdom, with most projects delivered remotely by email and video call."
            />
          </div>
          <div className="card p-6 sm:p-8" data-reveal>
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
              <Icon name="building" className="h-5 w-5 text-blue" /> Company information
            </h2>
            <dl className="mt-5 divide-y divide-line text-[0.95rem]">
              {facts.map(([k, v]) => (
                <div key={k} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4">
                  <dt className="font-medium text-muted">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <a
              href={site.company.companiesHouseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-blue hover:underline"
            >
              View on Companies House <Icon name="external" className="h-4 w-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <Process tone="light" />
      <CTASection title="Let’s build something that works for your business" />
    </>
  );
}
