import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const events = [
  {
    title: "Weekly Specials",
    description:
      "Every week, our chefs curate a unique menu that showcases the freshest seasonal ingredients and innovative culinary techniques. From Monday to Sunday, guests can indulge in exclusive dishes that aren't available on our regular menu.",
    imageUrl: "/food.png",
  },
  {
    title: "Live Music Nights",
    description:
      "Join us for an enchanting evening of live music every Friday and Saturday night. Our restaurant transforms into a vibrant venue featuring talented local musicians and bands across various genres.",
    imageUrl: "/food.png",
  },
  {
    title: "Wine Tasting Events",
    description:
      "Our monthly wine tasting events are a haven for oenophiles and novices alike. We partner with renowned vineyards and sommeliers to bring you an evening of exploration and education.",
    imageUrl: "/food.png",
  },
  {
    title: "Cooking Classes",
    description:
      "Ever wanted to learn how to cook like a professional chef? Our interactive cooking classes are held monthly and offer a hands-on experience in the culinary arts.",
    imageUrl: "/food.png",
  },
  {
    title: "Holiday Celebrations",
    description:
      "Celebrate the festive season with us! Our restaurant offers special menus and themed decor for major holidays such as Christmas, New Year's Eve, Valentine's Day, and Thanksgiving.",
    imageUrl: "/food.png",
  },
  {
    title: "Private Parties and Functions",
    description:
      "Our restaurant is the ideal venue for your next private event. Whether it's a birthday, anniversary, corporate event, or wedding reception, we offer customizable packages to suit your needs.",
    imageUrl: "/food.png",
  },
];

const EventCard: FC<{ event: (typeof events)[0] }> = ({ event }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-creamy-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <Image
      src={event.imageUrl}
      alt={event.title}
      width={300}
      height={200}
      className="rounded-t-lg"
    />
    <h3 className="text-charcoal-gray text-lg font-bold mt-2">{event.title}</h3>
    <p className="text-charcoal-gray">{event.description}</p>
    <button className="mt-4 bg-warm-red text-white py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300">
      Reserve Now
    </button>
  </motion.div>
);

const EventsSection: FC = () => (
  <section className="py-12 bg-creamy-white" id="events">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-charcoal-gray text-3xl font-bold text-center mb-8"
      >
        Exclusive Events at Our Table
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-charcoal-gray text-center mb-12"
      >
        Discover the unique culinary experiences and special occasions that make
        dining with us a memorable adventure.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  </section>
);

export default EventsSection;
