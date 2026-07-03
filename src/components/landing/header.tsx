import { ButtonLink } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/#recevez", label: "Ce que vous recevez" },
  { href: "/#pour-qui", label: "Pour qui ?" },
  { href: "/#rythme", label: "Rythme" },
  { href: "/#faq", label: "FAQ" },
  { href: "/workshop-ia", label: "Workshop IA", accent: true },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-md">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-managersity.png"
            alt="MANAGERSITY"
            className="h-8 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.accent
                  ? "inline-flex items-center gap-1.5 text-sm font-semibold text-green hover:text-green-dark transition-colors"
                  : "text-sm font-medium text-muted hover:text-navy transition-colors"
              }
            >
              {link.accent && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
              {link.label}
            </a>
          ))}
        </nav>

        <ButtonLink href="/#inscription" size="sm" className="shrink-0">
          Je m&apos;inscris
        </ButtonLink>
      </div>
    </header>
  );
}
