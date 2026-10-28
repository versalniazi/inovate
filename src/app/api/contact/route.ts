import { NextResponse, type NextRequest } from "next/server";
import { validateEnquiry, type Enquiry } from "@/lib/enquiry";
import { sendEnquiry } from "@/lib/mailer";

export const runtime = "nodejs";

// Best-effort in-memory rate limit (per server instance). For high traffic,
// replace with a shared store such as Upstash Redis or Vercel KV.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const str = (v: unknown) => (typeof v === "string" ? v : "");

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";

  if (!req.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ message: "Unsupported request." }, { status: 415 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  // Spam protection: honeypot field and minimum fill time. Respond as if successful
  // so bots get no signal, but do not send anything.
  const elapsed = Number(body.elapsed);
  if (str(body.company_website) || !Number.isFinite(elapsed) || elapsed < 3000) {
    return NextResponse.json({ ok: true });
  }

  if (rateLimited(ip)) {
    return NextResponse.json({ message: "Too many enquiries in a short time. Please try again later." }, { status: 429 });
  }

  const enquiry: Enquiry = {
    name: str(body.name).trim(),
    business: str(body.business).trim(),
    email: str(body.email).trim(),
    phone: str(body.phone).trim(),
    service: str(body.service),
    budget: str(body.budget),
    message: str(body.message).trim(),
  };

  const errors = validateEnquiry(enquiry);
  if (Object.keys(errors).length) {
    return NextResponse.json({ message: "Please check the highlighted fields.", errors }, { status: 422 });
  }

  const result = await sendEnquiry(enquiry);
  if (!result.ok) {
    return NextResponse.json({ message: "Sorry, we couldn’t send your enquiry right now." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
