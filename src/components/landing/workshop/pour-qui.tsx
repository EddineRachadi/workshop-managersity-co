import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "./section-head";

const PROFILES = [
  "Dirigeants et directeurs généraux",
  "Membres de comité de direction",
  "Directeurs et responsables de département",
  "Managers opérationnels et chefs de service",
  "Responsables finance, contrôle de gestion et performance",
  "Responsables commerciaux et marketing",
  "Responsables opérations, supply chain, qualité et service client",
  "Responsables RH et transformation",
  "Consultants, entrepreneurs et professionnels produisant régulièrement des analyses ou des reportings",
];

export function WorkshopPourQui() {
  return (
    <section id="pour-qui" className="bg-white py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <Reveal variant="zoom">
          <SectionHead
            index="10"
            eyebrow="Pour qui ?"
            title="Pensé pour les profils qui décident, pilotent et produisent."
            intro="Aucun prérequis technique. Le workshop est adapté dès lors que votre fonction implique des indicateurs, des reportings, des analyses, des arbitrages ou des opérations à suivre."
            align="center"
            className="max-w-2xl"
          />
        </Reveal>
      </div>

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
