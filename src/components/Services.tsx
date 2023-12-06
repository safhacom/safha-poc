
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Software Development',
    description: 'We provide custom software development services tailored to your business needs.',
    image: '/images/software-development.jpg',
  },
  {
    title: 'Mobile App Development',
    description: 'Our team of experts can help you design and develop mobile applications for both iOS and Android platforms.',
    image: '/images/mobile-app-development.jpg',
  },
  {
    title: 'Web Development',
    description: 'We offer web development services to help your business establish a strong online presence.',
    image: '/images/web-development.jpg',
  },
  {
    title: 'Cloud Services',
    description: 'We provide cloud services to help your business scale and adapt to changing market demands.',
    image: '/images/cloud-services.jpg',
  },
  {
    title: 'IT Consulting',
    description: 'Our IT consulting services can help you make the most of your technology investments.',
    image: '/images/it-consulting.jpg',
  },
  {
    title: 'Cybersecurity',
    description: 'We offer cybersecurity services to protect your business from cyber threats.',
    image: '/images/cybersecurity.jpg',
  },
];

const Services = () => {
  return (
    <div className="bg-royalblue text-peach py-12 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Image src={service.image} alt={service.title} width={500} height={300} className="rounded-lg" />
              <h3 className="font-ubuntu-mono text-2xl mt-4">{service.title}</h3>
              <p className="font-ubuntu-mono text-lg mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;