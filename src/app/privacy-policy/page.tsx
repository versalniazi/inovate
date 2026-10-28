import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How INOVATE LTD collects, uses and protects personal information submitted through this website, and your rights under UK data protection law.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy"
      updated="28 October 2026"
      intro="How we collect, use and protect your personal information when you use this website or contact us."
    >
      <h2>1. Who we are</h2>
      <p>
        This website is operated by <strong>{site.name}</strong>, a private limited company registered in Scotland (company number{" "}
        {site.company.number}) with its registered office at {site.address.street}, {site.address.locality}, {site.address.region},{" "}
        {site.address.postcode}, {site.address.country}. For the purposes of UK data protection law, {site.name} is the controller of personal
        data collected through this website.
      </p>
      <p>
        Contact for privacy matters: <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
      </p>
      <p>ICO registration number: [to be completed once registered with the Information Commissioner’s Office, if required].</p>

      <h2>2. Information we collect</h2>
      <ul>
        <li>
          <strong>Enquiry information</strong> you provide through our contact form or by email: your name, business name, email address, phone number,
          the service you are interested in, your approximate budget and your project description.
        </li>
        <li>
          <strong>Technical information</strong> such as your IP address, browser type and pages visited, processed by our hosting provider for
          security and to deliver the website.
        </li>
        <li>
          <strong>Analytics information</strong>, only if you consent to analytics cookies. See our <Link href="/cookie-policy">Cookie Policy</Link>.
        </li>
      </ul>

      <h2>3. How and why we use your information</h2>
      <ul>
        <li>To respond to your enquiry and prepare a quote — lawful basis: steps taken at your request before entering into a contract, and our legitimate interests in responding to business enquiries.</li>
        <li>To deliver services you engage us for — lawful basis: performance of a contract.</li>
        <li>To keep business and accounting records — lawful basis: legal obligation.</li>
        <li>To protect the website against spam and abuse — lawful basis: legitimate interests.</li>
        <li>To understand how the website is used (analytics) — lawful basis: consent, which you can withdraw at any time.</li>
      </ul>
      <p>We do not sell your personal information, and we do not use it for automated decision-making.</p>

      <h2>4. Who we share it with</h2>
      <p>We share personal information only where necessary, with service providers acting on our behalf, such as:</p>
      <ul>
        <li>Website hosting provider: [e.g. Vercel Inc. — confirm].</li>
        <li>Email delivery provider used to send form submissions: [confirm provider].</li>
        <li>Analytics providers, only with your consent: [e.g. Google Analytics, Meta — confirm if used].</li>
        <li>Professional advisers, and authorities where required by law.</li>
      </ul>

      <h2>5. International transfers</h2>
      <p>
        Some providers may process data outside the UK. Where this happens, we rely on appropriate safeguards such as UK adequacy regulations or the
        International Data Transfer Agreement / Addendum. [Confirm for each provider.]
      </p>

      <h2>6. How long we keep it</h2>
      <p>
        Enquiries that do not lead to a project are kept for up to [12 months]. Client and accounting records are kept for as long as required by law
        (typically six years). [Confirm retention periods.]
      </p>

      <h2>7. Your rights</h2>
      <p>Under UK data protection law you have the right to:</p>
      <ul>
        <li>access the personal information we hold about you;</li>
        <li>ask us to correct inaccurate information;</li>
        <li>ask us to delete your information;</li>
        <li>restrict or object to our processing;</li>
        <li>data portability, where applicable;</li>
        <li>withdraw consent at any time, where we rely on consent.</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at <a href={`mailto:${site.email}`}>{site.email}</a>. You also have the right to complain to the
        Information Commissioner’s Office (ICO) at <a href="https://ico.org.uk" rel="noopener noreferrer">ico.org.uk</a>.
      </p>

      <h2>8. Security</h2>
      <p>
        We use appropriate technical and organisational measures to protect personal information, including encrypted (HTTPS) connections and limited
        access to enquiry data.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>We may update this policy from time to time. The latest version will always be published on this page.</p>
    </LegalPage>
  );
}
