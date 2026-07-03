import { ButtonLink } from "@/components/ui/button";

export function WorkshopCtaFinal() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-32 text-white">
      <div className="dossier-grid-light ws-grid-drift pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -top-24 right-[-8%] h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <p className="ws-rise font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
          Deux options
        </p>
        <h2
          className="ws-rise mt-6 font-display text-[2.1rem] sm:text-[3rem] font-semibold leading-[1.08] tracking-[-0.01em]"
          style={{ ["--ws-delay" as string]: "90ms" }}
        >
          Continuer à tester l&apos;IA de temps en temps — ou commencer à
          recruter de vrais renforts pour votre métier.
        </h2>
        <p
          className="ws-rise mt-7 max-w-2xl text-lg text-white/70 leading-relaxed"
          style={{ ["--ws-delay" as string]: "180ms" }}
        >
          En deux sessions live, vous apprendrez à identifier les tâches à
          déléguer, à créer vos assistants, agents et capacités IA, puis à les
          organiser en un système de travail augmenté.
        </p>

        <div
          className="ws-rise mt-10 flex flex-col sm:flex-row sm:items-center gap-5"
          style={{ ["--ws-delay" as string]: "270ms" }}
        >
          <ButtonLink href="#inscription" size="lg">
            Réserver ma place
          </ButtonLink>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
            30–31 juil. 2026 · 17h–20h GMT · en ligne, en live
          </p>
        </div>
      </div>
    </section>
  );
}
