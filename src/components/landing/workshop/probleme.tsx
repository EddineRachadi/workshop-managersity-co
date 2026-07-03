import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

const USAGES_COURANTS = [
  "Faire rédiger ou reformuler un texte.",
  "Corriger un email, améliorer un message.",
  "Demander quelques idées pour démarrer.",
  "Résumer rapidement un document.",
];

const CE_QUI_MANQUE = [
  "Identifier ce qui peut vraiment être délégué.",
  "Créer des assistants spécialisés sur un livrable.",
  "Structurer des agents pour une suite d'actions.",
  "Organiser le tout en un système cohérent.",
];

export function WorkshopProbleme() {
  return (
    <Section className="bg-paper">
      <Reveal variant="fade">
        <SectionHead
          index="01"
          eyebrow="Le constat"
          title="Presque tout le monde utilise déjà l'IA. Peu en ont fait une méthode."
          intro="Le problème n'est pas l'accès aux outils. C'est l'absence de méthode pour transformer un usage ponctuel en véritable renfort de travail."
        />
      </Reveal>

      <div className="mt-16 grid md:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line">
        <Reveal variant="left">
          <div className="h-full bg-white p-7 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Aujourd&apos;hui · usage ponctuel
            </p>
            <ul className="mt-6 space-y-3.5">
              {USAGES_COURANTS.map((item) => (
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
              Ce qui manque · méthode
            </p>
            <ul className="mt-6 space-y-3.5">
              {CE_QUI_MANQUE.map((item) => (
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
