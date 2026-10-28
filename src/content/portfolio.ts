// Every project here is a CONCEPT PROJECT created to demonstrate capability.
// None represents a real client. Replace with genuine work as it is delivered.

export type Visual = "website" | "store" | "dashboard" | "saas" | "landing" | "system" | "campaign";

export type Project = {
  slug: string;
  title: string;
  category: string;
  visual: Visual;
  summary: string;
  tags: string[];
  caseStudy?: {
    challenge: string;
    approach: string;
    solution: string;
    features: string[];
    technology: string[];
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    slug: "trades-business-website",
    title: "Local Trades Business Website",
    category: "Business Websites",
    visual: "website",
    summary: "A five-page website concept for a local trades business, built around clear services, service areas and a quick quote form.",
    tags: ["Website", "Responsive", "Local SEO"],
    caseStudy: {
      challenge:
        "A typical local trades business relies on word of mouth and a social media page. Potential customers cannot easily see services, coverage area or how to request a quote, and enquiries arrive by phone at inconvenient times.",
      approach:
        "We planned a five-page structure around the questions customers ask most: what you do, where you work, how much it might cost and how to get in touch. Content was written to be scannable on a phone.",
      solution:
        "A responsive website with a service overview, individual service sections, a service-area page and a short quote form that collects the details needed to price a job.",
      features: ["Quote request form with validation", "Click-to-call on mobile", "Service-area page for local search", "Fast-loading, image-optimised pages"],
      technology: ["Next.js", "TypeScript", "Tailwind CSS", "Structured data (LocalBusiness)"],
      outcome:
        "Concept outcome: the business has a credible online presence and a structured way to receive written enquiries. Real-world results would depend on the business, its market and its marketing.",
    },
  },
  {
    slug: "independent-store",
    title: "Independent Homeware Store",
    category: "E-commerce",
    visual: "store",
    summary: "An online store concept with a clean catalogue, product filtering and a short, mobile-first checkout.",
    tags: ["E-commerce", "Checkout", "Mobile"],
    caseStudy: {
      challenge:
        "An independent retailer sells through social media messages and a market stall. Orders are tracked manually and customers cannot browse the full range online.",
      approach:
        "We focused on catalogue structure first — categories, variants and product information — then designed a browsing and checkout journey optimised for phones.",
      solution:
        "An online store with organised categories, product pages with variant selection, a persistent basket and an integrated checkout through an established payment provider.",
      features: ["Category and filter navigation", "Product variants (size, colour)", "Integrated payment checkout", "Order confirmation emails"],
      technology: ["E-commerce platform", "Payment provider integration", "Responsive theme", "Product data structure"],
      outcome:
        "Concept outcome: customers can browse and buy at any time, and orders are captured in one place rather than across message threads.",
    },
  },
  {
    slug: "operations-dashboard",
    title: "Operations Dashboard",
    category: "Web Applications",
    visual: "dashboard",
    summary: "A web application concept giving a small team one place to track jobs, statuses and assignments.",
    tags: ["Web App", "Dashboard", "Roles"],
    caseStudy: {
      challenge:
        "A service business tracks jobs in a shared spreadsheet. Statuses go out of date, several people edit the same rows and managers lack a clear daily overview.",
      approach:
        "We mapped the job lifecycle from enquiry to completion, defined user roles and designed a dashboard showing what needs attention today.",
      solution:
        "A browser-based application with job records, status workflows, assignment to team members and a dashboard of open, overdue and completed work.",
      features: ["Role-based sign-in", "Job status workflow", "Team assignment and notes", "Filterable job list and overview"],
      technology: ["Next.js", "TypeScript", "PostgreSQL", "REST API"],
      outcome:
        "Concept outcome: the team works from a single source of truth with a clear audit trail. Actual efficiency gains would be measured after deployment.",
    },
  },
  {
    slug: "saas-analytics",
    title: "SaaS Analytics Interface",
    category: "SaaS Dashboards",
    visual: "saas",
    summary: "A concept interface for a subscription analytics product, with onboarding, reporting views and account settings.",
    tags: ["SaaS", "UI/UX", "Design System"],
  },
  {
    slug: "service-launch-landing",
    title: "Service Launch Landing Page",
    category: "Landing Pages",
    visual: "landing",
    summary: "A single-page concept for a new service launch, structured around one message and one call to action.",
    tags: ["Landing Page", "Conversion", "Campaign"],
  },
  {
    slug: "booking-system",
    title: "Appointment Booking System",
    category: "Software Systems",
    visual: "system",
    summary: "A concept booking system with availability management, confirmations and an admin view of upcoming appointments.",
    tags: ["Software", "Automation", "Admin Panel"],
  },
  {
    slug: "seasonal-campaign",
    title: "Seasonal Digital Campaign",
    category: "Digital Campaigns",
    visual: "campaign",
    summary: "A concept multi-channel campaign: ad creative set, landing page and conversion tracking plan.",
    tags: ["Advertising", "Creative", "Tracking"],
  },
];

export const caseStudies = projects.filter((p) => p.caseStudy);
