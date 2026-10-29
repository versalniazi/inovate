"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { budgetOptions, serviceOptions, validateEnquiry, limits, type Enquiry, type FieldErrors } from "@/lib/enquiry";
import { getPackage } from "@/content/pricing";
import { site } from "@/content/site";
import { Icon } from "./Icon";
import { buttonClass } from "./Button";

type Status = "idle" | "submitting" | "success" | "error";

const empty: Enquiry = { name: "", business: "", email: "", phone: "", service: "", budget: "", message: "" };

const inputCls =
  "mt-2 block w-full rounded-xl border-0 bg-white px-4 py-3 text-ink shadow-sm ring-1 ring-inset ring-line placeholder:text-muted/70 transition focus:outline-none focus:ring-2 focus:ring-blue aria-[invalid=true]:ring-red-500";

function budgetFor(price: number) {
  if (price <= 50) return "£15–£50";
  if (price <= 100) return "£50–£100";
  if (price <= 150) return "£100–£150";
  return "£150–£500";
}

export function ContactForm() {
  const params = useSearchParams();
  const [values, setValues] = useState<Enquiry>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const startedAt = useRef(Date.now());
  const statusRef = useRef<HTMLDivElement>(null);

  // Prefill from ?package= or ?service= links on pricing and service pages.
  useEffect(() => {
    const pkg = getPackage(params.get("package") ?? "");
    const service = params.get("service");
    if (pkg) {
      setValues((v) => ({
        ...v,
        service: pkg.service,
        budget: budgetFor(pkg.price),
        message: v.message || `I'm interested in the ${pkg.name} package (from £${pkg.price}). `,
      }));
    } else if (service && (serviceOptions as readonly string[]).includes(service)) {
      setValues((v) => ({ ...v, service }));
    }
  }, [params]);

  const set = (k: keyof Enquiry) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validateEnquiry(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    setServerMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          company_website: (form.elements.namedItem("company_website") as HTMLInputElement).value, // honeypot
          elapsed: Date.now() - startedAt.current,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string; errors?: FieldErrors };
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.message || "Something went wrong.");
      }
      setStatus("success");
      setValues(empty);
    } catch (err) {
      setStatus("error");
      setServerMessage(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      requestAnimationFrame(() => statusRef.current?.focus());
    }
  }

  if (status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-3xl border border-line bg-white p-8 text-center shadow-card focus:outline-none sm:p-12">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h2 className="mt-6 font-display text-2xl font-semibold text-navy">Thank you — your enquiry has been sent</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          We’ll review your project details and reply by email as soon as we can. If it’s urgent, call us on{" "}
          <a className="font-semibold text-blue" href={site.phoneHref}>
            {site.phone}
          </a>
          .
        </p>
        <button
          type="button"
          className={buttonClass("secondary", "md", "mt-8")}
          onClick={() => {
            startedAt.current = Date.now();
            setStatus("idle");
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const err = (k: keyof Enquiry) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
        <Icon name="close" className="h-3.5 w-3.5" strokeWidth={2.5} />
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof Enquiry) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${k}-error` : undefined });
  const label = "block text-sm font-semibold text-navy";
  const req = (
    <span className="text-blue" aria-hidden="true">
      {" "}
      *
    </span>
  );

  return (
    <form noValidate onSubmit={onSubmit} className="relative rounded-3xl border border-line bg-white p-6 shadow-card sm:p-9" aria-describedby="form-note">
      {status === "error" ? (
        <div ref={statusRef} tabIndex={-1} role="alert" className="mb-6 flex gap-3 rounded-2xl bg-red-50 p-4 text-sm text-red-800 ring-1 ring-red-200 focus:outline-none">
          <Icon name="close" className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
          <p>
            {serverMessage} You can also email us directly at{" "}
            <a className="font-semibold underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Full Name{req}
          </label>
          <input id="name" name="name" autoComplete="name" required maxLength={limits.name} className={inputCls} value={values.name} onChange={set("name")} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="business" className={label}>
            Business Name
          </label>
          <input id="business" name="business" autoComplete="organization" maxLength={limits.business} className={inputCls} value={values.business} onChange={set("business")} {...aria("business")} />
          {err("business")}
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email{req}
          </label>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" required maxLength={limits.email} className={inputCls} value={values.email} onChange={set("email")} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={limits.phone} className={inputCls} value={values.phone} onChange={set("phone")} {...aria("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="service" className={label}>
            Service{req}
          </label>
          <select id="service" name="service" required className={`${inputCls} select`} value={values.service} onChange={set("service")} {...aria("service")}>
            <option value="" disabled>
              Choose a service
            </option>
            {serviceOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          {err("service")}
        </div>
        <div>
          <label htmlFor="budget" className={label}>
            Budget{req}
          </label>
          <select id="budget" name="budget" required className={`${inputCls} select`} value={values.budget} onChange={set("budget")} {...aria("budget")}>
            <option value="" disabled>
              Choose a budget range
            </option>
            {budgetOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          {err("budget")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>
            Project Description{req}
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            maxLength={limits.message}
            placeholder="What would you like to build or improve? Include any deadlines, links or examples that help."
            className={inputCls}
            value={values.message}
            onChange={set("message")}
            {...aria("message")}
          />
          {err("message")}
        </div>
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-sm text-muted">
          Fields marked <span className="text-blue">*</span> are required. We use your details only to respond to your enquiry — see our{" "}
          <a href="/privacy-policy" className="font-medium text-blue underline-offset-2 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
        <button type="submit" className={buttonClass("primary", "lg", "shrink-0")} disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Request a Free Quote <Icon name="arrow" className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {status === "submitting" ? "Sending your enquiry" : ""}
      </p>
    </form>
  );
}
