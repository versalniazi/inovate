import Link from "next/link";
import type { Package } from "@/content/pricing";
import { Icon } from "./Icon";
import { buttonClass } from "./Button";

export function PricingCard({ pkg }: { pkg: Package }) {
  const popular = pkg.popular;
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl p-6 sm:p-7 ${
        popular ? "bg-navy text-white shadow-lift ring-1 ring-navy" : "card"
      }`}
      aria-label={`${pkg.name}${popular ? " — most popular" : ""}`}
      data-reveal
    >
      {popular ? (
        <span className="absolute -top-3 left-6 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-glow">
          Most Popular
        </span>
      ) : null}
      <h3 className={`font-display text-lg font-semibold ${popular ? "text-white" : "text-navy"}`}>{pkg.name}</h3>
      <p className={`mt-2 text-[0.95rem] ${popular ? "text-white/70" : "text-muted"}`}>{pkg.description}</p>
      <p className="mt-5 flex items-baseline gap-1.5">
        <span className={`text-sm font-medium ${popular ? "text-white/60" : "text-muted"}`}>From</span>
        <span className={`font-display text-4xl font-semibold tracking-tight ${popular ? "text-white" : "text-navy"}`}>£{pkg.price}</span>
      </p>
      <ul className="mt-6 flex-1 space-y-2.5 text-[0.95rem]">
        {pkg.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <Icon name="check" className={`mt-0.5 h-5 w-5 shrink-0 ${popular ? "text-cyan" : "text-blue"}`} strokeWidth={2.2} />
            <span className={popular ? "text-white/85" : "text-ink"}>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/contact?package=${pkg.id}`}
        className={buttonClass(popular ? "light" : "secondary", "md", "mt-7 w-full")}
        aria-label={`Get started with ${pkg.name}`}
      >
        Get Started
      </Link>
    </article>
  );
}
