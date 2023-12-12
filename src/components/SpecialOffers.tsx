import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const specialOffers = [
  {
    id: 1,
    title: "Happy Hour Deals",
    description:
      "Join us every weekday from 3 pm to 6 pm for our Happy Hour Specials! Enjoy discounted prices on select appetizers, including our famous garlic parmesan truffle fries and spicy buffalo wings. Quench your thirst with our handcrafted cocktails and selection of draft beers, all at special rates during these hours. It's the perfect way to unwind after a long day or kick-start your evening out!",
    imageUrl: "/food.png",
  },
  {
    id: 2,
    title: "Weekend Brunch Specials",
    description:
      "Every Saturday and Sunday, from 9 am to 2 pm, indulge in our delectable brunch menu featuring bottomless mimosas and Bloody Marys. Our specials include a variety of egg benedicts, fluffy pancakes, and savory omelets. Each brunch meal comes with a complimentary coffee or tea to complete your weekend treat.",
    imageUrl: "/food.png",
  },
  {
    id: 3,
    title: "Seasonal Tasting Menu",
    description:
      "Experience the flavors of the season with our exclusive Seasonal Tasting Menu. Our chef curates a five-course meal that showcases the freshest ingredients and bold flavors that epitomize the current season. This limited-time offer allows guests to enjoy a gourmet dining experience at a fraction of the cost. Wine pairings are also available to enhance your culinary journey.",
    imageUrl: "/food.png",
  },
  {
    id: 4,
    title: "Birthday Perks",
    description:
      "Celebrate your special day with us! Dine in on your birthday and receive a complimentary dessert of your choice. Make the celebration even grander by bringing four or more friends, and the birthday guest's meal is on us. Just bring an ID to verify your birth date, and let us treat you to an unforgettable birthday meal.",
    imageUrl: "/food.png",
  },
  {
    id: 5,
    title: "Loyalty Program Rewards",
    description:
      "Become a member of our Loyalty Program and start earning points with every visit. Accumulate points to unlock exclusive rewards such as free appetizers, main courses, and even discounts on your entire bill. Members also receive first access to new menu items and special invitation-only events. Sign up today and start enjoying the benefits on your next visit.",
    imageUrl: "/food.png",
  },
  {
    id: 6,
    title: "Midweek Dinner Special",
    description:
      "Make your midweek dining extra special with our Wednesday Night Dinner Special. We're offering a curated three-course meal that includes an appetizer, main course, and dessert at a set price. This is a wonderful opportunity to sample our menu favorites and seasonal dishes while enjoying a night out that won't break the bank.",
    imageUrl: "/food.png",
  },
  {
    id: 7,
    title: "Family Style Meals",
    description:
      "Gather your family and friends for a feast to remember with our Family Style Meals available every day of the week. Choose from a selection of shared platters that serve 4-6 people, featuring a variety of our most popular dishes. It's a hassle-free dining experience that brings everyone together over delicious food, perfect for any family gathering or special occasion.",
    imageUrl: "/food.png",
  },
  {
    id: 8,
    title: "Early Bird Dinner Discount",
    description:
      "Dine with us between 5 pm and 6:30 pm and enjoy our Early Bird Dinner Discount. Guests who order from our special Early Bird Menu will receive a 15% discount on their meals. This menu includes a selection of our most beloved entrees, salads, and desserts, making it an ideal choice for those who prefer to eat dinner at a quieter and more affordable time.",
    imageUrl: "/food.png",
  },
];

const SpecialOffers = () => {
  return (
    <section className="bg-[#FFF8F0] p-8" id="special-offers">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-[#9E4624] mb-6">
          Special Offers
        </h2>
        <p className="text-[#273D2F] mb-12">
          Discover our exclusive deals and indulge in an unforgettable dining
          experience.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialOffers.map((offer) => (
          <motion.div
            key={offer.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#F8F5F1] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <Image
              src={offer.imageUrl}
              alt={offer.title}
              width={400}
              height={250}
              objectFit="cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#C59A77] mb-4">
                {offer.title}
              </h3>
              <p className="text-[#273D2F] mb-4">{offer.description}</p>
              <button className="bg-[#DAA49A] text-white font-bold py-2 px-4 rounded hover:bg-[#C59A77] transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
