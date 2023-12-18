import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-cream">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg_res.png" // Replace with actual image path
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-75"
          alt="Restaurant Background"
        />
        <div className="absolute inset-0 bg-gray-50 bg-opacity-10 backdrop-filter backdrop-blur-sm border border-gray-200" />
      </motion.div>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="z-10 text-4xl md:text-6xl font-semibold text-charcoal px-4 text-center border-2 border-terracotta py-2"
      >
        To provide a unique and memorable dining experience through exceptional
        service, exquisite cuisine, and a welcoming atmosphere that feels like
        home.
      </motion.h1>
    </div>
  );
};

export default Hero;

// TailwindCSS classes
// .bg-cream { --tw-bg-opacity: 1; background-color: rgba(248, 245, 241, var(--tw-bg-opacity)); }
// .text-charcoal { --tw-text-opacity: 1; color: rgba(71, 64, 68, var(--tw-text-opacity)); }
// .border-terracotta { --tw-border-opacity: 1; border-color: rgba(218, 164, 154, var(--tw-border-opacity)); }
