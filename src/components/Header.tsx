"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";
import { Button } from "./Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled ? "border-line bg-white/90 shadow-[0_6px_24px_-18px_rgb(11_21_48/0.35)] backdrop-blur-md" : "border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className={`container flex items-center justify-between gap-6 transition-[height] duration-300 ${scrolled ? "h-16" : "h-[4.5rem] lg:h-20"}`}>
        <Logo />
        <Navbar />
        <div className="flex items-center gap-2">
          <Button href="/contact" size="sm" className="hidden sm:inline-flex">
            Get a Free Quote
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
