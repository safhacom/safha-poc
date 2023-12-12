import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const menuHighlights = [
  {
    title: "Appetizers",
    description:
      "Begin your culinary journey with our exquisite appetizers. Our selection includes the freshest ingredients and bold flavors that prepare your palate for the main course. Try our signature Crispy Calamari, served with a tangy lemon aioli, or indulge in our Artisan Cheese Board, featuring a curated selection of fine cheeses, nuts, and fruit preserves. For something unique, our Stuffed Portobello Mushrooms, filled with herbed goat cheese and drizzled with balsamic reduction, are a must-try.",
    imageUrl: "/food.png",
  },
  {
    title: "Soups & Salads",
    description:
      "Our soups and salads are crafted to offer a light yet flavorful option for our guests. The Lobster Bisque is a creamy delight with chunks of succulent lobster, while the Seasonal Harvest Salad changes with the seasons, offering the freshest local produce, tossed in our homemade vinaigrette. Don't miss our Classic Caesar Salad, elevated with our house-made dressing, shaved Parmigiano-Reggiano, and rustic croutons.",
    imageUrl: "/food.png",
  },
  // ... other menu highlights
];

const MenuHighlights: FC = () => {
  return (
    <div className="bg-creamy-white py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-charcoal-gray mb-4">
            Menu Highlights
          </h2>
          <p className="text-charcoal-gray">
            Savor the Symphony of Authentic Flavors Where Every Meal is a
            Masterpiece
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuHighlights.map((item, index) => (
            <motion.div
              key={index}
              className="rounded overflow-hidden shadow-lg"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-warm-red mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal-gray">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuHighlights;
