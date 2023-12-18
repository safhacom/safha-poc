import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const GalleryItem = ({ title, description, imgSrc }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
  >
    <Image
      src={imgSrc}
      alt={title}
      width={500}
      height={300}
      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-darkcharcoal bg-opacity-60 flex items-center justify-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
      <div className="text-center">
        <p className="text-xl font-semibold text-cream">{title}</p>
        <p className="text-md text-cream">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Gallery = () => {
  const galleryItems = [
    {
      title: "Interior Ambiance",
      description:
        "A glimpse into the cozy and inviting atmosphere of our dining space.",
      imgSrc: "/food.png",
    },
    {
      title: "Signature Dishes",
      description:
        "A showcase of our chef's culinary masterpieces that define our menu.",
      imgSrc: "/food.png",
    },
    {
      title: "Fresh Ingredients",
      description:
        "Images of fresh, locally-sourced produce that we use in our kitchen.",
      imgSrc: "/food.png",
    },
    {
      title: "Private Events",
      description:
        "A look at the elegant setups for private parties and gatherings.",
      imgSrc: "/food.png",
    },
    {
      title: "Seasonal Specials",
      description:
        "A preview of our seasonal menu items that keep our offerings exciting.",
      imgSrc: "/food.png",
    },
    {
      title: "Our Team",
      description:
        "Meet the passionate individuals behind our exceptional service.",
      imgSrc: "/food.png",
    },
  ];

  return (
    <section className="py-12 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
