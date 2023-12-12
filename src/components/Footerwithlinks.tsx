import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const router = useRouter();

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal-gray text-creamy-white font-ubuntu-mono">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h4 className="text-ocean-blue">Quick Links</h4>
          <ul>
            <li>
              <a href="#" onClick={() => handleScrollToSection("about")}>
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleScrollToSection("menu-highlights")}
              >
                Menu Highlights
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleScrollToSection("reservation")}>
                Reservation
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleScrollToSection("events")}>
                Events
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-ocean-blue">Menu</h4>
          <ul>
            <li>
              <a href="#" onClick={() => handleScrollToSection("starters")}>
                Starters
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleScrollToSection("main-courses")}>
                Main Courses
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleScrollToSection("desserts")}>
                Desserts
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleScrollToSection("beverages")}>
                Beverages
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleScrollToSection("special-diets")}
              >
                Special Diets
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleScrollToSection("seasonal-offers")}
              >
                Seasonal Offers
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleScrollToSection("kids-menu")}>
                Kids Menu
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleScrollToSection("wine-list")}>
                Wine List
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-ocean-blue">Contact & Location</h4>
          <address>
            1234 Restaurant St.
            <br />
            Food City, FC 12345
          </address>
          <p className="text-sunset-orange">+1 (234) 567-8900</p>
          <p>info@restaurant.com</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-ocean-blue">Stay Connected</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-light-gray py-4">
        <a href="#" onClick={() => handleScrollToSection("privacy-policy")}>
          Privacy Policy
        </a>{" "}
        |
        <a href="#" onClick={() => handleScrollToSection("terms-of-service")}>
          Terms of Service
        </a>{" "}
        |
        <a href="#" onClick={() => handleScrollToSection("sitemap")}>
          Sitemap
        </a>
      </div>
    </footer>
  );
};

export default Footer;
