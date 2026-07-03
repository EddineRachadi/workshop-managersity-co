import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

const PROFILES = [
  "Managers",
  "Dirigeants",
  "Chefs de service",
  "Cadres à responsabilités",
  "Assistants de direction",
  "Responsables RH",
  "Commerciaux",
  "Marketeurs",
  "Consultants",
  "Entrepreneurs",
  "Professionnels qui produisent beaucoup de livrables",
];

export function WorkshopPourQui() {
  return (
    <section id="pour-qui" className="bg-white py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <Reveal variant="zoom">
          <SectionHead
            index="09"
            eyebrow="Pour qui ?"
            title="Pensé pour les profils qui décident et produisent."
            intro="Aucun prérequis technique. Il suffit que votre travail implique des analyses, documents, décisions, contenus, suivis ou livrables."
            align="center"
            className="max-w-2xl"
          />
        </Reveal>
      </div>

      {/* Bandeau défilant pleine largeur (pause au survol) */}
      <div
        className="ws-marquee-mask relative mt-14 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="ws-marquee flex w-max gap-3 pr-3">
          {[...PROFILES, ...PROFILES].map((profile, i) => (
            <span
              key={`${profile}-${i}`}
              className="shrink-0 rounded-full border border-paper-line bg-paper px-5 py-2.5 text-sm font-medium text-navy"
            >
              {profile}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
