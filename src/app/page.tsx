import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Probleme } from "@/components/landing/probleme";
import { Promesse } from "@/components/landing/promesse";
import { CeQueVousRecevez } from "@/components/landing/ce-que-vous-recevez";
import { CtaBand } from "@/components/landing/cta-band";
import { PourQui } from "@/components/landing/pour-qui";
import { Apprendre } from "@/components/landing/apprendre";
import { Rythme } from "@/components/landing/rythme";
import { Positionnement } from "@/components/landing/positionnement";
import { Inscription } from "@/components/landing/inscription";
import { Faq } from "@/components/landing/faq";
import { DernierAppel } from "@/components/landing/dernier-appel";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Probleme />
        <Promesse />
        <CeQueVousRecevez />
        <CtaBand
          title="Prêt à recevoir l'IA utile pour votre travail ?"
          subtitle="Rejoignez gratuitement Le Lab IA MANAGERSITY et recevez votre premier contenu dès la prochaine édition."
        />
        <PourQui />
        <Apprendre />
        <Rythme />
        <CtaBand
          title="Un rendez-vous IA chaque lundi, mercredi et vendredi."
          subtitle="Inscrivez-vous gratuitement et commencez à intégrer l'IA dans votre métier, étape par étape."
        />
        <Positionnement />
        <Inscription />
        <Faq />
        <DernierAppel />
      </main>
      <Footer />
    </>
  );
}
