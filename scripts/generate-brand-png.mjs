// Rasterises brand SVGs into PNG/ICO assets and renders the Open Graph image.
// Requires Playwright with Chromium (dev-only):  npx playwright install chromium
// Run: npm run brand:png   (runs scripts/brand.mjs first to refresh the SVGs)
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

execFileSync(process.execPath, ["scripts/brand.mjs"], { stdio: "inherit" });

const svg = (name) => readFileSync(`public/${name}`, "utf8");
const font = (pkg, file) => readFileSync(`node_modules/@fontsource/${pkg}/files/${file}`).toString("base64");
const fontCss = `
@font-face{font-family:Sora;font-weight:600;src:url(data:font/woff2;base64,${font("sora", "sora-latin-600-normal.woff2")}) format("woff2")}
@font-face{font-family:Inter;font-weight:500;src:url(data:font/woff2;base64,${font("inter", "inter-latin-500-normal.woff2")}) format("woff2")}`;

const sized = (s, w, h = w) => s.replace(/width="[\d.]+" height="[\d.]+"/, `width="${w}" height="${h}"`);

const browser = await chromium.launch();
const page = await browser.newPage();

async function render(html, w, h, out) {
  await page.setViewportSize({ width: w, height: h });
  await page.setContent(`<!doctype html><html><head><style>${fontCss}html,body{margin:0;padding:0;background:transparent}</style></head><body>${html}</body></html>`);
  await page.evaluate(() => document.fonts.ready);
  const buf = await page.screenshot({ omitBackground: true, clip: { x: 0, y: 0, width: w, height: h } });
  if (out) writeFileSync(`public/${out}`, buf);
  return buf;
}

// Square app icons from the tile SVGs.
const appIcon = svg("app-icon.svg");
await render(sized(appIcon, 512), 512, 512, "app-icon.png");
await render(sized(appIcon, 512), 512, 512, "icon-512.png");
await render(sized(appIcon, 192), 192, 192, "icon-192.png");
await render(sized(svg("social-icon.svg"), 400), 400, 400, "social-icon.png");
// Full-bleed tiles (no rounded corners) for platforms that apply their own mask.
const square = (s) => s.replace(/rx="[\d.]+"/, 'rx="0"');
await render(sized(square(appIcon), 180), 180, 180, "apple-touch-icon.png");
await render(`<div style="width:512px;height:512px;background:#0B1530;display:flex;align-items:center;justify-content:center">${sized(svg("mark.svg"), 162, 240)}</div>`, 512, 512, "icon-maskable-512.png");

// favicon.ico — a single 32×32 PNG wrapped in an ICO container.
const fav = await render(sized(svg("favicon.svg"), 32), 32, 32);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(fav.length, 14);
header.writeUInt32LE(22, 18);
writeFileSync("public/favicon.ico", Buffer.concat([header, fav]));

// Open Graph image (1200×630).
await render(
  `<div style="position:relative;width:1200px;height:630px;overflow:hidden;background:#070D1F;font-family:Inter,sans-serif">
    <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:48px 48px;-webkit-mask-image:radial-gradient(ellipse at 70% 40%,#000 20%,transparent 75%)"></div>
    <div style="position:absolute;right:-140px;top:-160px;width:620px;height:620px;border-radius:50%;background:radial-gradient(closest-side,rgba(31,91,255,.55),transparent)"></div>
    <div style="position:absolute;right:120px;bottom:-200px;width:460px;height:460px;border-radius:50%;background:radial-gradient(closest-side,rgba(18,194,233,.35),transparent)"></div>
    <div style="position:absolute;right:150px;top:130px">${sized(svg("mark.svg"), 250, 370)}</div>
    <div style="position:absolute;left:80px;top:80px">${sized(svg("logo-dark.svg"), 300, 70)}</div>
    <div style="position:absolute;left:80px;top:250px;width:780px">
      <div style="font-family:Sora;font-weight:600;font-size:66px;line-height:1.08;color:#fff;letter-spacing:-1px">Digital Solutions.<br><span style="background:linear-gradient(135deg,#1F5BFF,#12C2E9);-webkit-background-clip:text;color:transparent">Built to Grow.</span></div>
      <div style="margin-top:28px;font-size:26px;font-weight:500;color:rgba(255,255,255,.72)">Software, Web &amp; Digital Solutions · Kirkcaldy, Scotland</div>
    </div>
  </div>`,
  1200,
  630,
  "og-image.png",
);

await browser.close();
console.log("Brand PNG/ICO assets written to /public");
