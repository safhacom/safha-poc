
import { motion } from 'framer-motion';
import Image from 'next/image';

const ContactUs = () => {
  const contactItems = [
    { title: 'General Inquiries', description: 'For any general inquiries or questions about our products and services, please fill out our contact form.' },
    { title: 'Technical Support', description: 'If you are experiencing any technical issues or need assistance with your product, please visit our support page or contact our support team.' },
    { title: 'Sales Inquiries', description: 'For any sales-related inquiries, including pricing and availability, please contact our sales team.' },
    { title: 'Partnership Opportunities', description: 'If you are interested in partnering with us or have a business proposal, please contact our business development team.' },
    { title: 'Press Inquiries', description: 'For any media-related inquiries, please contact our press team.' },
    { title: 'Careers', description: 'If you are interested in joining our team, please visit our careers page for current job openings.' }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center text-royalblue bg-peach font-ubuntu-mono">
      {contactItems.map((item, index) => (
        <motion.div
          key={index}
          className="w-full md:w-1/3 p-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="bg-white shadow-lg rounded-lg px-4 py-6 text-center">
            <Image src="/path/to/image.jpg" alt={item.title} width={100} height={100} />
            <h2 className="text-xl font-medium text-gray-700 mt-4">{item.title}</h2>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactUs;
