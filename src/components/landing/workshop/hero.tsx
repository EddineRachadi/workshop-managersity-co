import { ButtonLink } from "@/components/ui/button";
import { WORKSHOP } from "@/lib/workshop";

const REPERES = [
  { label: "Dates", value: "30–31 juillet 2026" },
  { label: "Horaire", value: "17h–20h GMT" },
  { label: "Format", value: "En ligne · live" },
  { label: "Durée", value: "2 × 3h — 6h" },
];

const FLOW = [
  { label: "Cartographier", detail: "Tâches, livrables, responsabilités" },
  { label: "Déléguer", detail: "Ce qui mérite un renfort IA" },
  { label: "Construire", detail: "Assistants, agents, capacités" },
  { label: "Fiabiliser", detail: "Routines, sources, contrôle qualité" },
];

export function WorkshopHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-paper text-navy"
    >
      <div className="dossier-grid ws-grid-drift pointer-events-none absolute inset-0 opacity-70" />
      <div className="ws-float pointer-events-none absolute -top-36 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-gold/25 blur-3xl" />
      <div className="ws-float-slow pointer-events-none absolute bottom-[-12rem] left-[-8rem] h-[26rem] w-[26rem] rounded-full bg-green/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1120px] px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="ws-rise mx-auto inline-flex rounded-full border border-paper-line bg-white/72 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-green shadow-sm">
            Workshop IA MANAGERSITY
          </p>

          <h1
            className="ws-rise mt-7 font-display text-[3rem] font-semibold leading-[0.94] tracking-[-0.02em] sm:text-7xl lg:text-[5.7rem]"
            style={{ ["--ws-delay" as string]: "90ms" }}
          >
            Recruter ses employés IA dans son métier
          </h1>

          <p
            className="ws-rise mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
            style={{ ["--ws-delay" as string]: "190ms" }}
          >
            Identifier les tâches à déléguer à l&apos;intelligence artificielle,
            créer des assistants, agents et capacités IA spécialisés, puis
            structurer un système de travail augmenté pour produire mieux avec
            plus de méthode.
          </p>

          <div
            className="ws-rise mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ ["--ws-delay" as string]: "300ms" }}
          >
            <ButtonLink href="#formules" size="lg" className="w-full rounded-full sm:w-auto">
              Réserver ma place
            </ButtonLink>
            <ButtonLink
              href="#programme"
              size="lg"
              variant="ghost"
              className="w-full rounded-full border border-paper-line bg-white/65 sm:w-auto"
            >
              Voir le programme
            </ButtonLink>
          </div>

          <p
            className="ws-rise mx-auto mt-5 max-w-2xl font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted"
            style={{ ["--ws-delay" as string]: "380ms" }}
          >
            Formation en ligne, en live, conçue pour les professionnels,
            managers et dirigeants qui veulent intégrer l&apos;IA dans leur
            travail avec méthode.
          </p>
        </div>

        <div
          className="ws-rise mt-12 overflow-hidden rounded-[2rem] border border-navy/10 bg-navy p-3 text-white shadow-[0_40px_100px_-50px_rgba(21,19,15,0.6)] sm:mt-16 sm:p-4"
          style={{ ["--ws-delay" as string]: "480ms" }}
        >
          <div className="dossier-grid-light ws-grid-drift relative overflow-hidden rounded-[1.5rem] border border-white/10 px-4 py-5 sm:px-7 sm:py-7">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                  Système de travail augmenté
                </p>
                <p className="mt-2 text-sm text-white/58">
                  Une méthode pour passer d&apos;une demande isolée à des
                  renforts IA organisés.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {REPERES.map((r) => (
                  <div
                    key={r.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-left"
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/38">
                      {r.label}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-white">
                      {r.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-4">
              {FLOW.map((step, i) => (
                <div
                  key={step.label}
                  className="ws-flow-step rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  style={{ ["--ws-delay" as string]: `${560 + i * 120}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
                      {i + 1}
                    </span>
                    <p className="font-display text-xl font-semibold leading-none">
                      {step.label}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/58">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/48">
                Standard {WORKSHOP.prix.standard} · Premium{" "}
                {WORKSHOP.prix.premium}
              </p>
              <p className="text-sm text-white/62">
                30-31 juillet 2026 · 17h-20h GMT · en ligne, en live
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
