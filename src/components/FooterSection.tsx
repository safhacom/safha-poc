// components/FooterSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-royalblue text-peach font-ubuntu-mono">
      <div className="container mx-auto p-5">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center md:text-left mb-4 md:mb-0">
            © {currentYear} All rights reserved.
          </p>
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/icon.png" alt="Logo" width={50} height={50} />
          </motion.div>
          <p className="text-center md:text-right">Safha Golden Website</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default FooterSection
