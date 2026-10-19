import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { IconCard } from "@/types";

type IconCardGridProps = {
  items: readonly IconCard[];
  className?: string;
  cardClassName?: string;
};

const IconCardGrid = ({ items, className, cardClassName }: IconCardGridProps): JSX.Element => {
  return (
    <div className={cn("grid gap-6", className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          {...fadeInUp(index * 0.1, 0.5)}
          className={cn("rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow", cardClassName)}
        >
          <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
            <item.icon className="w-6 h-6 text-brand-primary" />
          </div>
          <h3 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default IconCardGrid;
