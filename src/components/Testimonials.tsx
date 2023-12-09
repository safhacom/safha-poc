import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    title: "First-Time Homebuyer Joy",
    description:
      "As a first-time homebuyer, the process of finding and purchasing a home was initially overwhelming. However, the team at DreamHouse Realty transformed my anxiety into excitement. From the initial consultation to the final closing, their agents provided me with comprehensive market analysis, insightful advice on neighborhood selection, and a list of properties that matched my desires and budget. Their patience and dedication were evident as they guided me through each step, ensuring I understood every detail. The moment I walked into what is now my home, I knew it was the one. Thanks to DreamHouse Realty, I am now a proud homeowner, and I couldn't be happier with my purchase and the exceptional service I received.",
    image: "/person.png", // Replace with the path to your image
  },
  // ... other testimonials
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold text-2E4053 mb-10"
        >
          What Our Clients Say
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="w-full md:w-1/2 lg:w-1/3 p-4"
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="bg-F0F2F5 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.title}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-lg font-bold text-2E4053 mb-2">
                  {testimonial.title}
                </h3>
                <p className="text-md text-5D6D7E">{testimonial.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {testimonials[activeTestimonial] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-lg text-5D6D7E italic">
              "{testimonials[activeTestimonial].description}"
            </p>
            <button className="mt-4 bg-1ABC9C text-white py-2 px-4 rounded-full">
              Read More
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
