// components/HeroSection.tsx
import { motion } from "framer-motion"
import React from "react"

const HeroSection: React.FC = () => {
  const aiGeneratedText =
    "Indulge in the unmatched delight of our lusciously crafted warg enab. Each bite is a testament to our dedication to quality and flavor."

  const titleVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

  const descriptionVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        delay: 0.2,
        duration: 0.8,
      },
    },
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-green">
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="z-10 max-w-2xl mx-auto p-6">
        <motion.div
          className="mb-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={titleVariants}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-sugar font-silkscreen leading-tight">
            Enaba makes the best warg enab
          </h1>
        </motion.div>

        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={descriptionVariants}
          className="text-md md:text-lg text-sugar font-silkscreen"
        >
          {aiGeneratedText}
        </motion.p>
      </div>
    </section>
  )
}

export default HeroSection
