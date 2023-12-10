// components/PricingSection.tsx
import { motion } from "framer-motion"

type PricePackage = {
  name: string
  quantity: number
  price: number
  currency: string
}

const pricePackages: PricePackage[] = [
  { name: "Average", quantity: 6, price: 29.99, currency: "SAR" },
  { name: "Enhaler", quantity: 12, price: 49.99, currency: "SAR" },
  { name: "Gluttoneous", quantity: 24, price: 99.99, currency: "SAR" },
]

const PricingSection: React.FC = () => {
  return (
    <section id="pricing-section" className="py-20 bg-pinky">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricePackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 * index }}
              className="bg-white shadow-lg rounded-lg p-6 text-center border border-sun"
            >
              <h3 className="text-2xl font-silkscreen text-sky mb-4">
                {pkg.name}
              </h3>
              <p className="text-4xl font-bold font-silkscreen text-sky mb-2">
                {pkg.quantity} cupcakes
              </p>
              <p className="text-xl font-silkscreen text-sky">
                {pkg.price} {pkg.currency}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default PricingSection
