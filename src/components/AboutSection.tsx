// components/AboutSection.tsx
import { motion } from "framer-motion"

const AboutSection: React.FC = () => {
  // Using generated uniqueness marketing text for Mamo Cupcakes
  const uniquenessMarketingText =
    "Mamo Cupcakes crafts each cupcake with a pinch of creativity and a dash of whimsy, creating confectionery masterpieces that are as unique as they are delicious. From the velvety textures to the inventive flavor combinations, every detail is meticulously perfected to offer an unforgettable culinary experience that stands out from the crowd."

  return (
    <section id="about-section" className="bg-white py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold font-silkscreen text-pinky mb-6">
          Cupcakes Like no other
        </h2>
        <p className="text-lg font-silkscreen text-pinky mx-auto max-w-2xl px-4">
          {uniquenessMarketingText}
        </p>
      </motion.div>
    </section>
  )
}

export default AboutSection
