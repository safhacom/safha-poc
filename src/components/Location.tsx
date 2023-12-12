import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const LocationSection = () => {
  const [selectedBranch, setSelectedBranch] = useState<any>(null)

  const branchLocations = [
    {
      name: "Downtown Spot",
      image: "/map.png",
      description:
        "Vibrant, music-filled downtown spot with a tailored menu that highlights regional specialties.",
    },
    // ... other branch locations
  ]

  return (
    <div className="bg-FFF8F0 text-273D2F font-ubuntu-mono">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center py-10"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-C59A77 mb-4">
          Our Locations
        </h2>
        <p className="mb-10">
          Discover our various locations and enjoy an unforgettable dining
          experience.
        </p>

        <div className="mb-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl md:text-3xl font-semibold text-C59A77 mb-2">
              Our Main Location
            </h3>
            <p className="mb-6">
              Nestled in the heart of the bustling downtown district, our
              flagship restaurant offers a culinary escape from the ordinary.
            </p>
            <Image
              src="/map.png"
              alt="Main Location"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <button className="bg-DAA49A text-white px-6 py-2 rounded-full font-medium hover:bg-DAA49A/80 transition duration-300">
              Find Us
            </button>
          </motion.div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl md:text-3xl font-semibold text-C59A77 mb-2">
            Branch Locations
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {branchLocations.map((branch, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
                onClick={() => setSelectedBranch(branch)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    width={300}
                    height={200}
                    className="rounded-lg mb-2"
                  />
                  <p className="font-medium mb-1">{branch.name}</p>
                  <p className="text-sm mb-4">{branch.description}</p>
                  <button className="bg-9E4624 text-white px-4 py-1 rounded-full text-xs font-medium hover:bg-9E4624/80 transition duration-300">
                    View Details
                  </button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl md:text-3xl font-semibold text-C59A77 mb-2">
            Reservations and Private Dining
          </h3>
          <p className="mb-6">
            Planning a special evening or a group event? Our main and select
            branch locations offer reservation services to ensure your dining
            experience is seamless and personalized.
          </p>
          <button className="bg-9E4624 text-white px-6 py-2 rounded-full font-medium hover:bg-9E4624/80 transition duration-300">
            Book Now
          </button>
        </div>

        {/* ... other subsections like Accessibility, Catering and Events, Seasonal Pop-Up Locations, International Locations ... */}
      </motion.div>
    </div>
  )
}

export default LocationSection
