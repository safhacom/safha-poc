import { motion } from "framer-motion";
import Image from "next/image";
import {
  PhoneIcon,
  ClockIcon,
  MapIcon,
  UsersIcon,
  QuestionMarkCircleIcon,
  CalendarIcon,
} from "@heroicons/react/outline";

const Reservations = () => {
  return (
    <section className="bg-cream text-darkCharcoal p-8" id="reservations">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">How to Reserve</h2>
          <p className="mb-6">
            Use our online booking form or call us directly to secure your
            table.
          </p>
          <button className="bg-terracotta text-cream font-semibold py-2 px-4 rounded-full">
            Book Online
          </button>
          <button className="ml-4 bg-transparent border-2 border-terracotta text-terracotta font-semibold py-2 px-4 rounded-full flex items-center">
            <PhoneIcon className="h-5 w-5 mr-2" />
            Call Us
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border-2 border-terracotta rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-3 flex items-center">
              <CalendarIcon className="h-6 w-6 mr-2" />
              Reservation Policy
            </h3>
            <p>
              Read about our reservation policies including no-shows and
              cancellation fees.
            </p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border-2 border-terracotta rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-3 flex items-center">
              <UsersIcon className="h-6 w-6 mr-2" />
              Group Bookings
            </h3>
            <p>Information on how to book for large parties and events.</p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border-2 border-terracotta rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-3 flex items-center">
              <QuestionMarkCircleIcon className="h-6 w-6 mr-2" />
              Special Requests
            </h3>
            <p>
              Let us know if you're celebrating a special occasion or have
              dietary restrictions.
            </p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border-2 border-terracotta rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-3 flex items-center">
              <ClockIcon className="h-6 w-6 mr-2" />
              Opening Hours
            </h3>
            <p>Check our opening days and hours to plan your visit.</p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border-2 border-terracotta rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-3 flex items-center">
              <MapIcon className="h-6 w-6 mr-2" />
              Location & Parking
            </h3>
            <p>
              Find out where we are located and the parking options available.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Reservations;
