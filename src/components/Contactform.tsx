import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log(formData);
  };

  return (
    <section className="bg-creamy-white py-10 px-5 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center mb-10"
      >
        <h2 className="text-3xl font-bold text-charcoal-gray mb-4">Contact Us</h2>
        <p className="text-olive-green">We're delighted that you've decided to reach out to us! Whether you have a question about our menu, want to make a reservation, or simply wish to share your dining experience, we're here to listen.</p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-8 md:p-12"
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded h-32"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            >
              <option value="">Select Subject</option>
              <option value="reservation">Reservation</option>
              <option value="feedback">Feedback</option>
              <option value="private-events">Private Events</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-warm-red text-white p-3 rounded hover:bg-red-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
