// components/BenefitsSection.tsx
import { motion } from "framer-motion";
import React from "react";

interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: "Increased Productivity",
    description:
      "Our cutting-edge tools and platforms streamline workflows, enabling your team to accomplish more in less time.",
  },
  {
    title: "Cost Efficiency",
    description:
      "Reduce operational costs with our automated solutions, minimizing the need for manual intervention and lowering expenses.",
  },
  {
    title: "Scalability",
    description:
      "Easily scale your business operations with our flexible technology that grows with your company's needs.",
  },
  // ... Add the rest of the benefits here
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-ECEFF1 text-212121">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={itemVariants}
          >
            Benefits
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold text-0D47A1 mb-3">
                  {benefit.title}
                </h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
