/**
 * Intégration Kartra — envoi des inscriptions vers le formulaire Kartra.
 *
 * On garde le formulaire personnalisé de la landing : à la soumission, on POST
 * les données vers l'endpoint Kartra dans une IFRAME CACHÉE. L'utilisateur reste
 * donc sur la page (message de succès affiché), et Kartra reçoit le lead +
 * déclenche ses automatisations (séquences, tags, emails).
 *
 * Pour changer de formulaire Kartra plus tard : remplacer KARTRA_ACTION et, si
 * besoin, la correspondance des champs ci-dessous (visible dans le code
 * d'intégration Kartra : attributs `name="..."` de chaque <input>).
 */

export const KARTRA_ACTION =
  "https://app.kartra.com/process/add_lead/NhmL1RzT7QYf";

/** Correspondance : champ de notre formulaire → name attendu par Kartra. */
export const KARTRA_FIELD_MAP: Record<string, string> = {
  prenom: "first_name",
  nom: "last_name",
  email: "email",
  fonction: "custom_913", // « Poste occupé » dans Kartra
  pays: "custom_2108",
  whatsapp: "custom_801", // « Numéro de téléphone » dans Kartra
  // entreprise: "custom_158", // dispo dans Kartra si on ajoute le champ au formulaire
};

/** Champ « pot de miel » anti-bot de Kartra : doit rester vide. */
const KARTRA_HONEYPOT = "aaddress_url";

export interface InscriptionValues {
  prenom: string;
  nom: string;
  email: string;
  fonction: string;
  whatsapp: string;
  pays: string;
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
