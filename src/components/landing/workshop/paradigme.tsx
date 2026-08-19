import { Reveal } from "@/components/ui/reveal";

const MOUVEMENTS = [
  "1. Voir : repérer les données déjà présentes dans votre organisation et les relier aux décisions que vous devez prendre.",
  "2. Comprendre : choisir les bons indicateurs, lire les tendances, désagréger les moyennes et rechercher les causes réelles.",
  "3. Anticiper : utiliser les analytics et l’IA pour détecter plus tôt les écarts, les risques et les opportunités.",
  "4. Automatiser : accélérer les analyses récurrentes, les reportings, les alertes et certaines actions opérationnelles.",
];

export function WorkshopParadigme() {
  return (
    <section className="relative overflow-hidden bg-navy py-14 text-white sm:py-20">
      <div className="dossier-grid-light pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1120px] px-4 sm:px-6">
        <Reveal variant="zoom">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            <span>02</span>
            <span className="h-px w-7 bg-white/25" aria-hidden="true" />
            <span className="text-white/70">Les quatre mouvements</span>
          </p>
          <h2 className="mt-7 max-w-4xl font-display text-[1.9rem] font-medium leading-[1.12] sm:text-[2.7rem]">
            De la donnée disponible à l’action automatisée
          </h2>
          <ol className="mt-10 grid max-w-4xl gap-5 text-lg leading-relaxed text-white/70 sm:grid-cols-2">
            {MOUVEMENTS.map((mouvement) => (
              <li key={mouvement}>{mouvement}</li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
