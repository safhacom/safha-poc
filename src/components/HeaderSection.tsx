// components/HeaderSection.tsx
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const HeaderSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#about-section", title: "About" },
    { href: "#cupcakes-section", title: "Cupcakes" },
    { href: "#pricing-section", title: "Pricing" },
  ]

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault()
    const section = document.querySelector(href)
    section?.scrollIntoView({ behavior: "smooth", block: "start" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="flex flex-wrap items-center justify-between px-4 bg-pinky border-b border-white">
      <div className="flex items-center">
        {/* Logo Image */}
        <Image src="/cupcake.png" alt="Mamo Cupcakes" width={50} height={50} />
      </div>

      <nav>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={(event) => scrollToSection(event, link.href)}
              className="text-white font-silkscreen cursor-pointer"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </motion.div>
          </button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 left-0 w-full h-screen bg-pinky flex flex-col items-center justify-center"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.title}
                    href={link.href}
                    onClick={(event) => scrollToSection(event, link.href)}
                    className="text-white font-silkscreen cursor-pointer text-xl mb-6"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.title}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}

export default HeaderSection
