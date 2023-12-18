import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Home: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='bg-cream min-h-screen flex flex-col items-center justify-center p-4'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={sectionVariants}
        className='w-full max-w-4xl mx-auto'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <h2 className='text-burgundy text-3xl font-bold mb-4'>Welcome to Our Restaurant</h2>
            <p className='text-charcoal'>Discover our passion for culinary excellence and our warm hospitality.</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <h2 className='text-burgundy text-3xl font-bold mb-4'>Our Menu</h2>
            <p className='text-charcoal'>Explore our diverse menu, featuring seasonal specialties and classic favorites.</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <h2 className='text-burgundy text-3xl font-bold mb-4'>Special Offers</h2>
            <p className='text-charcoal'>Enjoy our latest promotions and exclusive deals for a delightful dining experience.</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <h2 className='text-burgundy text-3xl font-bold mb-4'>Reservations</h2>
            <p className='text-charcoal'>Book your table easily with our convenient online reservation system.</p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <h2 className='text-burgundy text-3xl font-bold mb-4'>Events & Catering</h2>
            <p className='text-charcoal'>Let us host your special events or cater to your gatherings with our exceptional service.</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <h2 className='text-burgundy text-3xl font-bold mb-4'>Gallery</h2>
            <p className='text-charcoal'>Take a visual tour of our dishes, ambiance, and happy customers.</p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-6 mt-6'>
          <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <h2 className='text-burgundy text-3xl font-bold mb-4'>Testimonials</h2>
            <p className='text-charcoal'>Read what our guests have to say about their dining experiences with us.</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <h2 className='text-burgundy text-3xl font-bold mb-4'>Contact Us</h2>
            <p className='text-charcoal'>Get in touch for inquiries, feedback, or to say hello. We'd love to hear from you!</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
