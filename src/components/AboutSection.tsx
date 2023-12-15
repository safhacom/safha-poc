// components/AboutSection.tsx
import { motion } from "framer-motion"

// Placeholder product images. Replace src with your actual image URLs/paths.
const productImages = [
  "/abaya2.png",
  "/abaya1.png",
  "/abaya2.png",
  "/abaya1.png",
]

// Generate AI placeholder text
const description = `Experience the tradition and beauty of Abayas tailored for the modern world. Each piece is a blend of elegance, comfort, and style that takes your wardrobe to new heights.`

const ProductCard: React.FC<{ title: string; imageUrl: string }> = ({
  title,
  imageUrl,
}) => {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center bg-ink text-white p-4 rounded-lg shadow-lg transform transition-transform hover:shadow-2xl"
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <img
        src={imageUrl}
        alt={title}
        className="h- w-full object-cover object-center"
      />
    </motion.div>
  )
}

const AboutSection: React.FC = () => {
  return (
    <motion.section
      id="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-ink text-white py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-pacifico text-center mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Abaya like no other
        </motion.h2>
        <motion.p
          className="text-center mb-12 max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productImages.map((imageUrl, index) => (
            <ProductCard
              key={index}
              title={`Abaya Product ${index + 1}`}
              imageUrl={imageUrl}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection
