// components/Testimonials.tsx
import { FC } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  title: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    title: "Seamless Integration",
    description:
      "Our software easily integrates with existing systems, enhancing workflow without the need for extensive training or downtime.",
  },
  {
    title: "Innovative Solutions",
    description:
      "We're constantly pushing the boundaries of what's possible, providing cutting-edge solutions that keep our clients ahead of the competition.",
  },
  {
    title: "Exceptional Support",
    description:
      "Our dedicated support team is always ready to help, ensuring any issues are resolved quickly and efficiently.",
  },
  {
    title: "Proven Reliability",
    description:
      "With a 99.9% uptime guarantee, our clients trust us to keep their operations running smoothly around the clock.",
  },
  {
    title: "Customer Success Stories",
    description:
      "Hear from our satisfied customers who have transformed their businesses using our technology solutions.",
  },
  {
    title: "Industry Recognition",
    description:
      "Our commitment to excellence has been recognized by industry awards and accolades, reflecting our position as a leader in tech innovation.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Testimonials: FC = () => {
  return (
    <section className="bg-ECEFF1 text-212121 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold text-0D47A1 mb-2">
                {testimonial.title}
              </h3>
              <p className="text-sm text-212121">{testimonial.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
