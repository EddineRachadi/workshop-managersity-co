import { NextResponse } from "next/server";
import { saveLead, type Lead } from "@/lib/leads";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 120): string {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  const lead: Lead = {
    prenom: clean(body.prenom),
    nom: clean(body.nom),
    email: clean(body.email, 160).toLowerCase(),
    fonction: clean(body.fonction),
    whatsapp: clean(body.whatsapp, 40),
    pays: clean(body.pays),
  };

  // Validation des champs requis
  if (!lead.prenom || !lead.nom || !lead.fonction || !lead.pays) {
    return NextResponse.json(
      { error: "Merci de remplir tous les champs." },
      { status: 400 }
    );
  }
  if (!EMAIL_REGEX.test(lead.email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  if (lead.whatsapp.replace(/\D/g, "").length < 6) {
    return NextResponse.json(
      { error: "Numéro WhatsApp invalide." },
      { status: 400 }
    );
  }

  const result = await saveLead(lead);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
