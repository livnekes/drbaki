import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { HERO_HIGHLIGHTS, HERO_INTRO } from "@/data/content";
import {
  CLINIC_KIND,
  CLINIC_LOCALITY,
  CLINIC_TAGLINE,
  CONTACT,
  DOCTOR_NAME,
  IMAGES,
  SECTION_IDS,
} from "@/lib/constants";
import { heroEntrance } from "@/lib/motion";

const PORTRAIT_ENTRANCE = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, delay: 0.3 },
} as const;

const SCROLL_HINT_ANIMATION = { y: [0, 10, 0] };
const SCROLL_HINT_TRANSITION = { repeat: Infinity, duration: 2 };

const Hero = (): JSX.Element => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-bl from-brand-light via-white to-brand-accent-light pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16">
          <div className="max-w-2xl text-center md:text-right">
            <motion.p {...heroEntrance()} className="text-brand-accent font-semibold tracking-wide mb-3">
              {CLINIC_KIND} · {CLINIC_LOCALITY}
            </motion.p>
            <motion.h1
              {...heroEntrance(0.1)}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-brand-dark leading-tight mb-4"
            >
              {DOCTOR_NAME}
            </motion.h1>
            <motion.p {...heroEntrance(0.2)} className="text-xl md:text-2xl text-brand-primary font-semibold mb-6">
              {CLINIC_TAGLINE}
            </motion.p>
            <motion.p {...heroEntrance(0.3)} className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
              {HERO_INTRO}
            </motion.p>

            <motion.ul {...heroEntrance(0.4)} className="flex flex-wrap gap-3 justify-center md:justify-start mb-10">
              {HERO_HIGHLIGHTS.map((highlight) => (
                <li
                  key={highlight.label}
                  className="flex items-center gap-2 bg-white/80 border border-brand-primary/10 shadow-sm rounded-full px-4 py-2 text-brand-dark font-medium"
                >
                  <highlight.icon className="w-4 h-4 text-brand-accent" />
                  {highlight.label}
                </li>
              ))}
            </motion.ul>

            <motion.div {...heroEntrance(0.5)} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-dark transition-all hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                לקביעת תור
              </a>
              <a
                href={`#${SECTION_IDS.contact}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-primary hover:text-white transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                השאירו פרטים
              </a>
            </motion.div>
          </div>

          <motion.div {...PORTRAIT_ENTRANCE} className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-primary/10 rounded-3xl blur-2xl" />
              <img
                src={IMAGES.portrait}
                alt={DOCTOR_NAME}
                width={135}
                height={195}
                className="relative w-36 h-52 md:w-40 md:h-56 rounded-3xl object-cover object-top shadow-2xl border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={SCROLL_HINT_ANIMATION}
        transition={SCROLL_HINT_TRANSITION}
      >
        <ChevronDown className="w-8 h-8 text-brand-primary/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
