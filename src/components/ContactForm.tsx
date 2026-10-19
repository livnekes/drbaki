import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Send } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { ContactFormField, ContactFormValues } from "@/types";

const EMPTY_VALUES: ContactFormValues = {
  fullName: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const FIELDS: readonly ContactFormField[] = [
  { name: "fullName", label: "שם מלא", type: "text", required: true, autoComplete: "name" },
  { name: "phone", label: "טלפון", type: "tel", required: true, autoComplete: "tel" },
  { name: "email", label: "דוא״ל", type: "email", required: false, autoComplete: "email" },
  { name: "subject", label: "נושא הפנייה", type: "text", required: false, autoComplete: "off" },
];

const INPUT_CLASS =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition";

const ContactForm = (): JSX.Element => {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm p-6 md:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {FIELDS.map((field) => (
          <label key={field.name} className="block">
            <span className="block text-sm font-medium text-brand-dark mb-2">
              {field.label}
              {field.required && <span className="text-brand-accent ms-1">*</span>}
            </span>
            <input
              name={field.name}
              type={field.type}
              inputMode={field.type === "tel" ? "tel" : undefined}
              dir={field.type === "text" ? undefined : "ltr"}
              required={field.required}
              autoComplete={field.autoComplete}
              value={values[field.name]}
              onChange={handleChange}
              className={INPUT_CLASS}
            />
          </label>
        ))}
      </div>
      <label className="block">
        <span className="block text-sm font-medium text-brand-dark mb-2">הודעה</span>
        <textarea name="message" rows={4} value={values.message} onChange={handleChange} className={INPUT_CLASS} />
      </label>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-dark transition-colors"
      >
        <Send className="w-5 h-5" />
        שליחה בוואטסאפ
      </button>
      <p className="text-gray-400 text-sm text-center">הלחיצה תפתח את וואטסאפ עם הפרטים שמילאתם</p>
    </form>
  );
};

export default ContactForm;
