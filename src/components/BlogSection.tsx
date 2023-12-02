// components/BlogSection.tsx
import { motion } from "framer-motion"
import React from "react"

interface BlogArticle {
  title: string
  hook: string
  imageUrl: string
}

const articles: BlogArticle[] = [
  {
    title: "How to Win Friends and Influence People",
    hook: "Discover the timeless strategies for building meaningful relationships in both your personal and professional life.",
    imageUrl: "/how-to-win-friends.png", // replace with your image paths
  },
  {
    title: "How to Frontend Like a Conqueror",
    hook: "Unleash the conqueror within and elevate your front-end development skills to new heights.",
    imageUrl: "/frontend.png",
  },
  {
    title: "How to CSS Your Way to a Better Job",
    hook: "Looking for a career upgrade? Master the art of CSS and position yourself as a top candidate in the evolving tech landscape.",
    imageUrl: "/css.png",
  },
]

const BlogSection: React.FC = () => {
  return (
    <section className="py-10 px-5 bg-gradient-to-b from-peach to-royalblue text-gray-800 font-ubuntu-mono">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              layoutId={`article-${index}`}
            >
              <h3 className="text-xl font-bold mb-3">{article.title}</h3>
              <p className="text-sm mb-5">{article.hook}</p>
              <img
                src={article.imageUrl}
                alt={article.title}
                className="h-36 w-full object-cover rounded-md"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection
