// components/HeaderSection.tsx
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const HeaderSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { name: "About", section: "about-section" },
    { name: "Abayas", section: "abayas-section" },
    { name: "Company", section: "company-section" },
  ]

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-ink text-white z-50"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between items-center p-5 max-w-screen-xl mx-auto">
        <div className="flex-grow flex justify-center">
          <Image
            src="/icon.png"
            alt="Abaya Express Logo"
            width={60}
            height={60}
          />
        </div>

        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              onClick={() => scrollToSection(item.section)}
              className="cursor-pointer hover:text-fem transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <MenuIcon
            className="w-8 h-8 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-ink p-5 flex flex-col items-center justify-center"
              style={{ zIndex: 1000 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <XIcon
                className="w-8 h-8 mb-8 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className="cursor-pointer text-white text-xl mb-5"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default HeaderSection
