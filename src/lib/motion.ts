import type { MotionProps } from "framer-motion";

export function fadeInUp(delay = 0, duration = 0.6): MotionProps {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration, delay },
  };
}

export function heroEntrance(delay = 0): MotionProps {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
  };
}
