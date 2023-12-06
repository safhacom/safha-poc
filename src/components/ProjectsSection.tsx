// components/ProjectsSection.tsx
import { motion } from "framer-motion"
import React from "react"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
}

// Define the data for each project card
const projectsData: ProjectCardProps[] = [
  {
    title: "Nuqtah",
    description: "NFTs Marketplace",
    imageUrl: "/compute.png", // Replace with actual image paths
  },
  {
    title: "Monshaat",
    description: "LMS for future entrepreneurs",
    imageUrl: "/monshaat.png",
  },
  {
    title: "Soudah.sa",
    description: "Soudah development company website",
    imageUrl: "/css.png",
  },
  {
    title: "Bitchunk",
    description: "File sharing and encryption",
    imageUrl: "/bitchunk.png",
  },
  {
    title: "Nahdin",
    description: "Intern engagement platform",
    imageUrl: "/how-to-win-friends.png",
  },
  {
    title: "Nahdi Mobile",
    description: "Nahdi mobile app in React Native",
    imageUrl: "/tawaklana.png",
  },
]

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <motion.div
      className="p-4 bg-white bg-opacity-10 border border-royalblue/30 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
      <div className="bg-royalblue bg-opacity-25 p-2">
        <h3 className="text-lg font-semibold text-royalblue">{title}</h3>
        <p className="text-sm text-royalblue/90">{description}</p>
      </div>
    </motion.div>
  )
}

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </section>
  )
}

export default ProjectsSection
