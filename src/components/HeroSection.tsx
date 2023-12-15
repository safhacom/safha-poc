// components/HeroSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"

const HeroSection: React.FC = () => {
  // Background and text animation variants for framer-motion
  const backgroundVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  }

  const textVariant = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 1 } },
  }

  return (
    <motion.section
      initial="initial"
      animate="animate"
      className="relative h-screen flex items-center justify-center"
    >
      <motion.div
        variants={backgroundVariant}
        className="absolute inset-0 bg-cover bg-center z-0"
      >
        {/* Placeholder for AI generated full width background image */}
        <Image
          src="/uxuidesign.png"
          alt="Game Gym Background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-purple bg-opacity-30"></div>
      </motion.div>

      <motion.h2
        variants={textVariant}
        className="z-10 text-white font-rubik_bubbles text-4xl md:text-6xl lg:text-8xl text-center"
      >
        Welcome to Game Gym
      </motion.h2>
    </motion.section>
  )
}

export default HeroSection
