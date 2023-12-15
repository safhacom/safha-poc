// components/AbayasSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"

// Placeholder for Abaya descriptions
const abayaDescriptions = new Map<string, string>([
  [
    "Unlocked",
    "Discover the freedom of expression with our 'Unlocked' collection — a range where tradition and modern fashion sense meet.",
  ],
  [
    "Pervy",
    "Feel elegant with our 'Pervy' series, designed to add a hint of playfulness to your wardrobe.",
  ],
  [
    "Open",
    "Embrace versatility with the 'Open' line, curated for the modern woman who loves to mix, match, and accessorize.",
  ],
  [
    "Closed",
    "Our 'Closed' series reflects classic beauty and grace, a stunning staple for any occasion.",
  ],
  [
    "Auto",
    "Automation meets style in the 'Auto' collection, showcasing ease of wear and time-saving designs.",
  ],
  [
    "Wized",
    "Be wise in choosing comfort without compromising on style with our 'Wized' range, perfect for everyday elegance.",
  ],
])

const AbayaCard: React.FC<{ title: string; i: number }> = ({ title, i }) => {
  const imageUrl = `/abaya-${i + 1}.png` // Placeholder image path
  const description =
    abayaDescriptions.get(title) || "No description available."

  return (
    <motion.div
      className="bg-fem text-ink p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.03 }}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <h3 className="text-2xl font-pacifico mb-4">{title}</h3>
      <p className="mb-4">{description}</p>
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={400}
        layout="responsive"
        className="rounded-md"
      />
    </motion.div>
  )
}

const AbayasSection: React.FC = () => {
  return (
    <motion.section
      id="abayas-section"
      className="py-16 bg-ink"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
          {Array.from(abayaDescriptions.keys()).map((title, i) => (
            <AbayaCard key={title} title={title} i={i} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default AbayasSection
