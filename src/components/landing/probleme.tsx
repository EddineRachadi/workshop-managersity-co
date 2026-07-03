import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Probleme() {
  return (
    <Section id="probleme" className="bg-white">
      <Reveal>
        <SectionHeader
          eyebrow="Le constat"
          title="L'IA est partout. Mais peu de professionnels savent vraiment comment l'utiliser dans leur travail."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-12 max-w-3xl mx-auto space-y-5 text-lg text-muted leading-relaxed">
          <p>
            Beaucoup de personnes testent ChatGPT ou d&apos;autres outils IA, mais
            restent bloquées à des usages très simples : écrire un texte,
            reformuler un email ou chercher des idées.
          </p>
          <p className="font-semibold text-navy">
            Pourtant, l&apos;IA peut aller beaucoup plus loin.
          </p>
          <p>
            Elle peut vous aider à préparer vos réunions, structurer vos
            priorités, créer des plans d&apos;action, analyser des problèmes,
            améliorer vos présentations, concevoir des assistants IA, gagner du
            temps dans vos tâches et mieux piloter votre performance.
          </p>
          <p>
            Le problème n&apos;est donc pas seulement d&apos;avoir accès à l&apos;IA.
            Le vrai sujet, c&apos;est de savoir{" "}
            <span className="font-semibold text-navy">
              quoi lui demander, comment l&apos;utiliser et comment l&apos;intégrer
              intelligemment dans son métier.
            </span>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
