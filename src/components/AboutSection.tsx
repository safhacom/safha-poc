// components/AboutSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

const AboutSection: React.FC = () => {
  const textVariants = {
    offscreen: { opacity: 0, x: -100 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  }

  const imageVariants = {
    offscreen: { opacity: 0 },
    onscreen: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
  }

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 bg-royalblue-500"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={textVariants} className="space-y-4">
            <h2 className="text-3xl font-bold text-white">
              About Our Business
            </h2>
            <p className="text-lg text-white">
              We specialize in bringing innovative solutions to the market,
              streamlining business operations with state-of-the-art technology.
            </p>
          </motion.div>
          <motion.div
            variants={imageVariants}
            className="relative clip-parallelogram right-col bg-white"
          >
            <Image
              src="/compute.png" // Replace with the path to your AI-generated image
              alt="AI-generated abstract representation"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection
