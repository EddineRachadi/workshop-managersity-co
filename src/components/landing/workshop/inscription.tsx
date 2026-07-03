"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { WORKSHOP } from "@/lib/workshop";
import { submitToKartra } from "@/lib/kartra";
import { SectionHead } from "./section-head";

const PAYS = [
  "Bénin",
  "Burkina Faso",
  "Cameroun",
  "Côte d'Ivoire",
  "France",
  "Gabon",
  "Guinée",
  "Mali",
  "Niger",
  "RD Congo",
  "Sénégal",
  "Togo",
  "Autre",
];

const inputClass =
  "w-full rounded-xl border border-paper-line bg-white px-4 py-3 text-navy placeholder:text-muted/60 focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition";

export function WorkshopInscription() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      prenom: String(formData.get("prenom") || "").trim(),
      nom: String(formData.get("nom") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      whatsapp: String(formData.get("whatsapp") || "").trim(),
      pays: String(formData.get("pays") || ""),
      formule: String(formData.get("formule") || ""),
    };

    try {
      await submitToKartra(payload);
      setState("success");
    } catch {
      setState("error");
      setErrorMsg("Impossible d'enregistrer votre inscription pour le moment. Réessayez.");
    }
  };

  return (
    <Section id="inscription" className="bg-paper">
      <Reveal>
        <SectionHead
          eyebrow="Inscription"
          title="Réservez votre place au Workshop IA."
          intro={`${WORKSHOP.dates} · ${WORKSHOP.horaire} · ${WORKSHOP.format}.`}
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="ws-lift mt-10 max-w-2xl rounded-2xl border border-paper-line bg-white p-6 sm:p-9">
          {state === "success" ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green/10 text-green">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="font-display text-xl font-semibold text-navy">
                Votre inscription est enregistrée !
              </p>
              <p className="mt-2 text-muted leading-relaxed">
                Vous recevrez les informations pratiques pour rejoindre le
                Workshop IA MANAGERSITY par email et WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="prenom" className="mb-1.5 block text-sm font-medium text-navy">
                    Prénom
                  </label>
                  <input id="prenom" name="prenom" required placeholder="Votre prénom" className={inputClass} disabled={state === "loading"} />
                </div>
                <div>
                  <label htmlFor="nom" className="mb-1.5 block text-sm font-medium text-navy">
                    Nom
                  </label>
                  <input id="nom" name="nom" required placeholder="Votre nom" className={inputClass} disabled={state === "loading"} />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
                  Email
                </label>
                <input id="email" name="email" type="email" required placeholder="votre@email.com" className={inputClass} disabled={state === "loading"} />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-navy">
                    WhatsApp
                  </label>
                  <input id="whatsapp" name="whatsapp" type="tel" required placeholder="+229 00 00 00 00" className={inputClass} disabled={state === "loading"} />
                </div>
                <div>
                  <label htmlFor="pays" className="mb-1.5 block text-sm font-medium text-navy">
                    Pays
                  </label>
                  <select id="pays" name="pays" required defaultValue="" className={inputClass} disabled={state === "loading"}>
                    <option value="" disabled>
                      Choisir…
                    </option>
                    {PAYS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="formule" className="mb-1.5 block text-sm font-medium text-navy">
                  Formule
                </label>
                <select id="formule" name="formule" required defaultValue="" className={inputClass} disabled={state === "loading"}>
                  <option value="" disabled>
                    Choisir…
                  </option>
                  <option value="Standard">{`Standard — ${WORKSHOP.prix.standard}`}</option>
                  <option value="Premium">{`Premium — ${WORKSHOP.prix.premium}`}</option>
                </select>
              </div>

              {errorMsg && <p className="text-sm text-error">{errorMsg}</p>}

              <button
                type="submit"
                disabled={state === "loading"}
                className="btn-motion w-full rounded-xl bg-navy px-6 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:bg-navy-soft disabled:opacity-60"
              >
                {state === "loading" ? "Inscription en cours…" : "Réserver ma place"}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
