
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUs = () => {
  const aboutUsContent = [
    {
      title: 'Our Story',
      description: 'Learn about our journey, from our humble beginnings to becoming a leading tech company.',
      image: '/images/our-story.jpg',
    },
    {
      title: 'Our Mission',
      description: 'Discover our mission to revolutionize the tech industry and how we plan to achieve it.',
      image: '/images/our-mission.jpg',
    },
    {
      title: 'Our Team',
      description: 'Meet the brilliant minds behind our innovative tech solutions.',
      image: '/images/our-team.jpg',
    },
    {
      title: 'Our Values',
      description: 'Understand the core values that guide our actions and decisions.',
      image: '/images/our-values.jpg',
    },
    {
      title: 'Our Technology',
      description: 'Explore the cutting-edge technology that powers our products and services.',
      image: '/images/our-technology.jpg',
    },
    {
      title: 'Careers',
      description: 'Find out how you can join our team and contribute to our mission.',
      image: '/images/careers.jpg',
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with us for any inquiries or support.',
      image: '/images/contact-us.jpg',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center text-royalblue bg-peach p-10">
      {aboutUsContent.map((content, index) => (
        <motion.div
          key={index}
          className="w-full md:w-1/3 p-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="clip-parallel bg-white p-5">
            <Image src={content.image} alt={content.title} layout="responsive" width={500} height={300} />
            <h2 className="font-ubuntu-mono text-2xl mt-5">{content.title}</h2>
            <p className="font-ubuntu-mono text-lg mt-2">{content.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutUs;