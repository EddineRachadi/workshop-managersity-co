import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

const CAS = [
  "Vous cherchez surtout une liste d'outils IA à tester.",
  "Vous attendez une automatisation magique, sans réflexion sur votre métier.",
  "Vous ne souhaitez pas faire les exercices.",
  "Vous cherchez une formation technique de programmation.",
  "Vous pensez que l'IA remplace le jugement professionnel.",
];

export function WorkshopPasPourVous() {
  return (
    <Section className="bg-paper">
      <Reveal>
        <SectionHead
          index="10"
          eyebrow="Soyons clairs"
          title="Ce workshop n'est pas pour vous si…"
          intro="Par honnêteté sur ce que vous y trouverez, voici les cas où il ne conviendra pas."
        />
      </Reveal>

      <Reveal delay={80}>
        <ul className="mt-12 max-w-2xl space-y-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line">
          {CAS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3.5 bg-white px-5 py-4 sm:px-6"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-muted/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <span className="text-navy leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
