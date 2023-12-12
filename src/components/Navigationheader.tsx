import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavigationHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Starters",
    "Main Courses",
    "Desserts",
    "Beverages",
    "Special Diets",
    "Seasonal Offers",
    "Kids Menu",
    "Wine List",
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-creamy-white border-b border-gray-200 z-50">
      <div className="flex justify-between items-center px-4 py-2 md:px-6 lg:px-8">
        <Link href="/" className="text-charcoal-gray font-bold text-xl">
          <img src="/icon.png" alt="Restaurant Logo" className="h-8 md:h-10" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {menuItems.map((item) => (
              <li key={item} className="text-charcoal-gray hover:text-warm-red">
                <a
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-sm md:text-base lg:text-lg"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6 text-charcoal-gray" />
          ) : (
            <MenuIcon className="h-6 w-6 text-charcoal-gray" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-creamy-white p-4">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item} className="text-charcoal-gray hover:text-warm-red">
                <a
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-lg"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavigationHeader;
