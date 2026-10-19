import { motion } from "framer-motion";
import { SECTION_IDS } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import SectionHeader from "./SectionHeader";

const Contact = (): JSX.Element => {
  return (
    <section id={SECTION_IDS.contact} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="מוזמנים לפנות אליי"
          subtitle="אנא מלאו הפרטים ונשמח ליצור עמכם קשר בהקדם"
        />
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <ContactDetails />
          </div>
          <motion.div {...fadeInUp(0.1)} className="lg:col-span-3">
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
