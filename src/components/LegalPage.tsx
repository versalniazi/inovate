import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Icon } from "./Icon";

export function LegalPage({ title, path, intro, updated, children }: { title: string; path: string; intro: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero crumbs={[{ name: title, href: path }]} eyebrow="Legal" title={title} text={intro} />
      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="mb-10 flex max-w-prose gap-3 rounded-2xl bg-blue-50 p-5 text-sm text-navy ring-1 ring-blue/15">
            <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
            <p>
              <strong>Starter policy — legal review required.</strong> This page is a professionally structured starting point and is not legal advice.
              Items shown in [square brackets] must be completed, and the full text should be reviewed by a qualified legal adviser before relying on
              it. Last updated: {updated}.
            </p>
          </div>
          <div className="prose-content">{children}</div>
        </div>
      </section>
    </>
  );
}
