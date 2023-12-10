// components/CupCakesSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"

type Cupcake = {
  name: string
  description: string
  imageName: string // Ensure you have corresponding images in your `public/cupcakes/` directory
}

const cupcakes: Cupcake[] = [
  {
    name: "Long Jacky",
    description: "Sugar glazed goodness",
    imageName: "/long-jacky.png",
  },
  {
    name: "Short Bob",
    description: "Vanilla sunflower greatness",
    imageName: "/short-bob.png",
  },
  {
    name: "Uncle Maria",
    description: "Invert your taste with sugary and salty",
    imageName: "/uncle-maria.png",
  },
  {
    name: "Mother Terza",
    description: "The earth taste of greatness",
    imageName: "/mother-terza.png",
  },
  {
    name: "Hobby",
    description: "For those with energy",
    imageName: "/hobby.png",
  },
  {
    name: "Hampilton",
    description: "For those of us that love to build",
    imageName: "/Hampilton.png",
  },
]

const CupCakesSection: React.FC = () => {
  return (
    <section id="cupcakes-section" className="py-20 bg-sun">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cupcakes.map((cupcake, index) => (
            <motion.div
              key={cupcake.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-sky shadow-lg rounded-lg p-6 text-center"
            >
              <Image
                src={cupcake.imageName}
                alt={cupcake.name}
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h3 className="text-2xl font-silkscreen text-pinky mt-4 mb-2">
                {cupcake.name}
              </h3>
              <p className="text-white font-silkscreen">
                {cupcake.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default CupCakesSection
