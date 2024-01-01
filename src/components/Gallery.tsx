import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    title: "Dining Ambiance",
    description: "A glimpse into our cozy and inviting dining space.",
    imagePath: "/DiningAmbiance_Gallery.png",
  },
  {
    title: "Signature Dishes",
    description: "A showcase of our chef's culinary masterpieces.",
    imagePath: "/SignatureDishes_Gallery.png",
  },
  {
    title: "Fresh Ingredients",
    description: "A peek at the fresh, locally-sourced ingredients we use.",
    imagePath: "/FreshIngredients_Gallery.png",
  },
  {
    title: "Beverage Selection",
    description: "A look at our selection of fine wines and crafted cocktails.",
    imagePath: "/BeverageSelection_Gallery.png",
  },
  {
    title: "Private Events",
    description: "Images of private parties and events hosted in our venue.",
    imagePath: "/PrivateEvents_Gallery.png",
  },
  {
    title: "Seasonal Specials",
    description:
      "A preview of our seasonal menu updates and limited-time offers.",
    imagePath: "/SeasonalSpecials_Gallery.png",
  },
];

const Gallery = () => (
  <div className="container mx-auto p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {galleryItems.map((item, index) => (
        <motion.div
          key={index}
          className="gallery-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Image
            src={item.imagePath}
            alt={item.title}
            className="gallery-image"
            width={400}
            height={200}
          />
          <div className="gallery-description">
            <h3 className="gallery-title">{item.title}</h3>
            <p className="gallery-text">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Gallery;
