import { CountUp } from "./motion";

const STATS = [
  { to: 2, pad: 2, label: "jours en live" },
  { to: 6, pad: 2, label: "heures de workshop" },
  { to: 4, pad: 2, label: "types d'employés IA" },
  { to: 30, pad: 2, label: "jours de plan d'action" },
];

export function WorkshopChiffres() {
  return (
    <section className="bg-paper">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden border-y border-paper-line bg-paper-line">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="ws-stat-tile bg-paper px-6 py-10 text-center sm:py-12"
              style={{ ["--ws-delay" as string]: `${i * 110}ms` }}
            >
              <p className="font-display text-5xl sm:text-6xl font-semibold leading-none text-navy">
                <CountUp to={s.to} pad={s.pad} />
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
