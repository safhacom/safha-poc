import { motion } from 'framer-motion';
import Image from 'next/image';

const offers = [
  {
    title: 'Happy Hour',
    description: 'Enjoy 2-for-1 cocktails every weekday from 5-7pm.',
    image: '/HappyHour_SpecialOffers.png'
  },
  {
    title: 'Weekend Brunch',
    description: 'Free coffee with any brunch item on Saturdays and Sundays.',
    image: '/WeekendBrunch_SpecialOffers.png'
  },
  {
    title: 'Birthday Special',
    description: 'Complimentary dessert for birthday guests.',
    image: '/BirthdaySpecial_SpecialOffers.png'
  },
  {
    title: 'Loyalty Program',
    description: 'Earn points with every visit and redeem for rewards.',
    image: '/LoyaltyProgram_SpecialOffers.png'
  },
  {
    title: 'Early Bird Dinner',
    description: '10% off your total bill when dining from 4-6pm.',
    image: '/EarlyBirdDinner_SpecialOffers.png'
  }
];

const SpecialOffers = () => (
  <section className='bg-white text-darkBlue p-8'>
    <div className='max-w-6xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6'>Special Offers</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='bg-lightGray rounded-lg overflow-hidden shadow-lg relative'
          >
            <Image src={offer.image} alt={offer.title} width={300} height={200} className='object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold text-deepMaroon mb-2'>{offer.title}</h3>
              <p className='text-sm'>{offer.description}</p>
              <button className='mt-4 bg-salmonPink text-white py-2 px-4 rounded hover:bg-deepMaroon transition-colors'>Learn More</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialOffers;