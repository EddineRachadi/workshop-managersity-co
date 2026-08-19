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
  title: "DATA ANALYTICS & AI | MANAGERSITY",
  description:
    "Deux jours d’immersion pour transformer vos données en décisions plus rapides, en performances mieux pilotées et en opérations intelligemment automatisées.",
  keywords: [
    "Data Analytics",
    "AI workshop",
    "données et décision",
    "performance management",
    "MANAGERSITY",
    "intelligence artificielle",
    "management",
    "productivité",
  ],
  authors: [{ name: "MANAGERSITY" }],
  openGraph: {
    title: "DATA ANALYTICS & AI | MANAGERSITY",
    description:
      "Deux jours d’immersion pour transformer vos données en décisions plus rapides, en performances mieux pilotées et en opérations intelligemment automatisées.",
    url: SITE_URL,
    siteName: "MANAGERSITY",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DATA ANALYTICS & AI | MANAGERSITY",
    description:
      "Vous avez déjà des données : ventes, finances, opérations, clients, équipes, projets. Pendant deux sessions pratiques, vous apprendrez à les structurer, à les lire avec rigueur, à en tirer des décisions actionnables et à utiliser l’IA pour accélérer vos analyses, vos alertes et vos reportings — sans avoir besoin d’être data scientist.",
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
