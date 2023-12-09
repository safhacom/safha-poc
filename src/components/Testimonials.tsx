import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  title: string;
  description: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    title: "First-Time Homebuyer Joy",
    description:
      "As a first-time homebuyer, the process of finding and purchasing a home was incredibly daunting. However, from the moment I reached out to the team at DreamHomes Realty, I felt supported and guided. My agent was patient, answering all my questions and taking the time to understand exactly what I was looking for. The personalized attention I received made all the difference. I found a home that not only fits my budget but also my dreams. The closing process was smooth, and I was kept informed every step of the way. I couldn't be happier with my new home and the exceptional service provided by DreamHomes Realty.",
    imageUrl: "/person.png",
  },
  {
    title: "Selling Made Simple",
    description:
      "When it came time to sell my property, I was overwhelmed by the thought of the process. DreamHomes Realty came highly recommended, and they lived up to the hype. My agent provided a comprehensive market analysis, helping me price my home competitively. They staged my home beautifully, took professional photographs, and created an eye-catching online listing. The open houses were well-organized, and within two weeks, we received multiple offers above asking price. The negotiation was handled with expertise, and I was thrilled with the final sale price. The dedication and professionalism of DreamHomes Realty made selling my home a breeze.",
    imageUrl: "/person.png",
  },
  {
    title: "Investment Success Story",
    description:
      "As an investor, I'm always looking for opportunities to expand my portfolio. DreamHomes Realty has been an invaluable partner in this endeavor. Their knowledge of the local market trends and investment insights have led me to make several profitable purchases. The agents understand the importance of a good investment and have consistently provided me with options that offer a high return potential. Their due diligence and attention to detail in every transaction have saved me time and money. I trust DreamHomes Realty implicitly and credit much of my investment success to their expertise and guidance.",
    imageUrl: "/person.png",
  },
  {
    title: "Relocation Made Easy",
    description:
      "Relocating to a new city is stressful, but DreamHomes Realty turned it into an exciting adventure. They provided me with a relocation specialist who was familiar with the area and understood the challenges of moving to a new place. They helped me find a neighborhood that suited my lifestyle and was within my budget. The agent was always available to answer my questions, whether it was about the local schools, commute times, or community amenities. They even provided a list of reputable moving companies. Thanks to DreamHomes Realty, my family and I were able to transition smoothly into our new home and community.",
    imageUrl: "/person.png",
  },
  {
    title: "Luxury Living Achieved",
    description:
      "I had specific desires for my next home � luxury features, exclusive location, and a breathtaking view. DreamHomes Realty's luxury property specialists were exceptional. They curated a list of properties that matched my exacting standards and arranged private viewings at my convenience. Their connections in the high-end market gave me access to exclusive listings before they were made public. The negotiation for my dream home was strategic and effective, resulting in a purchase price that provided value for such a prestigious property. The service I received was discreet, professional, and tailored to my unique needs. DreamHomes Realty made my vision of luxury living a reality.",
    imageUrl: "/person.png",
  },
];

const Testimonials: FC = () => {
  return (
    <section className="bg-soft-blue text-dark-slate py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white p-6 shadow-lg rounded-lg h-full flex flex-col">
                <div className="mb-4">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.title}
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {testimonial.title}
                </h3>
                <p className="text-slate-gray mb-4">
                  {testimonial.description}
                </p>
                <button className="mt-auto bg-turquoise text-white font-bold py-2 px-4 rounded hover:bg-turquoise-dark transition-colors">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
