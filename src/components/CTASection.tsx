import { Button } from "./Button";
import { LogoMark } from "./Logo";

export function CTASection({
  title = "Ready to build something better?",
  text = "Tell us about your project. We’ll review your requirements and reply with clear next steps and a transparent quote — no obligation.",
  primary = { href: "/contact", label: "Get a Free Quote" },
  secondary = { href: "/contact", label: "Book a Consultation" },
}: {
  title?: string;
  text?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="cta-title">
      <div className="container">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center sm:px-12 lg:py-20" data-reveal>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid-dark opacity-60" />
          <div aria-hidden="true" className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-blue/40 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-28 -left-16 -z-10 h-72 w-72 rounded-full bg-cyan/25 blur-3xl" />
          <LogoMark className="mx-auto h-10 w-auto" id="cta-mark" />
          <h2 id="cta-title" className="mx-auto mt-6 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-white/70">{text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={primary.href} variant="light" size="lg" arrow>
              {primary.label}
            </Button>
            <Button href={secondary.href} variant="outline-light" size="lg">
              {secondary.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
