import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps): JSX.Element => {
  return (
    <motion.div {...fadeInUp()} className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{title}</h2>
      <div className="w-20 h-1 bg-brand-accent mx-auto mb-6 rounded-full" />
      {subtitle && (
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
