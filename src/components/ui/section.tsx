import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

/** Wrapper de section : paddings verticaux + conteneur centré cohérents. */
export function Section({ id, className, containerClassName, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 sm:py-16 scroll-mt-20", className)}>
      <div className={cn("max-w-[1120px] mx-auto px-4 sm:px-6", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "",
        className
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-green mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg text-muted leading-relaxed">{intro}</p>
      )}
    </div>
  );
}
