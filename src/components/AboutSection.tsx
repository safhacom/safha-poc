import { motion } from "framer-motion"

const AboutSection: React.FC = () => {
  const description = `Younes is recognized for his expertise in creating seamless user interfaces and bringing innovative solutions to complex problems. With a passion for technology and a knack for adaptive and clean code, Younes brings an unmatched dedication to every project. Whether it's enhancing user experience, optimizing performance, or integrating new features, he consistently exceeds expectations with his forward-thinking approach and his commitment to delivering quality and impactful software solutions.`

  return (
    <section
      id="about-section"
      className="flex items-center justify-center bg-floor text-spiky font-ubuntu-mono py-16"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center md:items-start mb-8 md:mb-0 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Younes</h2>
          <p className="text-lg">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center items-center"
        >
          {/* Replace '/path-to-your-image.jpg' with the path to your AI-generated image */}
          <div className="clip-heptagon overflow-hidden w-80 h-80 bg-spiky">
            <img
              src="/how-to-win-friends.png"
              alt="Younes Alturkey"
              width={320}
              height={320}
              className="transform hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
