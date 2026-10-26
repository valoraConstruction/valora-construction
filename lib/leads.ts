import { cityOptions, services } from "@/lib/content";

export type LeadIntent = "contact" | "quote";

const requestTypes = ["estimate", "appointment"] as const;
const propertyTypes = ["Single-family home", "Condominium", "Townhome"] as const;
const timelines = [
  "As soon as we can start",
  "1–3 months",
  "3–6 months",
  "Planning ahead",
] as const;

export const requestTypeOptions = [
  { value: "estimate", label: "Get an estimate" },
  { value: "appointment", label: "Book a design appointment" },
] as const;

export const propertyTypeOptions = propertyTypes;
export const timelineOptions = timelines;

export type Lead = {
  intent: LeadIntent;
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  message: string;
  requestType: string;
  propertyType: string;
  timeline: string;
};

export function validateLead(
  input: unknown,
):
  | { ok: true; spam: true }
  | { ok: true; spam: false; lead: Lead }
  | { ok: false; errors: Record<string, string> } {
  const source = typeof input === "object" && input !== null ? (input as Record<string, unknown>) : {};
  const fax = text(source.fax, 80);
  if (fax) return { ok: true, spam: true };

  const errors: Record<string, string> = {};
  const intent = source.intent === "contact" || source.intent === "quote" ? source.intent : "";
  const name = text(source.name, 80);
  const phoneRaw = text(source.phone, 30);
  const phoneDigits = phoneRaw.replace(/\D/g, "");
  const email = text(source.email, 120);
  const service = text(source.service, 80);
  const city = text(source.city, 80);
  const message = text(source.message, 4000);
  const requestType = text(source.requestType, 40);
  const propertyType = text(source.propertyType, 40);
  const timeline = text(source.timeline, 40);

  if (!intent) errors.intent = "Choose how you would like us to help.";
  if (name.length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
  if (phoneDigits.length < 10 || phoneDigits.length > 15) errors.phone = "Enter a phone number we can call.";
  if (!services.some((item) => item.name === service)) errors.service = "Choose a service.";
  if (intent === "contact") {
    if (city.length < 2) errors.city = "Enter the city where the project is.";
  } else {
    if (message.length < 12) errors.message = "Tell us a little about the project.";
    if (!cityOptions.includes(city)) errors.city = "Choose the city where the project is.";
  }

  if (intent === "quote") {
    if (!requestTypes.includes(requestType as (typeof requestTypes)[number])) {
      errors.requestType = "Choose an estimate or an appointment.";
    }
    if (propertyType && !propertyTypes.includes(propertyType as (typeof propertyTypes)[number])) {
      errors.propertyType = "Choose a property type.";
    }
    if (timeline && !timelines.includes(timeline as (typeof timelines)[number])) {
      errors.timeline = "Choose a timeline.";
    }
  }

  if (Object.keys(errors).length) return { ok: false, errors };

  return {
    ok: true,
    spam: false,
    lead: {
      intent: intent as LeadIntent,
      name,
      phone: phoneRaw,
      email,
      service,
      city,
      message,
      requestType: intent === "quote" ? requestType : "",
      propertyType: intent === "quote" ? propertyType : "",
      timeline: intent === "quote" ? timeline : "",
    },
  };
}

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}
