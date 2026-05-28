import { Nav } from "@/components/Nav";

export const metadata = {
  title: "Spike Friends Privacy Policy — Noah Woodward",
  description: "Privacy policy for the Spike Friends iOS app.",
};

export default function SpikeFriendsPrivacyPage() {
  return (
    <div>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-12 pb-24">
        <p className="text-lg font-bold uppercase tracking-wide text-olive">Spike Friends</p>
        <h1 className="mt-2 font-display text-5xl text-olive-ink">Privacy Policy</h1>
        <p className="mt-3 text-xl text-olive">Last updated May 28, 2026</p>

        <section className="mt-10 space-y-5 text-xl leading-relaxed text-olive">
          <p>
            Spike Friends helps players organize spikeball matches, tournaments, leaderboards, and in-app notifications.
            This policy explains what the app collects and how it is used.
          </p>

          <h2 className="pt-4 font-display text-3xl text-olive-ink">Information We Collect</h2>
          <p>
            When you sign in, Spike Friends may store your account identifier, display name, profile photo, player
            rating, match history, tournament participation, and notification-related app data. If you choose a profile
            photo, the image is uploaded so it can appear in the app.
          </p>

          <h2 className="pt-4 font-display text-3xl text-olive-ink">How We Use Information</h2>
          <p>
            We use this information to provide app features: creating your profile, finding players, joining teams,
            running tournaments, recording match results, maintaining leaderboards, and showing relevant app
            notifications.
          </p>

          <h2 className="pt-4 font-display text-3xl text-olive-ink">Sharing</h2>
          <p>
            Spike Friends does not sell personal information. Some profile, player, team, match, and tournament
            information may be visible to other signed-in Spike Friends users so the app can function.
          </p>

          <h2 className="pt-4 font-display text-3xl text-olive-ink">Third-Party Services</h2>
          <p>
            Spike Friends uses Apple Sign in for authentication, Supabase for app data and file storage, and Expo
            services for app updates and notifications.
          </p>

          <h2 className="pt-4 font-display text-3xl text-olive-ink">Your Choices</h2>
          <p>
            You can update your display name and profile photo in the app. Push notification permissions can be managed
            in iOS Settings. To request account or data deletion, contact support.
          </p>

          <h2 className="pt-4 font-display text-3xl text-olive-ink">Contact</h2>
          <p>
            For privacy questions or data requests, email{" "}
            <a className="ink-underline text-olive-ink" href="mailto:noahwoodward2244@gmail.com">
              noahwoodward2244@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
