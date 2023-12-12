import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center bg-[#FFF8F0]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg_res.png" // replace with your image path
          layout="fill"
          objectFit="cover"
          quality={100}
          className="filter brightness-50"
          alt="hi"
        />
        <div className="absolute inset-0 bg-[#273D2F] opacity-50"></div>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="z-10 p-4 backdrop-filter backdrop-blur-sm border border-gray-200 rounded-lg"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#C59A77] mb-6">
          To provide an unforgettable dining experience that delights the
          senses, fosters connections, and celebrates the diversity of flavors
          from around the world.
        </h1>
        <a
          href="#menu"
          className="inline-block px-6 py-3 text-lg font-medium bg-[#DAA49A] text-white rounded-md shadow-md hover:bg-[#C59A77] focus:outline-none focus:ring-2 focus:ring-[#DAA49A] focus:ring-opacity-50 transition duration-300"
        >
          Discover Our Menu
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
