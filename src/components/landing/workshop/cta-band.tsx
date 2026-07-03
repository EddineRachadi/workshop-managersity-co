import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

interface WorkshopCtaBandProps {
  kicker?: string;
  title: string;
  subtitle?: string;
}

/** Bande d'appel à l'action intermédiaire — version premium inspirée système. */
export function WorkshopCtaBand({
  kicker = "Inscription",
  title,
  subtitle,
}: WorkshopCtaBandProps) {
  return (
    <section className="bg-paper py-14 sm:py-16">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <Reveal variant="zoom">
          <div className="dossier-grid-light ws-grid-drift relative overflow-hidden rounded-[2rem] border border-navy/10 bg-navy p-8 text-white shadow-[0_30px_80px_-48px_rgba(21,19,15,0.6)] sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
            <div className="relative z-10 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                {kicker}
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-[2.2rem]">
                  {title}
                </h2>
                {subtitle && (
                  <p className="mt-3 max-w-lg leading-relaxed text-white/62">
                    {subtitle}
                  </p>
                )}
              </div>
              <ButtonLink href="#formules" size="lg" className="shrink-0 rounded-full">
                Réserver ma place
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
