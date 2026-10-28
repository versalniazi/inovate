import type { IconName } from "@/components/Icon";

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  icon: IconName;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  offerings: { title: string; text: string }[];
  approach: string[];
  suitedFor: string[];
  pricingIds: string[];
  faqs: { q: string; a: string }[];
  note?: string;
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    navTitle: "Website Development",
    icon: "browser",
    short: "Fast, responsive business websites, landing pages and redesigns built to turn visitors into enquiries.",
    metaTitle: "Website Development in Scotland | Business Websites",
    metaDescription:
      "Responsive, fast and SEO-friendly business websites, landing pages and redesigns from INOVATE LTD in Kirkcaldy, Fife — serving businesses across Scotland and the UK.",
    h1: "Website Development for Growing Businesses",
    intro:
      "Your website is often the first conversation a customer has with your business. We design and build clear, fast and responsive websites that explain what you do, earn trust and make it easy for people to get in touch.",
    offerings: [
      { title: "Business websites", text: "Professional multi-page websites that present your services clearly and guide visitors towards an enquiry." },
      { title: "Corporate sites", text: "Structured, well-organised sites for established organisations that need to communicate with several audiences." },
      { title: "Landing pages", text: "Focused single pages for a campaign, product or service, built around one clear call to action." },
      { title: "Responsive design", text: "Layouts that work properly on phones, tablets, laptops and large screens — not just shrink to fit." },
      { title: "Website redesign", text: "A modern refresh of an existing site, improving layout, readability, mobile usability and calls to action." },
      { title: "Performance", text: "Lean code, optimised images and sensible hosting choices so pages load quickly on real mobile connections." },
      { title: "Forms & enquiries", text: "Contact and quote forms with validation and spam protection that deliver enquiries straight to your inbox." },
      { title: "SEO-friendly structure", text: "Semantic HTML, clean URLs, metadata and heading structure that give search engines a clear picture of your pages." },
    ],
    approach: [
      "Agree the goals of the site, the audience and the pages you need.",
      "Plan content and page structure before any visual design starts.",
      "Design key pages, review together, then build responsively.",
      "Test on real devices, check forms and metadata, then launch.",
    ],
    suitedFor: ["New businesses that need a credible first website", "Businesses with an outdated or hard-to-update site", "Teams launching a new service or campaign"],
    pricingIds: ["landing-page", "business-website", "professional-website", "redesign-starter"],
    faqs: [
      { q: "How long does a business website take?", a: "A small starter website can often be completed within one to two weeks once content is ready. Larger sites are scheduled after we agree the scope." },
      { q: "Will I be able to update the website myself?", a: "If you need to edit content regularly we can recommend and set up a suitable content management approach as part of the quote." },
      { q: "Do you write the website content?", a: "We can help structure and refine your content. Your knowledge of your business is essential, so we usually work from your notes or a short discussion." },
    ],
  },
  {
    slug: "software-development",
    title: "Custom Software",
    navTitle: "Custom Software Development",
    icon: "code",
    short: "Business systems, internal tools and automation designed around how your team actually works.",
    metaTitle: "Custom Software Development UK | Business Systems & Tools",
    metaDescription:
      "Custom software development from INOVATE LTD: business systems, internal tools, admin panels, workflow automation, databases and APIs for UK businesses.",
    h1: "Custom Software Development",
    intro:
      "Off-the-shelf tools rarely fit every process. We build focused software — internal tools, admin panels and automated workflows — that removes repetitive work and gives your team one reliable place to get things done.",
    offerings: [
      { title: "Business systems", text: "Software for managing jobs, customers, bookings, stock or records in a way that reflects your process." },
      { title: "Internal tools", text: "Practical tools for staff, replacing spreadsheets and manual steps with structured, validated data entry." },
      { title: "Workflows & automation", text: "Automating repetitive tasks such as notifications, document generation, data syncing and status updates." },
      { title: "Admin panels", text: "Secure back-office interfaces for managing content, users, orders and settings." },
      { title: "Databases", text: "Well-designed data models so information stays consistent, searchable and ready to report on." },
      { title: "Authentication", text: "User accounts, roles and permissions so the right people see the right information." },
      { title: "APIs", text: "Clean APIs that let your software talk to websites, apps and third-party services." },
      { title: "Business automation", text: "Connecting the tools you already use so data moves between them without copy-and-paste." },
    ],
    approach: [
      "Map the current process and identify where time is lost.",
      "Define a clear first version with the features that matter most.",
      "Build in stages with regular demonstrations and feedback.",
      "Deploy, document and support the system as it grows.",
    ],
    suitedFor: ["Businesses running key processes on spreadsheets", "Teams that repeat the same manual tasks every day", "Organisations whose tools do not talk to each other"],
    pricingIds: ["custom-development", "consultation", "web-app-starter"],
    faqs: [
      { q: "Does custom software cost £150?", a: "No. The £150 Custom Development package covers a requirements consultation, a development roadmap and a defined, limited piece of work. Complete software systems are quoted individually once the requirements are clear." },
      { q: "Can you work with our existing systems?", a: "Often, yes. We review what you already use and look at integration options through APIs, data exports or automation tools." },
      { q: "Who owns the code?", a: "Ownership and licensing are set out in your written agreement before work begins. We discuss this openly at the quote stage." },
    ],
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    navTitle: "Web Applications",
    icon: "layers",
    short: "Customer portals, dashboards, booking systems and SaaS platforms that run in the browser.",
    metaTitle: "Web Application Development Scotland | Portals & Dashboards",
    metaDescription:
      "Web application development in Scotland: customer portals, admin dashboards, booking systems, management platforms and SaaS interfaces built by INOVATE LTD.",
    h1: "Web Application Development",
    intro:
      "Web applications let your customers and team log in, manage information and get work done from any device. We plan, design and build browser-based applications with clear interfaces and solid foundations.",
    offerings: [
      { title: "Customer portals", text: "Secure areas where customers can view orders, documents, bookings or account information." },
      { title: "Admin dashboards", text: "Clear overviews of the data your team needs to make decisions and take action." },
      { title: "Booking systems", text: "Availability, scheduling and confirmation flows tailored to your services." },
      { title: "Management platforms", text: "Tools for managing jobs, projects, teams or assets in one place." },
      { title: "SaaS interfaces", text: "Product interfaces for software-as-a-service ideas, from first version to iterative improvement." },
      { title: "Business portals", text: "Partner, supplier or staff portals that centralise information and requests." },
    ],
    approach: [
      "Define users, roles and the core tasks the application must support.",
      "Design user flows and key screens before development.",
      "Build the core features first, then extend in planned stages.",
      "Launch with monitoring, backups and a support plan.",
    ],
    suitedFor: ["Founders validating a SaaS or platform idea", "Businesses offering customers self-service access", "Teams that need a shared operational dashboard"],
    pricingIds: ["web-app-starter", "custom-development"],
    faqs: [
      { q: "What does the £135 Web Application Starter include?", a: "Initial application setup, a custom interface for a defined starting scope, core feature planning, a responsive UI and basic database and API planning. A full application is quoted separately." },
      { q: "Can you build a minimum viable product (MVP)?", a: "Yes. We help you identify the smallest useful version of your idea so you can launch, learn and improve." },
    ],
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    navTitle: "E-commerce Development",
    icon: "cart",
    short: "Online stores with clean catalogues, smooth checkout and secure payment integration.",
    metaTitle: "E-commerce Development Scotland | Online Store Setup",
    metaDescription:
      "E-commerce development for Scottish and UK businesses: online stores, product catalogues, carts, checkout, payment integration and mobile-optimised shopping by INOVATE LTD.",
    h1: "E-commerce Development",
    intro:
      "Selling online should feel simple for your customers and manageable for you. We set up and build online stores with well-organised products, a smooth checkout and a mobile-first shopping experience.",
    offerings: [
      { title: "Online stores", text: "Store setup on a suitable platform, branded to match your business." },
      { title: "Product catalogues", text: "Clear categories, filters and product pages that help customers find what they need." },
      { title: "Cart & checkout", text: "A straightforward path from basket to payment with as few steps as possible." },
      { title: "Payment integration", text: "Integration with established payment providers so payments are handled securely." },
      { title: "Product management", text: "A structure that makes adding and updating products, prices and stock manageable." },
      { title: "Mobile optimisation", text: "Shopping, browsing and checkout designed for customers on phones." },
    ],
    approach: [
      "Agree platform, product structure, delivery and payment requirements.",
      "Design the storefront, product and checkout pages.",
      "Configure products, payments, shipping and emails.",
      "Test orders end to end before launch.",
    ],
    suitedFor: ["Shops and makers starting to sell online", "Businesses moving from social-media selling to a proper store", "Retailers whose current store is hard to use on mobile"],
    pricingIds: ["ecommerce-starter", "consultation"],
    faqs: [
      { q: "Which e-commerce platform do you use?", a: "It depends on your products, budget and how you want to manage the store. We recommend a platform during the consultation rather than forcing one choice." },
      { q: "Do you handle payment processing?", a: "We integrate established payment providers. Payments are processed by the provider, and you hold the merchant account." },
    ],
  },
  {
    slug: "ui-ux",
    title: "UI/UX Design",
    navTitle: "UI/UX Design",
    icon: "pen",
    short: "Interfaces, user flows and design systems that make products easy and pleasant to use.",
    metaTitle: "UI/UX Design Services UK | Interface & Dashboard Design",
    metaDescription:
      "UI/UX design from INOVATE LTD: wireframes, user flows, interface design, design systems, responsive design and dashboard design for websites and software.",
    h1: "UI/UX Design",
    intro:
      "Good design is about clarity: people should understand what to do next without thinking about it. We design interfaces and user journeys that reduce friction and support your business goals.",
    offerings: [
      { title: "Wireframes", text: "Low-fidelity layouts to agree structure and content before visual design." },
      { title: "User flows", text: "Mapping the steps users take, so key journeys are short and obvious." },
      { title: "Interface design", text: "Polished, consistent screens for websites, apps and software." },
      { title: "Design systems", text: "Reusable colours, typography and components that keep products consistent as they grow." },
      { title: "Responsive design", text: "Layouts designed for small and large screens from the outset." },
      { title: "Dashboard design", text: "Data-heavy screens organised so the most important information stands out." },
    ],
    approach: [
      "Understand users, goals and the problems with the current experience.",
      "Map flows and create wireframes for review.",
      "Produce high-fidelity designs and a component library.",
      "Support development so the build matches the design.",
    ],
    suitedFor: ["Products with confusing or inconsistent screens", "Teams preparing to build a new app or platform", "Websites with poor mobile usability"],
    pricingIds: ["ui-ux-improvement", "redesign-starter"],
    faqs: [
      { q: "Can you improve the design of our existing site or app?", a: "Yes. Our £55 UI/UX Improvement package reviews one page and delivers layout, interface and mobile usability improvements. Larger redesigns are quoted individually." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    navTitle: "Digital Marketing",
    icon: "megaphone",
    short: "Social media, content and campaign management that connects your business with the right audience.",
    metaTitle: "Digital Marketing Scotland | Social, Content & Campaigns",
    metaDescription:
      "Digital marketing services in Scotland from INOVATE LTD: social media marketing, content strategy, paid advertising, campaign management, landing pages and conversion optimisation.",
    h1: "Digital Marketing Services",
    intro:
      "Marketing works best when your message, your audience and your website are aligned. We plan and run practical digital marketing activity that supports measurable business goals.",
    offerings: [
      { title: "Social media marketing", text: "Planning and producing social content that reflects your brand and services." },
      { title: "Content strategy", text: "Deciding what to publish, where and why, so content supports your goals." },
      { title: "Paid advertising", text: "Planning and managing paid campaigns on the platforms your audience uses." },
      { title: "Campaign management", text: "Setting up, monitoring and adjusting campaigns against agreed objectives." },
      { title: "Landing pages", text: "Dedicated pages for campaigns, so ad traffic arrives somewhere relevant." },
      { title: "Conversion optimisation", text: "Improving pages and forms so more visitors take the next step." },
    ],
    approach: [
      "Agree objectives, audience and budget.",
      "Plan channels, messaging and content.",
      "Launch with tracking in place.",
      "Review performance and refine.",
    ],
    suitedFor: ["Businesses without a consistent marketing plan", "Teams launching a new product or service", "Businesses spending on ads without clear tracking"],
    pricingIds: ["landing-page", "consultation"],
    faqs: [
      { q: "Can you guarantee results from marketing?", a: "No honest agency can guarantee specific results. We focus on clear objectives, proper tracking and steady improvement based on real data." },
    ],
    note: "Results from marketing activity depend on many factors outside our control, including market conditions and budget. We do not guarantee specific outcomes.",
  },
  {
    slug: "seo",
    title: "SEO",
    navTitle: "SEO Services",
    icon: "search",
    short: "Technical, on-page and local SEO that helps the right people find your business.",
    metaTitle: "SEO Services Scotland | Technical, On-Page & Local SEO",
    metaDescription:
      "SEO services for businesses in Kirkcaldy, Fife and across Scotland: technical SEO, on-page SEO, keyword research, local SEO, content structure and SEO audits by INOVATE LTD.",
    h1: "SEO Services",
    intro:
      "Search engine optimisation helps people who are already looking for your services find you. We focus on the fundamentals — a technically sound site, relevant content and a clear structure.",
    offerings: [
      { title: "Technical SEO", text: "Fixing crawl, indexing, speed and structured-data issues that hold a site back." },
      { title: "On-page SEO", text: "Titles, descriptions, headings and content aligned with what people search for." },
      { title: "Keyword research", text: "Understanding the terms your customers actually use and how competitive they are." },
      { title: "Local SEO", text: "Improving visibility for searches in Kirkcaldy, Fife and your service areas." },
      { title: "Content structure", text: "Organising pages and internal links so search engines and users can navigate easily." },
      { title: "SEO audits", text: "A clear report of issues and prioritised recommendations." },
    ],
    approach: [
      "Audit the current site and search visibility.",
      "Research keywords and agree priorities.",
      "Implement technical and on-page improvements.",
      "Monitor and refine over time.",
    ],
    suitedFor: ["Businesses that are hard to find online", "New websites that need a solid SEO foundation", "Local businesses targeting nearby customers"],
    pricingIds: ["health-check", "consultation"],
    faqs: [
      { q: "How long does SEO take to work?", a: "SEO is gradual. Technical fixes can help quickly, but improvements in rankings typically take months and depend on competition. We never promise specific rankings." },
    ],
    note: "Search engines control their own rankings. We do not guarantee specific positions or traffic levels.",
  },
  {
    slug: "advertising",
    title: "Advertising",
    navTitle: "Advertising Services",
    icon: "target",
    short: "Digital advertising campaigns with clear strategy, creative and conversion tracking.",
    metaTitle: "Advertising Agency Scotland | Digital Advertising Campaigns",
    metaDescription:
      "Digital advertising services from INOVATE LTD in Fife, Scotland: campaign strategy, ad creative, landing-page optimisation and conversion tracking for UK businesses.",
    h1: "Digital Advertising Services",
    intro:
      "Advertising can put your business in front of new customers quickly — when it is planned, tracked and connected to a page that converts. We help you run focused campaigns with a clear purpose.",
    offerings: [
      { title: "Digital advertising", text: "Planning and setting up ads across search and social platforms." },
      { title: "Campaign strategy", text: "Defining audience, objectives, budget and messaging before spending." },
      { title: "Ad creative", text: "Ad copy and visuals that are consistent with your brand." },
      { title: "Landing-page optimisation", text: "Making sure ad clicks arrive at a relevant, persuasive page." },
      { title: "Conversion tracking", text: "Tracking enquiries and sales so you can see what your spend achieves." },
    ],
    approach: [
      "Agree goals, audience and budget limits.",
      "Prepare creative, landing pages and tracking.",
      "Launch and monitor closely.",
      "Report clearly and adjust.",
    ],
    suitedFor: ["Businesses launching a new offer", "Teams that want to test demand quickly", "Advertisers unsure whether their current ads are working"],
    pricingIds: ["landing-page", "consultation"],
    faqs: [
      { q: "Is ad spend included in your price?", a: "No. Advertising platform spend is paid separately and directly to the platform. Our fees cover planning, setup and management." },
    ],
    note: "Advertising results are not guaranteed. Performance depends on budget, competition, audience and offer.",
  },
  {
    slug: "api-integration",
    title: "API Integration",
    navTitle: "API & Integration",
    icon: "plug",
    short: "Connect payments, CRMs and business tools so your systems share data automatically.",
    metaTitle: "API Integration Services UK | Payments, CRM & Automation",
    metaDescription:
      "API and integration services from INOVATE LTD: third-party APIs, payment integrations, CRM integrations, business tools, databases, authentication and automation.",
    h1: "API & Integration Services",
    intro:
      "Most businesses use several tools that do not talk to each other. We connect them through APIs and automation, so information flows reliably and your team stops re-typing data.",
    offerings: [
      { title: "Third-party APIs", text: "Connecting your website or software to external services and data." },
      { title: "Payment integrations", text: "Integrating established payment providers into sites and applications." },
      { title: "CRM integrations", text: "Sending enquiries and customer data into your CRM automatically." },
      { title: "Business tools", text: "Linking accounting, scheduling, email and productivity tools." },
      { title: "Databases", text: "Syncing and structuring data between systems." },
      { title: "Authentication", text: "Secure sign-in, including single sign-on where supported." },
      { title: "Automation", text: "Event-driven workflows that run in the background." },
    ],
    approach: [
      "List the systems involved and the data that needs to move.",
      "Review API documentation, limits and security requirements.",
      "Build and test the integration with real scenarios.",
      "Add logging and error handling, then hand over.",
    ],
    suitedFor: ["Teams copying data between systems by hand", "Websites that need payments or bookings", "Businesses adopting a new CRM or platform"],
    pricingIds: ["custom-development", "consultation"],
    faqs: [
      { q: "Can you integrate with any system?", a: "We can integrate with systems that offer an API or another reliable data interface. We check feasibility during the consultation." },
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance & Support",
    navTitle: "Maintenance & Support",
    icon: "shield",
    short: "Updates, fixes, performance checks and technical support to keep your site healthy.",
    metaTitle: "Website Maintenance & Technical Support | Scotland & UK",
    metaDescription:
      "Website maintenance and technical support from INOVATE LTD: bug fixes, content updates, technical changes, performance checks and ongoing support for UK businesses.",
    h1: "Website Maintenance & Technical Support",
    intro:
      "Websites and software need ongoing care. We handle the small fixes, content updates and checks that keep your site secure, accurate and working well.",
    offerings: [
      { title: "Bug fixes", text: "Diagnosing and fixing broken layouts, forms and functionality." },
      { title: "Content updates", text: "Updating text, images, prices and pages when your business changes." },
      { title: "Technical changes", text: "Small feature additions, configuration changes and updates." },
      { title: "Performance checks", text: "Reviewing speed and fixing common performance issues." },
      { title: "Ongoing support", text: "A reliable point of contact for technical questions." },
    ],
    approach: [
      "Review the site and agree what support you need.",
      "Log requests by email with clear priorities.",
      "Make changes and confirm when complete.",
      "Recommend improvements as they come up.",
    ],
    suitedFor: ["Businesses without in-house technical staff", "Sites built by someone no longer available", "Owners who want peace of mind"],
    pricingIds: ["maintenance", "minor-fix", "health-check"],
    faqs: [
      { q: "Can you maintain a site you did not build?", a: "Usually, yes. We first review the site to understand how it was built and whether there are any issues to be aware of." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
