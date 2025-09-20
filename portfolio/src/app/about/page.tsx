import { Nav } from "@/components/Nav";

export const metadata = { title: "About — Noah Woodward" };

const timeline = [
  {
    role: "Senior Software Engineer — POS Buyer Experience",
    company: "Shopify",
    period: "June 2025 — Present",
    blurb:
      "Joined team for short turnaround EAA legislation requirements, rebuilding accessibility foundations for better screen reader interfacing across all mobile apps. Currently working on app deployment foundations for large CI migration leveraging a new monorepo structure.",
  },
  {
    role: "Lead Engineer — AI Products Task Force",
    company: "Shopify",
    period: "January — June 2025",
    blurb:
      "Lead 0 to 1 React Native initiatives helping the team prototype LLM applications in mobile environments, exploring new AI-powered merchant experiences.",
  },
  {
    role: "Senior Mobile Engineer — Inbox",
    company: "Shopify",
    period: "February 2020 — January 2025",
    blurb:
      "Worked on the initial team to prototype the first React Native application at the company, building Android implementation of Shopify Inbox. Contributed to key missing React Native modules used across Shopify's mobile ecosystem. Led performance monitoring project detecting poorly performant Redux code. Product success led to WebSocket refactor interfacing with Redux layer. Project lead building fuzzy and semantic search using ElasticSearch for high-volume message tables.",
  },
  {
    role: "Software Engineer Intern — Messaging",
    company: "Shopify",
    period: "May 2019 — February 2020",
    blurb: (
      <>
        Focused on iOS native development with Swift, bringing the first version of{" "}
        <a 
          href="https://apps.apple.com/us/app/shopify-inbox/id1496896834" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline decoration-wavy text-olive-ink hover:text-accent transition-colors"
        >
          Shopify Inbox
        </a>
        {" "}to market on the Apple App Store.
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <div>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-12 pb-24">
        <h1 className="font-display text-4xl text-olive-ink">Hi, I am Noah.</h1>
        <p className="mt-4 text-olive">
          I’m a creative software engineer who loves building playful, high-quality mobile
          experiences. I care about craft, motion, and helping people do their best work.
        </p>

        <h2 className="mt-10 font-display text-2xl text-olive-ink">Experience</h2>
        <ol className="mt-4 space-y-4">
          {timeline.map((t) => (
            <li key={t.role} className="scribble-border bg-white/70 p-4">
              <div className="font-display text-xl text-olive-ink">{t.role}</div>
              <div className="text-olive/70">{t.company} — {t.period}</div>
              <p className="mt-2 text-olive">{t.blurb}</p>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}

