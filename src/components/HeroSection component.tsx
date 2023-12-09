// components/HeroSection.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen text-white">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          src="/ai-background.png" // Replace with your image path
          alt="Luxury Home"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-75"
        />
        <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm border border-f0f2f5" />
      </div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-2e4053">
            Building Dreams, Creating Legacies
          </h1>
          <p className="text-xl md:text-3xl my-4 text-5d6d7e">
            Your Journey to the Perfect Home Begins Here!
          </p>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="my-6"
          >
            <button className="bg-d4ac0d hover:bg-d4ac0d/90 text-white font-bold py-2 px-4 rounded-full">
              View Listings
            </button>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-5d6d7e">Scroll down</p>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
        >
          <svg
            className="w-6 h-6 mx-auto animate-bounce text-5d6d7e"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
