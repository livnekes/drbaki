import type { NavItem } from "@/types";

export const DOCTOR_NAME = "ד״ר בקי חרש";
export const CLINIC_TAGLINE = "מרפאה לטיפול בכאבי שריר ושלד";
export const CLINIC_KIND = "מרפאת כאב";
export const CLINIC_LOCALITY = "מצפה עמוקה";

export const SECTION_IDS = {
  about: "about",
  painTreatment: "pain-treatment",
  musclePain: "muscle-pain",
  testimonials: "testimonials",
  clinic: "clinic",
  contact: "contact",
} as const;

export const NAV_ITEMS: readonly NavItem[] = [
  { href: `#${SECTION_IDS.about}`, label: "אודות" },
  { href: `#${SECTION_IDS.painTreatment}`, label: "טיפול בכאב" },
  { href: `#${SECTION_IDS.musclePain}`, label: "שריר כמקור כאב" },
  { href: `#${SECTION_IDS.testimonials}`, label: "לקוחות מרוצים" },
  { href: `#${SECTION_IDS.clinic}`, label: "הוראות הגעה" },
  { href: `#${SECTION_IDS.contact}`, label: "צור קשר" },
];

export const CONTACT = {
  phone: "050-5568919",
  phoneHref: "tel:+972505568919",
  fax: "077-7657655",
  email: "baki2006@gmail.com",
  emailHref: "mailto:baki2006@gmail.com",
  addressLines: [CLINIC_LOCALITY, "ד.נ. מרום הגליל", "מיקוד 1380200"],
} as const;

export const WHATSAPP_URL = "https://wa.me/972505568919";

export const CLINIC_LOCATION_QUERY = CLINIC_LOCALITY;
export const CLINIC_MAP_QUERY = "עמוקה";
export const WAZE_URL = `https://waze.com/ul?q=${encodeURIComponent(CLINIC_LOCATION_QUERY)}&navigate=yes`;
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_MAP_QUERY)}`;
export const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(CLINIC_MAP_QUERY)}&z=14&output=embed`;

export const IMAGES = {
  portrait: "/baki.jpg",
  clinicGarden: "/clinic-garden.jpg",
  clinicBuilding: "/clinic-building.jpg",
} as const;
