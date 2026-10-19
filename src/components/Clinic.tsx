import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import {
  CLINIC_LOCALITY,
  CLINIC_LOCATION_QUERY,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
  IMAGES,
  SECTION_IDS,
  WAZE_URL,
} from "@/lib/constants";
import { fadeInUp } from "@/lib/motion";
import SectionHeader from "./SectionHeader";

const Clinic = (): JSX.Element => {
  return (
    <section id={SECTION_IDS.clinic} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={`הקליניקה ב${CLINIC_LOCALITY}`} subtitle="איך מגיעים לעמוקה?" />

        <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto mb-10">
          <motion.img
            {...fadeInUp()}
            src={IMAGES.clinicBuilding}
            alt={`הקליניקה ב${CLINIC_LOCALITY}`}
            loading="lazy"
            className="w-full aspect-4/3 object-cover rounded-3xl shadow-lg"
          />
          <motion.img
            {...fadeInUp(0.15)}
            src={IMAGES.clinicGarden}
            alt={`הגינה בקליניקה ב${CLINIC_LOCALITY}`}
            loading="lazy"
            className="w-full aspect-4/3 object-cover rounded-3xl shadow-lg"
          />
        </div>

        <motion.div {...fadeInUp()} className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-brand-light rounded-3xl p-8 flex flex-col justify-center">
            <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">הוראות הגעה</h3>
            <p className="text-gray-600 mb-6">חפשו ״{CLINIC_LOCATION_QUERY}״ ב-Waze</p>
            <div className="flex flex-col gap-3">
              <a
                href={WAZE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-dark transition-colors"
              >
                <Navigation className="w-5 h-5" />
                ניווט עם Waze
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary px-6 py-3 rounded-full font-semibold hover:bg-brand-primary hover:text-white transition-colors"
              >
                <MapPin className="w-5 h-5" />
                פתיחה ב-Google Maps
              </a>
            </div>
          </div>
          <iframe
            title={`מפת הגעה ל${CLINIC_LOCALITY}`}
            src={GOOGLE_MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="lg:col-span-2 w-full h-80 lg:h-full min-h-80 rounded-3xl border-0 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Clinic;
