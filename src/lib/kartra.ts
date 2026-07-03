/**
 * Intégration Kartra — envoi des inscriptions au Workshop IA vers Kartra.
 *
 * On garde le formulaire personnalisé de la landing : à la soumission, on POST
 * les données vers l'endpoint Kartra dans une IFRAME CACHÉE. L'utilisateur reste
 * donc sur la page (message de succès affiché), et Kartra reçoit le lead +
 * déclenche ses automatisations (séquences, tags, emails).
 *
 * À COMPLÉTER : KARTRA_ACTION et KARTRA_FIELD_MAP ci-dessous sont des
 * placeholders. Remplacez-les par le vrai lien/code d'intégration une fois le
 * formulaire créé dans Kartra pour le Workshop IA (voir attributs `name="..."`
 * de chaque <input> dans le code fourni par Kartra).
 */

export const KARTRA_ACTION =
  "https://app.kartra.com/process/add_lead/REMPLACER_PAR_LE_LIEN_KARTRA";

/** Correspondance : champ de notre formulaire → name attendu par Kartra. */
export const KARTRA_FIELD_MAP: Record<string, string> = {
  prenom: "first_name",
  nom: "last_name",
  email: "email",
  whatsapp: "custom_801", // À vérifier avec le nouveau formulaire Kartra
  pays: "custom_2108", // À vérifier avec le nouveau formulaire Kartra
  formule: "custom_913", // À vérifier avec le nouveau formulaire Kartra
};

/** Champ « pot de miel » anti-bot de Kartra : doit rester vide. */
const KARTRA_HONEYPOT = "aaddress_url";

export interface InscriptionValues {
  prenom: string;
  nom: string;
  email: string;
  whatsapp: string;
  pays: string;
  formule: string;
}

/**
 * Envoie les valeurs à Kartra via un POST dans une iframe cachée.
 * Résout dès que l'envoi est parti (Kartra ne renvoie pas d'accusé lisible
 * en cross-origin — la validation est faite en amont côté formulaire).
 */
export function submitToKartra(values: InscriptionValues): Promise<void> {
  return new Promise((resolve) => {
    if (typeof document === "undefined") {
      resolve();
      return;
    }

    const targetName = `kartra_target_${Date.now()}`;

    const iframe = document.createElement("iframe");
    iframe.name = targetName;
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = KARTRA_ACTION;
    form.target = targetName;
    form.acceptCharset = "UTF-8";
    form.style.display = "none";

    const addField = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value ?? "";
      form.appendChild(input);
    };

    // Honeypot vide + champs mappés
    addField(KARTRA_HONEYPOT, "");
    for (const [ourKey, kartraName] of Object.entries(KARTRA_FIELD_MAP)) {
      addField(kartraName, String(values[ourKey as keyof InscriptionValues] ?? ""));
    }

    document.body.appendChild(form);

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
      // Nettoyage différé (laisse le POST se terminer dans l'iframe)
      window.setTimeout(() => {
        form.remove();
        iframe.remove();
      }, 1500);
    };

    iframe.addEventListener("load", finish);
    // Filet de sécurité si l'événement load ne se déclenche pas
    window.setTimeout(finish, 3000);

    form.submit();
  });
}
