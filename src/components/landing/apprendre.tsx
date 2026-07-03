import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const SKILLS = [
  "Préparer une réunion",
  "Rédiger un compte rendu exploitable",
  "Créer un plan d'action",
  "Structurer vos objectifs",
  "Préparer une présentation",
  "Améliorer vos emails professionnels",
  "Analyser un problème",
  "Créer une checklist métier",
  "Préparer une prise de parole",
  "Concevoir un assistant IA pour votre poste",
  "Automatiser certaines tâches simples",
  "Mieux organiser vos idées",
  "Améliorer votre productivité",
  "Mieux décider",
  "Mieux manager",
  "Gagner du temps chaque semaine",
];

export function Apprendre() {
  return (
    <Section id="apprendre" className="bg-white">
      <Reveal>
        <SectionHeader
          eyebrow="Concrètement"
          title="Ce que vous allez apprendre à faire"
          intro="Avec Le Lab IA MANAGERSITY, vous apprendrez progressivement à utiliser l'IA pour :"
        />
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
        {SKILLS.map((skill, i) => (
          <Reveal key={skill} delay={(i % 3) * 60}>
            <div className="flex items-start gap-3 py-2">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-green">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-navy">{skill}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
