import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://managersity.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Workshop IA MANAGERSITY — Recruter ses employés IA dans son métier",
  description:
    "Workshop IA en ligne, en live. Identifier les tâches à déléguer à l'IA, créer des assistants, agents et capacités IA spécialisés, puis structurer un système de travail augmenté. Pour managers, dirigeants et professionnels.",
  keywords: [
    "workshop IA",
    "formation IA",
    "assistants IA",
    "agents IA",
    "MANAGERSITY",
    "intelligence artificielle",
    "management",
    "productivité",
  ],
  authors: [{ name: "MANAGERSITY" }],
  openGraph: {
    title: "Workshop IA MANAGERSITY — Recruter ses employés IA dans son métier",
    description:
      "Identifier les tâches à déléguer à l'IA, créer des assistants, agents et capacités IA spécialisés, puis structurer un système de travail augmenté.",
    url: SITE_URL,
    siteName: "MANAGERSITY",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshop IA MANAGERSITY",
    description:
      "Workshop IA en ligne, en live, pour managers, dirigeants et professionnels.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <head>
        {/* Sans JavaScript, on n'applique aucune animation : tout reste visible. */}
        <noscript>
          <style>{`.reveal,.reveal-fade,.reveal-zoom,.reveal-left,.reveal-right{opacity:1 !important}`}</style>
        </noscript>
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
