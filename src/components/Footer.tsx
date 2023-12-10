import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-white text-slate-700 px-4 py-10'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <h5 className='text-2e4053 font-bold mb-2'>About Us</h5>
            <p className='text-5d6d7e'>Discover the story behind our real estate company, our mission to provide exceptional service, and our commitment to helping clients find their dream homes.</p>
          </div>
          <div>
            <h5 className='text-2e4053 font-bold mb-2'>Quick Links</h5>
            <ul className='text-1abc9c'>
              <li>Home</li>
              <li>Properties</li>
              <li>Services</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className='text-2e4053 font-bold mb-2'>Contact Information</h5>
            <p className='text-5d6d7e'>123 Real Estate Blvd, Dreamtown, DL 45678</p>
            <p className='text-5d6d7e'>+1 (555) 123-4567</p>
            <p className='text-5d6d7e'>contact@example.com</p>
          </div>
          <div>
            <h5 className='text-2e4053 font-bold mb-2'>Newsletter</h5>
            <form className='flex flex-col space-y-2'>
              <input type='email' placeholder='Your Email' className='px-4 py-2 border border-f0f2f5 rounded-md' />
              <button type='submit' className='bg-1abc9c text-white px-4 py-2 rounded-md hover:bg-d4ac0d transition-colors'>Subscribe</button>
            </form>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center border-t border-f0f2f5 mt-8 pt-4'>
          <p className='text-5d6d7e'>&copy; 2023 Real Estate Company. All rights reserved.</p>
          <div className='flex space-x-4'>
            <FaFacebookF className='text-d4ac0d' />
            <FaTwitter className='text-d4ac0d' />
            <FaInstagram className='text-d4ac0d' />
            <FaLinkedinIn className='text-d4ac0d' />
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;