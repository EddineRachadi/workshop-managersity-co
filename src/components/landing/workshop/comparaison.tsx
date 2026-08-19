import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

interface Ligne {
  label: string;
  standard: boolean;
  premium: boolean;
}

const LIGNES: Ligne[] = [
  { label: "2 journées de workshop en direct", standard: true, premium: true },
  { label: "Supports, cahier de travail et datasets", standard: true, premium: true },
  { label: "Modèles de tableaux de bord", standard: true, premium: true },
  { label: "Replay du workshop", standard: true, premium: true },
  { label: "Certificat de participation", standard: true, premium: true },
  { label: "Cours vidéo complet sur MANAGERSITY", standard: false, premium: true },
  { label: "Kits d'application par fonction", standard: false, premium: true },
  { label: "2 cliniques d'implémentation", standard: false, premium: true },
  { label: "Évaluation de maturité Data & AI", standard: false, premium: true },
  { label: "Plan d'action sur 90 jours", standard: false, premium: true },
  { label: "Tarif individuel", standard: true, premium: true },
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
      <Reveal variant="fade">
        <SectionHead
          index="08"
          eyebrow="Comparatif"
          title="Standard ou Premium, en un coup d'œil."
        />
      </Reveal>

      <Reveal delay={80} variant="zoom">
        <div className="mt-14 w-full overflow-hidden rounded-2xl border border-paper-line bg-white">
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
