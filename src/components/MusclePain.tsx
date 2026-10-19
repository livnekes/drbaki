import { motion } from "framer-motion";
import { MUSCLE_PAIN_PARAGRAPHS, REFERRED_PAIN_IMAGES } from "@/data/content";
import { SECTION_IDS } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion";
import ImageGallery from "./ImageGallery";
import MuscleCycle from "./MuscleCycle";
import SectionHeader from "./SectionHeader";

const MusclePain = (): JSX.Element => {
  return (
    <section id={SECTION_IDS.musclePain} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="כאב משרירים - מה זה?" subtitle="שריר כמקור כאב" />

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <motion.div {...fadeInUp()} className="space-y-5">
            {MUSCLE_PAIN_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-gray-600 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
          <motion.div {...fadeInUp(0.2)}>
            <MuscleCycle />
          </motion.div>
        </div>

        <motion.div {...fadeInUp()} className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-brand-dark text-center mb-8">
            דוגמאות לכאב מוקרן ממקור השריר
          </h3>
          <ImageGallery images={REFERRED_PAIN_IMAGES} columns={3} />
        </motion.div>
      </div>
    </section>
  );
};

export default MusclePain;
