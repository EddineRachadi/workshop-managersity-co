import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function WorkshopCtaFinal() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-32 text-white">
      <div className="dossier-grid-light ws-grid-drift pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -top-24 right-[-8%] h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal variant="zoom">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            Deux jours pour passer de la donnée à l'action
          </p>
          <h2 className="mt-6 font-display text-[2.1rem] sm:text-[3rem] font-semibold leading-[1.08] tracking-[-0.01em]">
            Apprenez à mieux lire vos indicateurs, détecter plus tôt les écarts,
            construire des tableaux de bord utiles et utiliser l&apos;IA pour
            accélérer vos analyses, reportings et opérations.
          </h2>
          <p className="mt-7 max-w-2xl text-lg text-white/70 leading-relaxed">
            17–18 septembre 2026 · En ligne, en direct · Inscriptions jusqu&apos;au
            10 septembre 2026.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <ButtonLink href="#formules" size="lg">
              Réserver ma place
            </ButtonLink>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
              Standard : 97 000 FCFA · Premium : 119 000 FCFA
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
