import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

export function WorkshopAnimateur() {
  return (
    <Section className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal variant="left">
          <SectionHead
            index="11"
            eyebrow="Animateur"
            title="Holonou Hermann Cakpo"
            intro="Coach de dirigeants et Chairman de H&C Business Solutions"
            align="left"
          />
        </Reveal>

        <Reveal variant="right" delay={80}>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Coach de dirigeants et Chairman de H&C Business Solutions, Holonou Hermann Cakpo accompagne les organisations sur les sujets de performance, de décision, de management et de transformation.
            </p>
            <p>
              Son parcours de spécialisation en Data Analytics, en statistique et en Data Science &amp; AI nourrit une approche centrée sur les questions que les dirigeants doivent poser, les chiffres qu’ils doivent savoir lire et les décisions qu’ils doivent être capables de challenger.
            </p>
            <p>
              Il est également à l’origine de DATATYM AI, une initiative consacrée aux données et aux insights décisionnels pour les dirigeants.
            </p>
            <p className="border-l-2 border-gold pl-5 text-navy">
              Des concepts expliqués sans jargon inutile, des cas métiers, des chiffres à interpréter et des outils directement transposables dans une réunion de direction ou un rituel de management.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
