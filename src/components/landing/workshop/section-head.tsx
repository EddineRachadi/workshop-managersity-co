import { cn } from "@/lib/utils";

interface SectionHeadProps {
  /** Index de dossier, ex. "02" — encode l'ordre réel de lecture du document. */
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  /** Couleur du titre (sur fond clair par défaut). */
  tone?: "ink" | "light";
  className?: string;
}

/**
 * En-tête de section façon « dossier » : étiquette mono indexée + filet,
 * titre en serif display. Spécifique à la page Workshop.
 */
export function SectionHead({
  index,
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "ink",
  className,
}: SectionHeadProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "max-w-2xl",
        centered ? "mx-auto text-center" : "",
        className
      )}
    >
      <p
        className={cn(
          "flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em]",
          centered && "justify-center",
          tone === "light" ? "text-gold" : "text-green"
        )}
      >
        {index && <span className="text-gold">{index}</span>}
        <span
          className={cn(
            "ws-draw-line h-px w-7",
            tone === "light" ? "bg-white/25" : "bg-paper-line"
          )}
          aria-hidden="true"
        />
        <span className={tone === "light" ? "text-white/70" : "text-green"}>
          {eyebrow}
        </span>
      </p>

      <h2
        className={cn(
          "mt-5 font-display text-[2rem] sm:text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.01em]",
          tone === "light" ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>

      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "light" ? "text-white/70" : "text-muted"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
