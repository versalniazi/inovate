import Link from "next/link";

// Brand geometry mirrors scripts/brand.mjs (the source for /public SVG assets).
export function LogoMark({ className = "h-8 w-auto", id = "lm" }: { className?: string; id?: string }) {
  return (
    <svg viewBox="10 4 27 40" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="10" y1="44" x2="34" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1F5BFF" />
          <stop offset="1" stopColor="#12C2E9" />
        </linearGradient>
      </defs>
      <path d="M10 44 L21 18 H31 L20 44 Z" fill={`url(#${id})`} />
      <path d="M23.2 13 L27 4 H37 L33.2 13 Z" fill="#12C2E9" />
    </svg>
  );
}

export function Wordmark({ className = "h-4 w-auto", id = "wm" }: { className?: string; id?: string }) {
  return (
    <svg viewBox="-2 0 187.4 28" className={className} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={id}>
          <rect x="-2" y="0" width="187.4" height="28" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`} fill="none" stroke="currentColor" strokeWidth="4.8" strokeLinejoin="miter" strokeMiterlimit="2.2">
        <path d="M2.4 0V28" />
        <path transform="translate(11.4 0)" d="M2.4 28V0L19.6 28V0" />
        <circle cx="54" cy="14" r="11.6" />
        <path transform="translate(74.6 0)" d="M1.2 -2L12 28L22.8 -2" />
        <path transform="translate(105.2 0)" d="M1.2 30L12 0L22.8 30M6.4 19.2H17.6" />
        <path transform="translate(135.8 0)" d="M0 2.4H22M11 2.4V28" />
        <path transform="translate(164.4 0)" d="M19 2.4H2.4V25.6H19M2.4 14H16.5" />
      </g>
    </svg>
  );
}

export function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 rounded-md ${tone === "light" ? "text-white" : "text-navy"} ${className}`}
      aria-label="INOVATE LTD — home"
    >
      <LogoMark className="h-8 w-auto transition-transform duration-300 group-hover:-translate-y-0.5" id={`lm-${tone}`} />
      <Wordmark className="h-[15px] w-auto" id={`wm-${tone}`} />
    </Link>
  );
}
