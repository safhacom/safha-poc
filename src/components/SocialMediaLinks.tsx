import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
  FaTripadvisor,
} from "react-icons/fa";

const SocialMediaLinks = () => {
  const socialMedia = [
    {
      title: "Facebook",
      url: "https://www.facebook.com/YourRestaurantName",
      icon: <FaFacebookF />,
      description:
        "Like our Facebook page to see daily updates, customer reviews, and photos of our delectable dishes.",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/YourRestaurantName",
      icon: <FaInstagram />,
      description:
        "Follow us on Instagram for a visual feast of our culinary creations.",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/YourRestaurantName",
      icon: <FaTwitter />,
      description:
        "Join the conversation on Twitter where we share quick updates, food tips, and fun foodie facts.",
    },
    {
      title: "YouTube",
      url: "https://www.youtube.com/YourRestaurantName",
      icon: <FaYoutube />,
      description:
        "Subscribe to our YouTube channel for exclusive content such as cooking tutorials, chef interviews, and virtual tours.",
    },
    {
      title: "Pinterest",
      url: "https://www.pinterest.com/YourRestaurantName",
      icon: <FaPinterestP />,
      description:
        "Explore our Pinterest boards for inspiration on everything from food presentation to dining decor.",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/company/YourRestaurantName",
      icon: <FaLinkedinIn />,
      description:
        "Connect with us on LinkedIn to learn more about our company culture, career opportunities, and industry insights.",
    },
    {
      title: "TripAdvisor",
      url: "https://www.tripadvisor.com/YourRestaurantName",
      icon: <FaTripadvisor />,
      description:
        "Check out our TripAdvisor page to read reviews from our guests and see how we rank among other local dining establishments.",
    },
  ];

  return (
    <section className="bg-creamy-white text-charcoal-gray py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl font-bold mb-2">Follow Us on Social Media</h2>
          <p className="text-lg">
            Stay connected with us through our various social media platforms to
            get the latest updates on our special offers, events, and
            mouthwatering dishes.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center flex-wrap gap-4"
        >
          {socialMedia.map((media, index) => (
            <a
              key={index}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal-gray text-warm-red rounded-full p-3 hover:bg-sunset-orange transition duration-300 ease-in-out"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {media.icon}
              </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaLinks;
