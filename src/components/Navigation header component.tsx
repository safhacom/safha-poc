import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuIcon, XIcon, SearchIcon } from "@heroicons/react/outline";

const NavigationHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
      setIsSearchOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#2E4053] text-white z-50">
      <nav className="flex items-center justify-between p-4 border-b border-[#F0F2F5] bg-opacity-80 backdrop-filter backdrop-blur-lg">
        <div className="flex items-center">
          <Link href="/" className="text-white font-bold text-xl">
            <img src="/icon.png" alt="Company Logo" className="h-8" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {["Home", "Properties", "Services", "About", "Blog", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className="cursor-pointer hover:bg-[#A9CCE3] px-3 py-2 rounded-md transition-colors duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 mr-4"
          >
            <SearchIcon className="h-6 w-6 text-[#D4AC0D]" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full p-4 bg-white border border-[#D4AC0D]">
            <input
              type="text"
              placeholder="Search properties..."
              className="w-full p-2"
            />
          </div>
        )}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white p-4 flex flex-col items-center space-y-4">
            {["Home", "Properties", "Services", "About", "Blog", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                  className="block w-full text-center text-[#2E4053] p-2 hover:bg-[#A9CCE3] rounded-md transition-colors duration-300"
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavigationHeader;
