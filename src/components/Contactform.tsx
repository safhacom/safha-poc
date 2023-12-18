import { motion } from "framer-motion";

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState("reservation");

  const tabContent = {
    reservation: {
      title: "Reservation Inquiry",
      description:
        "Book your table in advance to enjoy our exquisite dishes without the wait.",
    },
    events: {
      title: "Private Events",
      description:
        "Host your special events with us for an unforgettable dining experience.",
    },
    feedback: {
      title: "Feedback",
      description:
        "Share your thoughts about your dining experience. We value your input!",
    },
    questions: {
      title: "General Questions",
      description: "Have any questions? Reach out and we'll be happy to help.",
    },
    careers: {
      title: "Career Opportunities",
      description:
        "Join our team! Inquire about current job openings and career prospects.",
    },
    suppliers: {
      title: "Supplier Contact",
      description:
        "For suppliers looking to work with us, please provide your details.",
    },
  };

  const renderForm = () => {
    switch (activeTab) {
      case "reservation":
      // Form for reservation inquiry
      case "events":
      // Form for private events
      // ... other cases
      default:
        return null;
    }
  };

  return (
    <section className="bg-cream text-charcoal font-lato p-8" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center mb-10"
      >
        <h2 className="text-burgundy text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-8">
          Select the reason for your inquiry and fill out the form below.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(tabContent).map((key) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg ${
                activeTab === key
                  ? "bg-terracotta text-cream"
                  : "bg-transparent border border-terracotta text-terracotta"
              } font-semibold`}
              onClick={() => setActiveTab(key)}
              key={key}
            >
              {tabContent[key].title}
            </motion.button>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-burgundy text-2xl font-bold mb-2">
              {tabContent[activeTab].title}
            </h3>
            <p className="mb-4">{tabContent[activeTab].description}</p>
            {renderForm()}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
