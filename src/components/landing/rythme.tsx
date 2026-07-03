import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const DAYS = [
  {
    day: "Lundi",
    desc: "Un cas d'usage ou une méthode pour bien démarrer la semaine avec l'IA.",
  },
  {
    day: "Mercredi",
    desc: "Un prompt, un outil ou un mini-tutoriel à tester dans votre travail.",
  },
  {
    day: "Vendredi",
    desc: "Une synthèse pratique, une erreur à éviter ou une idée pour progresser avec l'IA.",
  },
];

export function Rythme() {
  return (
    <Section id="rythme" className="bg-surface">
      <Reveal>
        <SectionHeader
          eyebrow="Rythme de publication"
          title="Un rendez-vous IA chaque lundi, mercredi et vendredi."
        />
      </Reveal>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {DAYS.map((item, i) => (
          <Reveal key={item.day} delay={i * 90}>
            <div className="h-full rounded-2xl border border-line bg-white p-7 shadow-sm">
              <span className="brand-text-gradient text-sm font-bold uppercase tracking-wider">
                {item.day}
              </span>
              <div className="my-4 h-px w-full bg-line" />
              <p className="text-navy leading-relaxed">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <p className="mt-12 max-w-2xl mx-auto text-center text-lg text-muted leading-relaxed">
          L&apos;objectif est simple : vous aider à intégrer l&apos;IA
          progressivement dans vos pratiques professionnelles, sans vous noyer
          dans l&apos;information.
        </p>
      </Reveal>
    </Section>
  );
}
