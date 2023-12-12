import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const GallerySection: FC = () => {
  const gallerySections = [
    {
      title: "Our Signature Dishes",
      description:
        "Explore the culinary masterpieces that have defined our reputation. Each dish is photographed to perfection, offering a visual feast that promises to tantalize your taste buds.",
      images: ["/food.png", "/food.png", "/food.png"],
    },
    {
      title: "Seasonal Menus",
      description:
        "Discover our spring delights, summer refreshers, autumn harvest, and cozy winter warmers. We take pride in adapting our offerings to what nature provides.",
      images: ["/food.png", "/food.png", "/food.png"],
    },
    {
      title: "Behind the Scenes",
      description:
        "Step into our kitchen and witness the magic that happens behind the scenes. Experience the passion and precision that go into every meal we serve.",
      images: ["/food.png", "/food.png", "/food.png"],
    },
    {
      title: "Ambiance and Decor",
      description:
        "Our restaurant is more than just a place to eat; it's an experience for all the senses. Browse through images of our tastefully decorated dining area.",
      images: ["/food.png", "/food.png", "/food.png"],
    },
    {
      title: "Private Events and Celebrations",
      description:
        "We are honored to be a part of your special moments. See how our space transforms to make your event unforgettable.",
      images: ["/food.png", "/food.png", "/food.png"],
    },
    {
      title: "Guest Experiences",
      description:
        "Our guests are the heart of our restaurant. See the smiles, the toasts, the savoring of every bite.",
      images: ["/food.png", "/food.png", "/food.png"],
    },
  ];

  return (
    <div className="bg-[#FFF8F0] py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-[#C59A77] text-4xl font-ubuntu-mono text-center mb-10">
          Gallery
        </h2>
        {gallerySections.map((section, idx) => (
          <div key={idx} className="mb-16">
            <motion.h3
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="text-[#273D2F] text-2xl font-ubuntu-mono mb-6"
            >
              {section.title}
            </motion.h3>
            <p className="text-[#273D2F] mb-6">{section.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {section.images.map((image, imageIdx) => (
                <motion.div
                  key={imageIdx}
                  className="overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={image}
                    alt={`${section.title} image ${imageIdx + 1}`}
                    width={300}
                    height={200}
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default GallerySection;
