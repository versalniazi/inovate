import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/site";
import { services } from "@/content/services";

const LAST_MODIFIED = new Date("2026-10-28");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "weekly"],
    ["/services", 0.9, "monthly"],
    ["/pricing", 0.9, "monthly"],
    ["/contact", 0.9, "yearly"],
    ["/about", 0.7, "yearly"],
    ["/portfolio", 0.7, "monthly"],
    ["/case-studies", 0.6, "monthly"],
    ["/faq", 0.7, "monthly"],
    ...services.map((s) => [`/services/${s.slug}`, 0.8, "monthly"] as [string, number, "monthly"]),
    ["/privacy-policy", 0.2, "yearly"],
    ["/terms-and-conditions", 0.2, "yearly"],
    ["/cookie-policy", 0.2, "yearly"],
  ];
  return pages.map(([path, priority, changeFrequency]) => ({ url: absoluteUrl(path), lastModified: LAST_MODIFIED, changeFrequency, priority }));
}
