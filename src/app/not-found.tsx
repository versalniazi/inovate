import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { LogoMark } from "@/components/Logo";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you’re looking for could not be found.",
  robots: { index: false },
};

const links = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/faq", label: "FAQ" },
];

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <LogoMark className="h-14 w-auto" id="nf-mark" />
        <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.2em] text-blue">Error 404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">This page has moved on</h1>
        <p className="mt-4 max-w-md text-lg text-muted">The page you’re looking for doesn’t exist or may have been moved. Let’s get you back on track.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact INOVATE
          </Button>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="inline-flex items-center gap-1 font-semibold text-navy hover:text-blue">
                {l.label} <Icon name="chevron" className="h-3.5 w-3.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
