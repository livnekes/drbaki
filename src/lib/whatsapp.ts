import { WHATSAPP_URL } from "@/lib/constants";
import type { ContactFormValues } from "@/types";

const MESSAGE_LABELS: Record<keyof ContactFormValues, string> = {
  fullName: "שם",
  phone: "טלפון",
  email: "דוא״ל",
  subject: "נושא",
  message: "הודעה",
};

const MESSAGE_GREETING = "שלום ד״ר בקי, פנייה מהאתר:";

export function buildWhatsAppMessage(values: ContactFormValues): string {
  const lines = (Object.keys(MESSAGE_LABELS) as (keyof ContactFormValues)[])
    .map((field) => [MESSAGE_LABELS[field], values[field].trim()] as const)
    .filter(([, value]) => value.length > 0)
    .map(([label, value]) => `${label}: ${value}`);
  return [MESSAGE_GREETING, ...lines].join("\n");
}

export function buildWhatsAppUrl(values: ContactFormValues): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(buildWhatsAppMessage(values))}`;
}
