import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { CLINIC_KIND, CONTACT, DOCTOR_NAME, NAV_ITEMS } from "@/lib/constants";

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (): void => {
    setIsOpen((open) => !open);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex flex-col leading-tight">
            <span className="text-xl md:text-2xl font-bold text-brand-dark">{DOCTOR_NAME}</span>
            <span className="text-xs md:text-sm text-brand-accent font-medium">{CLINIC_KIND}</span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-brand-primary transition-colors font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors font-medium text-sm"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">{CONTACT.phone}</span>
            </a>
          </div>

          <button
            type="button"
            onClick={handleToggle}
            className="lg:hidden p-2 text-gray-600"
            aria-label={isOpen ? "סגירת תפריט" : "פתיחת תפריט"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 border-t">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClose}
                className="block py-3 text-gray-600 hover:text-brand-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href={CONTACT.phoneHref}
              onClick={handleClose}
              className="flex items-center justify-center gap-2 mt-2 bg-brand-primary text-white px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">{CONTACT.phone}</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
