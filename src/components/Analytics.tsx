"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";

// Analytics load only after the visitor accepts non-essential cookies (UK GDPR / PECR).
// IDs are configured with environment variables; nothing loads when they are blank.
const KEY = "inovate-cookie-consent";
type Consent = "accepted" | "rejected" | null;

export function Analytics({ gaId, pixelId }: { gaId?: string; pixelId?: string }) {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      setConsent(localStorage.getItem(KEY) as Consent);
    } catch {}
    setReady(true);
    const reopen = () => setConsent(null);
    window.addEventListener("inovate:cookie-settings", reopen);
    return () => window.removeEventListener("inovate:cookie-settings", reopen);
  }, []);

  if (!gaId && !pixelId) return null;

  const choose = (c: Exclude<Consent, null>) => {
    try {
      localStorage.setItem(KEY, c);
    } catch {}
    setConsent(c);
  };

  return (
    <>
      {consent === "accepted" && gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(gaId)},{anonymize_ip:true});`}
          </Script>
        </>
      ) : null}
      {consent === "accepted" && pixelId ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',${JSON.stringify(pixelId)});fbq('track','PageView');`}
        </Script>
      ) : null}

      {ready && consent === null ? (
        <div role="region" aria-label="Cookie preferences" className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-xl rounded-2xl border border-line bg-white p-5 shadow-lift sm:inset-x-6 sm:bottom-6">
          <p className="text-sm text-ink">
            We use essential cookies to run this site. With your permission we’d also like to use analytics cookies to understand how the site is used.
            See our{" "}
            <Link href="/cookie-policy" className="font-semibold text-blue underline-offset-2 hover:underline">
              Cookie Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => choose("accepted")} className="h-10 rounded-full bg-blue px-5 text-sm font-semibold text-white hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2">
              Accept analytics
            </button>
            <button type="button" onClick={() => choose("rejected")} className="h-10 rounded-full px-5 text-sm font-semibold text-navy ring-1 ring-inset ring-line hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue">
              Essential only
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
