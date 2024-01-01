import { useState } from "react";
import { motion } from "framer-motion";

const NavigationHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { name: "About Us", ref: "about-us" },
    { name: "Properties", ref: "properties" },
    { name: "Services", ref: "services" },
    { name: "FAQs", ref: "faqs" },
    { name: "Contact Us", ref: "contact-us" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-light-grey bg-opacity-60 backdrop-filter backdrop-blur-lg border-b border-light-grey text-dark-grey font-roboto fixed w-full z-10"
    >
      <div className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto">
        <div
          className="text-deep-sea-blue text-3xl font-bold cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          LOGO
        </div>
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              onClick={() => scrollToSection(item.ref)}
              className="text-lg cursor-pointer hover:text-lime-green transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          className="md:hidden absolute inset-0 h-screen bg-white p-8"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0 p-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <nav className="flex flex-col items-center justify-center h-full space-y-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection(item.ref);
                }}
                className="text-lg font-medium cursor-pointer hover:text-lime-green transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default NavigationHeader;
