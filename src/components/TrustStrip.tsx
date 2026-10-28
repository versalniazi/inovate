import { Icon, type IconName } from "./Icon";

const items: [IconName, string][] = [
  ["code", "Software Development"],
  ["browser", "Web Development"],
  ["spark", "Digital Solutions"],
  ["device", "Responsive Design"],
  ["target", "Business-Focused"],
  ["pin", "UK-Based"],
];

export function TrustStrip() {
  return (
    <section aria-label="What we focus on" className="border-y border-line bg-white">
      <ul className="container grid grid-cols-2 gap-x-4 gap-y-5 py-7 sm:grid-cols-3 lg:grid-cols-6">
        {items.map(([icon, label]) => (
          <li key={label} className="flex items-center gap-2.5 text-sm font-semibold text-navy sm:text-[0.95rem]">
            <Icon name={icon} className="h-5 w-5 shrink-0 text-blue" />
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
