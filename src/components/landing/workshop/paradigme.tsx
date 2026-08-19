import { Reveal } from "@/components/ui/reveal";

export function WorkshopParadigme() {
  return (
    <section className="relative overflow-hidden bg-navy text-white py-20 sm:py-28">
      <div className="dossier-grid-light pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-green/12 blur-3xl" />

      <div className="relative max-w-[1120px] mx-auto px-4 sm:px-6">
        <Reveal variant="zoom">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            <span>02</span>
            <span className="h-px w-7 bg-white/25" aria-hidden="true" />
            <span className="text-white/70">Le vrai sujet</span>
          </p>

          <blockquote className="mt-7 max-w-4xl font-display text-[1.9rem] sm:text-[2.7rem] font-medium leading-[1.12] tracking-[-0.01em]">
            La valeur apparaît lorsque la donnée modifie une décision, un arbitrage
            ou une action.
            <span className="text-white/55">
              {" "}Le workshop vous apprend à construire ce passage de manière structurée.
            </span>
          </blockquote>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-12 gap-y-5 max-w-3xl text-white/65 leading-relaxed">
            <p>
              Vos données existent déjà. Le vrai enjeu est de les relier à votre
              pilotage, à vos priorités, à vos risques et à votre capacité à
              agir avec précision.
            </p>
            <p>
              À travers quatre mouvements — voir, comprendre, anticiper,
              automatiser — vous apprenez à transformer l&apos;information en
              décision et action, sans jargon inutile ni sur-technique.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
