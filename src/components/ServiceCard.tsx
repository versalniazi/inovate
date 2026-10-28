import Link from "next/link";
import type { Service } from "@/content/services";
import { Icon } from "./Icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card group relative flex h-full flex-col p-6 sm:p-7" data-reveal>
      <span className="icon-tile">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-navy">{service.title}</h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{service.short}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue after:absolute after:inset-0 after:rounded-[inherit] focus-visible:outline-none group-focus-within:underline"
      >
        Learn More<span className="sr-only"> about {service.title}</span>
        <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
