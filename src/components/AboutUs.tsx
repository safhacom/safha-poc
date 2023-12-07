// AboutUs.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const aboutUsData = [
  {
    title: "Our Mission",
    description:
      "To innovate and deliver cutting-edge technology solutions that transform the digital landscape and drive progress in the global market.",
  },
  {
    title: "Our Vision",
    description:
      "To be the world's most trusted partner in the realm of technology by consistently exceeding our clients' expectations and fostering an environment of growth and excellence.",
  },
  {
    title: "Our History",
    description:
      "Founded in 2010, we have a decade-long track record of pioneering software development and setting new standards in the tech industry.",
  },
  // ... Add the rest of the aboutUsData items here
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

const AboutUs: React.FC = () => {
  return (
    <section className="bg-ECEFF1 text-212121">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <Image
              src="/about.png" // Replace with your image path
              alt="About Us"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div className="space-y-6" variants={itemVariants}>
            {aboutUsData.map((item, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-0D47A1">{item.title}</h2>
                <p className="text-base text-212121">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
