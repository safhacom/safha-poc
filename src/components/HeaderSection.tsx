// components/HeaderSection.tsx
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { motion } from "framer-motion"
import { useState } from "react"

const HeaderSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full bg-purple text-raw shadow-lg font-rubik_bubbles"
    >
      <div className="flex justify-between items-center p-4 md:p-6">
        <div className="text-center">
          <img src="/game.png" alt="Game Gym Logo" width={60} height={40} />
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("about-section")}
            >
              About
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("games-section")}
            >
              Games
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("companies-section")}
            >
              Companies
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="outline-none focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-8 h-8" />
            ) : (
              <MenuIcon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="absolute top-0 left-0 w-full h-screen bg-purple flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ zIndex: 1000 }}
        >
          <ul>
            <li
              className="py-2 text-2xl cursor-pointer"
              onClick={() => scrollToSection("about-section")}
            >
              About
            </li>
            <li
              className="py-2 text-2xl cursor-pointer"
              onClick={() => scrollToSection("games-section")}
            >
              Games
            </li>
            <li
              className="py-2 text-2xl cursor-pointer"
              onClick={() => scrollToSection("companies-section")}
            >
              Companies
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}

export default HeaderSection
