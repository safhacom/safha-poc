import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      description:
        "Learn more about our story, mission, and the team behind the flavors.",
    },
    {
      title: "Menu",
      description: "Explore our dishes, seasonal specials, and drinks.",
    },
    {
      title: "Reservations",
      description: "Book a table online for your next dining experience.",
    },
    {
      title: "Catering Services",
      description: "Let us cater your next event with our signature dishes.",
    },
    {
      title: "Careers",
      description: "Join our team and start your culinary career.",
    },
    {
      title: "Contact Us",
      description:
        "Get in touch for inquiries, feedback, or just to say hello.",
    },
    {
      title: "Privacy Policy",
      description: "Understand how we handle your data and your rights.",
    },
    {
      title: "Terms of Service",
      description: "Read the terms and conditions of using our services.",
    },
  ];

  return (
    <footer className="bg-cream text-darkCharcoal p-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {footerLinks.map((link, index) => (
          <motion.div
            key={index}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
            className="bg-cream p-4 rounded-card shadow-card border border-terracotta"
          >
            <h4 className="font-bold">{link.title}</h4>
            <p className="text-sm">{link.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center space-x-4 mt-6">
        <FaFacebookF className="text-terracotta" />
        <FaTwitter className="text-terracotta" />
        <FaInstagram className="text-terracotta" />
      </div>
      <div className="text-center text-sm mt-4">
        {new Date().getFullYear()} Restaurant Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
