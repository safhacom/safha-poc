import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const SpecialOffers: React.FC = () => {
  const offers = [
    {
      title: "Happy Hour",
      description:
        "Enjoy 50% off on select cocktails and appetizers every weekday from 4-6 PM.",
      image: "/food.png",
    },
    {
      title: "Weekend Brunch Special",
      description:
        "Savor our exclusive brunch menu with a complimentary mimosa or bloody mary from 10 AM to 2 PM.",
      image: "/food.png",
    },
    {
      title: "Birthday Deal",
      description:
        "Celebrate with us! Get a free dessert on your birthday when you dine in with four or more guests.",
      image: "/food.png",
    },
    {
      title: "Early Bird Dinner",
      description:
        "Dine before 6 PM and get a 20% discount on your total bill from Monday to Thursday.",
      image: "/food.png",
    },
    {
      title: "Loyalty Program",
      description:
        "Join our loyalty program and earn points for every dollar spent to redeem for meals and merchandise.",
      image: "/food.png",
    },
    {
      title: "Seasonal Specials",
      description:
        "Try our new seasonal dishes crafted with the freshest ingredients. Available for a limited time.",
      image: "/food.png",
    },
  ];

  return (
    <section className="bg-cream text-charcoal p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center"
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={500}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-terracotta mb-2">
                  {offer.title}
                </h3>
                <p className="text-sm">{offer.description}</p>
                <button className="mt-4 bg-terracotta text-white py-2 px-4 rounded hover:bg-terracotta-dark transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
