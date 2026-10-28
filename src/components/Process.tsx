import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", title: "Discovery", text: "We learn about your business, goals, audience and requirements, and agree what success looks like." },
  { n: "02", title: "Planning", text: "We define scope, structure, features and timeline, and confirm a clear written quote." },
  { n: "03", title: "Design", text: "We design layouts and interfaces, review them with you and refine before building." },
  { n: "04", title: "Development", text: "We build with modern, maintainable code, testing across devices as we go." },
  { n: "05", title: "Launch & Support", text: "We launch, check everything works in production and stay available for support." },
];

export function Process({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "light";
  return (
    <section className={`relative isolate overflow-hidden py-20 sm:py-28 ${dark ? "bg-navy-950" : ""}`} aria-labelledby="process-title">
      {dark ? <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid-dark opacity-50" /> : null}
      <div className="container">
        <SectionHeading
          id="process-title"
          eyebrow="How we work"
          title="A clear process from first call to launch"
          text="Five straightforward stages, so you always know what is happening and what comes next."
          tone={tone}
        />
        <ol className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className={`relative rounded-3xl p-6 ${dark ? "border border-white/10 bg-white/[0.04]" : "card"}`}
              data-reveal
            >
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient font-display text-sm font-semibold text-white shadow-glow">
                {s.n}
              </span>
              <h3 className={`mt-5 font-display text-lg font-semibold ${dark ? "text-white" : "text-navy"}`}>{s.title}</h3>
              <p className={`mt-2 text-[0.95rem] leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
