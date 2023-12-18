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
          src="/bg_res.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Restaurant Background"
          className="opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cream opacity-60" />
      </motion.div>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="z-10 text-4xl md:text-6xl font-serif text-burgundy shadow-lg"
      >
        To provide a memorable dining experience with passionately prepared
        cuisine, a welcoming atmosphere, and impeccable service.
      </motion.h1>
    </div>
  );
};

export default Hero;
