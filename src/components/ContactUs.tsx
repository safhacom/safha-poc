import { motion } from 'framer-motion';
import Image from 'next/image';

const ContactUs = () => {
  const contactInfo = [
    {
      title: 'Get in Touch',
      description: "Questions or feedback? We'd love to hear from you. Reach out to us via phone or email.",
      imgPath: 'get_in_touch_contact_us.png',
    },
    {
      title: 'Reservations',
      description: 'Ready to dine with us? Book your table easily online or give us a call.',
      imgPath: 'reservations_contact_us.png',
    },
    {
      title: 'Events & Catering',
      description: 'Hosting an event? Let us cater to your needs. Contact us for custom menus and quotes.',
      imgPath: 'events_catering_contact_us.png',
    },
    {
      title: 'Careers',
      description: 'Join our team! Explore career opportunities and apply directly through our website.',
      imgPath: 'careers_contact_us.png',
    },
    {
      title: 'Location & Hours',
      description: "Find us on the map and check out our opening hours. We're excited to welcome you.",
      imgPath: 'location_hours_contact_us.png',
    },
  ];

  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='contact-card'
          >
            <div className='p-6 space-y-4'>
              <h2 className='contact-title'>{info.title}</h2>
              <p className='contact-description'>{info.description}</p>
              <button className='contact-button'>Learn More</button>
            </div>
            <div className='absolute bottom-0 right-0 p-4'>
              <Image src={`/${info.imgPath}`} alt={info.title} width={100} height={100} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;