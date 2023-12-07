// components/HeroSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  backgroundImage,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="absolute inset-0 z-0"
      >
        <Image
          src={backgroundImage}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </motion.div>
      <div className="relative z-10 p-4">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          {title}
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mt-4 text-lg md:text-xl text-gray-300"
        >
          {description}
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mt-8"
        >
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
