
import { motion } from 'framer-motion';
import Image from 'next/image';

const Home = () => {
  const articles = [
    {
      title: 'About Us',
      description: 'Learn more about our company, our mission, and our commitment to providing high-quality tech solutions.',
      image: '/images/about-us.jpg',
    },
    {
      title: 'Our Services',
      description: 'Explore the wide range of tech services we offer, from software development to IT consulting.',
      image: '/images/services.jpg',
    },
    {
      title: 'Our Team',
      description: 'Meet the talented individuals behind our success. Our team is composed of experienced tech professionals who are passionate about what they do.',
      image: '/images/team.jpg',
    },
    {
      title: 'Our Projects',
      description: "Take a look at some of the projects we've completed. We take pride in our work and are always ready to take on new challenges.",
      image: '/images/projects.jpg',
    },
    {
      title: 'Contact Us',
      description: "Get in touch with us. We're always ready to listen to your needs and provide the best tech solutions.",
      image: '/images/contact-us.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 font-ubuntu-mono">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="bg-royalblue text-peach p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.5 }}
          >
            <Image src={article.image} alt={article.title} width={500} height={300} className="rounded-lg" />
            <h2 className="text-2xl mt-4">{article.title}</h2>
            <p className="mt-2">{article.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;


