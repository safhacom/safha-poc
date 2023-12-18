import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavigationHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-cream bg-opacity-60 backdrop-filter backdrop-blur-lg border-b border-gray-200 text-darkcharcoal font-lato z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>
          </motion.div>
        </div>
        <nav className="hidden md:flex space-x-10">
          {["Home", "About", "Menu", "Reservations", "Contact"].map(
            (item, index) => (
              <motion.a
                key={index}
                whileHover={{ color: "#DAA49A" }}
                onClick={() => scrollToSection(item)}
                className="cursor-pointer"
              >
                {item}
              </motion.a>
            )
          )}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="md:hidden absolute top-0 left-0 w-full bg-cream p-8"
        >
          <div className="flex flex-col items-center space-y-6">
            {["Home", "About", "Menu", "Reservations", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  whileHover={{ color: "#DAA49A" }}
                  onClick={() => {
                    setIsOpen(false);
                    scrollToSection(item);
                  }}
                  className="cursor-pointer text-xl"
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default NavigationHeader;
