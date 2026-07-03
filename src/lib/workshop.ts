/**
 * Données de l'offre Workshop IA MANAGERSITY — « Recruter ses employés IA dans
 * son métier ». Source unique pour les infos pratiques et les liens d'inscription.
 */
export const WORKSHOP = {
  titre: "Workshop IA MANAGERSITY — Recruter ses employés IA dans son métier",
  dates: "Jeudi 30 et vendredi 31 juillet 2026",
  horaire: "17h00 à 20h00 GMT chaque jour",
  format: "En ligne, en live",
  duree: "2 sessions de 3h, soit 6h de workshop",
  prix: {
    standard: "59 000 FCFA",
    premium: "97 000 FCFA",
  },
  // Liens boutique (checkout) par formule.
  liens: {
    standard:
      "https://shop.managersity.com/produit/the-ai-digital-workshop-30-31-juillet-2026-standard/",
    premium:
      "https://shop.managersity.com/produit/the-ai-digital-workshop-30-31-juillet-2026-premium/",
  },
} as const;
