import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

const FeaturedProperties: FC = () => {
  const properties = [
    {
      title: "Luxury Estates",
      description:
        "Discover the epitome of elegance and sophistication with our Luxury Estates collection. Each property in this exclusive selection has been meticulously chosen for its unparalleled craftsmanship, breathtaking architecture, and extraordinary attention to detail...",
      imageUrl: "/nuqtah.png", // Replace with your image path
    },
    {
      title: "Urban Condominiums",
      description:
        "Embrace the vibrant city life with our Urban Condominiums. Located in the most sought-after neighborhoods, these modern residences provide convenience and style...",
      imageUrl: "/nuqtah.png", // Replace with your image path
    },
    {
      title: "Coastal Retreats",
      description:
        "Experience the serenity of the shore with our Coastal Retreats. These properties are nestled along pristine beaches and boast stunning oceanfront views...",
      imageUrl: "/nuqtah.png", // Replace with your image path
    },
    // ... Add other properties here
  ];

  return (
    <section className="py-12 bg-f0f2f5">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
          }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-2e4053 mb-3">
            Featured Properties
          </h2>
          <p className="text-5d6d7e">
            Explore our exclusive selection of properties that offer luxury,
            comfort, and style.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.1 * index },
                },
              }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative h-56">
                <Image
                  src={property.imageUrl}
                  alt={property.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl text-2e4053 font-semibold mb-2">
                  {property.title}
                </h3>
                <p className="text-5d6d7e text-sm">{property.description}</p>
                <button className="mt-4 bg-1abc9c text-white py-2 px-4 rounded hover:bg-1a9c8f transition duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
