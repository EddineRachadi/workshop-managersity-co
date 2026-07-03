import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

interface Item {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const ITEMS: Item[] = [
  {
    title: "Des cas d'usage IA",
    desc: "Des exemples concrets pour utiliser l'IA dans votre métier : management, RH, commercial, stratégie, productivité, communication, prise de décision, organisation, formation…",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    ),
  },
  {
    title: "Des prompts prêts à utiliser",
    desc: "Des formulations simples que vous pouvez copier, adapter et utiliser immédiatement dans vos outils IA.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    ),
  },
  {
    title: "Des outils IA à découvrir",
    desc: "Des outils utiles pour mieux produire, organiser, automatiser, analyser, présenter ou collaborer.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    ),
  },
  {
    title: "Des mini-tutoriels",
    desc: "Des méthodes courtes, étape par étape, pour accomplir une tâche professionnelle avec l'aide de l'IA.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    ),
  },
  {
    title: "Des erreurs à éviter",
    desc: "Des conseils pour utiliser l'IA avec discernement, sans perdre votre esprit critique, votre confidentialité ou votre responsabilité professionnelle.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    ),
  },
  {
    title: "Des ressources MANAGERSITY",
    desc: "Des invitations vers des formations, classes digitales, workshops ou ressources pour aller plus loin lorsque vous voulez approfondir.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    ),
  },
];

export function CeQueVousRecevez() {
  return (
    <Section id="recevez" className="bg-white">
      <Reveal>
        <SectionHeader
          eyebrow="Ce que vous recevez"
          title="Trois fois par semaine, recevez l'IA utile pour votre travail."
          intro="Dans Le Lab IA MANAGERSITY, vous recevez régulièrement :"
        />
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 80}>
            <div className="group h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-green/40">
              <span className="brand-gradient mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  {item.icon}
                </svg>
              </span>
              <h3 className="text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-muted leading-relaxed">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
