// Single source of truth for INOVATE brand geometry.
// Generates every SVG logo asset in /public. Run: node scripts/brand.mjs
import { writeFileSync } from "node:fs";

export const colors = {
  navy: "#0B1530",
  navy950: "#070D1F",
  blue: "#1F5BFF",
  cyan: "#12C2E9",
  white: "#FFFFFF",
};

// ── Mark: a forward-leaning "i" — a stem and a detached square "spark" ──
// Both shapes share one 23° lean: forward motion, precision, growth.
const STEM = "M10 44 L21 18 H31 L20 44 Z";
const SPARK = "M23.2 13 L27 4 H37 L33.2 13 Z";

function mark({ x = 0, y = 0, s = 1, id = "g", mono }) {
  const grad = mono
    ? ""
    : `<defs><linearGradient id="${id}" x1="10" y1="44" x2="34" y2="10" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${colors.blue}"/><stop offset="1" stop-color="${colors.cyan}"/></linearGradient></defs>`;
  const stemFill = mono ?? `url(#${id})`;
  const sparkFill = mono ?? colors.cyan;
  return `${grad}<g transform="translate(${x} ${y}) scale(${s})"><path d="${STEM}" fill="${stemFill}"/><path d="${SPARK}" fill="${sparkFill}"/></g>`;
}

// ── Wordmark: geometric uppercase INOVATE drawn as strokes (font-independent) ──
// Cap height 28, stroke 4.4. Clipped to the cap height so diagonal ends sit flat.
const W = 4.8;
const glyphs = [
  { w: 4.8, d: "M2.4 0V28" }, // I
  { w: 22, d: "M2.4 28V0L19.6 28V0" }, // N
  { w: 28, circle: true }, // O
  { w: 24, d: "M1.2 -2L12 28L22.8 -2" }, // V
  { w: 24, d: "M1.2 30L12 0L22.8 30M6.4 19.2H17.6" }, // A
  { w: 22, d: "M0 2.4H22M11 2.4V28" }, // T
  { w: 19, d: "M19 2.4H2.4V25.6H19M2.4 14H16.5" }, // E
];
const TRACK = 6.6;
export const WORD_WIDTH = glyphs.reduce((a, g) => a + g.w, 0) + TRACK * (glyphs.length - 1);

function wordmark({ x, y, s, fill, id = "wm" }) {
  let cx = 0;
  const parts = glyphs.map((g) => {
    const out = g.circle
      ? `<circle cx="${cx + 14}" cy="14" r="${14 - W / 2}"/>`
      : `<path transform="translate(${cx} 0)" d="${g.d}"/>`;
    cx += g.w + TRACK;
    return out;
  });
  return `<defs><clipPath id="${id}"><rect x="-2" y="0" width="${WORD_WIDTH + 4}" height="28"/></clipPath></defs><g transform="translate(${x} ${y}) scale(${s})"><g clip-path="url(#${id})" fill="none" stroke="${fill}" stroke-width="${W}" stroke-linejoin="miter" stroke-miterlimit="2.2">${parts.join("")}</g></g>`;
}

const svg = (w, h, body, title) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${title}"><title>${title}</title>${body}</svg>\n`;

// The mark's ink box is x 10–37, y 4–44 (27 × 40).
const MARK_BOX = { x: 10, y: 4, w: 27, h: 40 };

// Horizontal lockup: mark 40 tall, wordmark cap height 20.
const capS = 20 / 28;
const H_X = MARK_BOX.w + 11;
const H_W = Math.ceil(H_X + WORD_WIDTH * capS + 2);
const horizontal = (wordFill, mono) =>
  svg(H_W, 40, mark({ x: -MARK_BOX.x, y: -MARK_BOX.y, id: "ig", mono }) + wordmark({ x: H_X, y: 10, s: capS, fill: wordFill }), "INOVATE");

// Stacked (primary) lockup.
const stackS = 26 / 28;
const ST_W = Math.ceil(WORD_WIDTH * stackS + 8);
const stackMarkS = 1.6;
const stacked = (wordFill) =>
  svg(
    ST_W,
    128,
    mark({ x: ST_W / 2 - (MARK_BOX.x + MARK_BOX.w / 2) * stackMarkS, y: -MARK_BOX.y * stackMarkS, s: stackMarkS, id: "sg" }) +
      wordmark({ x: 4, y: 96, s: stackS, fill: wordFill }),
    "INOVATE",
  );

// Tile icon (app icon / social / favicon). markScale sets the mark's size inside the tile.
const tile = (size, radius, markScale, bg = colors.navy) => {
  const x = size / 2 - (MARK_BOX.x + MARK_BOX.w / 2) * markScale;
  const y = size / 2 - (MARK_BOX.y + MARK_BOX.h / 2) * markScale;
  return svg(
    size,
    size,
    `<rect width="${size}" height="${size}" rx="${radius}" fill="${bg}"/>` + mark({ x, y, s: markScale, id: "tg" }),
    "INOVATE",
  );
};

const files = {
  "public/logo.svg": horizontal(colors.navy),
  "public/logo-light.svg": horizontal(colors.navy),
  "public/logo-dark.svg": horizontal(colors.white),
  "public/logo-mono.svg": horizontal(colors.navy, colors.navy),
  "public/logo-mono-white.svg": horizontal(colors.white, colors.white),
  "public/logo-stacked.svg": stacked(colors.navy),
  "public/logo-stacked-dark.svg": stacked(colors.white),
  "public/mark.svg": svg(MARK_BOX.w, MARK_BOX.h, mark({ x: -MARK_BOX.x, y: -MARK_BOX.y, id: "mg" }), "INOVATE mark"),
  "public/icon.svg": tile(64, 14, 1.0),
  "public/favicon.svg": tile(32, 7, 0.6),
  "public/app-icon.svg": tile(512, 112, 7.6),
  "public/social-icon.svg": tile(400, 0, 5.2),
};

for (const [path, content] of Object.entries(files)) writeFileSync(path, content);
console.log("Wrote", Object.keys(files).length, "SVG files. Horizontal width:", H_W);
