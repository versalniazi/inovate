"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { nav, site } from "@/content/site";
import { Icon } from "./Icon";
import { buttonClass } from "./Button";
import { isActive } from "./Navbar";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const prev = body.style.overflow;
    body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const items = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        // The panel is portalled to <body>, so manage the cycle toggle → panel → toggle explicitly.
        const toggle = toggleRef.current!;
        const first = items[0];
        const last = items[items.length - 1];
        const active = document.activeElement;
        const go = (el: HTMLElement) => {
          e.preventDefault();
          el.focus();
        };
        if (!e.shiftKey && active === toggle) go(first);
        else if (!e.shiftKey && active === last) go(toggle);
        else if (e.shiftKey && active === first) go(toggle);
        else if (e.shiftKey && active === toggle) go(last);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        className="relative inline-flex h-11 w-11 items-center justify-center rounded-full text-navy ring-1 ring-inset ring-line transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
      </button>

      {mounted
        ? createPortal(
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-0 z-40 overflow-y-auto bg-white px-4 pb-10 pt-24 sm:px-6 lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="divide-y divide-line border-y border-line">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between py-4 font-display text-xl font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue ${
                      active ? "text-blue" : "text-navy"
                    }`}
                  >
                    {item.label}
                    <Icon name="chevron" className="h-5 w-5 text-muted" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mt-8 grid gap-3">
          <Link href="/contact" className={buttonClass("primary", "lg", "w-full")}>
            Get a Free Quote
          </Link>
          <Link href="/pricing" className={buttonClass("secondary", "lg", "w-full")}>
            View Pricing
          </Link>
        </div>
        <div className="mt-8 space-y-2 text-sm text-muted">
          <a className="flex items-center gap-2 hover:text-navy" href={`mailto:${site.email}`}>
            <Icon name="mail" className="h-4 w-4" /> {site.email}
          </a>
          <a className="flex items-center gap-2 hover:text-navy" href={site.phoneHref}>
            <Icon name="phone" className="h-4 w-4" /> {site.phone}
          </a>
        </div>
      </div>,
            document.body,
          )
        : null}
    </div>
  );
}
