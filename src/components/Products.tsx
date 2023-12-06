
import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    title: 'Cloud Services',
    description: 'Our cloud services offer secure, scalable, and reliable solutions for your business. We provide infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS) to meet all your cloud computing needs.',
    image: '/images/cloud-services.jpg'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'We offer comprehensive cybersecurity solutions to protect your business from cyber threats. Our services include threat detection, incident response, and security risk management.',
    image: '/images/cybersecurity.jpg'
  },
  {
    title: 'Data Analytics',
    description: 'Our data analytics solutions help you make data-driven decisions. We provide tools for data collection, processing, analysis, and visualization.',
    image: '/images/data-analytics.jpg'
  },
  {
    title: 'Artificial Intelligence',
    description: 'We offer AI solutions to automate your business processes and gain insights from your data. Our AI services include machine learning, natural language processing, and computer vision.',
    image: '/images/ai.jpg'
  },
  {
    title: 'Software Development',
    description: 'We provide custom software development services to meet your unique business needs. Our team of experienced developers can build web, mobile, and desktop applications.',
    image: '/images/software-development.jpg'
  },
  {
    title: 'IT Consulting',
    description: 'Our IT consulting services help you leverage technology to achieve your business goals. We offer strategic planning, project management, and IT infrastructure services.',
    image: '/images/it-consulting.jpg'
  }
];

const Products = () => {
  return (
    <div className="flex flex-wrap justify-center text-center text-royalblue bg-peach font-ubuntu-mono">
      {products.map((product, index) => (
        <motion.div
          key={index}
          className="w-full md:w-1/3 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <Image src={product.image} alt={product.title} width={500} height={300} />
            <h2 className="font-bold text-2xl mb-4">{product.title}</h2>
            <p>{product.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Products;


