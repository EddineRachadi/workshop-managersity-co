import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function WorkshopCredibilite() {
  return (
    <Section className="bg-white">
      <Reveal>
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
          <div>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-green">
              <span className="text-gold">11</span>
              <span className="h-px w-7 bg-paper-line" aria-hidden="true" />
              <span>À propos</span>
            </p>
            <h2 className="mt-5 font-display text-[2rem] sm:text-[2.4rem] font-semibold leading-[1.08] text-navy">
              MANAGERSITY
            </h2>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Lab IA · Formations · Classes digitales
            </p>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-muted lg:pt-1">
            <p>
              MANAGERSITY accompagne les managers, dirigeants et professionnels
              dans le développement de compétences utiles pour mieux manager,
              décider, structurer, apprendre et performer. À travers ses
              formations, classes digitales, ressources et programmes,
              MANAGERSITY aide les professionnels d&apos;Afrique francophone à
              progresser de manière continue.
            </p>
            <p>
              Ce workshop s&apos;inscrit dans la dynamique du{" "}
              <span className="font-semibold text-navy">Lab IA MANAGERSITY</span>
              , un rendez-vous gratuit pour apprendre à utiliser
              l&apos;intelligence artificielle de manière concrète dans son
              travail.
            </p>
            {/*
              TODO (optionnel) : zone de preuves/références à activer UNIQUEMENT
              avec des éléments réels (chiffres vérifiés, logos, témoignages
              authentiques). Ne rien inventer.
            */}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
