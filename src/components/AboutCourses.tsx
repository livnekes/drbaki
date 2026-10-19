import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { ABOUT_COURSES } from "@/data/content";
import { fadeInUp } from "@/lib/motion";

const AboutCourses = (): JSX.Element => {
  return (
    <motion.div {...fadeInUp(0.15)} className="bg-brand-dark text-white rounded-3xl p-8">
      <h3 className="text-2xl font-bold mb-6">בוגר קורסים רבים בתחום האבחון והטיפול בכאב</h3>
      <ul className="space-y-4">
        {ABOUT_COURSES.map((course) => (
          <li key={course} className="flex items-start gap-3">
            <CircleCheck className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
            <span className="text-white/85 leading-relaxed">{course}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AboutCourses;
