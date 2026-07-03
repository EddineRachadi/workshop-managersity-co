import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

interface Ligne {
  label: string;
  standard: boolean;
  premium: boolean;
}

const LIGNES: Ligne[] = [
  { label: "Accès aux 2 sessions live", standard: true, premium: true },
  { label: "Support de présentation", standard: true, premium: true },
  { label: "Exercices guidés", standard: true, premium: true },
  { label: "Démonstrations pratiques", standard: true, premium: true },
  { label: "Méthode de cartographie des tâches IA", standard: true, premium: true },
  { label: "Introduction assistants IA", standard: true, premium: true },
  { label: "Introduction agents IA simples", standard: true, premium: true },
  { label: "Introduction capacités IA", standard: true, premium: true },
  { label: "Attestation selon conditions", standard: true, premium: true },
  { label: "Replay", standard: true, premium: true },
  { label: "Templates assistants IA", standard: false, premium: true },
  { label: "Templates agents IA", standard: false, premium: true },
  { label: "Templates skills / instructions systèmes", standard: false, premium: true },
  { label: "Bibliothèque de prompts", standard: false, premium: true },
  { label: "Plan d'action IA 30 jours", standard: false, premium: true },
];

function Mark({ on }: { on: boolean }) {
  if (on) {
    return (
      <span className="mx-auto flex h-5 w-5 items-center justify-center text-green">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </span>
    );
  }
  return (
    <span className="mx-auto block font-mono text-muted/40" aria-label="Non inclus">
      —
    </span>
  );
}

export function WorkshopComparaison() {
  return (
    <Section className="bg-paper">
      <Reveal>
        <SectionHead
          index="08"
          eyebrow="Comparatif"
          title="Standard ou Premium, en un coup d'œil."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-14 max-w-3xl overflow-hidden rounded-2xl border border-paper-line bg-white">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-paper-line">
                <th className="px-3 py-4 text-left font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-muted sm:px-5 sm:text-[10px] sm:tracking-[0.18em]">
                  Élément
                </th>
                <th className="w-16 px-2 py-4 text-center font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-muted sm:w-28 sm:px-5 sm:text-[10px] sm:tracking-[0.18em]">
                  Standard
                </th>
                <th className="w-16 px-2 py-4 text-center font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-green sm:w-28 sm:px-5 sm:text-[10px] sm:tracking-[0.18em]">
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {LIGNES.map((ligne, i) => (
                <tr
                  key={ligne.label}
                  className="ws-table-row border-b border-paper-line last:border-0"
                  style={{ ["--ws-delay" as string]: `${i * 28}ms` }}
                >
                  <td className="px-3 py-3.5 text-navy sm:px-5">{ligne.label}</td>
                  <td className="px-2 py-3.5 text-center sm:px-5">
                    <Mark on={ligne.standard} />
                  </td>
                  <td className="bg-paper/60 px-2 py-3.5 text-center sm:px-5">
                    <Mark on={ligne.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
