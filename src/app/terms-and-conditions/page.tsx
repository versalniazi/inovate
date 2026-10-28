import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site";
import { pricingDisclaimer } from "@/content/pricing";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for using the INOVATE LTD website and for quotes and services provided by INOVATE LTD.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      path="/terms-and-conditions"
      updated="28 October 2026"
      intro="The terms that apply when you use this website, request a quote or engage INOVATE LTD for services."
    >
      <h2>1. About us</h2>
      <p>
        {site.name} is a private limited company registered in Scotland (company number {site.company.number}). Registered office:{" "}
        {site.address.street}, {site.address.locality}, {site.address.region}, {site.address.postcode}. Email:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>2. Using this website</h2>
      <p>
        You may use this website for lawful purposes only. We aim to keep information accurate and up to date but do not guarantee that the website
        will always be available or error-free. Content on this website is for general information and does not form an offer capable of acceptance.
      </p>

      <h2>3. Quotes and pricing</h2>
      <p>{pricingDisclaimer}</p>
      <ul>
        <li>All starter packages cover only the scope described on our <Link href="/pricing">Pricing</Link> page.</li>
        <li>Work outside an agreed scope will be quoted separately before it begins.</li>
        <li>Quotes are valid for [30 days] unless stated otherwise.</li>
        <li>Prices are in pounds sterling. [State whether prices include or exclude VAT once VAT status is confirmed.]</li>
        <li>Third-party costs — such as domain names, hosting, software licences, premium plugins and advertising spend — are not included unless stated.</li>
      </ul>

      <h2>4. Agreeing a project</h2>
      <p>
        A contract is formed when we confirm a written scope and you accept it in writing (including by email). Project-specific terms in a proposal or
        statement of work take priority over these general terms. [Set out deposit and payment terms, e.g. percentage due on acceptance and on
        completion.]
      </p>

      <h2>5. Your responsibilities</h2>
      <ul>
        <li>Providing accurate information, content and feedback on time.</li>
        <li>Ensuring you have the rights to any content, images or materials you supply.</li>
        <li>Reviewing and approving work at agreed stages.</li>
      </ul>

      <h2>6. Intellectual property</h2>
      <p>
        [Set out when ownership of deliverables transfers to the client — commonly on full payment — and any retained rights in pre-existing tools,
        libraries or code.] Third-party and open-source components remain subject to their own licences.
      </p>

      <h2>7. Results</h2>
      <p>
        We do not guarantee specific business results, search rankings, traffic, advertising performance or sales. Outcomes depend on many factors
        outside our control.
      </p>

      <h2>8. Liability</h2>
      <p>
        Nothing in these terms limits liability that cannot legally be limited. [Insert limitation of liability clause, reviewed by a legal adviser.]
      </p>

      <h2>9. Cancellation</h2>
      <p>[Set out cancellation terms, including any cancellation rights for consumers under the Consumer Contracts Regulations where applicable.]</p>

      <h2>10. Governing law</h2>
      <p>These terms are governed by the law of Scotland, and the Scottish courts have jurisdiction. [Confirm with legal adviser.]</p>

      <h2>11. Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
      </p>
    </LegalPage>
  );
}
