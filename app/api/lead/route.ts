import { mkdir, appendFile } from "fs/promises";
import path from "path";
import { site } from "@/lib/content";
import { validateLead, type Lead } from "@/lib/leads";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Send the form again." }, { status: 400 });
  }

  const result = validateLead(payload);
  if (!result.ok) {
    const first = Object.values(result.errors)[0] ?? "Check the form and try again.";
    return Response.json({ ok: false, error: first, errors: result.errors }, { status: 400 });
  }
  if (result.spam) {
    return Response.json({ ok: true, delivery: "stored" });
  }

  const lead = result.lead;
  let emailed = false;
  let stored = false;

  try {
    emailed = await sendEmail(lead);
  } catch {
    emailed = false;
  }

  try {
    await storeLead(lead);
    stored = true;
  } catch {
    stored = false;
  }

  if (!emailed && !stored) {
    return Response.json(
      { ok: false, error: "We could not deliver that request. Please call the office." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true, delivery: emailed ? "email" : "stored" });
}

async function sendEmail(lead: Lead) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL || `Valora Construction <${site.email}>`,
      to: [process.env.LEAD_TO_EMAIL || site.email],
      reply_to: lead.email,
      subject: subjectFor(lead),
      text: bodyFor(lead),
    }),
  });

  return response.ok;
}

async function storeLead(lead: Lead) {
  const dir = path.join(process.cwd(), "data", "leads");
  await mkdir(dir, { recursive: true });
  const line = JSON.stringify({ receivedAt: new Date().toISOString(), ...lead });
  await appendFile(path.join(dir, "leads.ndjson"), `${line}\n`, "utf8");
}

function subjectFor(lead: Lead) {
  if (lead.intent === "contact") return `Website message from ${lead.name}`;
  return `Quote request: ${lead.service} — ${lead.city} — ${lead.name}`;
}

function bodyFor(lead: Lead) {
  return [
    `Name: ${lead.name}`,
    lead.phone ? `Phone: ${lead.phone}` : "",
    `Email: ${lead.email}`,
    lead.service ? `Service: ${lead.service}` : "",
    lead.city ? `City: ${lead.city}` : "",
    lead.requestType ? `Request: ${lead.requestType}` : "",
    lead.propertyType ? `Property: ${lead.propertyType}` : "",
    lead.timeline ? `Timeline: ${lead.timeline}` : "",
    "",
    lead.message,
  ]
    .filter(Boolean)
    .join("\n");
}
