import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

const ELEMENTS = [
  "Les supports complets des deux journées.",
  "Un cahier de travail pour transformer les exercices en décisions applicables.",
  "Des datasets d'entraînement et des cas chiffrés.",
  "Des modèles de tableaux de bord.",
  "Une grille de lecture des indicateurs et des écarts.",
  "Une matrice de priorisation valeur / effort.",
  "Un canevas de plan Data & AI à 90 jours.",
  "Replay et ressources selon la formule choisie.",
];

function Tick() {
  return (
    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center text-green">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </span>
  );
}

export function WorkshopInclus() {
  return (
    <Section className="bg-white">
      <Reveal variant="fade">
        <SectionHead
          index="06"
          eyebrow="Ce que vous recevez"
          title="Le kit de travail du workshop."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-14 grid sm:grid-cols-2 sm:gap-x-12 border-t border-paper-line">
          {ELEMENTS.map((item, i) => (
            <div
              key={item}
              className="ws-inclusion-row flex items-start gap-3.5 border-b border-paper-line py-4"
              style={{ ["--ws-delay" as string]: `${i * 45}ms` }}
            >
              <Tick />
              <span className="text-navy leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120}>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Détail par formule → voir le comparatif
        </p>
      </Reveal>
    </Section>
  );
}
