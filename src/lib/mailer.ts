import "server-only";
import nodemailer from "nodemailer";
import type { Enquiry } from "./enquiry";

// Server-only. Secrets are read from environment variables and never reach the browser.

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export type SendResult = { ok: true } | { ok: false; reason: "not_configured" | "send_failed" };

export async function sendEnquiry(e: Enquiry): Promise<SendResult> {
  const service = (process.env.EMAIL_SERVICE || "").toLowerCase();
  const rows: [string, string][] = [
    ["Name", e.name],
    ["Business", e.business || "—"],
    ["Email", e.email],
    ["Phone", e.phone || "—"],
    ["Service", e.service],
    ["Budget", e.budget],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nProject description:\n${e.message}\n`;

  if (service === "console" || (!service && process.env.NODE_ENV !== "production")) {
    console.info("[contact] New enquiry (EMAIL_SERVICE=console — not emailed):\n" + text);
    return { ok: true };
  }

  const { EMAIL_FROM, EMAIL_TO, SMTP_HOST, SMTP_USER, SMTP_PASSWORD } = process.env;
  if (service !== "smtp" || !EMAIL_FROM || !EMAIL_TO || !SMTP_HOST) {
    console.error("[contact] Email is not configured. Set EMAIL_SERVICE=smtp, EMAIL_FROM, EMAIL_TO and SMTP_* variables.");
    return { ok: false, reason: "not_configured" };
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASSWORD } : undefined,
  });

  const html = `<div style="font-family:system-ui,sans-serif;color:#1A2233">
<h2 style="color:#0B1530;margin:0 0 16px">New website enquiry</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#5B6678;vertical-align:top"><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table>
<h3 style="color:#0B1530;margin:20px 0 8px">Project description</h3>
<p style="white-space:pre-wrap;margin:0">${escapeHtml(e.message)}</p></div>`;

  try {
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: { name: oneLine(e.name), address: oneLine(e.email) },
      subject: oneLine(`New enquiry: ${e.service} — ${e.name}`).slice(0, 180),
      text,
      html,
    });
    return { ok: true };
  } catch (err) {
    console.error("[contact] Failed to send enquiry email:", err instanceof Error ? err.message : err);
    return { ok: false, reason: "send_failed" };
  }
}
