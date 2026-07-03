import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

const FAQS = [
  {
    q: "Est-ce que ce workshop est technique ?",
    a: "Non. Il est conçu pour des professionnels, managers et dirigeants. Il ne nécessite pas de savoir coder.",
  },
  {
    q: "Est-ce utile si j'utilise déjà ChatGPT, Claude ou Copilot ?",
    a: "Oui. Le sujet n'est pas seulement d'utiliser un outil comme ChatGPT, Claude ou Copilot, mais de structurer des assistants, des agents simples et des capacités IA autour de votre métier.",
  },
  {
    q: "Quelle est la différence entre Standard et Premium ?",
    a: "Les deux formules donnent accès au live et au replay. Premium ajoute le pack de ressources, les templates et le plan d'action 30 jours pour appliquer la méthode après le workshop.",
  },
  {
    q: "Le replay est-il inclus ?",
    a: "Oui, le replay est inclus dans les deux formules (Standard et Premium).",
  },
  {
    q: "Est-ce adapté à mon métier ?",
    a: "Oui, si votre travail implique des analyses, documents, décisions, réunions, contenus, suivis, recherches, synthèses, reportings ou livrables professionnels.",
  },
  {
    q: "Y aura-t-il une attestation ?",
    a: "Oui, selon les conditions de participation définies par MANAGERSITY.",
  },
  {
    q: "Puis-je inscrire un collaborateur ?",
    a: "Oui. Les inscriptions sont possibles à titre individuel ou pour une équipe. Contactez-nous pour une inscription groupée.",
  },
  {
    q: "Que se passe-t-il si je ne peux pas assister en live ?",
    a: "Le replay est inclus dans les deux formules : vous pourrez revoir les sessions à votre rythme, même si vous ne suivez pas tout en direct.",
  },
  {
    q: "Quels moyens de paiement sont disponibles ?",
    a: "Les moyens de paiement disponibles (par exemple Mobile Money, Wave, carte bancaire ou virement) s'affichent au moment de la réservation.",
  },
];

export function WorkshopFaq() {
  return (
    <Section id="faq" className="bg-paper">
      <Reveal variant="fade">
        <SectionHead index="12" eyebrow="FAQ" title="Questions fréquentes." />
      </Reveal>

      {/* Accordéon natif <details> : fonctionne sans JavaScript (fiable sur tous
          les navigateurs, y compris Safari mobile). */}
      <Reveal delay={80}>
        <div className="mt-12 w-full divide-y divide-paper-line border-y border-paper-line">
          {FAQS.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className="group"
            >
              <summary className="flex cursor-pointer list-none items-center gap-5 py-5 [&::-webkit-details-marker]:hidden">
                <span className="font-mono text-[11px] font-medium text-gold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-lg font-medium text-navy transition-colors duration-200 group-hover:text-green group-open:text-green">
                  {item.q}
                </span>
                <span className="shrink-0 text-green transition-transform duration-200 group-open:rotate-45">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </summary>
              <p className="ws-faq-answer pb-5 pl-9 pr-9 text-muted leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
