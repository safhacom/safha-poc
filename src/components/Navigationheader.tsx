import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-10 bg-[#A37C40] backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 text-[#273D2F] font-UbuntuMono"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold"
          onClick={() => scrollToSection("hero")}
        >
          Logo
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="hover:text-[#DAA49A]"
            onClick={() => scrollToSection("hero")}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#DAA49A]"
            onClick={() => scrollToSection("about")}
          >
            About
          </Link>
          <Link
            href="/menu"
            className="hover:text-[#DAA49A]"
            onClick={() => scrollToSection("menu")}
          >
            Menu
          </Link>
          <Link
            href="/reservations"
            className="hover:text-[#DAA49A]"
            onClick={() => scrollToSection("reservations")}
          >
            Reservations
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#DAA49A]"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={handleToggle}>
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 75 }}
        className={`absolute top-0 left-0 w-full h-screen bg-[#FFF8F0] p-4 flex flex-col space-y-4 justify-center items-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          href="/"
          className="text-xl font-bold text-[#273D2F] hover:text-[#DAA49A]"
          onClick={() => scrollToSection("hero")}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-xl font-bold text-[#273D2F] hover:text-[#DAA49A]"
          onClick={() => scrollToSection("about")}
        >
          About
        </Link>
        <Link
          href="/menu"
          className="text-xl font-bold text-[#273D2F] hover:text-[#DAA49A]"
          onClick={() => scrollToSection("menu")}
        >
          Menu
        </Link>
        <Link
          href="/reservations"
          className="text-xl font-bold text-[#273D2F] hover:text-[#DAA49A]"
          onClick={() => scrollToSection("reservations")}
        >
          Reservations
        </Link>
        <Link
          href="/contact"
          className="text-xl font-bold text-[#273D2F] hover:text-[#DAA49A]"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
