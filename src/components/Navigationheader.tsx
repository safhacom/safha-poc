import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavigationHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-cream shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" onClick={() => scrollToSection("hero")}>
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/food-restaurant-svgrepo-com.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-burgundy p-2 rounded-md inline-flex items-center justify-center text-cream hover:text-terracotta focus:outline-none focus:ring-2 focus:ring-inset focus:ring-terracotta"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a
              href="#"
              className="text-base font-medium text-charcoal hover:text-terracotta"
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>
            <a
              href="#"
              className="text-base font-medium text-charcoal hover:text-terracotta"
              onClick={() => scrollToSection("about")}
            >
              About
            </a>
            <a
              href="#"
              className="text-base font-medium text-charcoal hover:text-terracotta"
              onClick={() => scrollToSection("menu")}
            >
              Menu
            </a>
            <a
              href="#"
              className="text-base font-medium text-charcoal hover:text-terracotta"
              onClick={() => scrollToSection("reservations")}
            >
              Reservations
            </a>
            <a
              href="#"
              className="text-base font-medium text-charcoal hover:text-terracotta"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      <div
        className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="rounded-lg shadow-md bg-cream ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img className="h-8 w-auto" src="/icon.png" alt="Your Logo" />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-burgundy p-2 rounded-md inline-flex items-center justify-center text-cream hover:text-terracotta focus:outline-none focus:ring-2 focus:ring-inset focus:ring-terracotta"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-charcoal hover:text-terracotta"
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-charcoal hover:text-terracotta"
              onClick={() => scrollToSection("about")}
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-charcoal hover:text-terracotta"
              onClick={() => scrollToSection("menu")}
            >
              Menu
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-charcoal hover:text-terracotta"
              onClick={() => scrollToSection("reservations")}
            >
              Reservations
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-charcoal hover:text-terracotta"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;
