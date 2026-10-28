import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  tone = "dark",
  as: Tag = "h2",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  id?: string;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`} data-reveal>
      {eyebrow ? <p className={`eyebrow ${tone === "light" ? "text-cyan" : ""}`}>{eyebrow}</p> : null}
      <Tag id={id} className={`mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${tone === "light" ? "text-white" : "text-navy"}`}>
        {title}
      </Tag>
      {text ? <p className={`mt-4 text-pretty text-lg ${tone === "light" ? "text-white/70" : "text-muted"}`}>{text}</p> : null}
    </div>
  );
}
