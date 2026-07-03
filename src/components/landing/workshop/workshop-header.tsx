import { ButtonLink } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#programme", label: "Programme" },
  { href: "#formules", label: "Formules" },
  { href: "#pour-qui", label: "Pour qui" },
  { href: "#faq", label: "FAQ" },
];

export function WorkshopHeader() {
  return (
    <header className="sticky top-0 z-50 bg-paper/82 py-3 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="/"
          className="flex h-11 shrink-0 items-center rounded-full border border-paper-line bg-white/72 px-3 shadow-sm"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-managersity.png"
            alt="MANAGERSITY"
            className="h-8 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-paper-line bg-white/72 p-1 shadow-sm md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:bg-paper hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ButtonLink href="#formules" size="sm" variant="navy" className="shrink-0 rounded-full">
          Réserver ma place
        </ButtonLink>
      </div>
    </header>
  );
}
