import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

const CAPACITES = [
  {
    title: "Cartographier vos tâches",
    desc: "Mettre à plat tâches, livrables et responsabilités pour y voir clair.",
  },
  {
    title: "Identifier ce qui se délègue",
    desc: "Distinguer ce qui peut être confié à l'IA de ce qui reste à vous.",
  },
  {
    title: "Créer vos premiers assistants IA",
    desc: "Des assistants spécialisés sur une tâche, un rôle, un livrable.",
  },
  {
    title: "Comprendre les agents IA simples",
    desc: "La logique d'un agent qui exécute une suite d'actions définie.",
  },
  {
    title: "Concevoir des capacités IA",
    desc: "Instructions systèmes, skills, plugins, connecteurs et workflows.",
  },
  {
    title: "Structurer votre système augmenté",
    desc: "Relier assistants, agents, prompts et routines en un ensemble cohérent.",
  },
];

export function WorkshopPromesse() {
  return (
    <Section className="bg-paper">
      <Reveal variant="fade">
        <SectionHead
          index="03"
          eyebrow="Ce que vous saurez faire"
          title="Six compétences concrètes, acquises en deux sessions."
        />
      </Reveal>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {CAPACITES.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 70}>
            <div
              className="ws-lift ws-border-glow border-t border-paper-line pt-5"
              style={{ ["--ws-delay" as string]: `${i * 65}ms` }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy leading-snug">
                {c.title}
              </h3>
              <p className="mt-2 text-muted leading-relaxed">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
