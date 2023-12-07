// components/FeaturesSection.tsx
import { motion } from "framer-motion";
import React from "react";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Innovative Solutions",
    description:
      "Cutting-edge technology designed to address the unique challenges of modern businesses.",
  },
  // ... Add all other features here
  {
    title: "Continuous Updates",
    description:
      "Stay ahead of the curve with regular updates that incorporate the latest technological advancements.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-ECEFF1 text-212121 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-lg font-semibold text-0D47A1 mb-3">
        {feature.title}
      </h3>
      <p className="text-sm text-212121">{feature.description}</p>
    </motion.div>
  );
};

export default FeaturesSection;
