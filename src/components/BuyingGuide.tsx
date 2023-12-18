import { motion } from "framer-motion";
import { FC } from "react";

const BuyingGuide: FC = () => {
  return (
    <section className="bg-F0F2F5 text-2E4053 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Your Comprehensive Guide to Buying Your Dream Home
          </h2>
          <p className="mb-8">
            Unlock the secrets to navigating the real estate market with our
            expert buying guide. From understanding the market to closing the
            deal, we're here to help you every step of the way.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
              <p className="text-sm text-5D6D7E mb-4">{section.description}</p>
              <button className="text-D4AC0D">Read More</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const guideSections = [
  {
    title: "Understanding the Market",
    description:
      "Before diving into the real estate market, it's crucial to understand current trends, average prices, and the economic factors influencing the market. This section will provide you with a comprehensive overview of the market conditions, including historical data and future projections, to help you make an informed decision.",
  },
  // ... other sections
];

export default BuyingGuide;
