import { motion } from "framer-motion"
import React from "react"

const PricingSection: React.FC = () => {
  const cardHover = {
    scale: 1.05,
    rotate: 5,
    transition: { type: "spring", stiffness: 300 },
  }

  interface PricingPackage {
    title: string
    price: string
    features: string[]
    cta: string // Call to action text
  }

  const pricingPackages: PricingPackage[] = [
    {
      title: "Startup",
      price: "$5,000/month",
      features: [
        "Web or mobile app",
        "Essential features",
        "Community support",
      ],
      cta: "Get Started",
    },
    {
      title: "Business",
      price: "$15,000/month",
      features: [
        "Full-stack system",
        "Advanced integrations",
        "Priority support",
      ],
      cta: "Get Started",
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: ["Tailored solutions", "Dedicated team", "24/7 support"],
      cta: "Contact Us",
    },
  ]

  return (
    <motion.section
      id="pricing-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16 bg-white font-ubuntu-mono"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl font-bold text-floor"
          >
            Pricing Packages
          </motion.h2>
        </div>
        <div className="flex flex-wrap -mx-2 justify-center">
          {pricingPackages.map((packageItem, index) => (
            <motion.div
              key={index}
              className="p-2 w-full md:w-1/3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={cardHover}
            >
              <div className="border spiky rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all p-6">
                <h3 className="text-2xl font-semibold text-floor mb-4">
                  {packageItem.title}
                </h3>
                <h4 className="text-xl text-floor mb-5">{packageItem.price}</h4>
                <ul className="list-disc mb-4 px-5 text-floor">
                  {packageItem.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <button className="mt-auto bg-spiky text-floor font-bold py-2 px-4 rounded hover:bg-floor hover:text-spiky transition-colors duration-300">
                  {packageItem.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default PricingSection
