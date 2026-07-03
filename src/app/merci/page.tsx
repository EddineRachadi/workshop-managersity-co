import type { Metadata } from "next";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Inscription confirmée — Le Lab IA MANAGERSITY",
  description:
    "Votre inscription au Lab IA MANAGERSITY est confirmée. Vous recevrez nos contenus chaque lundi, mercredi et vendredi.",
  robots: { index: false, follow: false },
};

const RECEVOIR = [
  "Des cas d'usage concrets de l'IA au travail",
  "Des prompts prêts à utiliser",
  "Des outils IA à tester",
  "Des mini-tutoriels pratiques",
  "Des erreurs à éviter",
  "Des méthodes simples pour gagner du temps, mieux structurer vos idées et améliorer votre performance professionnelle",
];

function Check() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </span>
  );
}

export default function Merci() {
  return (
    <>
      <Header />
      <main>
        {/* Hero de confirmation */}
        <section className="relative overflow-hidden bg-navy text-white">
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-green/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-20 sm:pt-28 sm:pb-24 text-center">
            <div className="brand-gradient mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full shadow-lg">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Votre inscription est{" "}
              <span className="brand-text-gradient">confirmée !</span>
            </h1>
            <p className="mt-4 text-xl font-medium text-white/90">
              Bienvenue dans Le Lab IA MANAGERSITY.
            </p>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              Vous êtes maintenant inscrit(e) à notre rendez-vous IA pratique pour
              apprendre à mieux utiliser l'intelligence artificielle dans votre
              travail.
            </p>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              À partir de maintenant, vous recevrez nos contenus{" "}
              <span className="font-semibold text-white">
                chaque lundi, mercredi et vendredi
              </span>{" "}
              directement dans votre boîte email.
            </p>
          </div>
        </section>

        {/* Ce que vous allez recevoir */}
        <Section className="bg-white">
          <Reveal>
            <SectionHeader
              eyebrow="Ce que vous allez recevoir"
              title="Dans Le Lab IA MANAGERSITY, vous recevrez régulièrement :"
            />
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-12 max-w-2xl mx-auto space-y-4">
              {RECEVOIR.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check />
                  <span className="text-lg text-navy">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-2xl mx-auto text-center text-lg font-medium text-navy">
              L'objectif est simple : vous aider à passer de la curiosité à
              l'usage concret de l'IA.
            </p>
          </Reveal>
        </Section>

        {/* Prochaine étape + Pour ne rien manquer */}
        <Section className="bg-surface">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full rounded-2xl border border-line bg-white p-7 shadow-sm">
                <h2 className="text-xl font-bold text-navy">Prochaine étape</h2>
                <p className="mt-3 font-semibold text-navy">
                  Surveillez votre boîte email.
                </p>
                <p className="mt-3 text-muted leading-relaxed">
                  Vous allez recevoir un premier message de bienvenue avec les
                  détails du Lab IA MANAGERSITY.
                </p>
                <p className="mt-3 text-muted leading-relaxed">
                  Pensez aussi à vérifier vos onglets{" "}
                  <span className="font-medium text-navy">
                    Promotions, Notifications ou Spams
                  </span>{" "}
                  si vous ne voyez pas notre email dans votre boîte principale.
                </p>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="h-full rounded-2xl border border-line bg-white p-7 shadow-sm">
                <h2 className="text-xl font-bold text-navy">
                  Pour ne rien manquer
                </h2>
                <p className="mt-3 text-muted leading-relaxed">
                  Ajoutez notre adresse email à vos contacts afin de recevoir
                  correctement les prochaines éditions.
                </p>
                <p className="mt-3 text-muted leading-relaxed">
                  Vous pouvez aussi créer un dossier spécial dans votre boîte
                  email :{" "}
                  <span className="font-medium text-navy">Lab IA MANAGERSITY</span>.
                </p>
                <p className="mt-3 text-muted leading-relaxed">
                  Cela vous permettra de retrouver facilement les prompts, outils
                  et méthodes que nous allons vous envoyer.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* En attendant la prochaine édition — question de réflexion */}
        <Section className="bg-white">
          <Reveal>
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-green mb-3">
              En attendant la prochaine édition
            </p>
            <div className="brand-gradient relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 text-center text-white shadow-lg max-w-3xl mx-auto">
              <div className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <p className="relative text-white/85">
                Vous pouvez déjà réfléchir à cette question :
              </p>
              <p className="relative mt-4 text-2xl sm:text-3xl font-bold leading-snug">
                Quelle est la tâche professionnelle que vous aimeriez déléguer,
                accélérer ou améliorer grâce à l'IA ?
              </p>
            </div>
            <p className="mt-8 max-w-2xl mx-auto text-center text-lg text-muted leading-relaxed">
              Gardez cette réponse en tête. Les prochaines éditions du Lab IA vous
              aideront progressivement à transformer ce type de tâche en cas
              d'usage concret.
            </p>
          </Reveal>
        </Section>

        {/* Merci + signature */}
        <section className="relative overflow-hidden bg-navy py-20 sm:py-24 text-white">
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-green/15 blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Merci de votre inscription
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Bienvenue dans Le Lab IA MANAGERSITY.
            </p>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              Nous sommes heureux de vous accompagner dans l'utilisation pratique
              de l'IA pour mieux travailler, gagner du temps et améliorer votre
              performance professionnelle.
            </p>

            <div className="mt-8">
              <p className="text-lg font-bold text-white">Berkiss D. DADJE</p>
              <p className="text-sm uppercase tracking-wider text-gold">
                CEO MANAGERSITY by H&amp;C
              </p>
            </div>

            <ButtonLink href="/" variant="outline" className="mt-10">
              Retour à l'accueil
            </ButtonLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
