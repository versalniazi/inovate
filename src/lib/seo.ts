import type { Metadata } from "next";
import { absoluteUrl, site } from "@/content/site";

export function pageMetadata({ title, description, path, absoluteTitle }: { title: string; description: string; path: string; absoluteTitle?: boolean }): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} | ${site.shortName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [{ url: absoluteUrl("/og-image.png"), width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [absoluteUrl("/og-image.png")] },
  };
}
