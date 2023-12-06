// components/BlogSection.tsx
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

interface ArticleCardProps {
  title: string
  description: string
  imageUrl: string
}

// Generate descriptions and include relevant image URLs
const articlesData: ArticleCardProps[] = [
  {
    title: "How to win in life?",
    description:
      "Discover the path to financial freedom and master the keys to personal success with essential strategies.",
    imageUrl: "/pig.png", // Replace with actual image path
  },
  {
    title: "How to write great code?",
    description:
      "Unlock the principles of computer science to create efficient, maintainable, and elegant code.",
    imageUrl: "/book.png",
  },
  {
    title: "Love and Life",
    description:
      "Explore the profound connections between relationships and life for a deeper understanding of love.",
    imageUrl: "/love.png",
  },
  {
    title: "God: does he exist?",
    description:
      "Engage in a thought-provoking discussion on religion and the existence of God, a quest for understanding.",
    imageUrl: "/god.png",
  },
]

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <motion.div
      className="flex flex-col border border-royalblue/30 shadow-lg rounded-lg overflow-hidden hover:translate-y-[-5px] transition duration-200"
      whileHover={{ y: -5 }}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-grow p-4">
        <h3 className="text-lg font-semibold text-royalblue mb-2">{title}</h3>
        <p className="text-sm text-royalblue/90">{description}</p>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        className="w-full object-cover"
        layout="responsive"
        height={160}
        width={320}
      />
    </motion.div>
  )
}

const BlogSection: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 }}
      >
        {articlesData.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </motion.div>
    </section>
  )
}

export default BlogSection
