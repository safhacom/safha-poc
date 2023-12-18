import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const testimonials = [
  {
    title: "Delicious Meals",
    description:
      "The steak was cooked to perfection, and the seasoning was spot on. Best meal I've had in ages!",
  },
  {
    title: "Cozy Atmosphere",
    description:
      "The ambiance is just perfect for a romantic dinner. Soft lighting and comfortable seating made our evening special.",
  },
  {
    title: "Exceptional Service",
    description:
      "The staff were attentive and friendly, making us feel welcome. They went above and beyond to ensure we had a great experience.",
  },
  {
    title: "Great Value",
    description:
      "Amazing quality food at reasonable prices. We got more than what we paid for!",
  },
  {
    title: "Family Friendly",
    description:
      "My kids loved the children's menu, and the play area kept them entertained while we dined.",
  },
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
    <section className="bg-cream py-12" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-dark-charcoal mb-4">
            What Our Guests Say
          </h2>
          <p className="text-muted-rose">
            Real testimonials from our satisfied customers
          </p>
        </motion.div>

        <div className="flex justify-center items-center">
          <ChevronLeftIcon
            className="testimonial-carousel-button h-8 w-8 cursor-pointer"
            onClick={handlePrev}
          />
          <motion.div
            key={activeIndex}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="testimonial-card"
          >
            <h3 className="testimonial-title">
              {testimonials[activeIndex].title}
            </h3>
            <p className="testimonial-description">
              {testimonials[activeIndex].description}
            </p>
          </motion.div>
          <ChevronRightIcon
            className="testimonial-carousel-button h-8 w-8 cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
