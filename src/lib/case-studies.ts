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
  heroImage: string;
  heroWidth: number;
  heroHeight: number;
  overlay: string;
  highlight: string;
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
    heroImage: "/assets/work/dil-luminati-hero.png",
    heroWidth: 1448,
    heroHeight: 1086,
    overlay: "#ff3bd7",
    highlight: "#ff4901",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
