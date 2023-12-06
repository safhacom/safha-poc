// components/FooterSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

const FooterSection: React.FC = () => {
  // Handles the Contact Us link click event, if needed.
  const handleContactUs = () => {
    // Implement your contact us logic here
  }

  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="w-full bg-royalblue-500 text-white py-8"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        <div className="mb-4 lg:mb-0">
          {/* Replace "/logo.png" with the actual path to your logo image */}
          <Image src="/icon.png" alt="Logo" width={100} height={50} />
        </div>
        <div className="text-center mb-4 lg:mb-0">
          <p>© {currentYear} All rights reserved</p>
        </div>
        <div className="text-center">
          <button onClick={handleContactUs} className="font-medium">
            Contact us
          </button>
        </div>
      </div>
    </motion.footer>
  )
}

export default FooterSection
