import { motion } from "framer-motion";
import { ABOUT_PAIN_TYPES } from "@/data/content";
import { fadeInUp } from "@/lib/motion";

const AboutPainTypes = (): JSX.Element => {
  return (
    <motion.div {...fadeInUp()} className="bg-gray-50 rounded-3xl p-8">
      <h3 className="text-2xl font-bold text-brand-dark mb-6">מנוסה בטיפול בסוגי כאב שונים</h3>
      <ul className="grid sm:grid-cols-2 gap-4">
        {ABOUT_PAIN_TYPES.map((painType) => (
          <li key={painType.label} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
            <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center shrink-0">
              <painType.icon className="w-5 h-5 text-brand-accent" />
            </div>
            <p className="font-semibold text-brand-dark leading-snug">{painType.label}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AboutPainTypes;
