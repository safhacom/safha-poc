import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/solid';

const PropertySearch = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    propertyType: '',
    priceRange: [0, 1000000],
    bedrooms: 0,
    bathrooms: 0,
  });

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Searching with these params:', searchParams);
  };

  return (
    <section className='bg-white py-10 px-5 md:px-10'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className='text-2xl text-2E4053 font-ubuntu-mono font-bold mb-4'>Find Your Dream Home</h2>
        <div className='flex flex-col md:flex-row items-center gap-4 mb-6'>
          <input type='text' placeholder='Enter location' className='flex-1 p-2 border border-2E4053 rounded-md' onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })} />
          <select className='p-2 border border-2E4053 rounded-md' onChange={(e) => setSearchParams({ ...searchParams, propertyType: e.target.value })}>
            <option value=''>Property Type</option>
            <option value='apartment'>Apartment</option>
            <option value='house'>House</option>
            <option value='villa'>Villa</option>
            <option value='townhouse'>Townhouse</option>
          </select>
          <button className='bg-1ABC9C text-white p-2 rounded-md flex items-center gap-2' onClick={handleSearch}>
            <SearchIcon className='h-5 w-5' />
            Search
          </button>
        </div>
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* Map over search results and display property cards here */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PropertySearch;
