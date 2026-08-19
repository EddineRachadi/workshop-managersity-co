import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

interface Jour {
  label: string;
  date: string;
  titre: string;
  points: string[];
}

const JOURS: Jour[] = [
  {
    label: "Jour 1",
    date: "Jeu. 17 sept. · en direct",
    titre: "Transformer vos données en informations de pilotage",
    points: [
      "Repérer les données déjà disponibles dans les ventes, la finance, les opérations, la relation client et les RH.",
      "Comprendre le circuit de la donnée : connecter, unifier, analyser, collaborer, apprendre.",
      "Lire un chiffre avec rigueur : référence, tendance, cause, causalité et qualité de la donnée.",
      "Distinguer indicateurs de résultat, indicateurs d'alerte et indicateurs réellement actionnables.",
      "Construire un tableau de bord minimal de 8 à 12 indicateurs compris et utilisables par le manager.",
      "Travailler sur des cas concrets : chiffre d'affaires, marge, cash, stocks, clients, qualité et performance d'équipe.",
      "Production attendue : livrable : votre cartographie des données et l'ossature de votre tableau de bord minimal.",
    ],
  },
  {
    label: "Jour 2",
    date: "Ven. 18 sept. · en direct",
    titre: "Analyser, anticiper et automatiser avec l'IA",
    points: [
      "Passer des analytics descriptifs aux analytics diagnostiques, prédictifs et prescriptifs.",
      "Utiliser l'IA pour interroger, résumer et analyser des données sans avoir besoin de coder.",
      "Détecter plus tôt les tendances, écarts, anomalies et risques qui méritent une décision.",
      "Accélérer la préparation du reporting et produire des synthèses de décision plus utiles.",
      "Concevoir des alertes et des automatisations simples, avec des règles de validation et de contrôle qualité.",
      "Prioriser les cas d'usage par valeur et effort, puis installer un rituel de pilotage Data & AI.",
      "Production attendue : livrable : vos 2 à 3 cas d'usage prioritaires et votre plan Data & AI à 90 jours.",
    ],
  },
];

export function WorkshopProgramme() {
  return (
    <Section id="programme" className="bg-paper">
      <Reveal variant="fade">
        <SectionHead
          index="06"
          eyebrow="Programme"
          title="Deux journées, une progression claire."
          intro="Chaque journée combine apports structurants, démonstrations, cas métier, exercices guidés et production de livrables réutilisables."
        />
      </Reveal>

      <div className="mt-16 grid lg:grid-cols-2 gap-6">
        {JOURS.map((jour, i) => (
          <Reveal key={jour.label} delay={i * 100} variant={i === 0 ? "left" : "right"}>
            <div className="ws-lift ws-card-sheen h-full rounded-2xl border border-paper-line bg-white p-7 sm:p-9 hover:border-green/35 hover:shadow-[0_22px_55px_-32px_rgba(10,35,66,0.35)]">
              <div className="flex items-baseline justify-between gap-4 border-b border-paper-line pb-5">
                <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  {jour.label}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {jour.date}
                </span>
              </div>

              <h3 className="mt-6 font-display text-[1.55rem] font-semibold text-navy leading-snug">
                {jour.titre}
              </h3>

              <ol className="ws-list-stagger mt-7 space-y-4">
                {jour.points.map((p, j) => (
                  <li
                    key={p}
                    className="flex items-start gap-4"
                    style={{ ["--ws-delay" as string]: `${j * 55}ms` }}
                  >
                    <span className="mt-0.5 font-mono text-[11px] font-medium text-green tabular-nums">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span className="text-navy leading-relaxed">{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
