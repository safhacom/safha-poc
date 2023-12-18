import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-cream text-darkcharcoal font-lato p-8" id="about-us">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="mb-6">
            Discover the journey of our family-owned restaurant, from humble
            beginnings to a local culinary landmark.
          </p>
          <Image
            src="/about.png"
            alt="Our Story"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Philosophy</h2>
          <p className="mb-6">
            Learn about our commitment to sustainability, sourcing local
            ingredients, and creating a memorable dining experience.
          </p>
          <div className="flex justify-center gap-4">
            <Image
              src="/about.png"
              alt="Sustainability"
              width={50}
              height={50}
            />
            <Image
              src="/about.png"
              alt="Local Ingredients"
              width={50}
              height={50}
            />
            <Image
              src="/about.png"
              alt="Dining Experience"
              width={50}
              height={50}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="mb-6">
            Meet the passionate chefs, friendly servers, and dedicated staff who
            bring our restaurant to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card">
              <Image
                src="/person.png"
                alt="Chef"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-2">
                John Doe - Head Chef
              </h3>
            </div>
            <div className="card">
              <Image
                src="/person.png"
                alt="Server"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-2">
                Jane Smith - Lead Server
              </h3>
            </div>
            <div className="card">
              <Image
                src="/person.png"
                alt="Staff"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-2">
                Mike Johnson - Manager
              </h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
          <p className="mb-6">
            Explore our carefully crafted dishes that blend traditional flavors
            with a modern twist.
          </p>
          <Image
            src="/food.png"
            alt="Menu"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Awards & Recognition</h2>
          <p className="mb-6">
            View the accolades and rave reviews that recognize our restaurant's
            excellence in cuisine and service.
          </p>
          <div className="flex justify-center gap-4">
            <Image
              src="/food-restaurant-svgrepo-com.svg"
              alt="Award"
              width={100}
              height={100}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/food-restaurant-svgrepo-com.svg"
              alt="Award"
              width={100}
              height={100}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/food-restaurant-svgrepo-com.svg"
              alt="Award"
              width={100}
              height={100}
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Community Involvement</h2>
          <p className="mb-6">
            See how we give back to the community through local events, charity
            work, and culinary education programs.
          </p>
          <Image
            src="/food-restaurant-svgrepo-com.svg"
            alt="Community Involvement"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Visit Us</h2>
          <p className="mb-6">
            Find our location, hours of operation, and how to make a reservation
            at our welcoming establishment.
          </p>
          <div className="flex justify-center gap-4">
            <Image
              src="/food-restaurant-svgrepo-com.svg"
              alt="Location"
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg">
                <strong>Address:</strong> 123 Main St, Hometown, HT 12345
              </p>
              <p className="text-lg">
                <strong>Hours:</strong> Mon-Sun: 11am - 10pm
              </p>
              <button className="bg-terracotta text-cream font-bold py-2 px-4 rounded-lg shadow-md hover:bg-terracotta-dark transition-colors">
                Make a Reservation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
