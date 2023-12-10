import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const AboutUs: React.FC = () => {
  const textVariants = {
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
        variants={textVariants}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
        <p className="text-5D6D7E mb-4">
          Founded in the heart of the city, DreamHomes Realty has been the
          cornerstone of the real estate market for over two decades. Our team
          of dedicated professionals is committed to providing exceptional
          service, whether you're buying, selling, or renting. With a deep
          understanding of the market trends and a passion for real estate, we
          ensure that every client's journey to finding their dream home or
          investment is seamless and successful.
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <Image
              src="/about.png"
              alt="Our Team"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-5D6D7E mb-4">
              At DreamHomes Realty, our mission is to redefine the standard of
              real estate service. We strive to create a personalized experience
              for each client, focusing on their unique needs and aspirations.
              Our goal is to build lasting relationships based on trust,
              integrity, and unparalleled industry knowledge. We aim to not only
              meet but exceed expectations, ensuring that every transaction is
              handled with professionalism and care.
            </p>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-5D6D7E mb-4">
              We envision a future where the process of buying, selling, or
              renting properties is completely transparent, efficient, and
              stress-free. DreamHomes Realty is dedicated to leading the charge
              in innovation within the real estate sector, utilizing
              cutting-edge technology and data-driven strategies to empower our
              clients. We aspire to be the go-to real estate company that sets
              the benchmark for excellence and customer satisfaction.
            </p>
            <h3 className="text-3xl font-bold mb-4">Our Values</h3>
            <p className="text-5D6D7E mb-4">
              Integrity, Commitment, and Excellence are the core values that
              define DreamHomes Realty. We believe in doing the right thing,
              even when no one is watching, and upholding the highest ethical
              standards. Our commitment to our clients is unwavering, as we
              tirelessly work to achieve their real estate goals. Excellence is
              our minimum standard, and we continuously seek to improve our
              services, ensuring that we deliver only the best to our clients.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
