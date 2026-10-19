import { ClipboardList } from "lucide-react";
import { PAIN_CLINIC_ATMOSPHERE, PAIN_CLINIC_STEPS, PAIN_DIAGNOSIS } from "@/data/content";

const PainClinicApproach = (): JSX.Element => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center">
          <ClipboardList className="w-6 h-6 text-brand-accent" />
        </div>
        <h3 className="text-2xl font-bold text-brand-dark">אבחון לפני טיפול</h3>
      </div>
      <p className="text-gray-600 text-lg leading-relaxed mb-10">{PAIN_DIAGNOSIS}</p>

      <h4 className="text-xl font-bold text-brand-dark mb-6">במרפאתי</h4>
      <ol className="space-y-5 mb-10">
        {PAIN_CLINIC_STEPS.map((step, index) => (
          <li key={step} className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-full bg-brand-primary text-white font-bold flex items-center justify-center shrink-0">
              {index + 1}
            </span>
            <p className="text-gray-600 leading-relaxed pt-1">{step}</p>
          </li>
        ))}
      </ol>

      <p className="text-brand-dark font-medium leading-relaxed bg-brand-light rounded-2xl p-6">
        {PAIN_CLINIC_ATMOSPHERE}
      </p>
    </div>
  );
};

export default PainClinicApproach;
