import { site } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Nav />
      <main className="mx-auto max-w-6xl px-6 pt-12 pb-24">
        <Hero />

        <section className="mt-20">
          <h2 className="font-display text-2xl text-olive-ink">Selected Projects</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {site.projects.map((p) => (
              <div key={p.title} className="scribble-border p-5 bg-white/70">
                <h3 className="font-display text-xl text-olive-ink">{p.title}</h3>
                {p.subtitle && (
                  <p className="text-olive/70 text-sm mt-1">{p.subtitle}</p>
                )}
                <p className="mt-3 text-olive">{p.description}</p>
                <div className="mt-3 text-sm text-olive/80">{p.tags.join(" • ")}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-wrap gap-4">
            {site.socials.map((s) => (
              <a key={s.href} href={s.href} className="underline decoration-wavy text-olive-ink" target="_blank">
                {s.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
