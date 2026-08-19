import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

interface Ligne {
  label: string;
  standard: string;
  premium: string;
}

const LIGNES: Ligne[] = [
  { label: "2 journées de workshop en direct", standard: "Inclus", premium: "Inclus" },
  { label: "Supports, cahier de travail et datasets", standard: "Inclus", premium: "Inclus" },
  { label: "Modèles de tableaux de bord", standard: "Inclus", premium: "Inclus" },
  { label: "Replay du workshop", standard: "30 jours", premium: "30 jours" },
  { label: "Certificat de participation", standard: "Inclus", premium: "Inclus" },
  { label: "Cours vidéo complet sur MANAGERSITY", standard: "—", premium: "Inclus avant le workshop" },
  { label: "Kits d'application par fonction", standard: "—", premium: "Inclus" },
  { label: "Cliniques d'implémentation", standard: "—", premium: "2 sessions" },
  { label: "Évaluation et plan d'action Data & AI", standard: "—", premium: "90 jours" },
  { label: "Tarif individuel", standard: "97 000 FCFA", premium: "119 000 FCFA" },
];

function Mark({ value }: { value: string }) {
  if (value !== "—") {
    return (
      <span className="text-green">{value}</span>
    );
  }
  return (
    <span className="font-mono text-muted/40" aria-label="Non inclus">{value}</span>
  );
}

export function WorkshopComparaison() {
  return (
    <Section className="bg-paper">
      <Reveal variant="fade">
        <SectionHead
          index="09"
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
                    <Mark value={ligne.standard} />
                  </td>
                  <td className="bg-paper/60 px-2 py-3.5 text-center sm:px-5">
                    <Mark value={ligne.premium} />
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
