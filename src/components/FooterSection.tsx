import { motion } from 'framer-motion';
import React from 'react';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-spiky text-center text-floor py-8 font-ubuntu-mono"
    >
      <div className="container mx-auto">
        <p className="text-lg">
          © <span className="font-bold">{currentYear}</span> Younes Alturkey. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default FooterSection;