import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

const services = [
  {
    title: "Residential Property Sales",
    description:
      "Our team of experienced real estate professionals offers comprehensive services in the sale of residential properties. We provide market analysis, property valuation, and tailored marketing strategies to ensure your home is presented to the right audience. We handle all aspects of the sales process, from listing to closing, ensuring a smooth and successful transaction. Our goal is to achieve the best possible outcome for our clients, whether they are selling a cozy apartment, a family home, or a luxurious estate.",
    icon: "/icon.png", // Replace with actual path to icon
  },
  // ... other services
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

const ServicesOffered: FC = () => {
  return (
    <motion.section
      className="bg-white text-2E4053"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h2 className="text-3xl font-bold mb-6" variants={itemVariants}>
          Comprehensive Real Estate Solutions Tailored for You
        </motion.h2>
        <motion.p className="text-lg mb-12" variants={itemVariants}>
          Our commitment to providing exceptional services ensures that your
          journey to the perfect home is seamless and successful.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-AED6F1 p-6 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
              </div>
              <p className="text-md mb-6">{service.description}</p>
              <button className="bg-D4AC0D text-white py-2 px-4 rounded hover:bg-D4AC0D-darker transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesOffered;
