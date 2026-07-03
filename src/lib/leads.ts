/**
 * POINT DE BRANCHEMENT UNIQUE pour les inscriptions au Lab IA MANAGERSITY.
 *
 * La destination finale des leads n'est pas encore décidée. Cette fonction est
 * le SEUL endroit à modifier pour la connecter. Aujourd'hui : validation déjà
 * faite en amont (route API) + log structuré + succès (no-op sûr, compatible
 * Vercel serverless — pas d'écriture disque).
 *
 * Pour connecter plus tard, dé-commenter l'UNE des deux options ci-dessous et
 * ajouter les variables d'environnement correspondantes (voir README + .env.example).
 */

export interface Lead {
  prenom: string;
  nom: string;
  email: string;
  fonction: string;
  whatsapp: string;
  pays: string;
}

export type SaveLeadResult = { ok: true; already?: boolean } | { ok: false; error: string };

export async function saveLead(lead: Lead): Promise<SaveLeadResult> {
  // --- Par défaut : journalisation (à remplacer par une vraie destination) ---
  console.log("[lab-ia] nouvelle inscription:", JSON.stringify(lead));
  return { ok: true };

  // ============================================================================
  // OPTION A — Supabase (recommandé, même stack que ia-simplifiee)
  // 1) npm i @supabase/ssr @supabase/supabase-js   (déjà dans package.json)
  // 2) Variables : NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
  // 3) Créer la table `lab_ia_inscriptions` (prenom, nom, email unique,
  //    fonction, whatsapp, pays, created_at) avec une RLS « insert public ».
  // ----------------------------------------------------------------------------
  // import { createClient } from "@/lib/supabase/server";
  // const supabase = await createClient();
  // const { error } = await supabase.from("lab_ia_inscriptions").insert(lead);
  // if (error) {
  //   if (error.code === "23505") return { ok: true, already: true }; // email déjà inscrit
  //   return { ok: false, error: "Erreur d'enregistrement" };
  // }
  // return { ok: true };

  // ============================================================================
  // OPTION B — Service externe no-code (Formspree, Mailchimp, Brevo…)
  // Variable : LEADS_WEBHOOK_URL
  // ----------------------------------------------------------------------------
  // const res = await fetch(process.env.LEADS_WEBHOOK_URL!, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(lead),
  // });
  // if (!res.ok) return { ok: false, error: "Erreur d'enregistrement" };
  // return { ok: true };
}
