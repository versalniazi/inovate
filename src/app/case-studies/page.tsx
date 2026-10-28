import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Icon } from "@/components/Icon";
import { caseStudies } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies | How We Approach Projects",
  description:
    "Concept case studies from INOVATE LTD showing how we approach website, e-commerce and web application projects — from challenge and approach to solution and technology.",
  path: "/case-studies",
});

const sections = [
  ["challenge", "Challenge"],
  ["approach", "Approach"],
  ["solution", "Solution"],
] as const;

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Case Studies", href: "/case-studies" }]}
        eyebrow="Case studies"
        title="How we approach a project"
        text="These concept case studies walk through how we would tackle common business problems — the challenge, our approach, the solution and the technology behind it."
      />

      <div className="border-b border-line bg-blue-50/60">
        <p className="container flex items-start gap-3 py-5 text-sm text-navy sm:items-center">
          <Icon name="spark" className="mt-0.5 h-5 w-5 shrink-0 text-blue sm:mt-0" />
          These are Concept Projects, not real client engagements. Outcomes describe the intended result of the concept, not measured performance.
        </p>
      </div>

      {caseStudies.map((p, i) => {
        const cs = p.caseStudy!;
        return (
          <article
            key={p.slug}
            id={p.slug}
            className={`scroll-mt-24 py-16 sm:py-24 ${i % 2 ? "border-y border-line bg-surface" : ""}`}
            aria-labelledby={`${p.slug}-title`}
          >
            <div className="container grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-navy px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">Concept Project</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue">{p.category}</span>
                </div>
                <h2 id={`${p.slug}-title`} className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                  {p.title}
                </h2>
                <p className="mt-3 text-lg text-muted">{p.summary}</p>
                <div className="mt-8 rounded-3xl border border-line bg-white p-3 shadow-card">
                  <ProjectVisual visual={p.visual} />
                </div>
              </div>

              <div className="prose-content max-w-none">
                {sections.map(([key, label]) => (
                  <section key={key} aria-label={label}>
                    <h3 className="!mt-0 flex items-center gap-3 !text-xl">
                      <span className="h-6 w-1 rounded-full bg-brand-gradient" aria-hidden="true" />
                      {label}
                    </h3>
                    <p>{cs[key]}</p>
                    <div className="h-6" />
                  </section>
                ))}
                <div className="grid gap-5 sm:grid-cols-2">
                  <section className="card p-6" aria-label="Features">
                    <h3 className="!mt-0 !text-lg">Features</h3>
                    <ul className="!mb-0">
                      {cs.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </section>
                  <section className="card p-6" aria-label="Technology">
                    <h3 className="!mt-0 !text-lg">Technology</h3>
                    <ul className="!mb-0">
                      {cs.technology.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </section>
                </div>
                <section className="mt-8 rounded-3xl bg-navy p-6 text-white sm:p-8" aria-label="Outcome">
                  <h3 className="!mt-0 !text-lg !text-white">Outcome</h3>
                  <p className="!mb-0 text-white/80">{cs.outcome}</p>
                </section>
              </div>
            </div>
          </article>
        );
      })}

      <CTASection title="Have a challenge like these?" text="Share the problem you’re trying to solve. We’ll suggest a practical approach and a clear quote." />
    </>
  );
}
