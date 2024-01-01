import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='relative bg-white overflow-hidden'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='flex flex-wrap items-center lg:justify-between justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0'
          >
            <h1 className='text-2xl lg:text-5xl font-bold leading-tight text-2E4052'>
              To provide a unique dining experience with a menu that delights the palate, a setting that captivates the senses, and service that warms the heart.
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className='w-full lg:w-1/2'
          >
            <div className='relative h-64 lg:h-96 w-full border border-F2F4F3 rounded-lg overflow-hidden'>
              <Image
                src='/Restaurant_Hero_bg.png'
                alt='Restaurant Hero Background'
                layout='fill'
                objectFit='cover'
                className='transition-opacity duration-300 ease-in-out'
              />
              <div className='absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm'></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;