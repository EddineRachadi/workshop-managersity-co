import { ButtonLink } from "@/components/ui/button";

const RHYTHM = [
  { day: "Lundi", desc: "Un cas d'usage pour bien démarrer la semaine." },
  { day: "Mercredi", desc: "Un prompt ou un outil à tester dans votre travail." },
  { day: "Vendredi", desc: "Une synthèse ou une idée pour progresser." },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy text-white"
    >
      {/* Image de fond (thème IA). Pour changer : remplacer le fichier ci-dessous
          par /hero-ai-3.jpg (Terre la nuit) ou /hero-ai-1.jpg (robot). */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-ai-2.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Voiles sombres : lisibilité du texte (fort à gauche, image visible à droite) */}
      <div className="absolute inset-0 bg-navy/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />

      {/* halos décoratifs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-green/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 max-w-[1120px] mx-auto px-4 sm:px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Colonne texte */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90">
              <span className="h-2 w-2 rounded-full bg-gold" />
              Newsletter gratuite · 3 fois par semaine
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Le Lab IA{" "}
              <span className="brand-text-gradient">MANAGERSITY</span>
            </h1>

            <p className="mt-5 text-xl sm:text-2xl text-white/90 font-medium">
              L&apos;IA pratique pour mieux travailler, 3 fois par semaine.
            </p>

            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
              Recevez chaque lundi, mercredi et vendredi des cas d&apos;usage,
              prompts, outils, méthodes et mini-tutoriels pour utiliser l&apos;IA
              dans votre métier, gagner du temps et améliorer votre performance
              professionnelle.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <ButtonLink href="#inscription" size="lg">
                Je m&apos;inscris gratuitement
              </ButtonLink>
              <p className="text-sm text-white/60">
                Gratuit. Pratique. Directement applicable dans votre travail.
              </p>
            </div>
          </div>

          {/* Colonne visuel : rythme lundi / mercredi / vendredi */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Votre rendez-vous IA de la semaine
            </p>
            {RHYTHM.map((item) => (
              <div
                key={item.day}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm"
              >
                <div className="brand-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white">
                  {item.day.slice(0, 3)}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.day}</p>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
