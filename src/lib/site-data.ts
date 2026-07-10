export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const clientLogos = [
  { name: "BookMyShow", file: "client-01.webp" },
  { name: "boAt", file: "client-02.webp" },
  { name: "Forest Hill Golf & Country Club", file: "client-03.webp" },
  { name: "Homeland", file: "client-04.webp" },
  { name: "PVR Cinemas", file: "client-05.webp" },
  { name: "MY FM", file: "client-06.webp" },
  { name: "24 Seven", file: "client-07.webp" },
  { name: "Red FM", file: "client-08.webp" },
  { name: "Times Music", file: "client-09.webp" },
  { name: "T-Series", file: "client-10.webp" },
  { name: "ZEE LIVE", file: "client-11.webp" },
  { name: "realme", file: "client-12.webp" },
  { name: "Omaxe", file: "client-13.webp" },
  { name: "Government of Punjab", file: "client-14.webp" },
  { name: "Coca-Cola", file: "client-15.webp" },
  { name: "Levi's", file: "client-16.webp" },
  { name: "HDFC Bank", file: "client-17.webp" },
  { name: "Spotify", file: "client-18.webp" },
  { name: "Kingfisher", file: "client-19.webp" },
  { name: "EVA Live", file: "client-20.webp" },
  { name: "Holiday Inn", file: "client-22.webp" },
  { name: "Johnnie Walker", file: "client-23.webp" },
  { name: "Royal Enfield", file: "client-24.webp" },
  { name: "Indian American Pride Soda", file: "client-25.webp" },
  { name: "Paytm Insider", file: "client-26.webp" },
  { name: "Jack & Jones", file: "client-27.webp" },
  { name: "Sheraton Hotels & Resorts", file: "client-28.webp" },
  { name: "Tata Neu", file: "client-30.webp" },
  { name: "SBI", file: "client-31.webp" },
  { name: "Hyundai", file: "client-32.webp" },
  { name: "Paytm", file: "client-33.webp" },
  { name: "Sunburn", file: "client-34.webp" },
].map((logo) => ({
  name: logo.name,
  src: `/client-logos/${logo.file}`,
  alt: `${logo.name} logo`,
}));

export const serviceModules = [
  {
    slug: "message-architecture",
    number: "01",
    eyebrow: "Foundation",
    title: "Message Architecture",
    short:
      "Positioning, proof points and launch language that keep every channel telling the same story.",
    intro:
      "The strategy layer that decides what the brand says, shows and promises before money goes into media, content or events.",
    deliverables: [
      "Positioning and messaging pillars",
      "Approved claims and proof bank",
      "Audience and journey map",
      "Launch and campaign language",
    ],
    outcomes: ["Sharper story", "Faster decisions", "Consistent channels"],
  },
  {
    slug: "website-buyer-journey",
    number: "02",
    eyebrow: "Website",
    title: "Website & Conversion Journeys",
    short:
      "Websites and landing journeys built so interest from any channel has somewhere to convert.",
    intro:
      "We treat the website as the meeting point of every campaign: pages, proof and enquiry paths designed around how people actually decide.",
    deliverables: [
      "Homepage and service page structure",
      "Proof-led page sections",
      "CTA and enquiry routing",
      "Analytics-ready journeys",
    ],
    outcomes: ["Clearer navigation", "Higher enquiry intent", "Less content clutter"],
  },
  {
    slug: "eeo-ai-discovery",
    number: "03",
    eyebrow: "Discovery",
    title: "AI & Answer-Engine Readiness",
    short:
      "Structured content and proof that keep the brand visible in search and AI-led discovery.",
    intro:
      "Answer engines now shape first impressions. We organize facts, FAQs and proof so machines and people both get the story right.",
    deliverables: [
      "Entity and FAQ structure",
      "Machine-readable proof blocks",
      "Schema recommendations",
      "Answer mapping for AI search",
    ],
    outcomes: ["Stronger discoverability", "Cleaner answers", "Future-ready visibility"],
  },
  {
    slug: "seo-growth",
    number: "04",
    eyebrow: "Search",
    title: "SEO Growth System",
    short:
      "Technical SEO, keyword mapping and page systems that compound qualified visibility month after month.",
    intro:
      "A search system built around how your customers compare, shortlist and choose — not just what they type.",
    deliverables: [
      "Technical and on-page audit",
      "Keyword and page map",
      "Location and category page structure",
      "GA4, GSC and reporting setup",
    ],
    outcomes: ["Better rankings", "Qualified visits", "Compounding visibility"],
  },
  {
    slug: "content-social-system",
    number: "05",
    eyebrow: "Content",
    title: "Content & Social System",
    short:
      "Instagram, LinkedIn and YouTube systems planned around culture, proof and business intent.",
    intro:
      "A content engine with a point of view: formats, calendars and stories that build recall without chasing every trend.",
    deliverables: [
      "Monthly content calendar",
      "Platform-specific format system",
      "Creator and collaboration briefs",
      "Copy, creative and publishing support",
    ],
    outcomes: ["Consistent presence", "Stronger recall", "Content with intent"],
  },
  {
    slug: "creative-production",
    number: "06",
    eyebrow: "Production",
    title: "Creative Production",
    short:
      "Shoots, reels, films and campaign assets produced with entertainment-grade craft.",
    intro:
      "Shoots, motion graphics and video editing planned backwards from where the work will live: feeds, screens and stages.",
    deliverables: [
      "Shoot and asset planning",
      "Reels, films and explainers",
      "Event and venue coverage",
      "Organized asset libraries",
    ],
    outcomes: ["Reusable assets", "Sharper craft", "Less content waste"],
  },
  {
    slug: "paid-media-campaigns",
    number: "07",
    eyebrow: "Media",
    title: "Paid Media & Campaigns",
    short:
      "Launch, awareness and lead campaigns connected to landing pages, retargeting and follow-up.",
    intro:
      "Media planned as momentum: attention, proof, remarketing and enquiry handoff working as one loop.",
    deliverables: [
      "Campaign and channel planning",
      "Paid media setup",
      "Retargeting and landing page alignment",
      "Creative testing structure",
    ],
    outcomes: ["Sharper targeting", "Cleaner handoff", "Measurable movement"],
  },
  {
    slug: "analytics-reporting",
    number: "08",
    eyebrow: "Measurement",
    title: "Analytics & Reporting",
    short:
      "Tracking and monthly reporting that tie campaigns, content and events to actual movement.",
    intro:
      "From first click to final footfall, the system is measured so decisions are based on evidence, not opinion.",
    deliverables: [
      "Tracking plan",
      "GA4 and Search Console setup",
      "Monthly performance report",
      "Improvement recommendations",
    ],
    outcomes: ["Better decisions", "Visible movement", "Ongoing optimization"],
  },
  {
    slug: "market-activation",
    number: "09",
    eyebrow: "Physical",
    title: "Experiences & Activation",
    short:
      "Events, hoardings, posters, influencer pushes and on-ground brand moments connected back to digital growth.",
    intro:
      "We build the offline layer people see, attend and share: outdoor visibility, venue branding, event ideas, influencer marketing and brand ambassador moments.",
    deliverables: [
      "Poster and hoarding creative",
      "Event and venue activation plans",
      "Influencer and ambassador briefs",
      "Event-to-content follow-up",
    ],
    outcomes: ["Memorable moments", "Digital continuity", "Momentum after the event"],
  },
];

export const workSystems = [
  {
    title: "Launch Momentum System",
    label: "Strategy + Media + Activation",
    image: "/work/brand-momentum.png",
    imageAlt: "Brand Momentum visual",
    copy:
      "Launch systems that build early attention, brand presence and a clear first impression across digital and on-ground touchpoints.",
  },
  {
    title: "Venue & Footfall Engine",
    label: "Local + Social + Events",
    image: "/work/local-footfall.png",
    imageAlt: "Local Footfall visual",
    copy:
      "A visibility system for venues and physical spaces where branding, movement and local presence work together.",
  },
  {
    title: "Creator & Content Loop",
    label: "Creators + Production",
    image: "/work/bts-to-output.png",
    imageAlt: "BTS to Output visual",
    copy:
      "A production workflow that turns shoots, edits and final outputs into repeatable content for campaigns and brand recall.",
  },
  {
    title: "Search & AI Discovery Roadmap",
    label: "SEO + AI Readiness",
    image: "/work/search-discovery.png",
    imageAlt: "Search Discovery visual",
    copy:
      "A discoverability system that organizes content, structure and proof so brands are easier to find across search and answer engines.",
  },
  {
    title: "Launch-to-Enquiry Campaign",
    label: "Media + Funnel",
    image: "/work/ad-to-enquiry.png",
    imageAlt: "Ad to Enquiry visual",
    copy:
      "A conversion path that moves attention from ads into landing pages, forms and real business enquiries.",
  },
  {
    title: "Event-to-Everywhere System",
    label: "Activation + Content",
    image: "/work/event-system.png",
    imageAlt: "Event System visual",
    copy:
      "One event turned into ongoing brand presence through live coverage, recap assets and post-event content distribution.",
  },
];
export const resourceCards = [
  "How one launch can feed a month of content",
  "What AI-led discovery means for brand visibility",
  "A practical checklist before running paid media",
  "How events become long-term digital assets",
  "What every landing page should answer before enquiry",
  "How to plan social content without chasing every trend",
];

