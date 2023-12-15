// components/AboutSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"

const AboutSection: React.FC = () => {
  // Animation variants for framer-motion
  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  }

  const childVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.section
      id="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariant}
      className="py-16 bg-white text-center"
    >
      <motion.h2
        variants={childVariant}
        className="text-4xl font-rubik_bubbles text-purple mb-6"
      >
        A gym game like no other
      </motion.h2>
      <motion.p
        variants={childVariant}
        className="text-xl text-pinky mb-8 mx-auto max-w-3xl"
      >
        {/* Placeholder for marketing text about game gym */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </motion.p>
      <div className="flex flex-wrap justify-center gap-8">
        {[1, 2, 3, 4].map((gameNumber) => (
          <motion.div
            key={`game-${gameNumber}`}
            variants={childVariant}
            whileHover={{ scale: 1.05 }}
            className="w-full sm:w-1/2 lg:w-1/4 p-4 border-2 border-purple rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out"
          >
            {/* Placeholder for AI-generated images of the games */}
            <Image
              src={`/game${gameNumber}.png`}
              alt={`Game ${gameNumber}`}
              className="w-full"
              width={300}
              height={180}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default AboutSection
