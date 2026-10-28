import Link from "next/link";
import { absoluteUrl } from "@/content/site";
import { JsonLd } from "./JsonLd";
import { Icon } from "./Icon";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${tone === "light" ? "text-white/60" : "text-muted"}`}>
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={tone === "light" ? "text-white" : "text-navy"}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className="rounded hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue">
                      {c.name}
                    </Link>
                    <Icon name="chevron" className="h-3.5 w-3.5 opacity-60" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: absoluteUrl(c.href) })),
        }}
      />
    </>
  );
}
