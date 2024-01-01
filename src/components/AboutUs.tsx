import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  const aboutUsContent = [
    {
      title: "Our Story",
      description:
        "From a family recipe to a culinary delight, we've been serving love on plates since 1998.",
      imagePath: "/OurStory_AboutUs.png",
    },
    {
      title: "Our Philosophy",
      description:
        "Quality ingredients, traditional methods, and innovative flavors define our commitment to excellence.",
      imagePath: "/OurPhilosophy_AboutUs.png",
    },
    {
      title: "Our Team",
      description:
        "Meet the passionate chefs, friendly servers, and dedicated staff who make your dining experience unforgettable.",
      imagePath: "/OurTeam_AboutUs.png",
    },
    {
      title: "Sustainability",
      description:
        "We believe in eco-friendly practices, from farm-to-table sourcing to minimizing waste.",
      imagePath: "/Sustainability_AboutUs.png",
    },
    {
      title: "Community",
      description:
        "Proudly supporting local events and charities, because we're not just a restaurant, we're neighbors.",
      imagePath: "/Community_AboutUs.png",
    },
  ];

  return (
    <div className="bg-white text-darkBlue font-sans">
      <div className="container mx-auto px-4 py-12">
        {aboutUsContent.map((content, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="my-10 rounded-lg overflow-hidden shadow-lg bg-lightGray p-6"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={content.imagePath}
                alt={content.title}
                width={200}
                height={200}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-3">{content.title}</h2>
              <p>{content.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
