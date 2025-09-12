import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

// Using custom Gaegu font for sans and display
const accent = Caveat({ variable: "--font-accent", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noah Woodward — Portfolio",
  description: "Creative software engineer building playful mobile + retail experiences.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Noah Woodward — Portfolio",
    description: "Creative software engineer building playful mobile + retail experiences.",
    url: 'https://noahwoodward.world',
    siteName: 'Noah Woodward Portfolio',
    images: [
      {
        url: '/og-image.png', // We'll create this
        width: 1200,
        height: 630,
        alt: 'Noah Woodward - Creative Software Engineer building playful mobile + retail experiences',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Noah Woodward — Portfolio",
    description: "Creative software engineer building playful mobile + retail experiences.",
    images: ['/og-image.png'], // We'll create this
  },
  metadataBase: new URL('https://noahwoodward.world'),
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
