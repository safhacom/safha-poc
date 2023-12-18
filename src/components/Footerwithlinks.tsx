import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      description:
        "Learn more about our story, mission, and the team behind the flavors.",
    },
    {
      title: "Menu",
      description: "Explore our dishes, seasonal specials, and drinks list.",
    },
    {
      title: "Reservations",
      description: "Book a table online for your next dining experience.",
    },
    {
      title: "Catering Services",
      description: "Discover our catering options for your events and parties.",
    },
    {
      title: "Careers",
      description: "Join our team! See available positions and apply.",
    },
    {
      title: "Contact",
      description: "Get in touch with us for feedback or inquiries.",
    },
    {
      title: "Privacy Policy",
      description:
        "Read about our privacy practices and your data protection rights.",
    },
    {
      title: "Terms of Service",
      description: "Understand the terms and conditions of using our services.",
    },
    { title: "FAQ", description: "Find answers to commonly asked questions." },
    {
      title: "Gift Cards",
      description: "Give the gift of a memorable meal with our gift cards.",
    },
    {
      title: "Press",
      description: "Check out the latest news and press releases.",
    },
    {
      title: "Blog",
      description: "Read our latest articles, recipes, and culinary tips.",
    },
  ];

  return (
    <footer className="bg-cream text-charcoal p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {footerLinks.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-4 border border-terracotta"
          >
            <h3 className="font-lato text-burgundy text-lg mb-2">
              {link.title}
            </h3>
            <p className="font-lato text-sm">{link.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-8">
        <FaFacebookF className="text-2xl cursor-pointer hover:text-burgundy" />
        <FaTwitter className="text-2xl cursor-pointer hover:text-burgundy" />
        <FaInstagram className="text-2xl cursor-pointer hover:text-burgundy" />
        <FaLinkedinIn className="text-2xl cursor-pointer hover:text-burgundy" />
      </div>
      <p className="text-center text-sm mt-6">
        {" "}
        {new Date().getFullYear()} Your Restaurant Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
