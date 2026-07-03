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
  title: "Le Lab IA MANAGERSITY — L'IA pratique, 3 fois par semaine",
  description:
    "Newsletter gratuite pour managers, dirigeants, RH, commerciaux et professionnels. Recevez chaque lundi, mercredi et vendredi des cas d'usage, prompts, outils et méthodes pour utiliser l'IA dans votre métier.",
  keywords: [
    "IA",
    "intelligence artificielle",
    "newsletter IA",
    "MANAGERSITY",
    "management",
    "productivité",
    "prompts",
    "ChatGPT",
    "formation IA",
  ],
  authors: [{ name: "MANAGERSITY" }],
  openGraph: {
    title: "Le Lab IA MANAGERSITY — L'IA pratique, 3 fois par semaine",
    description:
      "Cas d'usage, prompts, outils et méthodes pour utiliser l'IA dans votre métier. Gratuit, chaque lundi, mercredi et vendredi.",
    url: SITE_URL,
    siteName: "Le Lab IA MANAGERSITY",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Lab IA MANAGERSITY",
    description:
      "L'IA pratique pour mieux travailler, 3 fois par semaine. Newsletter gratuite.",
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
          <style>{`.reveal{opacity:1 !important}`}</style>
        </noscript>
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
