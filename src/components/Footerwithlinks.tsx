import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {
  const footerLinks = [
    { title: 'About Us', description: 'Learn more about our story, mission, and team.', image: 'AboutUs_Footer.png' },
    { title: 'Menu', description: 'Explore our dishes and flavors.', image: 'Menu_Footer.png' },
    { title: 'Reservations', description: 'Book a table online.', image: 'Reservations_Footer.png' },
    { title: 'Careers', description: 'Join our team.', image: 'Careers_Footer.png' },
    { title: 'Contact', description: 'Get in touch with us.', image: 'Contact_Footer.png' },
    { title: 'Privacy Policy', description: 'Understand our data use and privacy guidelines.', image: 'PrivacyPolicy_Footer.png' },
    { title: 'Terms of Service', description: 'Review the terms of dining and service.', image: 'TermsOfService_Footer.png' }
  ];

  return (
    <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="footer-container">
      {footerLinks.map((link, index) => (
        <div key={index} className="footer-column">
          <motion.div whileHover={{ scale: 1.05 }} className="footer-card">
            <h3 className="footer-title">{link.title}</h3>
            <p className="footer-description">{link.description}</p>
            <div className="mt-4">
              <Image src={`/${link.image}`} alt={link.title} width={100} height={100} />
            </div>
          </motion.div>
        </div>
      ))}
    </motion.footer>
  );
};

export default Footer;