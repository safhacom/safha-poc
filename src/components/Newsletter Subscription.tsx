
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically handle the subscription logic, e.g., sending the email to your backend or a third-party service
    console.log('Subscribed with email:', email);
    setEmail(''); // Clear the input after submission
  };

  return (
    <section className="bg-AED6F1 py-10 px-5 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2E4053 text-3xl font-bold mb-4">Stay Updated on Your Dream Home!</h2>
        <p className="text-5D6D7E mb-6">
          Get exclusive real estate insights, latest listings, and tips for home buyers and sellers.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-4 py-2 border border-2E4053 rounded-md text-2E4053"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-1ABC9C text-white font-bold py-2 px-6 rounded-md hover:bg-17A589"
          >
            Subscribe
          </motion.button>
        </form>
        <p className="text-5D6D7E text-sm mt-4">
          We respect your privacy. No spam, ever.
        </p>
      </motion.div>
    </section>
  );
};

export default NewsletterSubscription;
