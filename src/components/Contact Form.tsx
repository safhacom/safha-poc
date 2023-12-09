import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    propertyInterest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl text-2E4053 font-bold mb-4">Contact Us</h2>
      <p className="text-5D6D7E mb-8">
        Your Journey to the Perfect Home Begins Here!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-2E4053 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border border-F0F2F5 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-2E4053 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-F0F2F5 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-2E4053 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-F0F2F5 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-2E4053 mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-F0F2F5 rounded h-32"
            required
          ></textarea>
        </div>
        <div className="mb-8">
          <label htmlFor="propertyInterest" className="block text-2E4053 mb-2">
            Property Interest
          </label>
          <input
            type="text"
            name="propertyInterest"
            id="propertyInterest"
            value={formData.propertyInterest}
            onChange={handleChange}
            className="w-full p-3 border border-F0F2F5 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-1ABC9C text-white p-3 rounded hover:bg-1ABC9C-darker"
        >
          Submit Inquiry
        </button>
      </form>
      <div className="flex items-center justify-between mt-8">
        <div>
          <p className="text-2E4053">Call us: (123) 456-7890</p>
          <p className="text-2E4053">Email: contact@example.com</p>
        </div>
        <div className="relative w-24 h-24">
          <Image
            src="/map.png"
            alt="Location Map"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
