import { motion } from "framer-motion"
import React from "react"

const ProjectsSection: React.FC = () => {
  interface ProjectCard {
    title: string
    description: string
  }

  const projects: ProjectCard[] = [
    {
      title: "NahdiIn",
      description: "Intern engagement platform.",
    },
    {
      title: "Nahdi Mobile",
      description: "Nahdi e-commerce platform.",
    },
    {
      title: "Bitchunk",
      description: "File encryption and sharing service.",
    },
    {
      title: "Monshaat LMS",
      description: "Learning management system.",
    },
    {
      title: "Nuqtah",
      description: "NFTs marketplace.",
    },
    {
      title: "Farabi",
      description: "ChatGPT browser extension.",
    },
  ]

  const cardHover = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  }

  return (
    <motion.section
      id="projects-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16 bg-spiky"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 font-ubuntu-mono text-floor">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl font-bold"
          >
            Projects
          </motion.h2>
        </div>
        <div className="flex flex-wrap -mx-2 justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={cardHover}
            >
              <div className="bg-floor border border-floor text-spiky p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectsSection
