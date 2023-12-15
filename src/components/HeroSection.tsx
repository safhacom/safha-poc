// components/HeroSection.tsx
import { motion } from "framer-motion"

const HeroSection: React.FC = () => {
  // Customize this marketing text accordingly.
  const heroText =
    "Discover the elegance and sophistication of Abaya Express, where tradition elegantly meets modern style."

  return (
    <motion.section
      id="hero-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white text-fem font-pacifico text-center py-24 px-4 mt-8"
      transition={{ duration: 1 }}
    >
      <motion.div
        className="mx-auto max-w-4xl"
        initial={{ y: "30px", opacity: 0 }}
        animate={{ y: "0px", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-5xl md:text-6xl">{heroText}</h1>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection
