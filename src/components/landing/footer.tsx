export function Footer() {
  const year = 2026;
  return (
    <footer className="bg-navy-soft text-white/70">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-white">
              MANAGERSITY <span className="text-white/50 font-normal">by H&amp;C</span>
            </p>
            <p className="mt-1 text-sm">
              Formation en ligne en management et compétences professionnelles.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-2">
            <a
              href="https://managersity.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white hover:text-gold transition-colors"
            >
              managersity.co →
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {year} MANAGERSITY — Workshop IA. Tous droits réservés.</p>
          <p>Recruter ses employés IA dans son métier.</p>
        </div>
      </div>
    </footer>
  );
}
