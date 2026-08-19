import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

const FAQS = [
  {
    q: "Le workshop est-il technique ?",
    a: "Le contenu est conçu pour des dirigeants, des membres de CODIR et des managers. Les exercices ne demandent aucune compétence en programmation.",
  },
  {
    q: "Dois-je être data scientist ou maîtriser Power BI ?",
    a: "Aucune expertise de data scientist n'est requise. Des exemples de tableaux de bord et d'analytics seront utilisés, avec une lecture orientée décision et métier.",
  },
  {
    q: "Mon organisation a peu de données structurées. Le workshop reste-t-il utile ?",
    a: "Oui. La première étape consiste justement à repérer les données déjà produites par vos activités, à clarifier les questions prioritaires et à identifier les sources à connecter progressivement.",
  },
  {
    q: "Puis-je travailler sur mes propres données ?",
    a: "Vous pourrez transposer les exercices à votre contexte. Aucun partage de donnée confidentielle n'est nécessaire : des datasets d'entraînement sont fournis et toute donnée personnelle utilisée pendant les exercices doit être anonymisée.",
  },
  {
    q: "Quels métiers sont concernés ?",
    a: "Le workshop s'applique aux fonctions qui pilotent des ventes, des marges, du cash, des stocks, des clients, des projets, des opérations, des équipes, des risques ou de la qualité.",
  },
  {
    q: "Quelle est la différence entre Standard et Premium ?",
    a: "Standard couvre les deux journées live, les supports, les datasets, les modèles, le replay pendant 30 jours et le certificat. Premium ajoute le cours vidéo complet sur MANAGERSITY, les kits par fonction, deux cliniques d'implémentation, l'évaluation et le plan d'action à 90 jours.",
  },
  {
    q: "Le replay est-il inclus ?",
    a: "Oui. Le replay est accessible pendant 30 jours dans les deux formules.",
  },
  {
    q: "Y aura-t-il un certificat ?",
    a: "Oui, un certificat de participation est prévu selon les conditions définies par MANAGERSITY.",
  },
  {
    q: "Que se passe-t-il si je ne peux pas suivre une partie du direct ?",
    a: "Vous pourrez revoir les séquences manquées pendant la période d’accès au replay. Les exercices live restent recommandés pour bénéficier pleinement de la progression.",
  },
  {
    q: "Puis-je inscrire plusieurs collaborateurs ?",
    a: "Oui. Les inscriptions individuelles et groupées sont possibles. Pour un comité de direction ou une équipe, contactez MANAGERSITY au +221 78 190 74 84 afin d'obtenir une proposition et une facture pro forma.",
  },
  {
    q: "Quels moyens de paiement sont disponibles ?",
    a: "Les moyens de paiement disponibles seront affichés au moment de la réservation. Une facture pro forma peut être demandée pour les inscriptions prises en charge par une organisation.",
  },
];

export function WorkshopFaq() {
  return (
    <Section id="faq" className="bg-paper">
      <Reveal variant="fade">
        <SectionHead index="13" eyebrow="FAQ" title="Questions fréquentes" />
      </Reveal>

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
