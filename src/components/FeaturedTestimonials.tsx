import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { FEATURED_TESTIMONIALS } from "@/data/content";
import { SECTION_IDS } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";

const FeaturedTestimonials = (): JSX.Element => {
  return (
    <section className="py-20 md:py-28 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionHeader title="מה אומרים המטופלים" />
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {FEATURED_TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={`${index}-${testimonial.signature}`} testimonial={testimonial} index={index} />
          ))}
        </div>
        <motion.div {...fadeInUp(0.2)} className="text-center mt-10">
          <a
            href={`#${SECTION_IDS.testimonials}`}
            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-dark transition-colors"
          >
            לעוד מכתבי תודה
            <ArrowLeft className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;
