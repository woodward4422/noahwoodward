import { site } from "@/content/site";
import { Nav } from "@/components/Nav";

export const metadata = { title: "Work — Noah Woodward" };

export default function WorkPage() {
  return (
    <div>
      <Nav />
      <main className="mx-auto max-w-6xl px-6 pt-12 pb-24">
        <h1 className="font-display text-4xl text-olive-ink">Work</h1>
        <p className="mt-2 text-olive/80">Highlights from Shopify and beyond.</p>

        <div className="mt-10 space-y-6">
          {site.projects.map((p) => (
            <article key={p.title} className="scribble-border bg-white/70 p-6">
              <h2 className="font-display text-2xl text-olive-ink">{p.title}</h2>
              {p.subtitle && (
                <p className="text-olive/70 mt-1">{p.subtitle}</p>
              )}
              <p className="mt-3 text-olive">{p.description}</p>
              <div className="mt-3 text-sm text-olive/80">{p.tags.join(" • ")}</div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

