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
    "Workshop en ligne pour DG, DGA, CODIR et managers : Data Analytics, IA et pilotage de la performance. Deux jours pour transformer vos données en décisions et automatiser vos opérations.",
  keywords: [
    "Data Analytics",
    "workshop IA en ligne",
    "formation IA pour dirigeants",
    "formation Data Analytics",
    "workshop management",
    "DG DGA CODIR managers",
    "pilotage de la performance",
    "données et prise de décision",
    "automatisation des opérations",
    "MANAGERSITY",
    "intelligence artificielle",
    "management",
    "formation professionnelle Afrique",
    "formation en ligne Afrique",
    "executive education Africa",
  ],
  authors: [{ name: "MANAGERSITY" }],
  openGraph: {
    title: "DATA ANALYTICS & AI | MANAGERSITY",
    description:
      "Workshop en ligne pour DG, DGA, CODIR et managers : Data Analytics, IA et pilotage de la performance.",
    url: SITE_URL,
    siteName: "MANAGERSITY",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DATA ANALYTICS & AI | MANAGERSITY",
    description:
      "Workshop en ligne Data Analytics, IA et management pour dirigeants et managers en Afrique et dans le monde.",
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
