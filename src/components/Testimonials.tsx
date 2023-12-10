import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/solid";

const testimonials = [
  {
    title: "Ambiance and Decor",
    description:
      "From the moment we stepped into the restaurant, the warm lighting and the gentle hum of conversation set a welcoming tone. The decor was a harmonious blend of rustic charm and modern elegance, creating an atmosphere that was both cozy and chic. Each table was meticulously set, and the attention to detail was evident in the hand-selected artwork adorning the walls. It was the perfect setting for our anniversary dinner, and it made our night truly special.",
    image: "/person.png",
    name: "John & Jane Doe",
    date: "March 20, 2023",
    rating: 5,
  },
  // ... other testimonials
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="bg-creamy-white py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-charcoal-gray mb-4">
            What Our Guests Say
          </h2>
          <p className="text-charcoal-gray">
            Real experiences from our valued customers
          </p>
        </motion.div>
        <div className="flex justify-center items-center">
          <ChevronLeftIcon
            className="h-8 w-8 text-charcoal-gray cursor-pointer"
            onClick={handlePrev}
          />
          <motion.div
            className="overflow-hidden w-full max-w-4xl mx-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-6 mx-2 rounded-lg shadow-lg ${
                  index === activeIndex ? "block" : "hidden"
                }`}
                style={{
                  backgroundColor: index % 2 === 0 ? "#E53E3E" : "#FD7E14",
                  color: "#F5F5F5",
                }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full border-4 border-olive-green mb-4"
                />
                <blockquote className="text-xl italic mb-4">
                  {testimonial.description}
                </blockquote>
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-olive-green" />
                  ))}
                </div>
                <cite className="text-sm">
                  {testimonial.name} - {testimonial.date}
                </cite>
              </div>
            ))}
          </motion.div>
          <ChevronRightIcon
            className="h-8 w-8 text-charcoal-gray cursor-pointer"
            onClick={handleNext}
          />
        </div>
        <div className="text-center mt-8">
          <button className="bg-warm-red text-white font-bold py-2 px-4 rounded-full hover:bg-sunset-orange transition-colors">
            Write a Testimonial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
