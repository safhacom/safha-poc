import { FC } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  title: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    title: "Ambiance and Decor",
    description:
      "From the moment our guests walk through the doors, they are enveloped in the warm, inviting atmosphere of our dining space. The decor is a harmonious blend of classic and contemporary styles, creating a unique environment that appeals to a wide range of tastes. Soft lighting and comfortable seating encourage diners to relax and enjoy their experience. Our patrons often compliment the thoughtful touches that reflect our commitment to creating a memorable ambiance, such as the hand-selected artwork adorning the walls and the gentle music that complements the mood of the evening.",
  },
  {
    title: "Exceptional Service",
    description:
      "Our service team is the heart of our restaurant. Highly trained and always attentive, they are dedicated to providing an exceptional dining experience. Guests frequently praise the personalized attention they receive, noting that staff members are quick to offer recommendations, accommodate special requests, and ensure that each visit is special. Whether celebrating a milestone or enjoying a casual meal, our guests know that they can expect service that is both professional and genuinely friendly. The consistent five-star reviews we receive for our service are a testament to the passion and hard work of our team.",
  },
  {
    title: "Culinary Excellence",
    description:
      "At the core of our restaurant's acclaim is our culinary excellence. Our menu is a celebration of flavors, featuring innovative dishes that showcase the freshest local ingredients. Our executive chef is a maestro of the kitchen, skillfully blending traditional techniques with modern twists to delight the palate. Guests rave about signature dishes that have become synonymous with our name, as well as the seasonal specials that surprise and excite with every visit. The meticulous presentation of each plate is a visual feast, ensuring that the dining experience is as aesthetically pleasing as it is delicious.",
  },
  {
    title: "Beverage Selection",
    description:
      "Our beverage program is designed to complement our culinary offerings perfectly. With an extensive selection of fine wines, craft beers, and artisanal cocktails, there is something to suit every taste and occasion. Our sommelier is always on hand to guide guests through our wine list, helping them to find the perfect pairing for their meal. Patrons often express their appreciation for the knowledge and expertise of our bartenders, who craft each cocktail with precision and flair. The thoughtfulness and variety of our beverage selection are frequently highlighted in reviews, making it clear that our drinks are more than an accompaniment�they are an integral part of the dining experience.",
  },
  {
    title: "Sustainability and Community",
    description:
      "Our commitment to sustainability and community involvement is a point of pride for us and a highlight for many of our guests. We source ingredients from local farms and producers, reducing our carbon footprint and supporting the local economy. Our sustainable seafood program ensures that we are serving only the best, responsibly caught fish and shellfish. Our guests often comment on the freshness and quality of our ingredients, as well as their appreciation for our efforts to operate ethically and sustainably. Additionally, our involvement in community events and charitable initiatives shows our dedication to giving back, a value that resonates with our patrons.",
  },
];

const Testimonials: FC = () => {
  return (
    <section className="bg-[#FFF8F0] text-[#273D2F] p-8" id="testimonials">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-[#C59A77] text-4xl font-ubuntu-mono mb-4">
          Guest Experiences
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#F8F5F1] rounded-lg shadow-lg p-6"
          >
            <h3 className="text-[#9E4624] text-2xl font-ubuntu-mono mb-3">
              {testimonial.title}
            </h3>
            <p className="text-[#273D2F]">{testimonial.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
