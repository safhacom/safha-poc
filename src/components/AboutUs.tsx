import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className='bg-cream text-charcoal font-lato py-10 px-4' id='about-us'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className='max-w-6xl mx-auto'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl text-burgundy font-bold mb-3'>Our Story</h2>
          <p>Discover the journey of our family-owned restaurant, from our humble beginnings to becoming a local favorite.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-burgundy font-bold text-xl mb-3'>Our Philosophy</h3>
            <p>Learn about our commitment to sustainability, sourcing local ingredients, and creating a memorable dining experience.</p>
          </motion.div>
          <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-burgundy font-bold text-xl mb-3'>Our Team</h3>
            <p>Meet the passionate chefs, friendly servers, and dedicated staff that bring our restaurant to life.</p>
          </motion.div>
        </div>
        <div className='my-10'>
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-burgundy font-bold text-xl mb-3'>Our Menu</h3>
            <p>Explore our carefully crafted dishes that blend traditional flavors with a modern twist.</p>
          </motion.div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-burgundy font-bold text-xl mb-3'>Awards & Recognition</h3>
            <p>Check out the accolades and rave reviews that we've proudly earned over the years.</p>
          </motion.div>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-burgundy font-bold text-xl mb-3'>Community Involvement</h3>
            <p>See how we give back to the community that has supported us and how you can get involved.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;