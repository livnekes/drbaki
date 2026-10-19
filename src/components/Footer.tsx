import { CLINIC_LOCALITY, CLINIC_TAGLINE, CONTACT, DOCTOR_NAME, NAV_ITEMS } from "@/lib/constants";

const CURRENT_YEAR = new Date().getFullYear();

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-brand-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-1">{DOCTOR_NAME}</h3>
            <p className="text-white/60 text-sm">{CLINIC_TAGLINE} | {CLINIC_LOCALITY}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white/60 text-sm">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-white/40 text-sm">
          <span>&copy; {CURRENT_YEAR} {DOCTOR_NAME}. כל הזכויות שמורות.</span>
          <a href={CONTACT.phoneHref} className="hover:text-white transition-colors" dir="ltr">
            {CONTACT.phone}
          </a>
          <a href={CONTACT.emailHref} className="hover:text-white transition-colors">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
