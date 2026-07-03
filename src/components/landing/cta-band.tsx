import { ButtonLink } from "@/components/ui/button";

interface CtaBandProps {
  title: string;
  subtitle?: string;
  cta?: string;
}

/** Bande d'appel à l'action réutilisable, répétée entre les sections. */
export function CtaBand({
  title,
  subtitle,
  cta = "Je m'inscris gratuitement",
}: CtaBandProps) {
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="brand-gradient relative overflow-hidden rounded-3xl px-6 py-10 sm:px-12 sm:py-12 text-center text-white shadow-lg">
          <div className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative text-2xl sm:text-3xl font-bold tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="relative mt-3 text-white/85 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
          <ButtonLink
            href="#inscription"
            size="lg"
            variant="navy"
            className="relative mt-7"
          >
            {cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
