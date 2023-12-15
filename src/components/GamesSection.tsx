// components/GamesSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"

interface GameCardProps {
  title: string
  imageUrl: string // Replace with actual image URL type if fetching from an API or using an image import
}

// Placeholder game card component
const GameCard: React.FC<GameCardProps> = ({ title, imageUrl }) => {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.05 }}
      className="border-purple border-2 shadow-lg p-4 rounded-lg bg-white text-center cursor-pointer"
    >
      <h3 className="font-bold text-xl font-rubik_bubbles mb-4">{title}</h3>
      {/* Placeholder for AI-generated game images */}
      <Image
        src={imageUrl}
        alt={`Game: ${title}`}
        width={300}
        height={200}
        className="w-full"
      />
    </motion.div>
  )
}

const gameTitles = [
  { name: "Killa The Unbelieved", image: "/killa.png" },
  { name: "Jimmy The Boy", image: "/jimmy.png" },
  { name: "Joyer The Overlived", image: "/overlived.png" },
  { name: "Jinkins Kings Man", image: "/king.png" },
  { name: "Casper Belivion", image: "/casper.png" },
  { name: "Yup Ohh Yh", image: "/yup.png" },
  { name: "Zionist Devilous", image: "/zion.png" },
  { name: "Kutsama Kiznova", image: "/kutama.png" },
]

const GamesSection: React.FC = () => {
  return (
    <motion.section
      id="games-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16 bg-raw"
    >
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto px-4"
      >
        {gameTitles.map((title, index) => (
          <GameCard
            key={`game-${index}`}
            title={title.name}
            imageUrl={title.image} // Replace with actual image paths
          />
        ))}
      </motion.div>
    </motion.section>
  )
}

export default GamesSection
