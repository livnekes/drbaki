import { motion } from "framer-motion";
import { PAIN_KINDS } from "@/data/content";
import { SECTION_IDS } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion";
import IconCardGrid from "./IconCardGrid";
import PainClinicApproach from "./PainClinicApproach";
import PainMechanisms from "./PainMechanisms";
import SectionHeader from "./SectionHeader";

const PainTreatment = (): JSX.Element => {
  return (
    <section id={SECTION_IDS.painTreatment} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader title="טיפול בכאב" subtitle="כאב הוא תופעה שכיחה בחיינו." />

        <IconCardGrid
          items={PAIN_KINDS}
          className="md:grid-cols-2 max-w-4xl mx-auto mb-20"
          cardClassName="bg-white"
        />

        <PainMechanisms />

        <motion.div {...fadeInUp()} className="max-w-4xl mx-auto mt-20">
          <PainClinicApproach />
        </motion.div>
      </div>
    </section>
  );
};

export default PainTreatment;
