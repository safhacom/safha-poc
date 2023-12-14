// components/FooterSection.tsx
import { motion } from "framer-motion"
import React from "react"

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="bg-green text-sugar font-silkscreen py-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          © {currentYear} Enaba Store
        </motion.p>
      </div>
    </motion.footer>
  )
}

export default FooterSection
