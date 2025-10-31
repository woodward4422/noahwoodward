"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-olive-ink/20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" aria-label="Home — Noah Woodward" className="font-display text-xl md:text-2xl text-olive-ink tracking-wide">
          <span className="sm:hidden">Noah</span>
          <span className="hidden sm:inline">Noah Woodward</span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6 text-base md:text-xl font-semibold">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="relative py-1 text-olive hover:text-olive-ink transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

