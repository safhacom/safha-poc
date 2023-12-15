// components/FooterSection.tsx
import { motion } from "framer-motion"

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-comfort text-white text-center p-4 text-sm font-pacifico"
    >
      <p>© {currentYear} Abaya Express. All rights reserved.</p>
    </motion.footer>
  )
}

export default FooterSection
