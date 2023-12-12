import { useState } from "react";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";

const ContactForm = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabTitles = [
    "Reservation Inquiry",
    "Private Event Hosting",
    "Feedback and Suggestions",
    "Career Opportunities",
    "Supplier and Vendor Inquiries",
    "General Inquiries",
  ];

  const tabDescriptions = [
    "Looking to reserve a table for a special occasion or a casual meal out? Use our reservation inquiry form to provide us with the date, time, and number of guests you expect. Please include any special requests, such as dietary restrictions or preferred seating, to help us tailor your dining experience to perfection. Our team will review your request and get back to you promptly with a confirmation and any additional information you may need.",
    "Interested in hosting a private event at our restaurant? Whether it's a birthday celebration, corporate dinner, or wedding reception, our dedicated staff is here to ensure your event is unforgettable. Fill out our event hosting form with details about your event, including the type of event, estimated number of attendees, preferred date and time, and any specific requirements or services you need. Our event coordinator will contact you to discuss the details and how we can create a custom experience for your special occasion.",
    "Your dining experience matters to us, and we are always striving to improve. If you've recently visited our restaurant, we invite you to share your feedback through our form. Let us know what you loved, or if there were aspects that didn't meet your expectations. Your suggestions are valuable, and we will use them to enhance our service, menu, and overall customer satisfaction. We appreciate your time and input.",
    "Are you passionate about the hospitality industry and interested in joining our team? Our restaurant is always looking for motivated individuals to contribute to our success. Submit your application through our career form by providing your contact information, the position you are applying for, and your resume or CV. Please also include a brief cover letter explaining why you would be a great fit for our team. Our HR department will review your application and reach out to you for potential interview opportunities.",
    "We pride ourselves on sourcing high-quality ingredients and products for our restaurant. If you are a supplier or vendor with offerings that you believe could enhance our menu or operations, we invite you to reach out through our supplier form. Provide details about your products, pricing, and delivery options, as well as any relevant certifications or quality assurance information. Our procurement team will evaluate your proposal and contact you if there is a potential for collaboration.",
    "Have a question or need assistance with something not covered in the other sections? Our general inquiry form is here for any other questions or information you may need. Whether it's about our menu, hours of operation, location, accessibility, or anything else, we're here to help. Fill out the form with your contact information and inquiry, and one of our staff members will get back to you as soon as possible with the information you require.",
  ];

  return (
    <div className="bg-[#FFF8F0] p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[#C59A77] text-3xl font-ubuntu-mono mb-4">
          Get in Touch
        </h2>
        <p className="text-[#273D2F] mb-8">
          We're here to answer any questions you have. Reach out to us and we'll
          respond as soon as we can.
        </p>
      </motion.div>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex flex-wrap mb-4">
          {tabTitles.map((title, index) => (
            <Tab
              key={title}
              className={`mr-2 mb-2 px-5 py-2 text-sm font-medium leading-5 rounded-md ${
                index === selectedIndex
                  ? "bg-[#DAA49A] text-white"
                  : "bg-[#F8F5F1] text-[#273D2F]"
              }`}
            >
              {title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {tabDescriptions.map((description, index) => (
            <Tab.Panel
              key={index}
              className={`p-6 border border-[#273D2F] rounded-lg ${
                index === selectedIndex ? "block" : "hidden"
              }`}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[#273D2F] mb-6">{description}</p>
                {/* Form fields will go here based on the selected tab index */}
                <button className="w-full py-2 px-4 bg-[#9E4624] text-white rounded-md hover:bg-[#DAA49A] transition-colors">
                  Submit
                </button>
              </motion.div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ContactForm;
