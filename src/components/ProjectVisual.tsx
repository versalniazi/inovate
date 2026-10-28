import type { Visual } from "@/content/portfolio";
import { Icon } from "./Icon";
import { LogoMark } from "./Logo";

// Abstract, original illustrations for concept projects (no screenshots, no stock imagery).
const Bar = ({ w, c = "bg-line" }: { w: string; c?: string }) => <div className={`h-1.5 rounded-full ${c}`} style={{ width: w }} />;

function Frame({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`h-full overflow-hidden rounded-xl ${dark ? "bg-navy" : "bg-white"} shadow-card ring-1 ${dark ? "ring-white/10" : "ring-line"}`}>
      <div className={`flex gap-1.5 px-3 py-2 ${dark ? "bg-white/5" : "bg-surface"}`}>
        {[0, 1, 2].map((i) => (
          <span key={i} className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-white/25" : "bg-navy/20"}`} />
        ))}
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

export function ProjectVisual({ visual }: { visual: Visual }) {
  const inner = (() => {
    switch (visual) {
      case "website":
        return (
          <Frame>
            <div className="flex items-center justify-between">
              <Bar w="25%" c="bg-navy" />
              <div className="flex gap-1.5">
                <Bar w="14px" />
                <Bar w="14px" />
                <span className="h-3 w-8 rounded-full bg-blue" />
              </div>
            </div>
            <div className="mt-4 space-y-1.5">
              <div className="h-2.5 w-3/4 rounded bg-navy" />
              <div className="h-2.5 w-1/2 rounded bg-navy" />
              <Bar w="70%" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {["pen", "shield", "clock"].map((n) => (
                <div key={n} className="rounded-md border border-line p-1.5">
                  <Icon name={n as "pen"} className="h-3 w-3 text-blue" />
                  <div className="mt-1.5 h-1 w-3/4 rounded-full bg-line" />
                </div>
              ))}
            </div>
          </Frame>
        );
      case "store":
        return (
          <Frame>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i}>
                  <div className={`aspect-square rounded-md ${i % 3 === 1 ? "bg-cyan/30" : i % 2 ? "bg-blue/20" : "bg-navy/10"}`} />
                  <div className="mt-1 h-1 w-3/4 rounded-full bg-navy/50" />
                  <div className="mt-0.5 h-1 w-1/3 rounded-full bg-blue" />
                </div>
              ))}
            </div>
            <div className="mt-2.5 flex items-center justify-end gap-1.5">
              <Icon name="cart" className="h-3.5 w-3.5 text-navy" />
              <span className="h-3 w-12 rounded-full bg-blue" />
            </div>
          </Frame>
        );
      case "dashboard":
      case "saas":
        return (
          <Frame dark={visual === "saas"}>
            <div className="flex gap-2.5">
              <div className="w-1/4 space-y-1.5">
                {visual === "saas" ? <LogoMark className="mb-2 h-3.5 w-auto" id="pv-saas" /> : null}
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className={`h-1.5 rounded-full ${i === 0 ? "bg-blue" : visual === "saas" ? "bg-white/15" : "bg-line"}`} />
                ))}
              </div>
              <div className="flex-1 space-y-2">
                <div className="grid grid-cols-3 gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className={`h-6 rounded-md ${visual === "saas" ? "bg-white/10" : "bg-surface ring-1 ring-line"}`} />
                  ))}
                </div>
                <svg viewBox="0 0 100 34" className="h-12 w-full" aria-hidden="true">
                  <path d="M0 30 L15 24 L30 26 L45 15 L60 18 L75 8 L100 4" fill="none" stroke="#12C2E9" strokeWidth="2" strokeLinecap="round" />
                  <path d="M0 32 L20 28 L40 29 L60 22 L80 20 L100 14" fill="none" stroke="#1F5BFF" strokeWidth="2" strokeLinecap="round" opacity=".7" />
                </svg>
              </div>
            </div>
          </Frame>
        );
      case "landing":
        return (
          <Frame>
            <div className="flex flex-col items-center py-2 text-center">
              <span className="h-2 w-12 rounded-full bg-blue/30" />
              <div className="mt-2 h-2.5 w-4/5 rounded bg-navy" />
              <div className="mt-1.5 h-2.5 w-3/5 rounded bg-navy" />
              <div className="mt-2 h-1.5 w-2/3 rounded-full bg-line" />
              <span className="mt-3 h-4 w-20 rounded-full bg-brand-gradient" />
              <div className="mt-3 flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-5 w-10 rounded bg-surface ring-1 ring-line" />
                ))}
              </div>
            </div>
          </Frame>
        );
      case "system":
        return (
          <Frame>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 21 }).map((_, i) => (
                <span
                  key={i}
                  className={`aspect-square rounded ${[3, 9, 10, 16].includes(i) ? "bg-blue" : [5, 12].includes(i) ? "bg-cyan/50" : "bg-surface ring-1 ring-line"}`}
                />
              ))}
            </div>
            <div className="mt-2.5 flex items-center gap-2 rounded-md bg-blue-50 p-1.5">
              <Icon name="check" className="h-3 w-3 text-blue" strokeWidth={2.5} />
              <div className="h-1.5 w-2/3 rounded-full bg-blue/40" />
            </div>
          </Frame>
        );
      case "campaign":
        return (
          <div className="grid h-full grid-cols-5 gap-2">
            <div className="col-span-2 flex flex-col justify-between rounded-xl bg-navy p-3 shadow-card">
              <Icon name="megaphone" className="h-4 w-4 text-cyan" />
              <div className="space-y-1">
                <div className="h-2 w-full rounded bg-white" />
                <div className="h-2 w-2/3 rounded bg-white/60" />
                <span className="mt-1 block h-3 w-12 rounded-full bg-brand-gradient" />
              </div>
            </div>
            <div className="col-span-3 grid grid-rows-2 gap-2">
              <div className="rounded-xl bg-brand-gradient p-3 shadow-card">
                <div className="h-2 w-2/3 rounded bg-white/90" />
                <div className="mt-1 h-1.5 w-1/2 rounded bg-white/60" />
              </div>
              <div className="flex items-end gap-1 rounded-xl bg-white p-3 shadow-card ring-1 ring-line">
                {[30, 45, 38, 60, 52, 72].map((h, i) => (
                  <span key={i} className="flex-1 rounded-sm bg-blue/70" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        );
    }
  })();
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface p-5 sm:p-6" aria-hidden="true">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan/20 blur-2xl" />
      <div className="relative h-full">{inner}</div>
    </div>
  );
}
