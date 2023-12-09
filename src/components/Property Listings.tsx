import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const PropertyListings = () => {
  const [properties] = useState([
    {
      id: 1,
      title: "Featured Properties",
      description:
        "Explore our hand-picked featured properties that offer the best in luxury, location, and lifestyle.",
      imageUrl: "/monshaat.png",
    },
    {
      id: 2,
      title: "New Listings",
      description: "Stay ahead of the game with our latest property listings.",
      imageUrl: "/monshaat.png",
    },
    {
      id: 3,
      title: "Open Houses",
      description:
        "Get a real feel for your potential new home by visiting our open houses.",
      imageUrl: "/monshaat.png",
    },
    {
      id: 4,
      title: "Commercial Real Estate",
      description:
        "Our commercial real estate section caters to entrepreneurs, investors, and businesses.",
      imageUrl: "/monshaat.png",
    },
    {
      id: 5,
      title: "Luxury Collection",
      description:
        "Indulge in the ultimate real estate experience with our Luxury Collection.",
      imageUrl: "/monshaat.png",
    },
    {
      id: 6,
      title: "International Properties",
      description:
        "Expand your horizons with our selection of international properties.",
      imageUrl: "/monshaat.png",
    },
    {
      id: 7,
      title: "Affordable Homes",
      description:
        "Homeownership is within reach with our affordable homes section.",
      imageUrl: "/monshaat.png",
    },
    {
      id: 8,
      title: "Rental Properties",
      description:
        "Find your next rental home with ease using our comprehensive rental properties section.",
      imageUrl: "/monshaat.png",
    },
  ]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.2 } },
      }}
      className="bg-white py-10"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-2E4053 mb-6"
        >
          Discover Your Dream Home
        </motion.h2>
        <p className="text-md text-5D6D7E mb-10">
          Explore a variety of listings available and find your perfect place.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-F0F2F5 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative mb-4">
                <Image
                  src={property.imageUrl}
                  alt={property.title}
                  width={400}
                  height={250}
                  layout="responsive"
                  className="rounded-t-lg"
                />
                <button className="absolute bottom-4 right-4 bg-1ABC9C text-white px-4 py-2 rounded-lg hover:bg-1ABC9C/90 transition-colors duration-300">
                  View Details
                </button>
              </div>
              <h3 className="text-lg font-semibold text-2E4053 mb-2">
                {property.title}
              </h3>
              <p className="text-sm text-5D6D7E mb-4">{property.description}</p>
              <button className="bg-D4AC0D text-white px-4 py-2 rounded-lg w-full hover:bg-D4AC0D/90 transition-colors duration-300">
                Schedule a Viewing
              </button>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-D4AC0D text-white px-6 py-3 rounded-lg hover:bg-D4AC0D/90 transition-colors duration-300">
            Load More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyListings;
