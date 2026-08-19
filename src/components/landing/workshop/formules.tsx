import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { SectionHead } from "./section-head";
import { WORKSHOP } from "@/lib/workshop";

const STANDARD_INCLUS = [
  "Accès aux deux journées de workshop en direct",
  "Supports, cahier de travail et datasets",
  "Modèles de tableaux de bord",
  "Replay accessible pendant 30 jours",
  "Certificat de participation",
];

const PREMIUM_INCLUS = [
  "Tous les avantages de la formule Standard",
  "Cours vidéo complet accessible sur MANAGERSITY avant le workshop",
  "Kits d'application par fonction",
  "Deux cliniques d'implémentation",
  "Évaluation de maturité Data & AI",
  "Plan d'action personnalisé sur 90 jours",
  "Cadrage complet pour passer à l'action après le workshop",
];

function Tick({ tone = "green" }: { tone?: "green" | "gold" }) {
  return (
    <span
      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center ${
        tone === "gold" ? "text-gold" : "text-green"
      }`}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </span>
  );
}

export function WorkshopFormules() {
  return (
    <>
      <Section id="formules" className="bg-paper">
        <Reveal variant="fade">
          <SectionHead
            index="08"
            eyebrow="Formules"
            title="Deux façons de participer."
            intro="Suivre le live, appliquer les méthodes et repartir avec les outils pour transformer vos données en décisions utiles."
          />
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-6 lg:gap-7 items-start">
          <Reveal variant="left">
            <div className="ws-lift ws-card-sheen flex h-full flex-col rounded-2xl border border-paper-line bg-white p-7 sm:p-9 hover:border-navy/30 hover:shadow-[0_22px_55px_-32px_rgba(10,35,66,0.4)]">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Formule · Standard
              </p>
              <p className="mt-5 font-display text-[2.6rem] font-semibold leading-none text-navy">
                {WORKSHOP.prix.standard}
              </p>
              <p className="mt-4 text-muted leading-relaxed">Participez aux deux journées, appliquez la méthode pendant les exercices et repartez avec les supports nécessaires pour poursuivre le travail.</p>

              <ButtonLink
                href={WORKSHOP.liens.standard}
                target="_blank"
                rel="noopener noreferrer"
                variant="navy"
                className="mt-7 w-full"
              >
                Choisir la formule Standard
              </ButtonLink>

              <ul className="mt-8 space-y-3">
                {STANDARD_INCLUS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Tick />
                    <span className="text-navy leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </Reveal>

          <Reveal delay={100} variant="right">
            <div className="ws-price-pulse relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-brand-green bg-white shadow-[0_24px_60px_-32px_rgba(10,35,66,0.5)]">
              <div className="flex items-center justify-between bg-brand-green px-7 py-3 text-white sm:px-9">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
                  Formule · Premium
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                  Recommandée
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <p className="font-display text-[2.6rem] font-semibold leading-none text-navy">
                  {WORKSHOP.prix.premium}
                </p>
                <p className="mt-4 text-muted leading-relaxed">
                  Préparez-vous avant le direct, approfondissez les outils et
                  bénéficiez d'un cadre d'implémentation après le workshop.
                </p>

                <ButtonLink
                  href={WORKSHOP.liens.premium}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="mt-7 w-full"
                >
                  Choisir la formule Premium
                </ButtonLink>

                <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {PREMIUM_INCLUS.map((item, i) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Tick tone={i === 0 ? "gold" : "green"} />
                      <span className="text-navy leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="ws-lift mt-7 flex flex-col gap-4 rounded-2xl border border-paper-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between hover:border-brand-green/40 hover:shadow-[0_18px_42px_-30px_rgba(10,35,66,0.35)]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Individuel ou équipe
              </p>
              <p className="mt-2 text-navy leading-relaxed">
                Vous pouvez inscrire un collaborateur, plusieurs managers ou un comité de direction. Pour une inscription groupée ou une facture pro forma : +221 78 190 74 84.
              </p>
            </div>
            <a
              href="https://wa.me/221781907484"
              target="_blank"
              rel="noopener noreferrer"
              className="ws-lift inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/5 px-5 py-3 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-green/10"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.16c-.24.68-1.42 1.32-1.95 1.36-.5.04-.98.23-3.3-.69-2.79-1.1-4.56-3.94-4.7-4.13-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.97-2.31.24-.26.53-.33.71-.33.18 0 .35 0 .51.01.16.01.38-.06.6.46.24.56.79 1.94.86 2.08.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.69-.81.87-1.09.18-.28.37-.23.6-.14.24.09 1.5.71 1.76.84.26.14.43.21.5.32.07.12.07.66-.17 1.34Z" />
              </svg>
              +221 78 190 74 84
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
