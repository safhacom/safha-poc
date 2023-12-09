// components/NavigationHeader.tsx
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    router
      .push(href)
      .then(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-dark-slate hover:text-turquoise"
          >
            {/* Insert your logo here */}
            <span>LOGO</span>
          </Link>
        </div>
        <nav className={`lg:flex items-center space-x-6 hidden`}>
          {["Home", "Properties", "About", "Services", "Blog", "Contact"].map(
            (item) => (
              <Link
                href={`/${item.toLowerCase()}`}
                key={item}
                className="text-dark-slate hover:text-turquoise"
              >
                {item}
              </Link>
            )
          )}
        </nav>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-dark-slate hover:text-turquoise"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center">
            <button
              aria-label="Close Menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 p-2 text-dark-slate hover:text-turquoise"
            >
              <XIcon className="h-6 w-6" />
            </button>
            <nav className="flex flex-col items-center space-y-6">
              {[
                "Home",
                "Properties",
                "About",
                "Services",
                "Blog",
                "Contact",
              ].map((item) => (
                <Link href={`/${item.toLowerCase()}`} key={item}>
                  <a
                    className="text-xl text-dark-slate hover:text-turquoise"
                    onClick={(e) =>
                      handleLinkClick(e, `/${item.toLowerCase()}`)
                    }
                  >
                    {item}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavigationHeader;
