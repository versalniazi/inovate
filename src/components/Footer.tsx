import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";
import { Icon } from "./Icon";

const company = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const legal = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

const linkCls = "text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-0 h-80 w-80 rounded-full bg-blue/20 blur-3xl" />
      <div className="container relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-white/70">{site.footerLine}</p>
          <p className="mt-6 font-display text-sm font-semibold tracking-wide text-cyan">{site.tagline}</p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">Company</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            {company.map((l) => (
              <li key={l.href}>
                <Link className={linkCls} href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">Services</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link className={linkCls} href={`/services/${s.slug}`}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">Contact</h2>
          <ul className="mt-4 space-y-3 text-[0.95rem]">
            <li>
              <a className={`${linkCls} inline-flex items-start gap-2.5 break-all`} href={`mailto:${site.email}`}>
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-cyan" /> {site.email}
              </a>
            </li>
            <li>
              <a className={`${linkCls} inline-flex items-start gap-2.5`} href={site.phoneHref}>
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-cyan" /> {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-white/70">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
              <address className="not-italic">
                {site.address.street}, {site.address.locality}, {site.address.region}, {site.address.postcode}
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-4 py-6 text-sm text-white/60 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © 2026 {site.name}. All rights reserved. Registered in Scotland. Company number{" "}
            <a className={linkCls} href={site.company.companiesHouseUrl} rel="noopener noreferrer" target="_blank">
              {site.company.number}
              <span className="sr-only"> (opens Companies House in a new tab)</span>
            </a>
            .
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link className={linkCls} href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
