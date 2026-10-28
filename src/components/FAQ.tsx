import type { Faq } from "@/content/faqs";
import { Icon } from "./Icon";

// Native <details> for zero-JS, keyboard-accessible disclosure.
export function FAQ({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-white shadow-card">
      {items.map((item) => (
        <details key={item.q} className="group px-5 sm:px-7 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-display text-[1.05rem] font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-4 rounded-md">
            <span>{item.q}</span>
            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-blue transition-transform duration-300 group-open:rotate-45">
              <Icon name="plus" className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </summary>
          <p className="-mt-1 max-w-prose pb-6 pr-10 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
