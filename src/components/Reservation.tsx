import { motion } from 'framer-motion';
import { useState } from 'react';

const ReservationSection = () => {
  const [formData, setFormData] = useState({ date: '', time: '', people: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    alert('Reservation submitted!');
  };

  return (
    <section className='bg-[#FFF8F0] text-[#273D2F] p-8'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='text-center'>
        <h2 className='text-3xl font-bold mb-4'>Online Reservation</h2>
        <p className='mb-8'>Experience the convenience of securing your table at our restaurant with our simple and efficient online reservation system.</p>
        <form onSubmit={handleSubmit} className='max-w-lg mx-auto space-y-4'>
          <input type='date' name='date' value={formData.date} onChange={handleInputChange} className='w-full p-2 bg-[#F8F5F1]' />
          <input type='time' name='time' value={formData.time} onChange={handleInputChange} className='w-full p-2 bg-[#F8F5F1]' />
          <select name='people' value={formData.people} onChange={handleInputChange} className='w-full p-2 bg-[#F8F5F1]'>
            <option value=''>Number of people</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='more'>More</option>
          </select>
          <button type='submit' className='w-full p-2 bg-[#DAA49A] text-white font-bold hover:bg-[#9E4624] transition-colors'>Reserve</button>
        </form>
      </motion.div>

      {/* Other reservation information sections here */}

    </section>
  );
};

export default ReservationSection;