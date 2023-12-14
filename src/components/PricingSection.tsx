// components/PricingSection.tsx
import { motion } from "framer-motion"
import React from "react"

interface PricingCardProps {
  title: string
  price: number
  description: string
  currency: string
  itemsCount: number
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  currency,
  itemsCount,
}) => {
  return (
    <motion.div
      className="flex flex-col p-8 bg-green text-sugar border border-mint shadow-xl rounded-lg font-silkscreen transform transition duration-300 hover:-translate-y-2"
      whileHover={{ y: -10 }}
    >
      <h3 className="text-2xl mb-2">{title}</h3>
      <p className="text-xl font-bold mb-4">{`${itemsCount} for ${price} ${currency}`}</p>
      <p className="mb-6">{description}</p>
    </motion.div>
  )
}

const PricingSection: React.FC = () => {
  return (
    <motion.section
      id="pricing-section"
      className="bg-mint py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl mb-3 font-bold font-silkscreen"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Pricing
        </motion.h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <PricingCard
          title="Package Eater"
          price={99}
          currency="SR"
          itemsCount={24}
          description="A delightful teaser package to start your enab journey."
        />
        <PricingCard
          title="Package Humble"
          price={128}
          currency="SR"
          itemsCount={32}
          description="The perfect package for the modest enab aficionado."
        />
        <PricingCard
          title="Package Gluttonous"
          price={200}
          currency="SR"
          itemsCount={48}
          description="An extravagant spread for the ultimate enab indulgence."
        />
      </div>
    </motion.section>
  )
}

export default PricingSection
