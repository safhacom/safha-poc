import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [selectedInquiry, setSelectedInquiry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='bg-cream p-8'>
      <div className='container mx-auto flex flex-wrap md:flex-nowrap'>
        <div className='w-full md:w-1/2 p-4'>
          <motion.h2 initial={{ x: -100 }} animate={{ x: 0 }} className='text-darkCharcoal font-lato text-4xl mb-4'>Get in Touch</motion.h2>
          <p className='text-mutedRose font-lato mb-8'>Reach out to us for reservations, events, or general inquiries.</p>
          <div className='grid grid-cols-1 gap-4'>
            {/* Contact reason cards */}
          </div>
        </div>
        <div className='w-full md:w-1/2 p-4'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input type='text' placeholder='Your Name' className='border p-2' />
            <input type='email' placeholder='Your Email' className='border p-2' />
            <input type='tel' placeholder='Your Phone Number' className='border p-2' />
            <select value={selectedInquiry} onChange={(e) => setSelectedInquiry(e.target.value)} className='border p-2'>
              <option value=''>Select Inquiry Type</option>
              <option value='reservation'>Reservation Requests</option>
              <option value='private-events'>Private Events</option>
              <option value='feedback'>Feedback</option>
              <option value='careers'>Careers</option>
              <option value='press'>Press Inquiries</option>
            </select>
            <textarea placeholder='Your Message' className='border p-2'></textarea>
            <button type='submit' className='bg-terracotta text-cream font-lato p-2'>Submit</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;