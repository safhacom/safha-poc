import { motion } from "framer-motion"
import React from "react"

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="w-full bg-floor text-spiky font-ubuntu-mono"
    >
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center h-screen">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-center"
        >
          Younes The Engineer
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl mt-4 text-center max-w-2xl"
        >
          I'm a dynamic and versatile software engineer with a strong focus on
          the frontend. My skills span across the entire tech spectrum, from
          full-stack development to crafting powerful APIs.
        </motion.p>
      </div>
    </section>
  )
}

export default HeroSection
