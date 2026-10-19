import { RefreshCw } from "lucide-react";
import { MUSCLE_PAIN_CYCLE } from "@/data/content";
import { cn } from "@/lib/utils";

const STEP_POSITIONS = [
  "top-0 left-1/2 -translate-x-1/2",
  "top-1/2 left-0 -translate-y-1/2",
  "bottom-0 left-1/2 -translate-x-1/2",
  "top-1/2 right-0 -translate-y-1/2",
] as const;

const MuscleCycle = (): JSX.Element => {
  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto" role="img" aria-label={MUSCLE_PAIN_CYCLE.join(" ← ")}>
      <div className="absolute inset-10 rounded-full border-4 border-dashed border-brand-primary/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-brand-primary/10 flex items-center justify-center">
          <RefreshCw className="w-9 h-9 text-brand-primary" />
        </div>
      </div>
      {MUSCLE_PAIN_CYCLE.map((step, index) => (
        <span
          key={step}
          className={cn(
            "absolute w-24 bg-white shadow-md border border-brand-primary/10 rounded-2xl px-3 py-2 font-bold text-brand-dark text-center leading-snug",
            STEP_POSITIONS[index],
          )}
        >
          {step}
        </span>
      ))}
    </div>
  );
};

export default MuscleCycle;
