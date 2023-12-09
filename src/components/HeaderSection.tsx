import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

const HeaderSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 0.8 } })
  }, [controls])

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault()
    const section = document.querySelector(sectionId)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false) // Close mobile menu after click
      }
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={controls}
      className="flex flex-wrap items-center justify-between px-4 py-3 bg-spiky text-floor font-ubuntu-mono relative border-b border-floor"
    >
      <nav className="w-full md:flex md:justify-between md:items-center">
        {/* Logo */}
        <div className="flex-1 md:flex md:justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-xl font-bold cursor-pointer"
          >
            <a
              href="/"
              onClick={(event) => scrollToSection(event, "#header-section")}
            >
              Younes Alturkey
            </a>
          </motion.h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          {["About", "Projects", "Services", "Pricing"].map((item, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
              onClick={(event) =>
                scrollToSection(event, `#${item.toLowerCase()}-section`)
              }
              href={`#${item.toLowerCase()}-section`}
              className="cursor-pointer hover:underline px-2 py-1 transition-all duration-300"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-full left-0 right-0 bg-spiky z-10 md:hidden"
          >
            <div className="px-4 py-2">
              {["About", "Projects", "Services", "Pricing"].map(
                (item, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1 },
                    }}
                    onClick={(event) =>
                      scrollToSection(event, `#${item.toLowerCase()}-section`)
                    }
                    href={`#${item.toLowerCase()}-section`}
                    className="block cursor-pointer hover:underline px-2 py-1 transition-all duration-300"
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default HeaderSection
