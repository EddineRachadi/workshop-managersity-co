import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

const CAS = [
  "Vous recherchez uniquement une liste d'outils à tester sans travailler sur vos décisions et vos processus.",
  "Vous attendez une automatisation immédiate sans clarifier les données, les règles et les contrôles nécessaires.",
  "Vous ne souhaitez pas participer aux exercices.",
  "Vous recherchez une formation avancée de programmation, de machine learning ou d'ingénierie des données.",
  "Vous souhaitez déléguer entièrement le jugement managérial à un système automatisé.",
];

export function WorkshopPasPourVous() {
  return (
    <Section className="bg-paper">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal variant="left">
          <ul className="space-y-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line">
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

        <Reveal variant="right" delay={80}>
          <SectionHead
            index="10"
            eyebrow="Soyons clairs"
            title="Le workshop vous conviendra moins si…"
          />
        </Reveal>
      </div>
    </Section>
  );
}
