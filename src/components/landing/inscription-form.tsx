"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitToKartra } from "@/lib/kartra";

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

const FONCTIONS = [
  "Manager",
  "Dirigeant",
  "Cadre",
  "Chef de service",
  "Responsable RH",
  "Commercial",
  "Assistant / administratif",
  "Consultant",
  "Entrepreneur",
  "Responsable formation",
  "Autre",
];

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-navy placeholder:text-muted/60 focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition";

export function InscriptionForm() {
  const router = useRouter();
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
      fonction: String(formData.get("fonction") || ""),
      whatsapp: String(formData.get("whatsapp") || "").trim(),
      pays: String(formData.get("pays") || ""),
    };

    try {
      // Envoi vers Kartra (collecte des leads + automatisations).
      await submitToKartra(payload);
      // Redirection vers la page de remerciement (reste en "loading" le temps
      // de la navigation pour garder le bouton désactivé).
      router.push("/merci");
    } catch {
      setState("error");
      setErrorMsg("Impossible de vous inscrire pour le moment. Réessayez.");
    }
  };

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-green/30 bg-green/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green/15 text-green">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <p className="text-xl font-bold text-navy">Bienvenue dans Le Lab IA !</p>
        <p className="mt-2 text-muted">
          Votre inscription est enregistrée. Vous recevrez les prochaines
          éditions chaque lundi, mercredi et vendredi.
        </p>
      </div>
    );
  }

  return (
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
          <label htmlFor="fonction" className="mb-1.5 block text-sm font-medium text-navy">
            Fonction
          </label>
          <select id="fonction" name="fonction" required defaultValue="" className={inputClass} disabled={state === "loading"}>
            <option value="" disabled>
              Choisir…
            </option>
            {FONCTIONS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
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
        <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-navy">
          WhatsApp
        </label>
        <input id="whatsapp" name="whatsapp" type="tel" required placeholder="+229 00 00 00 00" className={inputClass} disabled={state === "loading"} />
      </div>

      {errorMsg && <p className="text-sm text-error">{errorMsg}</p>}

      <button
        type="submit"
        disabled={state === "loading"}
        className="brand-gradient w-full rounded-xl px-6 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:opacity-95 hover:shadow-md disabled:opacity-60"
      >
        {state === "loading" ? "Inscription en cours…" : "Je rejoins gratuitement Le Lab IA"}
      </button>

      <p className="text-center text-xs text-muted">
        En vous inscrivant, vous recevrez les prochaines éditions du Lab IA
        MANAGERSITY ainsi que des ressources utiles pour progresser avec l&apos;IA.
      </p>
    </form>
  );
}
