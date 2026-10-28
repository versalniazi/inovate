import { LegalPage } from "@/components/LegalPage";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description: "How the INOVATE LTD website uses cookies and similar technologies, and how to manage your preferences.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      path="/cookie-policy"
      updated="28 October 2026"
      intro="What cookies and similar technologies this website uses, why, and how you can control them."
    >
      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. Similar technologies include local storage. Under the Privacy and
        Electronic Communications Regulations (PECR), we must ask for your consent before using non-essential cookies.
      </p>

      <h2>2. Cookies we use</h2>
      <h3>Strictly necessary</h3>
      <p>
        These are required for the website to work and cannot be switched off. We store your cookie preference in your browser’s local storage under
        the key <strong>inovate-cookie-consent</strong>, so we don’t ask you again on every page.
      </p>
      <h3>Analytics (optional)</h3>
      <p>
        If enabled on this website and only with your consent, we use analytics tools to understand how visitors use the site so we can improve it.
        Depending on configuration, these may include:
      </p>
      <ul>
        <li>
          <strong>Google Analytics</strong> (cookies such as <code>_ga</code> and <code>_ga_*</code>) — measures visits and page usage. [Confirm if used.]
        </li>
        <li>
          <strong>Meta Pixel</strong> (cookies such as <code>_fbp</code>) — measures the effectiveness of advertising. [Confirm if used.]
        </li>
      </ul>
      <p>No analytics or advertising cookies are set unless you choose “Accept analytics”.</p>

      <h2>3. Managing your preferences</h2>
      <p>
        You can change your choice at any time: <CookieSettingsButton />. You can also delete or block cookies through your browser settings, although
        some parts of the website may not then work as intended.
      </p>

      <h2>4. Contact</h2>
      <p>
        Questions about cookies: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
