import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { ABOUT_APPROACH, ABOUT_INTRO, ABOUT_ROLES, ABOUT_SURGERY_NOTE } from "@/data/content";
import { DOCTOR_NAME, SECTION_IDS } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion";
import AboutCourses from "./AboutCourses";
import AboutPainTypes from "./AboutPainTypes";
import IconCardGrid from "./IconCardGrid";
import SectionHeader from "./SectionHeader";

const About = (): JSX.Element => {
  return (
    <section id={SECTION_IDS.about} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={`אודות ${DOCTOR_NAME}`} />

        <motion.div {...fadeInUp()} className="max-w-3xl mx-auto space-y-4 mb-14">
          {ABOUT_INTRO.map((paragraph) => (
            <p key={paragraph} className="text-gray-600 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <IconCardGrid
          items={ABOUT_ROLES}
          className="md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-20"
          cardClassName="bg-brand-light"
        />

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-14">
          <AboutPainTypes />
          <AboutCourses />
        </div>

        <motion.div {...fadeInUp()} className="max-w-4xl mx-auto space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">{ABOUT_APPROACH}</p>
          <div className="flex items-start gap-4 bg-brand-accent-light border-s-4 border-brand-accent rounded-2xl p-6">
            <Info className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
            <p className="text-brand-dark font-medium leading-relaxed">{ABOUT_SURGERY_NOTE}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
