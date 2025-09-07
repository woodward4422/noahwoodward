"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
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
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl text-olive-ink tracking-wide">
          Noah Woodward
        </Link>
        <nav className="flex gap-6 text-xl font-semibold">
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

