"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/section";

const FAQS = [
  {
    q: "Est-ce que Le Lab IA MANAGERSITY est gratuit ?",
    a: "Oui. L'inscription est gratuite.",
  },
  {
    q: "À quelle fréquence vais-je recevoir les contenus ?",
    a: "Vous recevrez les contenus 3 fois par semaine : lundi, mercredi et vendredi.",
  },
  {
    q: "Faut-il être expert en IA pour comprendre ?",
    a: "Non. Le Lab IA est conçu pour les professionnels qui veulent utiliser l'IA de manière simple, concrète et utile.",
  },
  {
    q: "De quoi parle Le Lab IA ?",
    a: "Nous parlons d'usages pratiques de l'IA dans le travail : prompts, outils, méthodes, cas d'usage, productivité, management, communication, organisation, prise de décision et performance professionnelle.",
  },
  {
    q: "Est-ce réservé aux managers ?",
    a: "Non. Le Lab IA s'adresse aux managers, dirigeants, cadres, RH, commerciaux, assistants, consultants, entrepreneurs et professionnels qui veulent mieux utiliser l'IA.",
  },
  {
    q: "Est-ce que je recevrai aussi des offres MANAGERSITY ?",
    a: "Oui, ponctuellement. Lorsque cela est pertinent, nous vous proposerons des formations, classes digitales, workshops ou ressources pour approfondir certains sujets IA.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-surface">
      <SectionHeader eyebrow="FAQ" title="Questions fréquentes" />

      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-navy">{item.q}</span>
                <span
                  className={`shrink-0 text-green transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-200 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-muted leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
