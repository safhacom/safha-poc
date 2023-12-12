import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

const AboutUs: FC = () => {
  return (
    <section
      className="bg-[#FFF8F0] text-[#273D2F] py-12 px-4 md:px-8 lg:px-16"
      id="about-us"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-[#C59A77] mb-6">Our Story</h2>
        <p className="mb-4">
          Nestled in the heart of the city, our restaurant's story began over a
          decade ago with a simple mission: to serve authentic, delicious
          cuisine in a welcoming atmosphere. Our founders, two culinary
          enthusiasts with a shared passion for food and community, embarked on
          a journey to create a dining experience that would celebrate local
          flavors and global culinary traditions. Over the years, we've grown
          from a cozy eatery to a beloved dining destination, all while
          maintaining the warmth and personal touch that our patrons have come
          to cherish. Our walls are adorned with photographs that chronicle our
          journey, capturing moments of joy, laughter, and the many faces that
          have contributed to our story.
        </p>
        <div className="flex justify-center mb-8">
          <Image
            src="/bg_res.png"
            alt="Our Story"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        <h3 className="text-2xl font-bold text-[#C59A77] mb-4">
          Our Philosophy
        </h3>
        <p className="mb-4">
          At the core of our restaurant is a philosophy that intertwines the art
          of cooking with the joy of eating. We believe that a meal is not just
          about the food on the plate but the memories it creates. Our chefs are
          dedicated to sourcing the freshest ingredients, supporting local
          farmers, and crafting dishes that inspire and delight. We take pride
          in our innovative menu that pays homage to classic recipes while
          embracing contemporary twists. Our commitment to sustainability and
          community is unwavering, as we strive to make a positive impact both
          on the environment and in the lives of our guests.
        </p>

        <h3 className="text-2xl font-bold text-[#C59A77] mb-4">Our Team</h3>
        <p className="mb-4">
          Our team is the heartbeat of our restaurant. From the talented chefs
          in the kitchen to the attentive staff on the floor, each member plays
          a crucial role in delivering an exceptional dining experience. Our
          chefs bring a wealth of experience and a spirit of innovation to our
          kitchen, constantly experimenting with flavors and techniques to craft
          dishes that are both familiar and surprising. Our service team is
          trained to provide not just service, but hospitality that makes every
          guest feel at home. We invest in our staff's growth and well-being
          because we believe that a happy team leads to happy guests.
        </p>

        <h3 className="text-2xl font-bold text-[#C59A77] mb-4">Our Menu</h3>
        <p className="mb-4">
          Our menu is a reflection of our culinary journey, offering a variety
          of dishes that cater to diverse palates and dietary preferences. Each
          dish tells a story, whether it's a family recipe passed down through
          generations or a creative fusion inspired by our chefs' travels. We
          take pride in our seasonal menu, which features the best of what the
          current harvest has to offer, ensuring that every ingredient shines.
          From appetizers that awaken the palate to entrees that satisfy the
          soul and desserts that indulge the sweet tooth, our menu is designed
          to take you on a flavorful adventure.
        </p>

        <h3 className="text-2xl font-bold text-[#C59A77] mb-4">
          Our Commitment to Quality
        </h3>
        <p className="mb-4">
          Quality is the cornerstone of everything we do. We meticulously select
          our ingredients, choosing organic and non-GMO options whenever
          possible. Our kitchen adheres to the highest standards of cleanliness
          and food safety, ensuring that every meal is not only delicious but
          also prepared with the utmost care. We maintain strong relationships
          with our suppliers, ensuring that we receive the best produce, meats,
          and seafood available. Our dedication to quality extends beyond the
          plate, as we carefully curate our wine list, craft cocktails, and
          artisanal beverages to complement our culinary offerings.
        </p>

        <h3 className="text-2xl font-bold text-[#C59A77] mb-4">
          Join Our Community
        </h3>
        <p className="mb-4">
          We believe that dining is a communal experience, and our restaurant is
          a place where connections are made and stories are shared. We invite
          you to join our community, whether it's for a casual lunch, a family
          celebration, or a special date night. Follow us on social media to
          stay updated on our latest events, seasonal specials, and culinary
          workshops. Sign up for our newsletter to receive exclusive offers and
          behind-the-scenes looks. At our restaurant, you're not just a
          customer; you're part of a family that celebrates life's delicious
          moments together.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
