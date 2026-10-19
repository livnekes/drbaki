import { MORE_TESTIMONIALS } from "@/data/content";
import { SECTION_IDS } from "@/lib/constants";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";

const Testimonials = (): JSX.Element => {
  return (
    <section id={SECTION_IDS.testimonials} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader title="מכתבי תודה נוספים" subtitle="מה כותבים מטופלים ועמיתים" />
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {MORE_TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={`${index}-${testimonial.signature}`}
              testimonial={testimonial}
              index={index}
              className="break-inside-avoid mb-6"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
