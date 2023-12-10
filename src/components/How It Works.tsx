import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

const HowItWorks: FC = () => {
  const steps = [
    {
      title: "Understanding the Market",
      description:
        "Our real estate experts begin by analyzing the current market trends, including pricing, demand, and supply in various neighborhoods...",
      icon: "/icon.png",
    },
    {
      title: "Property Valuation",
      description:
        "Determining the value of a property is a complex process that involves considering various factors such as location, condition...",
      icon: "/icon.png",
    },
    {
      title: "Listing and Marketing Your Property",
      description:
        "When it's time to sell, our company ensures your property stands out in the competitive real estate market...",
      icon: "/icon.png",
    },
    {
      title: "The Buying Process",
      description:
        "For those looking to purchase a property, we provide a step-by-step guide through the buying process...",
      icon: "/icon.png",
    },
    {
      title: "Legal and Paperwork Assistance",
      description:
        "Real estate transactions involve a significant amount of legal documentation and compliance with various regulations...",
      icon: "/icon.png",
    },
    {
      title: "Investment Opportunities",
      description:
        "For clients interested in real estate as an investment, we offer insights into the most lucrative opportunities in the market...",
      icon: "/icon.png",
    },
    {
      title: "Client Support and Communication",
      description:
        "We believe in maintaining open lines of communication with our clients throughout the entire real estate process...",
      icon: "/icon.png",
    },
    {
      title: "Closing and Post-Sale Services",
      description:
        "The final steps of a real estate transaction can be the most critical. We ensure a smooth closing process by coordinating with all parties involved...",
      icon: "/icon.png",
    },
  ];

  return (
    <section className="bg-white text-2E4053 py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-5D6D7E">
            Your Journey to the Perfect Home Begins Here!
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center items-start -mx-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-F0F2F5 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-5D6D7E">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
