export type Faq = { q: string; a: string };

export const faqs: { group: string; items: Faq[] }[] = [
  {
    group: "Pricing & quotes",
    items: [
      {
        q: "How much does a website cost?",
        a: "Our starter packages begin at £45 for a single landing page, £85 for a business website of up to 5 pages and £110 for a professional website of up to 7 pages. Larger or more complex websites are quoted individually after we review your requirements.",
      },
      {
        q: "Why are your starter prices so accessible?",
        a: "Each starter package has a clearly defined scope. That keeps the price predictable and lets you start with what you need now. If your project needs more, we provide a separate written quote before any extra work begins.",
      },
      {
        q: "How are complex projects priced?",
        a: "Complex projects such as custom software, web applications or large e-commerce stores are priced individually. We review your requirements, agree a scope and provide a written quote. A starter package is never presented as the cost of a complete complex platform.",
      },
      {
        q: "What do you need from me to provide a quote?",
        a: "A short description of your business, what you want to achieve, any websites or tools you currently use, examples you like, your preferred timeline and an approximate budget. The contact form asks for the essentials.",
      },
      {
        q: "Can I get a custom quote?",
        a: "Yes. If none of the packages match what you need, send us your project details through the contact page and we will reply with a tailored quote. Requesting a quote is free.",
      },
    ],
  },
  {
    group: "Projects & timelines",
    items: [
      {
        q: "How long does a project take?",
        a: "Small packages such as fixes, health checks and landing pages can often be completed within days. Business websites typically take one to three weeks once content is ready. Larger projects receive a timeline as part of the quote.",
      },
      {
        q: "How do I start a project?",
        a: "Use the “Get a Free Quote” form or email us. We will review your details, arrange a short discussion if needed, and send a clear scope and price. Work starts once the scope is agreed.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes. The Website Redesign Starter (from £70) modernises selected pages or sections. A complete redesign of a larger site is quoted individually.",
      },
      {
        q: "Do you work with businesses across the UK?",
        a: "Yes. We are based in Kirkcaldy, Fife, and work with businesses across Scotland — including Edinburgh and Glasgow — and throughout the United Kingdom. Most projects are run remotely by email and video call.",
      },
    ],
  },
  {
    group: "Services",
    items: [
      {
        q: "Do you build custom software?",
        a: "Yes. We build business systems, internal tools, admin panels and workflow automation. Our £150 Custom Development package covers requirements, a roadmap and a defined first feature; complete systems are quoted individually.",
      },
      {
        q: "Can you build an online store?",
        a: "Yes. Our E-commerce Starter (from £125) covers store setup, product structure, responsive design, checkout integration and basic configuration. Larger catalogues and custom features are quoted separately.",
      },
      {
        q: "Can you integrate APIs and third-party tools?",
        a: "Yes. We integrate payment providers, CRMs, booking tools, accounting software and other services that provide an API or a reliable data interface.",
      },
      {
        q: "Do you offer SEO?",
        a: "Yes. We offer technical SEO, on-page SEO, keyword research, local SEO and audits. Every website we build includes a sound SEO structure. We do not guarantee specific rankings, because search engines control their results.",
      },
      {
        q: "Do you offer digital marketing and advertising?",
        a: "Yes. We plan and manage social media marketing, content, paid advertising campaigns and conversion tracking. Advertising platform spend is paid separately, and we do not guarantee specific results.",
      },
      {
        q: "Do you offer website maintenance?",
        a: "Yes. Website Maintenance starts from £40 and covers minor updates, content changes, small fixes and basic technical support. We can also maintain sites we did not originally build after a short review.",
      },
      {
        q: "Will my website work on mobile?",
        a: "Yes. Every website and application we build is designed mobile-first and tested across phone, tablet and desktop screen sizes.",
      },
    ],
  },
];

export const allFaqs = faqs.flatMap((g) => g.items);
