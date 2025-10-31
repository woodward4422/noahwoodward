import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Nav />
      <main className="mx-auto max-w-6xl px-6 pt-12 pb-24">
        <Hero />
      </main>
    </div>
  );
}
