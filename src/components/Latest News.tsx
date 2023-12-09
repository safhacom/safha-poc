import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LatestNews: FC = () => {
  const news = [
    {
      title: "Market Trends",
      description:
        "Stay updated with the latest real estate market trends. Our comprehensive analysis covers price fluctuations, inventory levels, and future market predictions.",
      image: "/monshaat.png",
      link: "/news/market-trends",
    },
    {
      title: "Investment Opportunities",
      description:
        "Discover the most lucrative investment opportunities in the real estate sector. We highlight emerging neighborhoods, promising development projects, and attractive rental markets.",
      image: "/monshaat.png",
      link: "/news/investment-opportunities",
    },
    {
      title: "Regulatory Updates",
      description:
        "Keep abreast of the latest regulatory changes affecting the real estate industry. From zoning laws to tax reforms, our updates ensure you're always in compliance.",
      image: "/monshaat.png",
      link: "/news/regulatory-updates",
    },
    {
      title: "Technology in Real Estate",
      description:
        "Explore how cutting-edge technology is transforming the real estate world. From virtual reality property tours to AI-powered market analysis.",
      image: "/monshaat.png",
      link: "/news/technology-in-real-estate",
    },
    {
      title: "Sustainable Living",
      description:
        "Dive into the world of sustainable living and green real estate. We showcase eco-friendly homes, energy-efficient building practices.",
      image: "/monshaat.png",
      link: "/news/sustainable-living",
    },
    {
      title: "Real Estate Education",
      description:
        "Whether you're new to real estate or a seasoned professional, our educational resources can help you expand your knowledge.",
      image: "/monshaat.png",
      link: "/news/real-estate-education",
    },
    {
      title: "Community Development",
      description:
        "Read about our involvement in community development and how we're helping to shape vibrant neighborhoods.",
      image: "/monshaat.png",
      link: "/news/community-development",
    },
    {
      title: "Customer Success Stories",
      description:
        "Be inspired by success stories from our clients who have achieved their real estate goals. From first-time homebuyers to experienced investors.",
      image: "/monshaat.png",
      link: "/news/customer-success-stories",
    },
  ];

  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-[#2E4053] mb-6"
      >
        Latest News
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#F0F2F5] p-4 rounded-lg shadow-md"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={350}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-[#2E4053] mb-2">
              {item.title}
            </h3>
            <p className="text-[#5D6D7E] mb-4">{item.description}</p>
            <a
              href={item.link}
              className="inline-block px-6 py-2 bg-[#1ABC9C] text-white rounded-full transition-all hover:bg-[#17a08a]"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="/news"
          className="inline-block px-6 py-2 bg-[#D4AC0D] text-white rounded-full transition-all hover:bg-[#c49a0b]"
        >
          View All News
        </a>
      </div>
    </section>
  );
};

export default LatestNews;
