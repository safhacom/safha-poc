import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail } from "react-feather";

const LocationSection = () => {
  return (
    <section className="bg-creamy-white text-charcoal-gray py-10 px-5 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">
          Welcome to Our Prime Location
        </h2>
        <p className="mb-6">
          Nestled in the heart of the city, our restaurant offers a prime spot
          for both locals and tourists alike. Easily accessible by public
          transportation, our location is just a stone's throw away from the
          bustling city center, surrounded by vibrant shops and cultural
          landmarks. Our welcoming facade and the warm glow from our windows
          invite you in for an unforgettable dining experience.
        </p>
        <div className="relative mb-6">
          <Image
            src="/map.png"
            alt="Map"
            layout="responsive"
            width={700}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <MapPin color="#FD7E14" size={40} />
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg">
              Contact Information and Reservations
            </h3>
            <p className="flex items-center">
              <Phone size={16} className="mr-2" />
              +1 (555) 123-4567
            </p>
            <p className="flex items-center">
              <Mail size={16} className="mr-2" />
              contact@example.com
            </p>
          </div>
          <button className="bg-olive-green text-creamy-white font-bold py-2 px-4 rounded-lg shadow hover:bg-green-700 transition-colors">
            Get Directions
          </button>
        </div>
        <div className="space-y-4">
          <p>
            Elegant Interior and Ambiance: Step inside and be greeted by the
            elegant decor that perfectly balances modernity and tradition. Our
            restaurant's interior is designed to provide a comfortable and
            luxurious dining atmosphere. From the plush seating to the ambient
            lighting, every detail has been carefully curated to enhance your
            meal and create a memorable ambiance.
          </p>
          <p>
            Private Dining and Events: Looking for an exclusive space for your
            special occasions? Our restaurant features private dining rooms that
            can be reserved for intimate gatherings, business meetings, or
            celebratory events. Each room is equipped with state-of-the-art
            audiovisual technology, ensuring that your event runs smoothly and
            leaves a lasting impression on your guests.
          </p>
          <p>
            Outdoor Seating with a View: Enjoy your meal al fresco in our
            outdoor seating area, which boasts a stunning view of the cityscape.
            Whether you're looking to enjoy a quiet dinner under the stars or a
            lively brunch in the sunshine, our terrace provides the perfect
            setting. The outdoor area is also pet-friendly, so feel free to
            bring along your furry companions.
          </p>
          <p>
            Convenient Parking and Accessibility: We understand the importance
            of convenience, which is why our restaurant offers ample parking
            space for our guests. In addition, our location is fully accessible,
            with ramps and facilities to accommodate all our patrons, ensuring a
            comfortable experience for everyone.
          </p>
          <p>
            Local Attractions and Activities: Make the most of your visit by
            exploring the local attractions surrounding our restaurant. From art
            galleries and theaters to parks and historical sites, there's plenty
            to see and do within walking distance. Our staff is more than happy
            to provide recommendations and assist with any arrangements you may
            need.
          </p>
          <p>
            Sustainable Practices and Community Engagement: We take pride in our
            commitment to sustainability and community involvement. Our
            restaurant is not just a place to eat; it's a part of the
            neighborhood. We source ingredients from local farmers, participate
            in community events, and implement eco-friendly practices to
            minimize our environmental footprint.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection;
