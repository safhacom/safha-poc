// components/Burger.tsx
import { motion } from "framer-motion"
import { useState } from "react"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const MenuToggle = ({ isOpen, toggle }: any) => (
  <button onClick={toggle} className="focus:outline-none z-30">
    {/* Burger Icon */}
    <div className={`${isOpen ? "hidden" : "block"}`}>
      {/* Burger icon bars */}
    </div>

    {/* Close Icon */}
    <div className={`${isOpen ? "block" : "hidden"}`}>
      {/* Close icon bars */}
    </div>
  </button>
)

const Burger = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.3 }}
        className={`absolute top-0 right-0 bottom-0 w-full bg-royal-blue p-6 sm:p-10 text-white`}
      >
        {/* Links */}
        <div className="h-full flex flex-col justify-center items-center space-y-6 text-2xl">
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#blog" onClick={toggleMenu}>
            Blog
          </a>
        </div>
      </motion.nav>
      <MenuToggle isOpen={isOpen} toggle={toggleMenu} />
    </>
  )
}

export default Burger
