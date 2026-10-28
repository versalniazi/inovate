import { Icon } from "./Icon";

// Original, illustrative composition: website + analytics + app UI + workflow.
// Deliberately contains no numbers or statistics.
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] select-none" aria-hidden="true">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-brand-gradient opacity-[0.12] blur-2xl" />

      {/* Browser window */}
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
        <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <div className="ml-3 flex h-6 flex-1 items-center gap-2 rounded-md bg-white px-3 text-[10px] text-muted ring-1 ring-line">
            <Icon name="shield" className="h-3 w-3 text-blue" />
            <span className="h-1.5 w-28 rounded-full bg-line" />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 p-5">
          <div className="col-span-3 space-y-3">
            <div className="h-2 w-16 rounded-full bg-blue/30" />
            <div className="h-4 w-full rounded-md bg-navy" />
            <div className="h-4 w-4/5 rounded-md bg-navy" />
            <div className="h-2 w-full rounded-full bg-line" />
            <div className="h-2 w-11/12 rounded-full bg-line" />
            <div className="flex gap-2 pt-1">
              <div className="h-7 w-24 rounded-full bg-blue" />
              <div className="h-7 w-20 rounded-full ring-1 ring-line" />
            </div>
          </div>
          <div className="col-span-2 rounded-xl bg-brand-gradient p-3">
            <div className="flex h-full flex-col justify-between rounded-lg bg-white/10 p-2.5">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/20 text-white">
                <Icon name="spark" className="h-3.5 w-3.5" />
              </span>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-white/70" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/45" />
              </div>
            </div>
          </div>
          <div className="col-span-5 grid grid-cols-3 gap-3 pt-1">
            {(["browser", "code", "cart"] as const).map((n) => (
              <div key={n} className="rounded-xl border border-line p-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue">
                  <Icon name={n} className="h-4 w-4" />
                </span>
                <div className="mt-2 h-1.5 w-4/5 rounded-full bg-navy/80" />
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-line" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics card */}
      <div className="absolute -left-4 top-[58%] w-44 rounded-2xl border border-line bg-white p-4 shadow-lift motion-safe:animate-float sm:-left-10 sm:w-52">
        <div className="flex items-center justify-between text-[11px] font-semibold text-navy">
          Performance
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-blue motion-safe:animate-pulse-soft" /> Live
          </span>
        </div>
        <svg viewBox="0 0 160 60" className="mt-3 h-14 w-full">
          <defs>
            <linearGradient id="hv-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#1F5BFF" stopOpacity="0.28" />
              <stop offset="1" stopColor="#1F5BFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 50 C20 46 30 40 45 41 S70 30 85 28 110 22 125 14 150 10 160 6 V60 H0Z" fill="url(#hv-area)" />
          <path d="M0 50 C20 46 30 40 45 41 S70 30 85 28 110 22 125 14 150 10 160 6" fill="none" stroke="#1F5BFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <div className="mt-2 grid grid-cols-6 items-end gap-1">
          {[40, 55, 45, 70, 62, 85].map((h, i) => (
            <span key={i} className="rounded-sm bg-brand-gradient" style={{ height: `${h * 0.28}px`, opacity: 0.35 + i * 0.11 }} />
          ))}
        </div>
      </div>

      {/* App UI card */}
      <div className="absolute -right-3 -top-10 w-40 rounded-2xl bg-navy p-3.5 text-white shadow-lift sm:-right-8 sm:w-48">
        <div className="flex items-center gap-2 text-[11px] font-semibold">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/10">
            <Icon name="grid" className="h-3.5 w-3.5 text-cyan" />
          </span>
          Dashboard
        </div>
        <div className="mt-3 space-y-2">
          {[0.9, 0.65, 0.8].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="h-5 w-5 shrink-0 rounded-full bg-white/10" />
              <span className="h-1.5 rounded-full bg-white/25" style={{ width: `${w * 100}%` }} />
            </div>
          ))}
        </div>
      </div>

      {/* Workflow card */}
      <div className="absolute -bottom-8 right-4 flex items-center gap-2 rounded-2xl border border-line bg-white px-4 py-3 shadow-lift sm:right-10">
        {(
          [
            ["pen", "Design"],
            ["code", "Build"],
            ["rocket", "Launch"],
          ] as const
        ).map(([icon, label], i) => (
          <div key={label} className="flex items-center gap-2">
            {i > 0 ? <span className="h-px w-3 bg-line sm:w-5" /> : null}
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-navy">
              <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${i === 2 ? "bg-brand-gradient text-white" : "bg-blue-50 text-blue"}`}>
                <Icon name={icon} className="h-3.5 w-3.5" />
              </span>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
