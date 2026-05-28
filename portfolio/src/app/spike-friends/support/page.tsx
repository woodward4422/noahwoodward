import { Nav } from "@/components/Nav";

export const metadata = {
  title: "Spike Friends Support — Noah Woodward",
  description: "Support page for the Spike Friends iOS app.",
};

export default function SpikeFriendsSupportPage() {
  return (
    <div>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-12 pb-24">
        <p className="text-lg font-bold uppercase tracking-wide text-olive">Spike Friends</p>
        <h1 className="mt-2 font-display text-5xl text-olive-ink">Support</h1>
        <p className="mt-5 text-xl leading-relaxed text-olive">
          Need help with your profile, tournaments, matches, leaderboards, or notifications? Send a note and include the
          email you use with Spike Friends plus a short description of what happened.
        </p>

        <div className="mt-8 scribble-border bg-cream p-6">
          <h2 className="font-display text-3xl text-olive-ink">Contact</h2>
          <a className="mt-3 inline-block text-2xl ink-underline text-olive-ink" href="mailto:noahwoodward2244@gmail.com">
            noahwoodward2244@gmail.com
          </a>
        </div>

        <section className="mt-10 space-y-5 text-xl leading-relaxed text-olive">
          <h2 className="font-display text-3xl text-olive-ink">Common Requests</h2>
          <p>For account or profile photo changes, open the profile button in the app.</p>
          <p>For push notifications, use iOS Settings to manage Spike Friends notification permissions.</p>
          <p>For account or data deletion, email support and ask for your Spike Friends account data to be removed.</p>
        </section>
      </main>
    </div>
  );
}
