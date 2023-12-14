// HeaderSection.tsx
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { motion } from "framer-motion"
import Image from "next/image"
import { FC, useState } from "react"

const HeaderSection: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      className="w-full bg-green text-sugar fixed top-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Image
          src="/enaba-logo.png"
          alt="Enaba Store"
          width={60}
          height={60}
          priority
        />

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li
              className="font-silkscreen cursor-pointer"
              onClick={() => handleScrollToSection("about-section")}
            >
              About
            </li>
            <li
              className="font-silkscreen cursor-pointer"
              onClick={() => handleScrollToSection("enabas-section")}
            >
              Enabas
            </li>
            <li
              className="font-silkscreen cursor-pointer"
              onClick={() => handleScrollToSection("pricing-section")}
            >
              Pricing
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <XIcon className="w-8 h-8 text-sugar" />
            ) : (
              <MenuIcon className="w-8 h-8 text-sugar" />
            )}
          </button>
        </div>
      </div>

      <motion.div
        className={`absolute inset-0 bg-green p-8 w-full h-screen z-50 flex flex-col items-center justify-center md:hidden ${
          isMobileMenuOpen ? "flex" : "hidden"
        }`}
        initial={{ y: "-100%" }}
        animate={{ y: isMobileMenuOpen ? 0 : "-100%" }}
      >
        <ul>
          <li
            className="font-silkscreen text-2xl my-4 cursor-pointer"
            onClick={() => handleScrollToSection("about-section")}
          >
            About
          </li>
          <li
            className="font-silkscreen text-2xl my-4 cursor-pointer"
            onClick={() => handleScrollToSection("enabas-section")}
          >
            Enabas
          </li>
          <li
            className="font-silkscreen text-2xl my-4 cursor-pointer"
            onClick={() => handleScrollToSection("pricing-section")}
          >
            Pricing
          </li>
        </ul>
      </motion.div>
    </motion.header>
  )
}

export default HeaderSection
