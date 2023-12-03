// components/HeroSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

const backgroundVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.5 } },
}

const textVariant = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 1 } },
}

const HeroSection: React.FC = () => {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={backgroundVariant}
      className="relative w-full min-h-[75vh] bg-black"
    >
      <Image
        src="/utopia.png" // Replace with the path to your AI-generated background image
        alt="AI-generated abstract background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          variants={textVariant}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Safha: Makes running a business easier than having a job
        </motion.h1>
        <motion.p
          variants={textVariant}
          className="text-lg md:text-2xl text-royalblue-700 mt-4"
        >
          The SaaS product envisioned here is designed to streamline and
          simplify business operations to the point where managing a business
          feels less demanding than being an employee.
        </motion.p>
      </div>
    </motion.section>
  )
}

export default HeroSection
