// components/AboutSection.tsx
import { motion } from "framer-motion"
import React from "react"

interface AboutSectionProps {
  title: string
  description: string
  imageUrl: string
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <section className="py-10 px-5 bg-royalblue text-peach font-ubuntu-mono">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="mt-4 text-lg">{description}</p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={imageUrl}
            alt="AI-generated visual"
            width="100%"
            height="100%"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

// Place this in the parent component to import and use the AboutSection
// import AboutSection from '../components/AboutSection';

// <AboutSection
//   title="About Me"
//   description="I'm a professional developer with a passion for creating modern, elegant, and user-friendly applications."
//   imageUrl="/path-to-your-image.jpg"
// />
