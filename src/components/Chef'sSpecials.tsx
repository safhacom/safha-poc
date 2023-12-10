import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ChefSpecials: FC = () => {
  const specials = [
    {
      title: "Seasonal Sensations",
      description:
        "Our Seasonal Sensations feature the freshest ingredients the current season has to offer. We work closely with local farmers to bring you a farm-to-table experience that highlights the bounty of the season. From vibrant spring vegetables to hearty winter squashes, our chefs create dishes that are as nutritious as they are delicious. This season, be sure to try our Roasted Butternut Squash Risotto, garnished with toasted pine nuts and a sage-infused brown butter.",
      image: "/food.png",
    },
    {
      title: "Signature Seafood",
      description:
        "Dive into our Signature Seafood section, where the ocean's finest treasures are transformed into culinary masterpieces. Our seafood is sourced daily to ensure peak freshness and sustainability. The star of this section is our Seared Scallops on a bed of creamy leek fondue, topped with a delicate yuzu foam and caviar. For a heartier option, our Blackened Swordfish with mango salsa and coconut rice is a must-try.",
      image: "/food.png",
    },
    {
      title: "From the Grill",
      description:
        "The From the Grill section is a carnivore's dream, featuring premium cuts of meat cooked to perfection on our open flame grill. Our chefs have mastered the art of grilling to ensure each steak, chop, and fillet is seared outside while remaining tender and juicy inside. A highlight from this section is our 12 oz. Ribeye Steak, seasoned with our secret spice blend and served with truffle-infused mashed potatoes and grilled asparagus. Don't miss our Grilled Lamb Chops with a mint chimichurri and roasted root vegetables.",
      image: "/food.png",
    },
    {
      title: "Vegetarian Delights",
      description:
        "Our Vegetarian Delights section caters to those who prefer plant-based cuisine without compromising on flavor or creativity. Each dish is a colorful tapestry of textures and tastes, ensuring even the most discerning palate is satisfied. The Eggplant Involtini filled with herbed ricotta and topped with a rustic tomato sauce is a fan favorite. Another standout is the Quinoa-Stuffed Bell Peppers, bursting with a medley of vegetables and topped with a zesty avocado dressing.",
      image: "/food.png",
    },
    {
      title: "Global Inspirations",
      description:
        "Take a culinary journey with our Global Inspirations, a selection of dishes that pay homage to the rich tapestry of world cuisine. Our chefs draw on traditional recipes and local flavors from around the globe, then add a contemporary twist. Experience the bold flavors of our Moroccan Tagine, a slow-cooked stew with tender lamb, apricots, and almonds, served over fluffy couscous. Or, savor the complexity of our Thai Green Curry with its perfect balance of spicy, sweet, and savory notes, accompanied by jasmine rice.",
      image: "/food.png",
    },
    {
      title: "Decadent Desserts",
      description:
        "No meal is complete without a visit to our Decadent Desserts section. Our pastry chefs craft each dessert with precision and artistry, using only the finest ingredients. Indulge in our Chocolate Lava Cake with its molten center and a side of house-made vanilla bean ice cream. For something lighter, our Lemon Tart with a br�l�ed meringue topping and raspberry coulis is a refreshing end to any meal. Seasonal fruit crumbles and artisan cheese platters are also available for those who prefer a less sweet finish.",
      image: "/food.png",
    },
  ];

  return (
    <section className="bg-creamy-white text-charcoal-gray py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-warm-red mb-3">
            Chef\'s Specials
          </h2>
          <p className="text-lg">
            Discover our exclusive dishes crafted with the finest seasonal
            ingredients and culinary expertise.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specials.map((special, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-creamy-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={special.image}
                alt={special.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-warm-red mb-2">
                  {special.title}
                </h3>
                <p className="text-sm">{special.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefSpecials;
