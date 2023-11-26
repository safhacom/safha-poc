// components/HeroSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white h-screen flex flex-col justify-between">
      <header className="flex justify-between items-center px-6 py-4">
        <div className="logo">
          <Image src="/icon.png" alt="Logo" width={50} height={50} />
        </div>
        <div className="menu-icon -mr-2">
          {/* Placeholder for menu icon */}
          <div className="w-8 h-8 bg-gray-500 rounded"></div>
        </div>
      </header>

      <div className="px-10 md:px-20 lg:px-40">
        <h1 className="text-6xl font-bold">
          DIGITAL DESIGNER <br />& ART DIRECTOR.
        </h1>
        <p className="text-xl mt-4 mb-8">BASED IN WARSAW, POLAND - UTC/GMT+2</p>
      </div>

      <div className="flex items-center justify-end px-10 md:px-20 lg:px-40 space-x-6 mb-16">
        <div className="bg-gray-700 p-4 rounded-lg shadow-xl">
          <p className="text-lg">Hi, I'm Stefan</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-xl">
          <p className="text-lg">12 Years of experience</p>
          <p className="text-lg">100% Satisfied clients</p>
        </div>
        <motion.div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-lg">
          <Image
            src="/person.png"
            alt="Stefan"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>

      <div className="flex justify-between px-10 md:px-20 lg:px-40 mb-8">
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded transition-all">
          Human-centered
        </button>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded transition-all">
          Interactive
        </button>
      </div>
    </section>
  )
}

export default HeroSection
