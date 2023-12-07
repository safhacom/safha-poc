// ProductOverview.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Innovative Solutions",
    description:
      "Explore our cutting-edge products designed to transform your business operations and drive growth.",
  },
  // ... Add all other features here
  {
    title: "Sustainability",
    description:
      "Learn about our commitment to sustainability and how our products help reduce your company's environmental footprint.",
  },
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

const ProductOverview: React.FC = () => {
  return (
    <section className="bg-ECEFF1 text-212121">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold mb-6"
            variants={itemVariants}
          >
            Product Overview
          </motion.h2>
          <motion.p className="text-lg mb-12" variants={itemVariants}>
            Empowering the Future: Innovating a World Where Technology and
            Humanity Converge for a Brighter Tomorrow.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
                variants={itemVariants}
              >
                <h3 className="text-2xl text-0D47A1 font-bold mb-3">
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductOverview;
