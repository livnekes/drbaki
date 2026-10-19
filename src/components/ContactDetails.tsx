import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Printer } from "lucide-react";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion";
import type { ContactChannel } from "@/types";

const CHANNELS: readonly ContactChannel[] = [
  { icon: Phone, label: "טלפון", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: MessageCircle, label: "וואטסאפ", value: CONTACT.phone, href: WHATSAPP_URL },
  { icon: Mail, label: "דוא״ל", value: CONTACT.email, href: CONTACT.emailHref },
  { icon: Printer, label: "פקס", value: CONTACT.fax, href: null },
];

const LINK_CLASS = "text-gray-600 hover:text-brand-primary transition-colors";

const ContactDetails = (): JSX.Element => {
  return (
    <div className="space-y-4">
      {CHANNELS.map((channel, index) => (
        <motion.div
          key={channel.label}
          {...fadeInUp(index * 0.08, 0.5)}
          className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm"
        >
          <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0">
            <channel.icon className="w-6 h-6 text-brand-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-sm text-gray-400">{channel.label}</p>
            {channel.href === null ? (
              <p className="text-gray-600" dir="ltr">{channel.value}</p>
            ) : (
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={LINK_CLASS}
                dir="ltr"
              >
                {channel.value}
              </a>
            )}
          </div>
        </motion.div>
      ))}

      <motion.div {...fadeInUp(0.32, 0.5)} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
        <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0">
          <MapPin className="w-6 h-6 text-brand-primary" />
        </div>
        <address className="not-italic text-gray-600">
          {CONTACT.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </address>
      </motion.div>
    </div>
  );
};

export default ContactDetails;
