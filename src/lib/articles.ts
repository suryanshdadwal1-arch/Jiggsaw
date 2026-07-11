export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
  takeaways: string[];
};

export const resourceArticles: Article[] = [
  {
    slug: "launch-month-of-content",
    category: "Launch planning",
    title: "How one launch can feed a month of content",
    description: "Plan the work around a launch so the campaign keeps giving after day one.",
    intro: "A launch is not one post, one film or one event. It is a concentrated moment of access: to the people, product, places and conversations that make a brand feel real. The job is to capture that access once, then give it a useful second, third and fourth life.",
    image: "/resources/resource-launch-content.png",
    imageAlt: "Launch content system visual",
    sections: [
      {
        title: "Start with the story, not the shoot list",
        paragraphs: [
          "Before production, decide what the audience needs to understand: what is new, why it matters and what makes it credible. Those answers become the spine for every asset, from the announcement through the follow-up.",
          "A clear story also stops a launch from becoming a pile of disconnected footage. Every interview, detail shot and social cut then has a job to do.",
        ],
      },
      {
        title: "Plan for formats before the day begins",
        paragraphs: [
          "Build a simple asset map: a hero piece for the big idea, short edits for reach, stills for proof, founder or team moments for trust, and practical explainers for people who arrive later. Give each format an owner and a destination.",
          "This does not mean making more for the sake of it. It means collecting the right raw material while the team, location and energy are available.",
        ],
      },
      {
        title: "Use the weeks after launch deliberately",
        paragraphs: [
          "The first week earns attention. The next few weeks should answer the questions that attention creates: how it works, who it is for, what happened behind the scenes and what people should do next.",
          "Keep a light publishing rhythm and review which angles prompt replies, saves, visits or enquiries. That response is the brief for the next round.",
        ],
      },
    ],
    takeaways: ["One launch needs one clear story.", "Capture for the next month, not only launch day.", "Let audience response shape the follow-up."],
  },
  {
    slug: "ai-led-discovery-brand-visibility",
    category: "Discovery",
    title: "What AI-led discovery means for brand visibility",
    description: "Make it easier for people and answer engines to understand what your brand does and why it is credible.",
    intro: "People increasingly meet brands through a generated answer, a comparison or a recommendation before they reach a homepage. That makes clarity, structure and proof part of discoverability, not simply a writing exercise.",
    image: "/resources/resource-ai-discovery.png",
    imageAlt: "AI-led discovery and brand visibility visual",
    sections: [
      {
        title: "Be specific about the basics",
        paragraphs: [
          "A brand should be able to state, in plain language, what it offers, where it operates, who it serves and what makes the offer different. Those facts need to agree across the website, profiles, campaign pages and press material.",
          "Ambiguous language may sound polished, but it leaves people and systems guessing about the category you belong in.",
        ],
      },
      {
        title: "Put proof where decisions happen",
        paragraphs: [
          "Useful proof is concrete: examples of work, capabilities, service details, customer questions, locations, team expertise and relevant outcomes. It belongs close to the claims it supports, not hidden on a separate page.",
          "That makes a page more useful for a person comparing options and gives answer engines stronger material to reference.",
        ],
      },
      {
        title: "Treat the website as the source of truth",
        paragraphs: [
          "Social posts move quickly. The website should hold the stable version of the story: accurate services, current details, case studies and answers to recurring questions.",
          "Review this foundation as the business changes. A clear source of truth gives every other channel something dependable to point back to.",
        ],
      },
    ],
    takeaways: ["Clarity is a discoverability advantage.", "Proof should support every important claim.", "Keep core brand facts consistent everywhere."],
  },
  {
    slug: "paid-media-readiness-checklist",
    category: "Paid media",
    title: "A practical checklist before running paid media",
    description: "Make sure attention has somewhere useful to go before media spend begins.",
    intro: "Paid media can bring the right people to a brand quickly. It cannot fix an unclear offer, a confusing landing page or a slow response to enquiries. A short readiness check keeps the campaign focused on learning and movement instead of avoidable repair work.",
    image: "/resources/resource-paid-media-checklist.png",
    imageAlt: "Paid media readiness checklist visual",
    sections: [
      {
        title: "Name one campaign job",
        paragraphs: [
          "Choose the immediate outcome: build awareness in a defined market, drive registrations, generate qualified enquiries or bring people to a location. One campaign can support more than one business goal, but it needs a primary job to make decisions easier.",
          "That job determines the message, audience, landing experience and the signal used to judge progress.",
        ],
      },
      {
        title: "Check the handoff",
        paragraphs: [
          "Click through the journey as a new visitor. Does the ad promise match the destination? Can someone find the key details quickly? Does the form ask only for information the team will use? Is there a clear next step after submission?",
          "Then confirm who receives the enquiry and how quickly they can respond. Good media is wasted when interest lands in an unattended inbox.",
        ],
      },
      {
        title: "Prepare the measurement and creative",
        paragraphs: [
          "Make sure essential tracking is in place before the campaign launches. Agree on a small set of signals to review, rather than treating every platform number as equally meaningful.",
          "Build a few distinct creative angles around the same proposition. This gives the team a useful test, not a row of near-identical ads.",
        ],
      },
    ],
    takeaways: ["Give each campaign one primary job.", "Test the entire journey, not only the ad.", "Know how interest will be measured and handled."],
  },
  {
    slug: "events-long-term-digital-assets",
    category: "Experiences",
    title: "How events become long-term digital assets",
    description: "Turn a live moment into proof, content and momentum that continues after the room empties.",
    intro: "An event creates something difficult to manufacture later: real people encountering a brand in real time. With the right plan, that moment becomes a library of material for social, sales, partnerships and the next event.",
    image: "/resources/resource-events-assets.png",
    imageAlt: "Event capture into long-term digital assets visual",
    sections: [
      {
        title: "Decide what the event needs to prove",
        paragraphs: [
          "Start with the purpose. Are you showing product demand, community, expertise, a venue experience or a new partnership? The purpose tells the capture team which reactions, details and stories matter most.",
          "A shot list is useful, but a proof list is better. It gives the team room to notice the moments a schedule cannot predict.",
        ],
      },
      {
        title: "Capture the layers of the experience",
        paragraphs: [
          "Record the atmosphere, but also capture the practical evidence: branded spaces, team preparation, guest conversations, product interaction, speaker moments and clear before-and-after views. Each layer has a different use later.",
          "Collect names, permissions and context while the event is live. A strong asset is far easier to publish when its details are already in place.",
        ],
      },
      {
        title: "Build the follow-up before the event starts",
        paragraphs: [
          "Plan the recap, the short social edits, the case-study material and the sales follow-up in advance. That keeps the work moving while the event is still fresh in people’s minds.",
          "The best post-event content does not merely announce that something happened. It carries the energy into the next useful brand interaction.",
        ],
      },
    ],
    takeaways: ["Capture proof, not only atmosphere.", "Collect context while the event is live.", "Plan distribution before production begins."],
  },
  {
    slug: "landing-page-before-enquiry",
    category: "Conversion",
    title: "What every landing page should answer before enquiry",
    description: "Help a motivated visitor understand the offer, trust it and take the next step without friction.",
    intro: "A landing page is a conversation compressed into a screen. A visitor arrives with a question and some degree of hesitation. The page needs to make the offer clear, remove the most important uncertainty and offer a credible next step.",
    image: "/resources/resource-landing-page-enquiry.png",
    imageAlt: "Landing page enquiry system visual",
    sections: [
      {
        title: "What is being offered, and for whom?",
        paragraphs: [
          "State the offer plainly near the top. A visitor should not have to decode a clever headline to understand what they can get or whether it is relevant to them.",
          "Then add the context that helps them self-select: the audience, problem, location, format or timing that makes the offer a good fit.",
        ],
      },
      {
        title: "Why should anyone believe it?",
        paragraphs: [
          "Bring the right proof into the page: a real example, a process, relevant credentials, a clear scope of work or a thoughtful answer to a common concern. Proof works best when it is specific and easy to scan.",
          "Avoid making a visitor hunt through a whole website to decide whether the offer is real.",
        ],
      },
      {
        title: "What happens after the click?",
        paragraphs: [
          "Explain the next step in the language people need: book a conversation, request a proposal, check availability or receive the information pack. Make the form proportional to the ask and set a realistic expectation for what follows.",
          "A simple handoff builds confidence. A vague button and a silent inbox do the opposite.",
        ],
      },
    ],
    takeaways: ["Make the offer clear immediately.", "Use relevant, specific proof.", "Set a clear expectation after the enquiry."],
  },
  {
    slug: "social-content-without-chasing-trends",
    category: "Content",
    title: "How to plan social content without chasing every trend",
    description: "Build a social system around the brand’s point of view, proof and audience questions.",
    intro: "Trends can be useful raw material, but they are not a content strategy. A durable presence comes from knowing what a brand can say with authority, what people need to see to trust it and where a timely format can add genuine energy.",
    image: "/resources/resource-social-content-planning.png",
    imageAlt: "Social content planning system visual",
    sections: [
      {
        title: "Choose a few repeatable content jobs",
        paragraphs: [
          "Give content clear jobs: show the work, explain the thinking, document the people, answer a customer question or invite participation. A calendar with a small number of repeatable jobs is easier to sustain than a calendar built on constant novelty.",
          "Those jobs should come from the business, not a generic list of content pillars copied from elsewhere.",
        ],
      },
      {
        title: "Build around real moments",
        paragraphs: [
          "Look for material already happening in the business: projects in progress, team expertise, customer conversations, launches, physical experiences and useful decisions. These are often more distinctive than a trend because no competing brand has the same source material.",
          "A simple capture habit makes this material available when planning time is short.",
        ],
      },
      {
        title: "Use trends with a reason",
        paragraphs: [
          "A trend earns its place when it gives the brand a clearer or more interesting way to make an existing point. If the connection is weak, skip it. The audience can usually tell when a format has been borrowed without a reason.",
          "Review the work by the quality of attention it earns: comments, saves, shares, visits and conversations, alongside reach.",
        ],
      },
    ],
    takeaways: ["Build around repeatable content jobs.", "Use the business as the source material.", "Use trends to sharpen a point, not replace one."],
  },
];

export const aboutArticles: Article[] = [
  {
    slug: "system-first-thinking",
    category: "How we work",
    title: "System-first thinking",
    description: "Marketing improves when the journey is designed as a connected system, not a set of isolated tasks.",
    intro: "Most marketing problems do not live in one channel. They appear in the gaps: between an ad and the landing page, between an event and its follow-up, between a good conversation and the information needed to make a decision. We begin by looking at those connections.",
    image: "/images/about/about-system-first-thinking.png",
    imageAlt: "Abstract puzzle system visual",
    sections: [
      {
        title: "Start with the movement you need",
        paragraphs: [
          "Before choosing deliverables, we define the movement the business needs: stronger recall, a clearer offer, qualified enquiries, venue footfall or a better way to carry an event forward. That gives the work a shared direction.",
          "A website, campaign or content plan is then judged by its contribution to that movement, not by whether it looks busy in isolation.",
        ],
      },
      {
        title: "Map the handoffs",
        paragraphs: [
          "We look at where people enter the story, what they need next and who follows through. That can include paid media, social, search, a landing page, sales conversations and on-ground activity.",
          "The result is a practical map of dependencies, so teams know what needs to be ready before attention arrives.",
        ],
      },
      {
        title: "Make improvement easier",
        paragraphs: [
          "A system is useful because it can be observed and improved. Once the handoffs are visible, the team can see where interest drops, where proof is missing and where a small change might create more momentum.",
          "That is a more productive starting point than continually replacing individual assets.",
        ],
      },
    ],
    takeaways: ["Define the business movement first.", "Design the handoffs between channels.", "Use the system to guide improvement."],
  },
  {
    slug: "execution-led-approach",
    category: "How we work",
    title: "Execution-led approach",
    description: "A strong idea needs a practical route from decision to launch, measurement and the next iteration.",
    intro: "Ambition matters, but marketing only becomes useful when it can move through real approvals, production schedules, budgets and teams. Our approach keeps the strategy close to the work required to make it happen.",
    image: "/images/about/about-execution-led-approach.png",
    imageAlt: "Puzzle blocks execution visual",
    sections: [
      {
        title: "Turn decisions into a working plan",
        paragraphs: [
          "A good plan names the decision, the owner, the asset, the channel and the deadline. It does not need to be complicated, but it should make the next right action obvious for everyone involved.",
          "This is how strategy becomes a launch sequence rather than a document that waits for a separate execution phase.",
        ],
      },
      {
        title: "Build with the real constraints in view",
        paragraphs: [
          "We consider what the team can approve, produce, publish and follow up on. Constraints are not an excuse to make lesser work; they are the conditions that make a workable plan credible.",
          "Prioritising the right few things often creates more momentum than trying to launch every possible idea at once.",
        ],
      },
      {
        title: "Review, learn and refine",
        paragraphs: [
          "Once the work is live, we look for the signal that matters: what was understood, what prompted action and what needs to change. The aim is to make the next round smarter, not simply busier.",
          "That rhythm lets the brand build capability over time while keeping the work grounded in evidence.",
        ],
      },
    ],
    takeaways: ["Make the next action clear.", "Plan around real constraints.", "Use each launch to improve the next."],
  },
  {
    slug: "digital-to-physical-continuity",
    category: "How we work",
    title: "Digital to physical continuity",
    description: "Give a brand one story that can travel from screen to space, experience and follow-up.",
    intro: "Physical marketing creates presence people can see and feel. Digital channels make that presence easier to discover, revisit and act on. The strongest brand moments use both, so no important experience disappears when the day is over.",
    image: "/images/about/about-digital-physical-continuity.png",
    imageAlt: "Digital to physical continuity visual",
    sections: [
      {
        title: "Create one recognisable story",
        paragraphs: [
          "The message, visual language and call to action should feel connected whether someone sees a post, a hoarding, a venue installation or a follow-up email. Consistency does not mean repetition; it means the audience recognises the same promise in different forms.",
          "A shared story helps every touchpoint reinforce the last one.",
        ],
      },
      {
        title: "Design the bridge between channels",
        paragraphs: [
          "Give people a reason and a way to continue: a QR code with a useful destination, a social format that points to an in-person experience, a registration journey, a post-event recap or a sales follow-up that remembers what they encountered.",
          "The bridge should be natural to the moment. It earns attention by adding value, not by interrupting it.",
        ],
      },
      {
        title: "Carry the experience forward",
        paragraphs: [
          "Events and physical moments create content, proof, conversation and audience insight. Capturing and organising those outputs means the investment continues to work across campaigns, pages and future activations.",
          "Continuity is what turns a single visible moment into accumulated brand presence.",
        ],
      },
    ],
    takeaways: ["Keep the promise recognisable across touchpoints.", "Build a useful bridge between online and offline.", "Use live experiences as ongoing proof."],
  },
];

export function getResourceArticle(slug: string) {
  return resourceArticles.find((article) => article.slug === slug);
}

export function getAboutArticle(slug: string) {
  return aboutArticles.find((article) => article.slug === slug);
}
