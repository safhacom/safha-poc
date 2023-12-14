// components/AboutSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

const AboutSection: React.FC = () => {
  const aiGeneratedText =
    "Delve into the world of Enaba's unmatched selection of exquisite products, where every piece is crafted with the utmost attention to detail and an unwavering commitment to quality."

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.03,
    },
  }

  const textVariants = {
    offscreen: {
      y: 30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3,
      },
    },
  }

  return (
    <motion.div
      id="about-section"
      className="bg-sugar text-green py-16 px-4 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold font-silkscreen mb-6"
        variants={textVariants}
      >
        Hands down the best in town
      </motion.h2>
      <motion.p
        className="mb-10 font-silkscreen text-md md:text-lg"
        variants={textVariants}
      >
        {aiGeneratedText}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            className="border border-green shadow-lg hover:shadow-2xl transition-shadow duration-300"
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src={`/enaba${item}.png`}
              alt={`Enaba product ${item}`}
              width={500}
              height={500}
              className="object-cover w-full"
              objectFit="cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default AboutSection
