export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  link?: string;
};

export const site = {
  name: "Noah Woodward",
  role: "Senior Software Engineer",
  tagline: "Mobile + Frontend Playful Experiences",
  location: "Boston, MA",
  socials: [
    { label: "GitHub", href: "https://github.com/woodward4422" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/noah-woodward/" },
    { label: "Email", href: "mailto:woodward4422@gmail.com" },
  ],
  highlights: [
    "Shopify POS Retail engineering",
    "Previously Shopify Inbox (mobile)",
    "iOS + Android + React Native",
    "Loves thoughtful UX and motion",
  ],
  projects: [
    {
      title: "Shopify POS — Retail",
      subtitle: "Mobile-first checkout & tooling",
      description:
        "Building reliable, delightful retail flows at scale. Focus on performance, accessibility, and POS-specific ergonomics.",
      tags: ["React Native", "iOS", "Android", "TypeScript"],
    },
    {
      title: "Shopify Inbox",
      subtitle: "Merchant messaging on the go",
      description:
        "Shipped features that help merchants close deals faster. Deep work across networking, push, and UI polish.",
      tags: ["Swift", "Kotlin", "React Native"],
    },
  ] as Project[],
};

export type Site = typeof site;

