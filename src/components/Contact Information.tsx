import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ContactInformation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white text-2e4053 p-8 md:p-16"
    >
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        Get in Touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-xl font-semibold">Head Office Address</h3>
            <p>123 Main Street, Suite 101, Hometown, State, ZIP</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Phone Numbers</h3>
            <p>Main Office: (123) 456-7890</p>
            <p>Sales Department: (123) 456-7891</p>
            <p>Customer Support: (123) 456-7892</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Email Addresses</h3>
            <p>General Inquiries: info@realestatecompany.com</p>
            <p>Sales Inquiries: sales@realestatecompany.com</p>
            <p>Support Requests: support@realestatecompany.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Business Hours</h3>
            <p>Monday to Friday, 9:00 AM to 6:00 PM</p>
          </div>

          <div className="flex space-x-4">
            <FaFacebookF className="text-d4ac0d" />
            <FaTwitter className="text-d4ac0d" />
            <FaLinkedinIn className="text-d4ac0d" />
            <FaInstagram className="text-d4ac0d" />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border-b-2 border-f0f2f5 bg-transparent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border-b-2 border-f0f2f5 bg-transparent"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full p-2 border-b-2 border-f0f2f5 bg-transparent"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border-b-2 border-f0f2f5 bg-transparent"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-1abc9c text-white font-bold"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-8"
      >
        <Image
          src="/tawaklana.png"
          alt="Map Location"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default ContactInformation;
