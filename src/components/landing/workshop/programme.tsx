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
    date: "Jeu. 30 juil. · 17h–20h GMT",
    titre: "Identifier les tâches à déléguer et concevoir ses premiers assistants IA",
    points: [
      "Ce qu'un professionnel peut réellement déléguer à l'IA.",
      "Cartographier ses tâches, livrables et responsabilités.",
      "Distinguer tâches répétitives, complexes et à forte valeur.",
      "Définir le rôle d'un assistant IA métier.",
      "Créer une première fiche de poste d'assistant IA.",
      "Démonstrations pratiques.",
    ],
  },
  {
    label: "Jour 2",
    date: "Ven. 31 juil. · 17h–20h GMT",
    titre: "Créer des agents, des capacités IA et structurer son système de travail augmenté",
    points: [
      "La logique des agents IA simples.",
      "Concevoir des capacités : instructions, skills, plugins, workflows.",
      "Organiser ses prompts, documents sources et routines.",
      "Fiabiliser les résultats produits par l'IA.",
      "Construire son premier système de travail augmenté.",
      "Définir son plan d'action IA sur 30 jours.",
    ],
  },
];

export function WorkshopProgramme() {
  return (
    <Section id="programme" className="bg-paper">
      <Reveal variant="fade">
        <SectionHead
          index="05"
          eyebrow="Programme"
          title="Deux séances, une progression claire."
          intro="Chaque journée combine méthode, démonstrations et exercices guidés, pour repartir avec des éléments directement applicables."
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
