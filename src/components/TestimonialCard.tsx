import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeInUp } from "@/lib/motion";
import type { Testimonial } from "@/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps): JSX.Element => {
  return (
    <motion.figure
      {...fadeInUp(index * 0.05, 0.4)}
      className="break-inside-avoid mb-6 bg-white rounded-2xl p-6 shadow-md border border-gray-100"
    >
      <Quote className="w-8 h-8 text-brand-accent/40 mb-3" />
      <blockquote className="space-y-3 text-gray-600 leading-relaxed">
        {testimonial.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </blockquote>
      <figcaption className="mt-4 font-bold text-brand-dark">- {testimonial.signature}</figcaption>
    </motion.figure>
  );
};

export default TestimonialCard;
