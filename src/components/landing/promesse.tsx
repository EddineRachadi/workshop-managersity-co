import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const POINTS = [
  "Pas de jargon inutile.",
  "Pas de théorie compliquée.",
  "Pas de cours technique interminable.",
];

export function Promesse() {
  return (
    <Section id="promesse" className="bg-surface">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green mb-3">
              La promesse
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
              De la curiosité à l&apos;usage concret.
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Le Lab IA MANAGERSITY vous aide à passer de la curiosité à
              l&apos;usage concret. Chaque semaine, nous vous montrons comment
              utiliser l&apos;IA de manière simple, pratique et professionnelle.
            </p>
            <p className="mt-5 text-lg font-medium text-navy">
              Seulement des cas d&apos;usage, des prompts, des méthodes et des
              exemples concrets pour mieux travailler avec l&apos;IA.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="space-y-4">
            {POINTS.map((point) => (
              <div
                key={point}
                className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-lg font-medium text-navy">{point}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
