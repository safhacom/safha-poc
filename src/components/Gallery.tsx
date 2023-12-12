import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const GallerySection: FC = () => {
  const galleryCategories = [
    {
      title: "Our Culinary Delights",
      description:
        "Explore the essence of our kitchen through a vivid display of culinary expertise. Each photo tells the story of flavor and passion that defines our menu.",
      images: ["/food.png", "/about.png", "/food.png"],
    },
    {
      title: "Ambiance and Atmosphere",
      description:
        "Step inside our dining haven and experience the ambiance that complements our exquisite meals. Panoramic shots capture the spaciousness and architectural details.",
      images: ["/food.png", "/about.png", "/food.png"],
    },
    {
      title: "Special Events and Celebrations",
      description:
        "Our restaurant is a venue where memories are made. From intimate anniversary dinners to lively birthday parties, each event is captured in stunning detail.",
      images: ["/food.png", "/about.png", "/food.png"],
    },
    {
      title: "Behind the Scenes",
      description:
        "Gain an exclusive look at the heartbeat of our restaurant: the kitchen. Videos and images reveal the dedication and skill that goes into every meal served.",
      images: ["/food.png", "/about.png", "/food.png"],
    },
    {
      title: "Seasonal and Local Partnerships",
      description:
        "We pride ourselves on our commitment to sustainability and local partnerships. This visual narrative underscores our dedication to community support and sustainable dining.",
      images: ["/food.png", "/about.png", "/food.png"],
    },
    {
      title: "Customer Favorites",
      description:
        "Discover what keeps our guests coming back for more. This interactive gallery celebrates our successes and serves as a guide for new guests.",
      images: ["/food.png", "/about.png", "/food.png"],
    },
  ];

  return (
    <div className="bg-creamy-white p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-charcoal-gray mb-6">Gallery</h2>
        <p className="text-charcoal-gray mb-12">
          Savor the Symphony of Authentic Flavors Where Every Meal is a
          Masterpiece
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold text-warm-red mb-3">
              {category.title}
            </h3>
            <p className="text-charcoal-gray mb-4">{category.description}</p>
            <div className="flex flex-wrap -m-1">
              {category.images.map((image, idx) => (
                <motion.div
                  key={idx}
                  className="p-1 w-1/2 md:w-1/3"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={image}
                    alt={`${category.title} image ${idx + 1}`}
                    layout="responsive"
                    width={100}
                    height={100}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
