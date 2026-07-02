export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const clientLogos = Array.from({ length: 36 }, (_, index) => index + 1)
  .filter((logoNumber) => logoNumber !== 29)
  .map((logoNumber) => ({
    src: `/client-logos/client-${String(logoNumber).padStart(2, "0")}.webp`,
    alt: `Client logo ${logoNumber}`,
  }));

export const serviceModules = [
  {
    slug: "message-architecture",
    number: "01",
    eyebrow: "Foundation",
    title: "Message Architecture",
    short:
      "Approved facts, buyer questions, proof points and positioning that keep every page and campaign aligned.",
    intro:
      "A practical strategy layer for B2B brands that need sharper credibility before they scale content, media or market activity.",
    deliverables: [
      "Approved fact base and claim-control sheet",
      "Audience and buyer journey map",
      "Core messaging pillars",
      "Proof bank for website, search, social and sales teams",
    ],
    outcomes: ["Clearer story", "Safer claims", "Faster content decisions"],
  },
  {
    slug: "website-buyer-journey",
    number: "02",
    eyebrow: "Website",
    title: "Buyer Journey Setup",
    short:
      "Home, category, proof and enquiry paths designed so industrial buyers can understand, trust and act.",
    intro:
      "We turn the website into a conversion path, not a brochure. Pages are planned around search intent, proof, forms and next steps.",
    deliverables: [
      "Homepage and service/category templates",
      "Proof-led page sections",
      "CTA and form routing",
      "Analytics-ready enquiry journey",
    ],
    outcomes: ["Better navigation", "Higher enquiry intent", "Reduced content clutter"],
  },
  {
    slug: "eeo-ai-discovery",
    number: "03",
    eyebrow: "Discovery",
    title: "EEO & AI Search Readiness",
    short:
      "Answer-ready content blocks and structured proof that help the brand show up in search and AI-led discovery.",
    intro:
      "Entity Engine Optimization helps crawlers, answer engines and buyers understand the business, products, approvals and proof.",
    deliverables: [
      "Entity and FAQ structure",
      "Crawler-readable proof blocks",
      "Schema recommendations",
      "AI-search answer mapping",
    ],
    outcomes: ["Stronger discoverability", "Machine-readable proof", "Cleaner answers"],
  },
  {
    slug: "seo-growth",
    number: "04",
    eyebrow: "Search",
    title: "SEO Growth System",
    short:
      "Technical SEO, keyword mapping, product-led templates and regional pages for long-term qualified visibility.",
    intro:
      "A search operating system built for manufacturing and B2B categories where buyers compare capability, approvals and reach.",
    deliverables: [
      "Technical and on-page SEO audit",
      "Keyword and page map",
      "Product and regional page structure",
      "GA4, GSC and reporting setup",
    ],
    outcomes: ["Better rankings", "More qualified visits", "Ongoing visibility"],
  },
  {
    slug: "content-social-system",
    number: "05",
    eyebrow: "Content",
    title: "Content & Social System",
    short:
      "LinkedIn, Instagram and Facebook content planned around proof, product clarity, dealer stories and market moments.",
    intro:
      "A focused content engine that makes the brand visible without diluting technical credibility or business intent.",
    deliverables: [
      "Monthly content calendar",
      "LinkedIn B2B visibility plan",
      "Instagram and Facebook post system",
      "Copy, creative and publishing support",
    ],
    outcomes: ["Consistent presence", "Clearer proof", "Better recall"],
  },
  {
    slug: "creative-production",
    number: "06",
    eyebrow: "Production",
    title: "Creative Production",
    short:
      "Shot lists, reels, explainers, interviews and visual assets that make plant, product and people proof more usable.",
    intro:
      "We plan production around what the website, sales team, search pages and campaigns actually need to communicate.",
    deliverables: [
      "Shoot plan and asset requirements",
      "Reel and explainer concepts",
      "Interview and plant proof formats",
      "Organized asset folders",
    ],
    outcomes: ["Reusable assets", "Stronger proof packaging", "Less content waste"],
  },
  {
    slug: "paid-media-campaigns",
    number: "07",
    eyebrow: "Media",
    title: "Paid Media & Campaigns",
    short:
      "Launch, retargeting and lead-generation campaigns connected to landing pages, forms and follow-up.",
    intro:
      "Campaigns are planned as movement systems: attention, proof, remarketing and enquiry handoff working together.",
    deliverables: [
      "Campaign route planning",
      "Paid media setup support",
      "Retargeting and landing page alignment",
      "Creative testing structure",
    ],
    outcomes: ["Sharper targeting", "Cleaner handoff", "Measurable enquiries"],
  },
  {
    slug: "analytics-reporting",
    number: "08",
    eyebrow: "Measurement",
    title: "Analytics & Reporting",
    short:
      "GA4, GSC, event tracking and monthly reporting so decisions are tied to movement, not assumptions.",
    intro:
      "The system is tracked from discovery to enquiry, helping teams see what content, pages and campaigns are working.",
    deliverables: [
      "Tracking plan",
      "GA4 and Search Console checks",
      "Monthly performance report",
      "Improvement recommendations",
    ],
    outcomes: ["Better decisions", "Visible movement", "Ongoing optimization"],
  },
  {
    slug: "market-activation",
    number: "09",
    eyebrow: "Physical",
    title: "Market Activation",
    short:
      "Dealer meets, plant visits, launch moments and physical visibility connected back to digital proof and follow-up.",
    intro:
      "Offline attention should not disappear after the event. We turn market activity into content, proof and enquiry paths.",
    deliverables: [
      "Activation route planning",
      "Event-to-content plan",
      "Dealer and regional support assets",
      "Post-event digital follow-up",
    ],
    outcomes: ["More useful events", "Digital continuity", "Stronger market proof"],
  },
];

export const workSystems = [
  {
    title: "Manufacturing Credibility System",
    label: "Website + SEO + Proof",
    copy:
      "A structured digital base for industrial brands that need approvals, capability and product clarity visible before enquiry.",
  },
  {
    title: "Dealer Visibility Engine",
    label: "Activation + Content",
    copy:
      "A route for dealer networks and regional markets where offline movement becomes digital proof and follow-up.",
  },
  {
    title: "Green Steel Proof Hub",
    label: "Content + EEO",
    copy:
      "A proof-led content architecture for sustainability, plant capability, compliance and buyer education.",
  },
  {
    title: "Search & AI Discovery Roadmap",
    label: "SEO + EEO",
    copy:
      "A discoverability system that organizes facts, FAQs, product pages and schema around how buyers search.",
  },
  {
    title: "Launch-to-Enquiry Campaign",
    label: "Media + Funnel",
    copy:
      "A campaign path that moves attention from paid media and social into landing pages, retargeting and lead capture.",
  },
  {
    title: "Always-On Social Operating System",
    label: "Social + Creative",
    copy:
      "A monthly content rhythm for LinkedIn, Instagram and Facebook, built around proof, products and market moments.",
  },
];

export const resourceCards = [
  "How to turn manufacturing proof into website content",
  "What EEO means for B2B brands and AI-led discovery",
  "A practical checklist before running paid media",
  "How dealer events can become long-term digital assets",
  "What every product page should answer before enquiry",
  "How to plan social content without losing business focus",
];
