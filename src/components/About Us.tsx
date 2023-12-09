
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const AboutUs: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white text-2E4053 py-16 px-4" id="about-us">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="mb-8">
          Founded in the heart of the city, DreamHouse Realty has been the cornerstone of urban and suburban real estate since 1995. Our team of dedicated professionals boasts decades of combined experience in the industry, ensuring that whether you're buying, selling, or renting, you're in the most capable hands. Our mission is to provide unparalleled service that exceeds expectations and to foster lasting relationships with our clients.
        </p>

        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
        <p className="mb-8">
          At DreamHouse Realty, we envision a world where the process of real estate transactions is seamless, transparent, and empowering for all involved parties. We strive to lead the market with innovative solutions that simplify the complexities of real estate. Our vision extends beyond property deals; we aim to be instrumental in building communities and shaping the future of living spaces.
        </p>

        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <p className="mb-8">
          We offer a comprehensive suite of real estate services tailored to meet the diverse needs of our clients. From residential sales and purchases to commercial leasing and property management, our expertise covers all facets of the real estate spectrum. Our services include market analysis, property valuation, tailored marketing strategies, negotiation expertise, and legal transaction support. We ensure a smooth and successful experience at every step of your real estate journey.
        </p>

        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <p className="mb-8">
          The DreamHouse Realty team is composed of passionate, knowledgeable, and experienced real estate professionals. Each member brings a unique set of skills and expertise to the table, ensuring that we can address any challenge and meet any need. Our agents are not only experts in real estate but also in the local markets they serve, providing clients with invaluable insights and guidance.
        </p>

        <h2 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
        <p className="mb-8">
          We are committed to setting the standard for excellence in real estate. Our approach is client-centric, focusing on creating value and delivering results that go beyond the sale. We invest in ongoing education and technology to stay at the forefront of industry trends and to provide our clients with the best possible service. Our commitment to integrity, professionalism, and excellence is the foundation of our reputation and the reason for our continued success.
        </p>

        <h2 className="text-3xl font-bold mb-6">Our Community Involvement</h2>
        <p className="mb-8">
          DreamHouse Realty is deeply rooted in the community. We believe in giving back and actively participate in local events, charities, and initiatives that improve the quality of life in the areas we serve. Our involvement ranges from sponsoring local sports teams to participating in housing development projects that benefit underprivileged communities. We are more than a real estate company; we are a vital part of the community fabric.
        </p>

        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <p className="mb-8">
          Choosing DreamHouse Realty means partnering with a team that is dedicated to your success. Our personalized approach ensures that your unique needs are met with the utmost attention and expertise. We pride ourselves on our transparency, reliability, and ability to deliver results. With DreamHouse Realty, you gain a partner that is committed to achieving your real estate goals while providing a stress-free and enjoyable experience.
        </p>

        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <p className="mb-8">
          Don't just take our word for it; hear from our satisfied clients. Our testimonials reflect the positive experiences and successful outcomes we've facilitated for individuals, families, and businesses alike. These stories highlight our dedication to service and the lasting relationships we've built. We invite you to read through our client testimonials and see why DreamHouse Realty is the trusted choice for real estate.
        </p>

        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-8">
          Ready to embark on your real estate journey? Contact DreamHouse Realty today. Our team is eager to assist you with any inquiries and to provide you with the professional guidance you deserve. Reach out to us via phone, email, or by visiting our office in person. Let's make your real estate dreams a reality.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
