import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "light" | "outline-light";
type Size = "md" | "lg" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-blue text-white shadow-glow hover:bg-blue-600 hover:-translate-y-0.5",
  secondary: "bg-white text-navy ring-1 ring-inset ring-line hover:ring-navy/30 hover:-translate-y-0.5",
  ghost: "text-blue hover:text-blue-600 px-0",
  light: "bg-white text-navy hover:bg-blue-50 hover:-translate-y-0.5 focus-visible:ring-offset-navy",
  "outline-light": "text-white ring-1 ring-inset ring-white/25 hover:bg-white/10 focus-visible:ring-offset-navy",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-12 px-6 text-base sm:h-[3.25rem] sm:px-7",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", extra = "") {
  return `${base} ${variants[variant]} ${variant === "ghost" ? "" : sizes[size]} ${extra}`;
}

type Props = { variant?: Variant; size?: Size; arrow?: boolean; children: ReactNode; className?: string };

export function Button({ href, variant, size, arrow, children, className, ...rest }: Props & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={buttonClass(variant, size, className)} {...rest}>
      {children}
      {arrow ? <Icon name="arrow" className="h-4 w-4" /> : null}
    </Link>
  );
}
