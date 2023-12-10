import { motion } from 'framer-motion';
import { useState } from 'react';
import { CalendarIcon, ClockIcon, UsersIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
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
    <section className='bg-creamy-white text-charcoal-gray py-12 px-4'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='max-w-2xl mx-auto'
      >
        <h2 className='text-3xl font-bold mb-4'>Reserve Your Table</h2>
        <p className='mb-8'>Experience the Symphony of Flavors</p>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='flex flex-col md:flex-row md:space-x-4'>
            <div className='flex-1'>
              <label htmlFor='date' className='flex items-center space-x-2'>
                <CalendarIcon className='w-6 h-6 text-sunset-orange' />
                <input
                  type='date'
                  id='date'
                  name='date'
                  value={formData.date}
                  onChange={handleChange}
                  className='w-full p-2 border border-charcoal-gray rounded-md'
                  required
                />
              </label>
            </div>
            <div className='flex-1'>
              <label htmlFor='time' className='flex items-center space-x-2'>
                <ClockIcon className='w-6 h-6 text-sunset-orange' />
                <input
                  type='time'
                  id='time'
                  name='time'
                  value={formData.time}
                  onChange={handleChange}
                  className='w-full p-2 border border-charcoal-gray rounded-md'
                  required
                />
              </label>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:space-x-4'>
            <div className='flex-1'>
              <label htmlFor='guests' className='flex items-center space-x-2'>
                <UsersIcon className='w-6 h-6 text-sunset-orange' />
                <input
                  type='number'
                  id='guests'
                  name='guests'
                  value={formData.guests}
                  onChange={handleChange}
                  min='1'
                  className='w-full p-2 border border-charcoal-gray rounded-md'
                  required
                />
              </label>
            </div>
            <div className='flex-1'>
              <label htmlFor='name' className='flex items-center space-x-2'>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Full Name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full p-2 border border-charcoal-gray rounded-md'
                  required
                />
              </label>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:space-x-4'>
            <div className='flex-1'>
              <label htmlFor='email' className='flex items-center space-x-2'>
                <MailIcon className='w-6 h-6 text-sunset-orange' />
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full p-2 border border-charcoal-gray rounded-md'
                  required
                />
              </label>
            </div>
            <div className='flex-1'>
              <label htmlFor='phone' className='flex items-center space-x-2'>
                <PhoneIcon className='w-6 h-6 text-sunset-orange' />
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full p-2 border border-charcoal-gray rounded-md'
                  required
                />
              </label>
            </div>
          </div>
          <button type='submit' className='w-full py-3 bg-warm-red text-creamy-white font-bold rounded-md hover:bg-red-700 transition-colors'>Reserve Now</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Reservation;
