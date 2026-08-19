import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function WorkshopCredibilite() {
  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
        <Reveal variant="left">
          <div>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-green">
              <span className="text-gold">12</span>
              <span className="h-px w-7 bg-paper-line" aria-hidden="true" />
              <span>À propos</span>
            </p>
            <h2 className="mt-5 font-display text-[2rem] sm:text-[2.4rem] font-semibold leading-[1.08] text-navy">
              MANAGERSITY by H&amp;C
            </h2>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              MANAGERSITY by H&amp;C
            </p>
          </div>
        </Reveal>

        <Reveal variant="right" delay={80}>
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:pt-1">
            <p>
              MANAGERSITY accompagne les managers, dirigeants et professionnels
              dans le développement de compétences utiles pour mieux manager,
              décider, structurer, apprendre et performer.
            </p>
            <p>
              À travers ses formations, ses classes digitales, ses ressources et
              ses programmes, MANAGERSITY aide les professionnels d&apos;Afrique
              francophone à progresser de manière continue et à transformer les
              apprentissages en pratiques de travail.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
