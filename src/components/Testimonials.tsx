import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    title: "Customer Satisfaction",
    description:
      "Hear from our satisfied customers who have seen significant improvements in their operations after implementing our solutions.",
    image: "/path/to/image1.jpg",
  },
  {
    title: "Case Studies",
    description:
      "Read our case studies to understand how we have helped businesses overcome their tech challenges and achieve their goals.",
    image: "/path/to/image2.jpg",
  },
  {
    title: "Success Stories",
    description:
      "Explore our success stories to see how we have transformed businesses with our innovative tech solutions.",
    image: "/path/to/image3.jpg",
  },
  {
    title: "Client Testimonials",
    description:
      "Check out the testimonials from our clients who are happy to share their positive experiences with our services.",
    image: "/path/to/image4.jpg",
  },
  {
    title: "Industry Recognition",
    description:
      "We are proud to be recognized by leading industry experts for our commitment to delivering high-quality tech solutions.",
    image: "/path/to/image5.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-wrap justify-center items-center text-royalblue bg-peach p-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="w-full md:w-1/3 p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <Image
              src={testimonial.image}
              alt={testimonial.title}
              width={500}
              height={300}
              objectFit="cover"
              className="rounded"
            />
            <h2 className="font-ubuntu-mono text-2xl mb-2">
              {testimonial.title}
            </h2>
            <p className="font-ubuntu-mono text-base">
              {testimonial.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Testimonials;
