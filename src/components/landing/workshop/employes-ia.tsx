import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

interface Fiche {
  code: string;
  role: string;
  type: string;
  mission: string;
  portee: string;
}

const FICHES: Fiche[] = [
  {
    code: "Poste 01",
    role: "Assistant IA spécialisé",
    type: "Assistant",
    mission:
      "Aider sur une tâche, un rôle ou un livrable précis : préparer une analyse, structurer un document, produire un contenu, vérifier un élément.",
    portee: "Une tâche / un livrable",
  },
  {
    code: "Poste 02",
    role: "Agent IA simple",
    type: "Agent",
    mission:
      "Accompagner ou exécuter une suite d'actions dans un processus défini, au lieu de répondre à une seule demande isolée.",
    portee: "Un processus",
  },
  {
    code: "Poste 03",
    role: "Capacité IA métier",
    type: "Capacité",
    mission:
      "Instructions systèmes, skills, plugins, connecteurs et workflows qui permettent à l'IA de mieux exécuter une tâche professionnelle.",
    portee: "Une compétence",
  },
  {
    code: "Poste 04",
    role: "Système de travail augmenté",
    type: "Système",
    mission:
      "Organiser plusieurs assistants, agents, capacités, prompts, documents sources et routines en un ensemble cohérent autour de votre activité.",
    portee: "Toute l'activité",
  },
];

export function WorkshopEmployesIa() {
  return (
    <Section className="bg-white">
      <Reveal variant="zoom">
        <SectionHead
          index="04"
          eyebrow="La signature du workshop"
          title={
            <>
              « Recruter ses employés IA » : vous ne remplacez personne, vous
              constituez une <span className="text-green">équipe</span>.
            </>
          }
          intro="Quatre types de renforts IA à construire dans votre métier — analyses, documents, contenus, vérifications, livrables. Voici les postes que vous apprendrez à pourvoir."
        />
      </Reveal>

      <div className="mt-16 grid sm:grid-cols-2 gap-6">
        {FICHES.map((f, i) => (
          <Reveal key={f.code} delay={(i % 2) * 90}>
            <article className="group ws-lift ws-card-sheen h-full overflow-hidden rounded-2xl border border-paper-line bg-paper hover:border-green/45 hover:shadow-[0_22px_55px_-32px_rgba(10,35,66,0.45)]">
              {/* Bandeau de fiche */}
              <div className="flex items-center justify-between border-b border-paper-line bg-white px-6 py-3.5">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-navy">
                  {f.code}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-green">
                  Statut · à recruter
                </span>
              </div>

              {/* Corps de fiche */}
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-2xl font-semibold text-navy leading-tight">
                  {f.role}
                </h3>

                <p className="ws-tape mt-5 bg-[linear-gradient(90deg,rgba(201,162,39,0.22),rgba(201,162,39,0)_55%)] font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Mission
                </p>
                <p className="mt-2 text-muted leading-relaxed">{f.mission}</p>

                <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-paper-line bg-paper-line text-sm">
                  <div className="bg-white px-4 py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      Type
                    </dt>
                    <dd className="mt-1 font-medium text-navy">{f.type}</dd>
                  </div>
                  <div className="bg-white px-4 py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      Portée
                    </dt>
                    <dd className="mt-1 font-medium text-navy">{f.portee}</dd>
                  </div>
                </dl>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
