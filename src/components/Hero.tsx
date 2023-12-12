import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 h-[500px] w-full overflow-hidden"
      >
        <Image
          src="/bg_res.png"
          alt="Restaurant Signature Dish"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-[#F5F5F5] bg-opacity-30 backdrop-filter backdrop-blur-sm" />
      </motion.div>
      <div className="relative flex flex-col items-center justify-center h-[500px] px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#36454F]"
        >
          Savor the Symphony of Authentic Flavors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 text-xl md:text-2xl text-[#FD7E14]"
        >
          Where Every Meal is a Masterpiece
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 px-6 py-3 bg-[#E53E3E] text-white rounded-md shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Explore Our Menu
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
