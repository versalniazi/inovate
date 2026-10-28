import Link from "next/link";
import type { Project } from "@/content/portfolio";
import { ProjectVisual } from "./ProjectVisual";
import { Icon } from "./Icon";

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden p-3" data-reveal>
      <div className="transition-transform duration-500 group-hover:scale-[1.015]">
        <ProjectVisual visual={project.visual} />
      </div>
      <div className="flex flex-1 flex-col px-3 pb-4 pt-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-navy px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">Concept Project</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue">{project.category}</span>
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold text-navy">{project.title}</h3>
        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Project tags">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-ink ring-1 ring-line">
              {t}
            </li>
          ))}
        </ul>
        {project.caseStudy ? (
          <Link
            href={`/case-studies#${project.slug}`}
            className="mt-5 inline-flex items-center gap-1.5 self-start rounded text-sm font-semibold text-blue hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
          >
            Read the concept case study <Icon name="arrow" className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
