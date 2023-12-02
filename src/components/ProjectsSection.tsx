// components/ProjectsSection.tsx
import { motion } from "framer-motion"
import React from "react"

interface Project {
  title: string
  description: string
  imageUrl: string
}

const projects: Project[] = [
  {
    title: "Nahdi Mobile",
    description: "React Native ecommerce app for Nahdi development.",
    imageUrl: "/nahdi.png", // replace with your image paths
  },
  {
    title: "Tawaklna",
    description: "Health passport Tawalkana SDAIA app.",
    imageUrl: "/tawaklana.png",
  },
  {
    title: "Bitchunk",
    description: "File sharing and encryption solution.",
    imageUrl: "/bitchunk.png",
  },
  {
    title: "Nahdi In",
    description: "Interns engagement platform.",
    imageUrl: "/nahdiin.png",
  },
  {
    title: "Nuqtah NFTs Marketplace",
    description: "Marketplace to trade NFTs.",
    imageUrl: "/nuqtah.png",
  },
  {
    title: "Monshaat LMS",
    description: "Monshaat learning management system.",
    imageUrl: "/monshaat.png",
  },
]

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-10 px-5 bg-gradient-to-t from-royalblue to-peach text-gray-800 font-ubuntu-mono">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-sm mb-5">{project.description}</p>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-24 w-full object-cover rounded-md object-top"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
