// components/FooterSection.tsx
import { motion } from "framer-motion"

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-sky py-10">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center font-silkscreen font-bold text-pinky"
      >
        &copy; {currentYear} Mamo Cupcakes
      </motion.div>
    </footer>
  )
}

export default FooterSection
