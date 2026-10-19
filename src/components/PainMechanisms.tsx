import { motion } from "framer-motion";
import { PAIN_MECHANISMS, PAIN_MYOFASCIAL_STAT, PAIN_OTHER_CLASSIFICATIONS } from "@/data/content";
import { fadeInUp } from "@/lib/motion";
import IconCardGrid from "./IconCardGrid";

const PainMechanisms = (): JSX.Element => {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.h3 {...fadeInUp()} className="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-10">
        מספר מנגנונים גורמים לכאב
      </motion.h3>

      <IconCardGrid items={PAIN_MECHANISMS} className="md:grid-cols-3 mb-10" cardClassName="bg-white" />

      <motion.div
        {...fadeInUp(0.2)}
        className="flex flex-col md:flex-row items-center gap-6 bg-brand-primary text-white rounded-3xl p-8 md:p-10 mb-6"
      >
        <span className="text-6xl md:text-7xl font-extrabold text-brand-accent-light" dir="ltr">
          ~{PAIN_MYOFASCIAL_STAT.value}
        </span>
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-center md:text-right">
          {PAIN_MYOFASCIAL_STAT.description}
        </p>
      </motion.div>

      <motion.p {...fadeInUp(0.3)} className="text-gray-500 text-center max-w-3xl mx-auto">
        {PAIN_OTHER_CLASSIFICATIONS}
      </motion.p>
    </div>
  );
};

export default PainMechanisms;
