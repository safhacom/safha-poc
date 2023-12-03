// components/HeaderSection.tsx
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
]

const HeaderSection = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const router = useRouter()

  // Function to handle link click and scrolling behavior
  const handleNavLinkClick = (href: string) => {
    setIsNavOpen(false)
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      router.push(href, undefined, { shallow: true })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full bg-white/30 backdrop-blur fixed top-0 z-50 border-b border-royalblue-200"
      style={{ height: "100px" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
        <Link href="#">
          <p className="text-2xl font-bold text-royalblue-500 cursor-pointer">
            Safha Web
          </p>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavLinkClick(item.href)
                  }}
                  className="text-sm text-royalblue-500 hover:text-peach-500 cursor-pointer transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          {!isNavOpen ? (
            <MenuIcon
              className="w-8 h-8 text-royalblue-500"
              onClick={() => setIsNavOpen(true)}
            />
          ) : (
            <XIcon
              className="w-8 h-8 text-royalblue-500"
              onClick={() => setIsNavOpen(false)}
            />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isNavOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300 }}
        className="absolute top-0 right-0 bg-white w-full h-screen md:hidden"
      >
        <ul className="pt-24 space-y-6 pl-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavLinkClick(item.href)
                }}
                className="text-lg text-royalblue-500 hover:text-peach-500 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  )
}

export default HeaderSection
