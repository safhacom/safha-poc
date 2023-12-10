// components/HeroSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"

const HeroSection: React.FC = () => {
  // Using generated marketing text for Mamo Cupcakes
  const marketingText =
    "Indulge in the sweetness of Mamo's Cupcakes, where every bite is a heavenly delight! Our handcrafted cupcakes are made with love, bursting with rich flavors that will tantalize your taste buds. Perfect for any occasion or just a treat for yourself, Mamo's Cupcakes are sure to make your day a bit sweeter!"

  return (
    <section
      id="hero-section"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/cakes.png"
        alt="Cupcakes Background"
        layout="fill"
        objectFit="cover"
        priority={true}
        className="-z-20"
      />

      <div className="w-full h-full absolute top-0 bg-pinky opacity-30 -z-10" />

      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4 z-50">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-silkscreen text-white mb-6"
        >
          Mamo Cupcakes
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="font-silkscreen text-white md:max-w-3xl mx-auto mb-8"
        >
          {marketingText}
        </motion.p>

        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="rounded-full bg-white py-2 px-6 text-pinky font-bold font-silkscreen shadow-lg hover:shadow-pinky/50 transition-all"
        >
          Contact Us
        </motion.button>
      </div>
    </section>
  )
}

export default HeroSection
