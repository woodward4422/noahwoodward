"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
      <div className="md:col-span-7">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-6xl text-olive-ink leading-tight"
        >
          {site.name}
        </motion.h1>
        <div className="mt-3 text-lg text-olive">
          <span className="ink-underline">{site.role}</span>
          <span> — {site.tagline}</span>
        </div>
        <ul className="mt-6 space-y-1 text-olive/80">
          {site.highlights.map((h) => (
            <li key={h}>• {h}</li>
          ))}
        </ul>
        <div className="mt-8 flex gap-4">
          <Link
            href="/work"
            className="scribble-border bg-cream px-5 py-3 text-olive-ink hover:bg-white transition-colors"
          >
            See work →
          </Link>
          <Link
            href="/about"
            className="border-2 border-olive-ink px-5 py-3 text-olive-ink hover:bg-cream transition-colors"
          >
            About me
          </Link>
        </div>
      </div>
      <div className="md:col-span-5 flex justify-center md:justify-end">
        <div>
          <Image
            src="/me-and-dog.png"
            alt="Cartoon person with their dog, waving"
            width={420}
            height={600}
            priority
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
