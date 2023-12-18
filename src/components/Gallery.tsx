import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    title: "Dining Ambiance",
    description:
      "Explore the elegant dining space that sets the mood for a memorable culinary experience.",
    imageUrl: "/food.png",
  },
  {
    title: "Signature Dishes",
    description:
      "A visual feast of our chef's masterpieces, crafted with the finest ingredients.",
    imageUrl: "/food.png",
  },
  {
    title: "Private Events",
    description:
      "View our exclusive areas perfect for private parties, business meetings, and special celebrations.",
    imageUrl: "/food.png",
  },
  {
    title: "Seasonal Specials",
    description:
      "Get a glimpse of the seasonal delicacies and limited-time offerings that keep our menu fresh and exciting.",
    imageUrl: "/food.png",
  },
  {
    title: "Behind the Scenes",
    description:
      "Take a sneak peek into our kitchen where the magic happens, showcasing our chefs' passion and expertise.",
    imageUrl: "/food.png",
  },
  {
    title: "Customer Moments",
    description:
      "Cherished moments of our guests enjoying their time at our restaurant.",
    imageUrl: "/food.png",
  },
];

const Gallery = () => {
  return (
    <div className="bg-cream p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="group rounded-card overflow-hidden shadow-card border-2 border-terracotta relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-charcoal to-transparent">
                <h3 className="text-burgundy font-lato text-lg">
                  {item.title}
                </h3>
                <p className="text-charcoal font-lato text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
