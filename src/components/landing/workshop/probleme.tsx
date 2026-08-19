import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

const POINTS = [
  "Des rapports qui expliquent le passé une fois que le problème s'est déjà installé.",
  "Des tableaux de bord chargés d'indicateurs sans lien clair vers les décisions à prendre.",
  "Des chiffres contradictoires entre finance, commercial et opérations.",
  "Des analyses qui mobilisent les équipes pendant plusieurs heures ou plusieurs jours.",
  "Des décisions importantes prises avec des données incomplètes, tardives ou mal interprétées.",
];

const METHOD = [
  "Une méthode pour partir d'une question de pilotage claire.",
  "Un nombre limité d'indicateurs compris et actionnables.",
  "Une lecture rigoureuse des tendances, écarts et causes.",
  "Des usages concrets de l'IA pour analyser, synthétiser et automatiser.",
  "Un plan d'application réaliste sur 90 jours.",
];

export function WorkshopProbleme() {
  return (
    <Section className="bg-paper">
      <Reveal variant="fade">
        <SectionHead
          index="01"
          eyebrow="Le constat"
          title="Vos données existent déjà. Leur valeur reste souvent bloquée."
          intro="Votre organisation produit chaque jour une quantité importante d'informations : ventes, finances, opérations, clients, équipes, projets, stocks, réclamations, recrutements, tableaux Excel. La difficulté apparaît au moment de transformer cette matière en réponses rapides à des questions de management."
        />
      </Reveal>

      <div className="mt-16 grid md:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line">
        <Reveal variant="left">
          <div className="h-full bg-white p-7 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Ce que l&apos;on observe encore
            </p>
            <ul className="mt-6 space-y-3.5">
              {POINTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={90} variant="right">
          <div className="h-full bg-white p-7 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-green">
              Ce que le workshop installe
            </p>
            <ul className="mt-6 space-y-3.5">
              {METHOD.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-[3px] bg-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
