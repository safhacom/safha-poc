import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
  const sections = [
    {
      title: "About Us",
      description:
        "Learn more about our company, our mission, and our commitment to providing high-quality tech solutions.",
      image: "/person.png",
    },
    {
      title: "Our Services",
      description:
        "Explore the wide range of tech services we offer, from software development to IT consulting.",
      image: "/person.png",
    },
    {
      title: "Our Team",
      description:
        "Meet the talented individuals behind our company, who work tirelessly to deliver the best tech solutions.",
      image: "/person.png",
    },
    {
      title: "Our Projects",
      description:
        "Take a look at some of the innovative projects we've worked on, showcasing our technical expertise and creativity.",
      image: "/person.png",
    },
    {
      title: "Contact Us",
      description:
        "Get in touch with us for any inquiries, feedback, or to discuss potential collaborations.",
      image: "/person.png",
    },
  ];

  return (
    <div className="flex flex-wrap justify-between">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="w-full md:w-1/3 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="bg-royalblue p-4 rounded-lg shadow-lg">
            <Image
              src={section.image}
              alt={section.title}
              width={500}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-peach font-ubuntu-mono text-2xl mt-4">
              {section.title}
            </h2>
            <p className="text-white font-ubuntu-mono mt-2">
              {section.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Home;
