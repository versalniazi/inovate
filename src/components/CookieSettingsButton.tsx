"use client";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="font-semibold text-blue underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded"
      onClick={() => {
        try {
          localStorage.removeItem("inovate-cookie-consent");
        } catch {}
        window.dispatchEvent(new Event("inovate:cookie-settings"));
      }}
    >
      Change cookie preferences
    </button>
  );
}
