import { motion } from "framer-motion";
import Image from "next/image";

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
      "Indulge in our unlimited brunch buffet with a complimentary mimosa or bloody mary for $25, available Saturdays and Sundays from 9 AM to 2 PM.",
    image: "/food.png",
  },
  {
    title: "Birthday Deal",
    description:
      "Celebrate with us! Get a free dessert on your birthday when you dine in with a party of four or more.",
    image: "/food.png",
  },
  {
    title: "Loyalty Program",
    description:
      "Join our loyalty program and earn points for every dollar spent. Redeem points for discounts, free meals, and exclusive offers.",
    image: "/food.png",
  },
  {
    title: "Midweek Pizza Promo",
    description:
      "Buy one pizza, get the second one 50% off every Wednesday. Dine-in only.",
    image: "/food.png",
  },
  {
    title: "Family Feast",
    description:
      "Family-sized meals at a special price. Feed a family of four for just $40 on Mondays and Tuesdays.",
    image: "/food.png",
  },
];

const SpecialOffers = () => (
  <section className="py-12 bg-cream" id="special-offers">
    <div className="container mx-auto px-4">
      <h2 className="text-burgundy text-3xl font-bold mb-6">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <Image
              src={offer.image}
              alt={offer.title}
              className="card-image"
              width={500}
              height={200}
              layout="responsive"
            />
            <div className="p-4">
              <h3 className="card-title mb-2">{offer.title}</h3>
              <p className="card-description mb-4">{offer.description}</p>
              <button className="card-action">Learn More</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialOffers;
