import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface Testimonial {
  title: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    title: "Ambiance and Decor",
    description:
      "The cozy atmosphere and chic decor made our anniversary dinner unforgettable.",
  },
  {
    title: "Exceptional Service",
    description:
      "The staff went above and beyond to accommodate our dietary restrictions.",
  },
  {
    title: "Culinary Delight",
    description:
      "Every dish was a masterpiece, bursting with flavor and beautifully presented.",
  },
  {
    title: "Perfect for Families",
    description:
      "A kid-friendly menu and entertainment options made dining out with children a breeze.",
  },
  {
    title: "Romantic Getaway",
    description:
      "The intimate setting and exquisite wine selection created the perfect backdrop for our date night.",
  },
  {
    title: "Business Meetings",
    description:
      "Impressed clients with top-notch cuisine in a professional atmosphere.",
  },
  {
    title: "Local Ingredients",
    description:
      "Fresh, locally-sourced ingredients are the secret to their incredible dishes.",
  },
  {
    title: "Vegan Options",
    description:
      "The variety of vegan dishes is impressive and delicious, catering to all preferences.",
  },
  {
    title: "Seasonal Specials",
    description:
      "The chef's seasonal specials always offer something new and exciting to try.",
  },
  {
    title: "Customer Loyalty",
    description:
      "After years of dining here, the quality and service have remained consistently excellent.",
  },
];

const Testimonials: FC = () => (
  <section className="bg-cream text-charcoal p-8">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-serif text-burgundy mb-4">
        Guest Experiences
      </h2>
      <p className="text-lg">Discover why our guests love dining with us.</p>
    </motion.div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:bg-cream transition-all"
        >
          <h3 className="text-lg font-bold text-burgundy mb-2">
            {testimonial.title}
          </h3>
          <p>{testimonial.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;
