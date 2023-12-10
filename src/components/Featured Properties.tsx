import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PropertyCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PropertyCard: FC<PropertyCardProps> = ({
  title,
  description,
  imageUrl,
}) => (
  <motion.div
    className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Image
      src={imageUrl}
      alt={title}
      className="rounded-t-lg"
      width={300}
      height={200}
      objectFit="cover"
    />
    <h3 className="text-2xl text-2E4053 font-bold mt-2">{title}</h3>
    <p className="text-5D6D7E">{description}</p>
    <button className="mt-4 bg-1ABC9C text-white py-2 px-4 rounded hover:bg-1ABC9C-dark">
      More Details
    </button>
  </motion.div>
);

const FeaturedProperties: FC = () => {
  const properties = [
    {
      title: "Luxury Estates",
      description:
        "Discover the epitome of elegance and sophistication with our Luxury Estates collection. Each property in this exclusive selection has been meticulously curated to offer the finest in luxury living.",
      imageUrl: "/tawaklana.png",
    },
    // ... other properties
  ];

  return (
    <section className="py-12 bg-F0F2F5" id="featured-properties">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl text-2E4053 font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Properties
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </motion.div>
        <div className="text-center mt-8">
          <button className="bg-D4AC0D text-white py-2 px-6 rounded hover:bg-D4AC0D-dark">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
