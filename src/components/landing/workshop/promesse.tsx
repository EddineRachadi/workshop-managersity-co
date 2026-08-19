import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

const CAPACITES = [
  {
    title: "Cartographier vos données utiles",
    desc: "Identifier les sources déjà disponibles et les relier à vos enjeux de chiffre d'affaires, marge, cash, stocks, clients, qualité ou RH.",
  },
  {
    title: "Poser les bonnes questions",
    desc: "Passer de « que s'est-il passé ? » à « pourquoi ? », « que va-t-il se passer ? » et « que devons-nous faire maintenant ? ».",
  },
  {
    title: "Lire et challenger un indicateur",
    desc: "Vérifier la référence, la tendance, le périmètre, la qualité de la donnée et les causes possibles avant d'arbitrer.",
  },
  {
    title: "Construire un tableau de bord minimal",
    desc: "Retenir 8 à 12 indicateurs réellement actionnables et organiser un rituel de pilotage autour d'eux.",
  },
  {
    title: "Exploiter l'IA dans vos analyses",
    desc: "Interroger les données en langage naturel, accélérer l'analyse des écarts et préparer des synthèses de décision.",
  },
  {
    title: "Prioriser et automatiser les bons cas d'usage",
    desc: "Sélectionner les analyses, alertes, reportings et opérations qui méritent d'être automatisés, puis les encadrer par des règles de qualité et de validation.",
  },
];

export function WorkshopPromesse() {
  return (
    <Section className="bg-paper">
      <Reveal variant="fade">
        <SectionHead
          index="03"
          eyebrow="Résultats"
          title="Six capacités directement applicables dans votre activité."
        />
      </Reveal>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {CAPACITES.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 70}>
            <div
              className="ws-lift ws-border-glow border-t border-paper-line pt-5"
              style={{ ["--ws-delay" as string]: `${i * 65}ms` }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy leading-snug">
                {c.title}
              </h3>
              <p className="mt-2 text-muted leading-relaxed">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
