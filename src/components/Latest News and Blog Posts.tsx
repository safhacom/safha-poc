import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Market Trends and Analysis",
    description:
      "Stay ahead of the curve with our in-depth analysis of the latest real estate market trends...",
    imageUrl: "/bitchunk.png", // Replace with your image path
  },
  {
    id: 2,
    title: "Home Improvement Tips",
    description:
      "Maximize the value of your property with our expert home improvement tips...",
    imageUrl: "/bitchunk.png", // Replace with your image path
  },
  {
    id: 3,
    title: "Real Estate Investment Strategies",
    description:
      "Dive into the world of real estate investment with our strategic guides and tips...",
    imageUrl: "/bitchunk.png", // Replace with your image path
  },
  {
    id: 4,
    title: "Local Community Spotlights",
    description:
      "Explore the communities we serve with our local spotlights...",
    imageUrl: "/bitchunk.png", // Replace with your image path
  },
  {
    id: 5,
    title: "Real Estate Law and Policy Updates",
    description:
      "Stay informed about the latest changes in real estate law and policy...",
    imageUrl: "/bitchunk.png", // Replace with your image path
  },
  {
    id: 6,
    title: "Success Stories and Testimonials",
    description:
      "Read about the success stories of our clients and how our services have helped them...",
    imageUrl: "/bitchunk.png", // Replace with your image path
  },
  {
    id: 7,
    title: "Agent and Brokerage News",
    description:
      "Get the latest news on our team of real estate professionals...",
    imageUrl: "/bitchunk.png", // Replace with your image path
  },
  {
    id: 8,
    title: "Upcoming Real Estate Events and Webinars",
    description:
      "Join us for our upcoming events and webinars designed to educate and inform...",
    imageUrl: "/bitchunk.png", // Replace with your image path
  },
];

const LatestNewsAndBlogPosts = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-2E4053 mb-6"
        >
          Latest News and Blog Posts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
              className="bg-F0F2F5 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={350}
                height={200}
                className="rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-2E4053 mt-4">
                {post.title}
              </h3>
              <p className="text-md text-5D6D7E my-2">{post.description}</p>
              <button className="text-1ABC9C hover:text-D4AC0D transition-colors duration-300">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-1ABC9C text-white font-bold py-2 px-4 rounded hover:bg-D4AC0D transition-colors duration-300"
          >
            View All
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsAndBlogPosts;
