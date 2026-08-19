/**
 * Données de l'offre Workshop Data Analytics & AI — source unique pour les
 * informations pratiques et les liens d'inscription.
 */
export const WORKSHOP = {
  titre: "Workshop Data Analytics & AI — Transformer vos données en décisions",
  dates: "17–18 septembre 2026",
  horaire: "À confirmer selon le programme final",
  format: "En ligne, en direct",
  duree: "2 jours d'immersion",
  cloture: "10 septembre 2026",
  prix: {
    standard: "97 000 FCFA",
    premium: "119 000 FCFA",
  },
  // Liens boutique (checkout) par formule.
  liens: {
    standard:
      "https://shop.managersity.com/produit/the-ai-digital-workshop-30-31-juillet-2026-standard/",
    premium:
      "https://shop.managersity.com/produit/the-ai-digital-workshop-30-31-juillet-2026-premium/",
  },
} as const;
