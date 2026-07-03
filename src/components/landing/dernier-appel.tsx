import { ButtonLink } from "@/components/ui/button";

export function DernierAppel() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28 text-white">
      <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-green/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          L&apos;IA ne remplacera pas tous les professionnels.
          <br className="hidden sm:block" />
          <span className="brand-text-gradient">
            Mais ceux qui savent l&apos;utiliser auront un avantage.
          </span>
        </h2>
        <p className="mt-6 text-lg text-white/75 leading-relaxed">
          Commencez maintenant à intégrer l&apos;IA dans votre manière de
          travailler. Rejoignez gratuitement Le Lab IA MANAGERSITY et recevez,
          chaque lundi, mercredi et vendredi, des contenus simples et pratiques
          pour mieux utiliser l&apos;IA dans votre métier.
        </p>
        <ButtonLink href="#inscription" size="lg" className="mt-9">
          Je m&apos;inscris gratuitement
        </ButtonLink>
      </div>
    </section>
  );
}
