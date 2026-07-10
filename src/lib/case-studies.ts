export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  cardDescription: string;
  subtitle: string;
  services: string[];
  industry: string[];
  summary: string[];
  coverImage: string;
  coverWidth: number;
  coverHeight: number;
  heroImage: string;
  heroWidth: number;
  heroHeight: number;
  overlay: string;
  highlight: string;
  highlights?: { title: string; copy: string }[];
  collaborations?: string[];
  closingLine?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "p-pop-culture-india-tour-2026",
    category: "Live Entertainment",
    title: "P-Pop Culture India Tour 2026",
    cardDescription: "Tour activation, sponsor visibility and digital amplification.",
    subtitle:
      "A pan-India live entertainment property built around sponsorship, activation and digital amplification.",
    services: [
      "Brand Activation",
      "Event Marketing",
      "Digital Amplification",
      "Content Strategy",
      "Sponsor Integration",
    ],
    industry: ["Live Entertainment", "Music Tour", "Brand Partnerships"],
    summary: [
      "Karan Aujla's P-Pop Culture India Tour 2026 was shaped as more than a live event. The direction focused on turning a tour into a campaign property where audience demand, sponsor visibility and city-wise attention could work together.",
      "The communication system connected the live experience with digital momentum through campaign storytelling, partner visibility, event content and post-event amplification.",
      "The approach treated every city, announcement, sponsor touchpoint and audience moment as reusable brand proof, helping the tour live beyond the event day.",
    ],
    coverImage: "/assets/work/p-pop-cover.png",
    coverWidth: 1254,
    coverHeight: 1254,
    heroImage: "/assets/work/p-pop-hero.png",
    heroWidth: 1448,
    heroHeight: 1086,
    overlay: "#08090d",
    highlight: "#ff4901",
  },
  {
    slug: "kingfisher-experiential-activations",
    category: "Brand Activation",
    title: "Kingfisher Experiential Activations",
    cardDescription: "Live brand moments shaped across tours, venues and festivals.",
    subtitle: "Live brand moments shaped across tours, venues and festivals.",
    services: [
      "Brand Activation",
      "Venue Experience",
      "Audience Engagement",
      "Event Visibility",
      "Content Capture",
    ],
    industry: ["Beverage", "Lifestyle", "Live Events"],
    summary: [
      "Kingfisher activations were built around high-attention live environments where the brand could be experienced, photographed and remembered.",
      "The work focused on creating visible brand touchpoints across venues, booths, product moments and audience interaction zones.",
      "Each activation was designed to turn physical presence into content-ready moments, giving the brand visibility during the event and reusable material after it.",
    ],
    coverImage: "/assets/work/kingfisher-cover.png",
    coverWidth: 1254,
    coverHeight: 1254,
    heroImage: "/assets/work/kingfisher-hero.png",
    heroWidth: 1672,
    heroHeight: 941,
    overlay: "#ff4901",
    highlight: "#fbff15",
  },
  {
    slug: "filmfare-punjabi-awards-2025",
    category: "Event Production",
    title: "Filmfare Punjabi Awards 2025",
    cardDescription: "Stage, audience and media presence built into a live experience.",
    subtitle: "Stage, audience and media presence built into a large-scale live experience.",
    services: [
      "Event Production",
      "Stage Visibility",
      "Live Experience",
      "Media Presence",
      "Content Capture",
    ],
    industry: ["Entertainment", "Awards", "Live Production"],
    summary: [
      "Filmfare Punjabi Awards 2025 represented a large-scale live environment where production, audience energy and media visibility had to work as one experience.",
      "The work direction focused on presenting the event as a strong entertainment property through stage presence, visual scale and content-ready moments.",
      "The result was a portfolio piece that shows how event production can become a complete brand and media environment, not just a one-time setup.",
    ],
    coverImage: "/assets/work/filmfare-cover.png",
    coverWidth: 1254,
    coverHeight: 1254,
    heroImage: "/assets/work/filmfare-hero.png",
    heroWidth: 1672,
    heroHeight: 941,
    overlay: "#0469e3",
    highlight: "#fbff15",
  },
  {
    slug: "dil-luminati-india-tour-2024",
    category: "Live Entertainment",
    title: "Dil-Luminati India Tour 2024",
    cardDescription: "A multi-city music property shaped through visibility and cultural recall.",
    subtitle: "A multi-city music property shaped through visibility, activation and cultural recall.",
    services: [
      "Tour Marketing",
      "Live Entertainment",
      "Brand Visibility",
      "Digital Amplification",
      "Content Strategy",
    ],
    industry: ["Live Entertainment", "Music Tour", "Culture"],
    summary: [
      "Dil-Luminati India Tour 2024 was a multi-city live entertainment property built around audience energy, artist visibility and cultural momentum.",
      "The work direction focused on how large-scale music tours can create attention across cities while giving brands and partners a strong environment for recall.",
      "The case study shows how tour visibility, live audience moments and digital content can work together to extend the life of an entertainment property.",
    ],
    coverImage: "/assets/work/dil-luminati-cover.png",
    coverWidth: 1254,
    coverHeight: 1254,
    heroImage: "/assets/work/dil-luminati-hero.png",
    heroWidth: 1448,
    heroHeight: 1086,
    overlay: "#ff3bd7",
    highlight: "#ff4901",
  },
  {
    slug: "radhikadas-india-tour-2025",
    category: "Brand Partnerships + Activation",
    title: "Radhikadas India Tour 2025",
    cardDescription: "Sponsor visibility, audience engagement and digital amplification.",
    subtitle:
      "A devotional live-event property shaped through brand partnerships, on-ground activation, audience engagement and digital amplification.",
    services: [
      "Brand Activation",
      "Event Marketing",
      "Sponsor Integration",
      "Content Strategy",
      "Shoot & Video Production",
      "Digital Amplification",
      "Audience Engagement",
      "Post-event Content Amplification",
    ],
    industry: [
      "Live Entertainment",
      "Devotional Events",
      "Music Tour",
      "Brand Partnerships",
      "Real Estate",
      "Food & Beverage",
      "Media Partners",
      "Tourism",
    ],
    summary: [
      "Radhikadas India Tour 2025 was shaped as more than a devotional live event. The direction focused on turning each city, venue and partner touchpoint into a wider brand experience where audience attention, sponsor visibility and on-ground engagement could work together.",
      "The campaign system connected the live event with partner-led visibility through branded entry zones, sponsor walls, food stalls, digital interactions, audience surveys, stage presence, photography and video production across the venue.",
      "The approach treated every activation, audience moment, sponsor placement and live performance detail as reusable brand proof, helping the event continue beyond the stage through recap assets, social content, partner visibility and digital storytelling.",
    ],
    coverImage: "/assets/work/radhikadas-cover.png",
    coverWidth: 1254,
    coverHeight: 1254,
    heroImage: "/assets/work/radhikadas-hero.png",
    heroWidth: 1491,
    heroHeight: 1055,
    overlay: "#08090d",
    highlight: "#ff4901",
    highlights: [
      {
        title: "Campaign Mapping",
        copy: "The event was mapped as a connected brand ecosystem, not just a live performance.",
      },
      {
        title: "Partnership Mapping",
        copy: "Partner categories were aligned with event moments, audience movement and visibility opportunities across the venue.",
      },
      {
        title: "City-wise Promotion",
        copy: "The communication approach focused on building attention around city-specific demand, attendance and local event presence.",
      },
      {
        title: "Sponsor Visibility",
        copy: "Brands were integrated across stage screens, entry zones, sponsor walls, food stalls, venue touchpoints and content assets.",
      },
      {
        title: "On-ground Activation",
        copy: "Physical brand moments were created to make sponsor presence more visible, interactive and memorable for the audience.",
      },
      {
        title: "Audience Engagement",
        copy: "Digital interactions, surveys and live participation helped capture attention and strengthen recall beyond passive viewing.",
      },
      {
        title: "Shoot & Video Production",
        copy: "Event energy, sponsor presence, audience reactions and venue details were captured for post-event storytelling and partner proof.",
      },
      {
        title: "Post-event Amplification",
        copy: "Live moments were turned into reusable digital assets for social media, recap content, brand reporting and future campaign recall.",
      },
    ],
    collaborations: [
      "Spotlight",
      "Homeland Group",
      "Uma Foods",
      "Mirchi Plus",
      "Gaana",
      "PVR INOX",
      "Maharashtra Tourism",
    ],
    closingLine:
      "Radhikadas India Tour 2025 brought together live performance, sponsor integration, audience engagement and content production into one connected event-marketing system.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
