import { Button } from "./Button";
import { HeroVisual } from "./HeroVisual";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-title">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid opacity-80 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div aria-hidden="true" className="absolute -top-40 left-1/2 -z-10 h-[32rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(31_91_255/0.14),transparent)]" />
      <div className="container grid items-center gap-16 pb-24 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-32 lg:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-navy shadow-card">
            <span className="h-2 w-2 rounded-full bg-brand-gradient" aria-hidden="true" />
            Software Development &amp; Digital Solutions
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-balance font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-[4.1rem]"
          >
            Digital Solutions Built to <span className="text-gradient">Move Your Business</span> Forward
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
            INOVATE LTD delivers modern websites, custom software, web applications and digital solutions for businesses looking to build,
            improve and grow online.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg" arrow>
              Get a Free Quote
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Our Services
            </Button>
          </div>
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {["Transparent starter pricing", "Based in Kirkcaldy, Fife", "Working across the UK"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-blue" strokeWidth={2.4} />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 sm:px-10 lg:px-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
