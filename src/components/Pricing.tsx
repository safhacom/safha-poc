// PricingSection.tsx
import { motion } from "framer-motion";
import React from "react";

const pricingPlans = [
  {
    title: "Basic",
    price: "$19",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    recommended: false,
  },
  {
    title: "Pro",
    price: "$49",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    recommended: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: ["All Pro features", "Advanced features", "24/7 Support"],
    recommended: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-ECEFF1 text-212121 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Subscription Plans
        </h2>
        <p className="text-center mb-12">
          Detailed information on various subscription plans, including features
          and limitations of each tier.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md bg-white ${
                plan.recommended ? "border-2 border-0D47A1" : ""
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index }}
            >
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  plan.recommended ? "text-0D47A1" : ""
                }`}
              >
                {plan.title}
              </h3>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded text-white ${
                  plan.recommended ? "bg-0D47A1" : "bg-FFC107"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
