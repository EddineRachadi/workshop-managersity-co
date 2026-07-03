import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Positionnement() {
  return (
    <Section id="positionnement" className="bg-white">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green mb-3">
              Positionnement MANAGERSITY
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
              Pourquoi MANAGERSITY lance Le Lab IA ?
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="space-y-5 text-lg text-muted leading-relaxed">
            <p>
              MANAGERSITY accompagne les managers, dirigeants et professionnels
              africains dans le développement de leurs compétences, leur
              performance professionnelle et leur adaptation aux nouvelles
              pratiques de travail.
            </p>
            <p className="font-semibold text-navy">
              L&apos;IA est devenue un levier majeur de performance.
            </p>
            <p>
              Mais pour qu&apos;elle soit réellement utile, elle doit être
              comprise, contextualisée et appliquée aux réalités du travail
              quotidien.
            </p>
            <p>
              C&apos;est pour cela que nous avons créé Le Lab IA MANAGERSITY : un
              espace simple, pratique et régulier pour apprendre à utiliser
              l&apos;IA de manière concrète dans votre métier.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
