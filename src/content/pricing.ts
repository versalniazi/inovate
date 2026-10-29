export type Package = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  service: string; // contact form service value
  popular?: boolean;
};

export type PackageGroup = { id: string; title: string; text: string; packages: Package[] };

export const pricingGroups: PackageGroup[] = [
  {
    id: "advice",
    title: "Advice, reviews & fixes",
    text: "Expert input and quick improvements for existing websites.",
    packages: [
      {
        id: "consultation",
        name: "Quick Consultation",
        price: 15,
        description: "A focused conversation to talk through your project or problem.",
        features: ["20-minute consultation", "Technical / business discussion", "Clear recommendations"],
        service: "Consultation",
      },
      {
        id: "health-check",
        name: "Website Health Check",
        price: 25,
        description: "An expert review of your current website with practical next steps.",
        features: ["Basic website review", "Mobile usability review", "Performance observations", "Improvement recommendations"],
        service: "Website Health Check",
      },
      {
        id: "minor-fix",
        name: "Minor Website Fix",
        price: 30,
        description: "A single, well-defined issue fixed properly.",
        features: ["One minor issue", "Troubleshooting", "Layout / front-end correction"],
        service: "Maintenance & Support",
      },
      {
        id: "maintenance",
        name: "Website Maintenance",
        price: 40,
        description: "Small updates and support to keep your website current.",
        features: ["Minor updates", "Content changes", "Small fixes", "Basic technical support"],
        service: "Maintenance & Support",
      },
      {
        id: "ui-ux-improvement",
        name: "UI/UX Improvement",
        price: 55,
        description: "Design improvements for one page to make it clearer and easier to use.",
        features: ["One-page review", "UI improvements", "Layout improvements", "Mobile usability improvements"],
        service: "UI/UX Design",
      },
    ],
  },
  {
    id: "websites",
    title: "Websites",
    text: "Starter packages for new websites, landing pages and redesigns.",
    packages: [
      {
        id: "landing-page",
        name: "Landing Page",
        price: 45,
        description: "One focused, responsive page built around a single call to action.",
        features: ["One responsive landing page", "Mobile optimisation", "Call-to-action section", "Basic SEO structure"],
        service: "Website Development",
      },
      {
        id: "redesign-starter",
        name: "Website Redesign Starter",
        price: 70,
        description: "A modern refresh of selected pages or sections of your current site.",
        features: ["Selected pages / sections", "Modern responsive interface", "Layout improvement", "Mobile optimisation"],
        service: "Website Redesign",
      },
      {
        id: "business-website",
        name: "Business Website Starter",
        price: 85,
        description: "A complete small-business website to get you online professionally.",
        features: ["Up to 5 pages", "Responsive design", "Contact form", "Basic SEO structure"],
        service: "Website Development",
        popular: true,
      },
      {
        id: "professional-website",
        name: "Professional Website",
        price: 110,
        description: "A custom-designed website for businesses that need more room to grow.",
        features: ["Up to 7 pages", "Custom design", "Responsive development", "Contact forms", "Basic on-page SEO", "Performance optimisation"],
        service: "Website Development",
      },
    ],
  },
  {
    id: "marketing",
    title: "SEO & advertising",
    text: "Starter packages to help the right people find your business. Advertising platform spend is paid separately.",
    packages: [
      {
        id: "seo-foundations",
        name: "SEO Foundations",
        price: 100,
        description: "A solid technical and on-page SEO foundation for an existing website.",
        features: [
          "Technical SEO audit",
          "On-page optimisation for up to 5 pages",
          "Titles, meta descriptions & headings",
          "Keyword research for your services",
          "Sitemap & Search Console submission",
          "Local SEO recommendations",
        ],
        service: "SEO",
      },
      {
        id: "ad-campaign-starter",
        name: "Ad Campaign Starter",
        price: 115,
        description: "One digital advertising campaign planned, created and set up with tracking.",
        features: [
          "Campaign strategy & audience targeting",
          "One campaign on one platform",
          "Ad copy & up to 3 creative variations",
          "Conversion tracking setup",
          "Landing page review",
          "Post-launch performance summary",
        ],
        service: "Advertising",
      },
    ],
  },
  {
    id: "build",
    title: "Larger builds, e‑commerce & software",
    text: "Bigger websites and starting points for stores, apps and software. Full projects are quoted after requirements are reviewed.",
    packages: [
      {
        id: "ecommerce-starter",
        name: "E-commerce Starter",
        price: 125,
        description: "The foundations of an online store, set up and ready to configure.",
        features: ["Store setup", "Product structure", "Responsive design", "Checkout integration", "Basic configuration"],
        service: "E-commerce",
      },
      {
        id: "web-app-starter",
        name: "Web Application Starter",
        price: 135,
        description: "Initial setup and planning for a browser-based application.",
        features: ["Initial application setup", "Custom interface", "Core feature planning", "Responsive UI", "Basic database / API planning"],
        service: "Web Applications",
      },
      {
        id: "custom-development",
        name: "Custom Development",
        price: 150,
        description: "Requirements, roadmap and a defined first piece of custom development.",
        features: [
          "Requirements consultation",
          "Development roadmap",
          "Defined feature implementation",
          "Responsive interface",
          "Basic integration",
          "Technical support",
        ],
        service: "Custom Software",
      },
      {
        id: "business-growth",
        name: "Business Growth Package",
        price: 300,
        description: "A larger website with SEO, analytics and a month of support, ready for growth.",
        features: [
          "Up to 10 pages",
          "Custom design & responsive development",
          "Contact & quote forms",
          "On-page SEO for every page",
          "Google Analytics & Search Console setup",
          "Google Business Profile setup guidance",
          "1 month of minor updates & support",
        ],
        service: "Website Development",
      },
    ],
  },
];

export const allPackages = pricingGroups.flatMap((g) => g.packages);
export const getPackage = (id: string) => allPackages.find((p) => p.id === id);

export const pricingDisclaimer =
  "Prices shown are starting prices for defined scopes. Larger or more complex projects are quoted individually after requirements are reviewed.";
