import { motion } from "framer-motion";
import { FC } from "react";
import Image from "next/image";
import {
  MailIcon,
  PhoneIcon,
  MapIcon,
  CalendarIcon,
  ChevronRightIcon,
  DownloadIcon,
  UserGroupIcon,
  ChatIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

const Footer: FC = () => {
  return (
    <footer className="bg-a37c40 text-273d2f font-ubuntu-mono">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
      >
        <div className="space-y-4">
          <h5 className="text-c59a77">About Us</h5>
          <p>
            Discover the story behind our culinary journey, our commitment to
            sustainability, and the passion that drives us to deliver an
            unforgettable dining experience. Learn about our chef's philosophy,
            our local community involvement, and how we source the freshest
            ingredients for your plate.
          </p>
          <a
            href="#about"
            className="flex items-center text-9e4624 hover:text-daa49a"
          >
            <ChevronRightIcon className="w-5 h-5 mr-1" /> Learn More
          </a>
        </div>

        <div className="space-y-4">
          <h5 className="text-c59a77">Menu</h5>
          <p>
            Explore our diverse menu that caters to all taste buds, featuring
            seasonal specialties, classic favorites, and innovative dishes.
            Vegetarian, vegan, and gluten-free options are available to ensure
            everyone can enjoy our offerings. Download our latest menu for a
            complete list of appetizers, mains, desserts, and beverages.
          </p>
          <a
            href="#menu"
            className="flex items-center text-9e4624 hover:text-daa49a"
          >
            <ChevronRightIcon className="w-5 h-5 mr-1" /> View Menu
          </a>
          <a
            href="/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-9e4624 hover:text-daa49a"
          >
            <DownloadIcon className="w-5 h-5 mr-1" /> Download Menu
          </a>
        </div>

        <div className="space-y-4">
          <h5 className="text-c59a77">Reservations</h5>
          <p>
            Secure your table at our restaurant with ease using our online
            reservation system. Choose your preferred date and time, and provide
            any special requests to make your dining experience personalized and
            memorable. For large parties or private events, please contact our
            reservation team directly.
          </p>
          <a
            href="#reservation"
            className="flex items-center text-9e4624 hover:text-daa49a"
          >
            <CalendarIcon className="w-5 h-5 mr-1" /> Book Now
          </a>
        </div>

        <div className="space-y-4">
          <h5 className="text-c59a77">Catering Services</h5>
          <p>
            Elevate your next event with our professional catering services.
            Whether it's a corporate function, wedding, or family gathering, our
            team will work with you to create a custom menu that fits your
            event's theme and dietary preferences. Contact us for a consultation
            and quote.
          </p>
          <a
            href="#contact"
            className="flex items-center text-9e4624 hover:text-daa49a"
          >
            <ChatIcon className="w-5 h-5 mr-1" /> Contact Us
          </a>
        </div>

        <div className="space-y-4">
          <h5 className="text-c59a77">Careers</h5>
          <p>
            Join our passionate team and build a career in the hospitality
            industry. We offer various opportunities from kitchen staff to
            front-of-house roles. Visit our careers page to view current
            openings, learn about our employee benefits, and submit your
            application.
          </p>
          <a
            href="#careers"
            className="flex items-center text-9e4624 hover:text-daa49a"
          >
            <UserGroupIcon className="w-5 h-5 mr-1" /> Join Our Team
          </a>
        </div>

        <div className="space-y-4 col-span-1 lg:col-span-2">
          <h5 className="text-c59a77">Contact Information</h5>
          <p>
            Get in touch with us for any inquiries, feedback, or to share your
            dining experiences. Find our phone number, email address, and
            physical location. Our customer service team is dedicated to
            assisting you and ensuring your satisfaction.
          </p>
          <div className="flex items-center text-9e4624 hover:text-daa49a">
            <PhoneIcon className="w-5 h-5 mr-1" /> (123) 456-7890
          </div>
          <div className="flex items-center text-9e4624 hover:text-daa49a">
            <MailIcon className="w-5 h-5 mr-1" /> contact@example.com
          </div>
          <div className="flex items-center text-9e4624 hover:text-daa49a">
            <MapIcon className="w-5 h-5 mr-1" /> 123 Main St, Hometown, USA
          </div>
        </div>

        <div className="space-y-4 col-span-1 lg:col-span-3">
          <h5 className="text-c59a77">Stay Connected</h5>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-9e4624 hover:text-daa49a"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-9e4624 hover:text-daa49a"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-9e4624 hover:text-daa49a"
            >
              <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-9e4624 hover:text-daa49a"
            >
              <Image
                src="/pinterest.svg"
                alt="Pinterest"
                width={24}
                height={24}
              />
            </a>
          </div>
          <div className="mt-8">
            <h5 className="text-c59a77">Newsletter Subscription</h5>
            <form className="flex mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-lg bg-f8f5f1"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-daa49a text-white rounded-r-lg hover:bg-c59a77"
              >
                <PaperAirplaneIcon className="w-5 h-5 transform rotate-90" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center text-sm py-4"
      >
        2023 Restaurant Name. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
