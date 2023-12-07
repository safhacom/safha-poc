// components/NavigationHeader.tsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavigationHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-blue-700 hover:text-blue-800">
            Home
          </Link>
          <Link href="/#about" className="text-blue-700 hover:text-blue-800">
            About
          </Link>
          <Link href="/#features" className="text-blue-700 hover:text-blue-800">
            Features
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/#pricing" className="text-blue-700 hover:text-blue-800">
            Pricing
          </Link>
          <Link
            href="/#testimonials"
            className="text-blue-700 hover:text-blue-800"
          >
            Testimonials
          </Link>
          <Link href="/#faq" className="text-blue-700 hover:text-blue-800">
            FAQ
          </Link>
          <Link href="/#contact" className="text-blue-700 hover:text-blue-800">
            Contact
          </Link>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {/* Hamburger Icon */}
        </button>
      </nav>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-50 flex flex-col items-center justify-center">
          {/* Mobile Menu Items */}
        </div>
      )}
    </header>
  );
};

export default NavigationHeader;
