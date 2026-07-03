import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const PROFILES = [
  "Manager",
  "Dirigeant",
  "Cadre",
  "Chef de service",
  "Responsable RH",
  "Commercial",
  "Assistant / administratif",
  "Consultant",
  "Entrepreneur",
  "Responsable formation",
  "Professionnel qui veut gagner du temps",
  "Professionnel qui veut intégrer l'IA",
];

export function PourQui() {
  return (
    <Section id="pour-qui" className="bg-surface">
      <Reveal>
        <SectionHeader
          eyebrow="Pour qui ?"
          title="Le Lab IA MANAGERSITY est fait pour vous si vous êtes :"
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {PROFILES.map((profile) => (
            <span
              key={profile}
              className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-navy shadow-sm"
            >
              {profile}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-12 max-w-2xl mx-auto rounded-2xl border border-green/20 bg-green/5 p-6 text-center">
          <p className="text-lg font-semibold text-navy">
            Vous n&apos;avez pas besoin d&apos;être expert en technologie.
          </p>
          <p className="mt-2 text-muted">
            Vous avez simplement besoin de vouloir mieux travailler, mieux vous
            organiser et mieux utiliser les outils IA à votre disposition.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
