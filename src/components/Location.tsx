import { motion } from 'framer-motion';
import Image from 'next/image';

const LocationSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className='py-12 px-4 bg-white' id='location'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/** Address Card **/}
        <motion.div variants={cardVariants} initial='hidden' whileInView='visible' className='card'>
          <div className='card-header'>Find Us</div>
          <div className='card-content'>
            <Image src='/FindUs_Location.png' alt='Find Us' width={100} height={100} />
            <p className='text-dark-blue'>123 Eats Street, Foodville, YumState, 12345</p>
          </div>
        </motion.div>

        {/** Opening Hours Card **/}
        <motion.div variants={cardVariants} initial='hidden' whileInView='visible' className='card'>
          <div className='card-header'>Opening Hours</div>
          <div className='card-content'>
            <Image src='/OpeningHours_Location.png' alt='Opening Hours' width={100} height={100} />
            <p className='text-dark-blue'>Mon-Fri: 11am - 10pm<br />Sat-Sun: 9am - 11pm</p>
          </div>
        </motion.div>

        {/** Parking Card **/}
        <motion.div variants={cardVariants} initial='hidden' whileInView='visible' className='card'>
          <div className='card-header'>Parking</div>
          <div className='card-content'>
            <Image src='/Parking_Location.png' alt='Parking' width={100} height={100} />
            <p className='text-dark-blue'>Free parking available on-site</p>
          </div>
        </motion.div>

        {/** Public Transit Card **/}
        <motion.div variants={cardVariants} initial='hidden' whileInView='visible' className='card'>
          <div className='card-header'>Public Transit</div>
          <div className='card-content'>
            <Image src='/PublicTransit_Location.png' alt='Public Transit' width={100} height={100} />
            <p className='text-dark-blue'>Bus 42 & 52 stop nearby</p>
          </div>
        </motion.div>

        {/** Accessibility Card **/}
        <motion.div variants={cardVariants} initial='hidden' whileInView='visible' className='card'>
          <div className='card-header'>Accessibility</div>
          <div className='card-content'>
            <Image src='/Accessibility_Location.png' alt='Accessibility' width={100} height={100} />
            <p className='text-dark-blue'>Wheelchair accessible entrance and facilities</p>
          </div>
        </motion.div>

        {/** Map Card **/}
        <motion.div variants={cardVariants} initial='hidden' whileInView='visible' className='card'>
          <div className='card-header'>Map</div>
          <div className='card-content'>
            <Image src='/Map_Location.png' alt='Map' width={100} height={100} />
            <p className='text-dark-blue'>Interactive map with directions</p>
          </div>
        </motion.div>

        {/** Contact Card **/}
        <motion.div variants={cardVariants} initial='hidden' whileInView='visible' className='card'>
          <div className='card-header'>Contact</div>
          <div className='card-content'>
            <Image src='/Contact_Location.png' alt='Contact' width={100} height={100} />
            <p className='text-dark-blue'>Call us at (123) 456-7890<br />or email dine@restaurant.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;