import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { WorkshopHeader } from "@/components/landing/workshop/workshop-header";
import { ScrollProgress } from "@/components/landing/workshop/motion";
import { WorkshopHero } from "@/components/landing/workshop/hero";
import { WorkshopChiffres } from "@/components/landing/workshop/chiffres";
import { WorkshopProbleme } from "@/components/landing/workshop/probleme";
import { WorkshopParadigme } from "@/components/landing/workshop/paradigme";
import { WorkshopPromesse } from "@/components/landing/workshop/promesse";
import { WorkshopEmployesIa } from "@/components/landing/workshop/employes-ia";
import { WorkshopProgramme } from "@/components/landing/workshop/programme";
import { WorkshopInclus } from "@/components/landing/workshop/inclus";
import { WorkshopFormules } from "@/components/landing/workshop/formules";
import { WorkshopComparaison } from "@/components/landing/workshop/comparaison";
import { WorkshopPourQui } from "@/components/landing/workshop/pour-qui";
import { WorkshopPasPourVous } from "@/components/landing/workshop/pas-pour-vous";
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
  "Workshop IA en ligne, en live (30-31 juillet 2026). Identifier les tâches à déléguer à l'IA, créer des assistants, agents et capacités IA spécialisés, puis structurer un système de travail augmenté. Pour managers, dirigeants et professionnels.";

export const metadata: Metadata = {
  title: "Workshop IA MANAGERSITY — Recruter ses employés IA dans son métier",
  description: DESCRIPTION,
  keywords: [
    "workshop IA",
    "formation IA",
    "assistants IA",
    "agents IA",
    "MANAGERSITY",
    "intelligence artificielle",
    "management",
    "productivité",
    "Afrique francophone",
  ],
  authors: [{ name: "MANAGERSITY" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Workshop IA MANAGERSITY — Recruter ses employés IA dans son métier",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "MANAGERSITY",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshop IA MANAGERSITY — Recruter ses employés IA dans son métier",
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
        <WorkshopChiffres />
        <WorkshopProbleme />
        <WorkshopParadigme />
        <WorkshopPromesse />
        <WorkshopEmployesIa />
        <WorkshopProgramme />
        <WorkshopCtaBand
          title="Constituez votre première équipe d'employés IA."
          subtitle="Deux sessions live pour passer d'un usage ponctuel de l'IA à une méthode de travail structurée."
        />
        <WorkshopInclus />
        <WorkshopFormules />
        <WorkshopComparaison />
        <WorkshopPourQui />
        <WorkshopPasPourVous />
        <WorkshopCredibilite />
        <WorkshopFaq />
        <WorkshopCtaFinal />
      </main>
      <Footer />
    </div>
  );
}
