import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

const NIVEAUX = [
  "Descriptif — Que s’est-il passé ? : reporting, historique et situation actuelle.",
  "Diagnostique — Pourquoi cela s’est-il passé ? : écarts, causes, segments et facteurs de performance.",
  "Prédictif — Que risque-t-il de se passer ? : prévisions de cash, demande, churn, risques et charge.",
  "Prescriptif — Que devons-nous faire ? : recommandations, scénarios, priorisation et automatisation encadrée.",
];

export function WorkshopSignature() {
  return (
    <Section className="bg-white">
      <Reveal variant="fade">
        <SectionHead
          index="05"
          eyebrow="Signature"
          title="Un workshop conçu autour des décisions que vous devez réellement prendre"
          intro="La progression suit les quatre niveaux des analytics. Chaque niveau répond à une question différente et prépare le niveau suivant."
        />
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line sm:grid-cols-2">
        {NIVEAUX.map((niveau, index) => (
          <Reveal key={niveau} delay={index * 70}>
            <div className="h-full bg-paper p-6 text-navy sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                Niveau {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 text-lg leading-relaxed">{niveau}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
