import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { InscriptionForm } from "./inscription-form";

const BENEFITS = [
  "Gratuit, sans engagement, désinscription en 1 clic.",
  "3 contenus actionnables par semaine, jamais de spam.",
  "Des prompts et méthodes prêts à utiliser dans votre métier.",
];

export function Inscription() {
  return (
    <Section id="inscription" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green mb-3">
              Inscription
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
              Rejoignez gratuitement Le Lab IA MANAGERSITY
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Recevez chaque lundi, mercredi et vendredi des idées, prompts,
              outils et méthodes pour mieux utiliser l&apos;IA au travail.
            </p>

            <ul className="mt-8 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-navy">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-sm">
            <InscriptionForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
