import type { LucideIcon } from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
};

export type IconCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type IconLabel = {
  icon: LucideIcon;
  label: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Testimonial = {
  paragraphs: readonly string[];
  signature: string;
  featured: boolean;
};

export type ContactChannel = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
};

export type ContactFormValues = {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormField = {
  name: Exclude<keyof ContactFormValues, "message">;
  label: string;
  type: "text" | "tel" | "email";
  required: boolean;
  autoComplete: string;
};
