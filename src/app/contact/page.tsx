import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact | Get a Free Quote",
  description:
    "Contact INOVATE LTD in Kirkcaldy, Fife for a free quote on website development, custom software, web applications, e-commerce, SEO or digital marketing.",
  path: "/contact",
});

const steps = ["We review your enquiry and requirements.", "We reply with questions or a short call if needed.", "You receive a clear scope and written quote."];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", href: "/contact" }]}
        eyebrow="Contact"
        title="Let's Build Your Next Digital Project"
        text="Tell us about your project and we’ll reply with clear next steps and a transparent quote. Requesting a quote is free and there’s no obligation."
      />
      <section className="py-16 sm:py-24" aria-label="Enquiry form and contact details">
        <div className="container grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-14">
          <div>
            <h2 className="sr-only">Request a free quote</h2>
            <Suspense fallback={<div className="h-[640px] rounded-3xl border border-line bg-white shadow-card" />}>
              <ContactForm />
            </Suspense>
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl bg-navy p-7 text-white sm:p-8">
              <h2 className="font-display text-xl font-semibold">{site.name}</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan">
                    <Icon name="pin" className="h-5 w-5" />
                  </span>
                  <address className="not-italic leading-relaxed text-white/85">
                    {site.address.street}
                    <br />
                    {site.address.locality}
                    <br />
                    {site.address.region}
                    <br />
                    {site.address.postcode}
                  </address>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan">
                    <Icon name="mail" className="h-5 w-5" />
                  </span>
                  <a href={`mailto:${site.email}`} className="break-all text-white/85 hover:text-white hover:underline">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan">
                    <Icon name="phone" className="h-5 w-5" />
                  </span>
                  <a href={site.phoneHref} className="text-white/85 hover:text-white hover:underline">
                    {site.phone}
                  </a>
                </li>
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/60">Company number {site.company.number}. Registered in Scotland.</p>
            </div>
            <div className="card p-7 sm:p-8">
              <h2 className="font-display text-lg font-semibold text-navy">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {steps.map((s, i) => (
                  <li key={s} className="flex gap-3.5">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-xs font-semibold text-white">{i + 1}</span>
                    <span className="pt-0.5 text-[0.95rem] text-ink">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
