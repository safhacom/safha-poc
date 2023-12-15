// components/FooterSection.tsx
import { motion } from "framer-motion"

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-purple text-center py-8"
    >
      <p className="text-white text-sm font-rubik_bubbles">
        © {currentYear} Game Gym. All rights reserved.
      </p>
    </motion.footer>
  )
}

export default FooterSection
