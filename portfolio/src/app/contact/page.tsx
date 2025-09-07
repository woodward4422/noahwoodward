import { Nav } from "@/components/Nav";
import { site } from "@/content/site";

export const metadata = { title: "Contact — Noah Woodward" };

export default function ContactPage() {
  return (
    <div>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-12 pb-24">
        <h1 className="font-display text-4xl text-olive-ink">Let’s talk</h1>
        <p className="mt-3 text-olive">
          Want to chat about mobile, POS, or playful product craftsmanship? Reach out via any of these:
        </p>
        <ul className="mt-6 space-y-3">
          {site.socials.map((s) => (
            <li key={s.href}>
              <a className="underline decoration-wavy text-olive-ink" href={s.href} target="_blank">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

