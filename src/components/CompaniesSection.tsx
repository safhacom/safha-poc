// components/CompaniesSection.tsx
import { motion } from "framer-motion"

interface CompanyCardProps {
  title: string
  marketingText: string // AI-generated marketing text
}

const CompanyCard: React.FC<CompanyCardProps> = ({ title, marketingText }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white border-2 border-purple text-purple p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out"
    >
      <h3 className="text-2xl mb-4 font-bold font-rubik_bubbles">{title}</h3>
      <p>{marketingText}</p>
    </motion.div>
  )
}

const companies = [
  {
    title: "Younes Studio",
    marketingText: "Innovative gaming experiences tailored for you.",
  },
  {
    title: "Faris Studio",
    marketingText: "Creating memorable moments through interactive play.",
  },
  {
    title: "Suzan Studio",
    marketingText: "Designing worlds that inspire endless adventure.",
  },
  {
    title: "Tomato Studio",
    marketingText: "Fresh, juicy games that are ripe for the playing.",
  },
]

const CompaniesSection: React.FC = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      id="companies-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariant}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <motion.div key={index} variants={itemVariant}>
              <CompanyCard
                title={company.title}
                marketingText={company.marketingText}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default CompaniesSection
