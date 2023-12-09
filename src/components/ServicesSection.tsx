import { motion } from "framer-motion"
import React from "react"

const ServicesSection: React.FC = () => {
  const cardHover = {
    scale: 1.03,
    transition: { type: "spring", stiffness: 300 },
  }

  interface Service {
    title: string
    description: string
    imageSrc: string
  }

  const services: Service[] = [
    {
      title: "Full-Stack Engineering",
      description: "Building robust web applications end-to-end.",
      imageSrc: "/full-stack.png",
    },
    {
      title: "Web3 Engineering",
      description: "Developing decentralized apps and smart contracts.",
      imageSrc: "/web3.png",
    },
    {
      title: "Frontend Engineering",
      description: "Crafting interactive and user-friendly interfaces.",
      imageSrc: "/frontend-dev.png",
    },
    {
      title: "Backend Engineering",
      description: "Creating the server-side logic and database architecture.",
      imageSrc: "/backend-dev.png",
    },
    {
      title: "Mobile Engineering",
      description: "Designing and coding responsive mobile applications.",
      imageSrc: "/mobile.png",
    },
    {
      title: "UX/UI Design",
      description:
        "Designing intuitive and visually appealing user interfaces.",
      imageSrc: "/uxuidesign.png",
    },
    {
      title: "IT Project Management",
      description: "Managing projects efficiently with IT best practices.",
      imageSrc: "/itmgmt.png",
    },
    {
      title: "Product Development",
      description: "Turning ideas into market-ready products.",
      imageSrc: "/product.png",
    },
  ]

  return (
    <motion.section
      id="services-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16 bg-floor"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 font-ubuntu-mono">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl font-bold text-spiky"
          >
            Services Offered
          </motion.h2>
        </div>
        <div className="flex flex-wrap -mx-2 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-2 w-full sm:w-1/2 md:w-1/4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={cardHover}
            >
              <div className="relative border border-transparent rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all bg-white p-4 flex flex-col items-center ">
                <motion.div
                  className="w-full rainbow-border mb-3 overflow-hidden"
                  whileHover={{ rotate: 2 }}
                >
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold text-spiky mb-2">
                  {service.title}
                </h3>
                <p className="text-spiky">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ServicesSection
