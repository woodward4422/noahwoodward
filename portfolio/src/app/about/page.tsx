import { Nav } from "@/components/Nav";

export const metadata = { title: "About — Noah Woodward" };

const timeline = [
  {
    role: "Software Engineer — POS Retail",
    company: "Shopify",
    period: "Now",
    blurb:
      "Building mobile-first retail experiences in POS with attention to speed, ergonomics, and delightful details.",
  },
  {
    role: "Mobile Engineer — Inbox",
    company: "Shopify",
    period: "Previously",
    blurb:
      "Shipped features for merchant messaging across iOS and Android; deep work in notifications, networking, and UI polish.",
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

