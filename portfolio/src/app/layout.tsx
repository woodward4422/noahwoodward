import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

// Using custom Gaegu font for sans and display
const accent = Caveat({ variable: "--font-accent", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noah Woodward — Portfolio",
  description: "Creative software engineer building playful mobile + retail experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${accent.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
