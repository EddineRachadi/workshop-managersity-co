import { ButtonLink } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#programme", label: "Programme" },
  { href: "#resultats", label: "Résultats" },
  { href: "#formules", label: "Formules" },
  { href: "#pour-qui", label: "Pour qui" },
  { href: "#faq", label: "FAQ" },
];

export function WorkshopHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-paper-line bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/" className="flex shrink-0 items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-managersity.png"
            alt="MANAGERSITY"
            className="h-8 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ButtonLink href="#formules" size="sm" variant="navy" className="shrink-0">
          Réserver ma place
        </ButtonLink>
      </div>
    </header>
  );
}
