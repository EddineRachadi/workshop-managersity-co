import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { WorkshopHeader } from "@/components/landing/workshop/workshop-header";
import { ScrollProgress, BackToTop } from "@/components/landing/workshop/motion";
import { WorkshopHero } from "@/components/landing/workshop/hero";
import { WorkshopProbleme } from "@/components/landing/workshop/probleme";
import { WorkshopParadigme } from "@/components/landing/workshop/paradigme";
import { WorkshopPromesse } from "@/components/landing/workshop/promesse";
import { WorkshopSignature } from "@/components/landing/workshop/signature";
import { WorkshopProgramme } from "@/components/landing/workshop/programme";
import { WorkshopInclus } from "@/components/landing/workshop/inclus";
import { WorkshopFormules } from "@/components/landing/workshop/formules";
import { WorkshopComparaison } from "@/components/landing/workshop/comparaison";
import { WorkshopPourQui } from "@/components/landing/workshop/pour-qui";
import { WorkshopPasPourVous } from "@/components/landing/workshop/pas-pour-vous";
import { WorkshopAnimateur } from "@/components/landing/workshop/animateur";
import { WorkshopCredibilite } from "@/components/landing/workshop/credibilite";
import { WorkshopFaq } from "@/components/landing/workshop/faq";
import { WorkshopCtaFinal } from "@/components/landing/workshop/cta-final";
import { WorkshopCtaBand } from "@/components/landing/workshop/cta-band";
import { Footer } from "@/components/landing/footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://managersity.co";

const DESCRIPTION =
  "Participez au workshop en ligne DATA ANALYTICS & AI les 17 et 18 septembre 2026. Apprenez à transformer vos données en décisions, piloter la performance et automatiser vos analyses avec l'IA.";

export const metadata: Metadata = {
  title: "Workshop Data Analytics & AI pour dirigeants, CODIR et managers | MANAGERSITY",
  description: DESCRIPTION,
  keywords: [
    "Data Analytics",
    "AI workshop",
    "données et décision",
    "performance management",
    "tableaux de bord",
    "analytics",
    "MANAGERSITY",
    "intelligence artificielle",
    "Afrique francophone",
  ],
  authors: [{ name: "MANAGERSITY" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Workshop Data Analytics & AI pour dirigeants, CODIR et managers | MANAGERSITY",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "MANAGERSITY",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshop Data Analytics & AI pour dirigeants, CODIR et managers | MANAGERSITY",
    description: DESCRIPTION,
  },
};

export default function Home() {
  return (
    <div className={`workshop ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <ScrollProgress />
      <WorkshopHeader />
      <main>
        <WorkshopHero />
        <WorkshopProbleme />
        <WorkshopParadigme />
        <WorkshopPromesse />
        <WorkshopSignature />
        <WorkshopCtaBand
          kicker=""
          title="Je veux passer de la donnée à l'action"
        />
        <WorkshopProgramme />
        <WorkshopCtaBand
          kicker=""
          title="Réserver ma place pour les 17 et 18 septembre"
        />
        <WorkshopInclus />
        <WorkshopFormules />
        <WorkshopComparaison />
        <WorkshopPourQui />
        <WorkshopPasPourVous />
        <WorkshopAnimateur />
        <WorkshopCredibilite />
        <WorkshopFaq />
        <WorkshopCtaFinal />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
