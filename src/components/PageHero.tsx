import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({ eyebrow, title, text, crumbs, children }: { eyebrow?: string; title: ReactNode; text?: ReactNode; crumbs: Crumb[]; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-surface">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-cyan/20 blur-3xl" />
      <div className="container py-14 sm:py-20 lg:py-24">
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 max-w-3xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">{title}</h1>
          {text ? <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">{text}</p> : null}
          {children ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
