"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";

export const isActive = (pathname: string, href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {nav.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-[0.94rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue ${
                  active ? "text-navy" : "text-muted hover:text-navy"
                }`}
              >
                {item.label}
                {active ? <span aria-hidden="true" className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient" /> : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
