import type { Config } from "tailwindcss";

// Brand tokens live as CSS variables in src/app/globals.css.
// Tailwind maps to those variables so there is a single source of truth.
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "rgb(var(--c-navy) / <alpha-value>)",
          950: "rgb(var(--c-navy-950) / <alpha-value>)",
          800: "rgb(var(--c-navy-800) / <alpha-value>)",
          700: "rgb(var(--c-navy-700) / <alpha-value>)",
        },
        blue: {
          DEFAULT: "rgb(var(--c-blue) / <alpha-value>)",
          600: "rgb(var(--c-blue-600) / <alpha-value>)",
          50: "rgb(var(--c-blue-50) / <alpha-value>)",
        },
        cyan: { DEFAULT: "rgb(var(--c-cyan) / <alpha-value>)" },
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgb(11 21 48 / 0.04), 0 8px 24px -12px rgb(11 21 48 / 0.12)",
        lift: "0 2px 4px rgb(11 21 48 / 0.04), 0 24px 48px -20px rgb(11 21 48 / 0.25)",
        glow: "0 10px 30px -10px rgb(31 91 255 / 0.55)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, rgb(var(--c-blue)) 0%, rgb(var(--c-cyan)) 100%)",
      },
      maxWidth: { prose: "68ch" },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        "pulse-soft": { "0%,100%": { opacity: "0.55" }, "50%": { opacity: "1" } },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
