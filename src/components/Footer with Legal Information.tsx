import { motion } from "framer-motion";
import { useState } from "react";

const FooterLegalInformation = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const legalSections = [
    {
      title: "Terms of Service",
      description:
        "This subsection outlines the rules and regulations that users must agree to and follow in order to use the real estate company's website and services. It includes detailed information on the scope of services provided, user responsibilities, limitations of liability, intellectual property rights, and the conditions under which the terms may be updated or modified. Users are advised to read these terms carefully before using the website, as continued use of the site implies acceptance of the updated or modified terms.",
    },
    {
      title: "Privacy Policy",
      description:
        "The Privacy Policy subsection provides comprehensive details on how the real estate company collects, uses, maintains, and discloses information collected from users of its website. It covers aspects such as personal identification information, non-personal identification information, web browser cookies, how collected information is used, how it is protected, sharing of personal information, compliance with children's online privacy protection, and changes to the privacy policy. Users are encouraged to review this policy periodically for any changes.",
    },
    {
      title: "Fair Housing Act Compliance",
      description:
        "This subsection affirms the real estate company's commitment to compliance with the Fair Housing Act and its principles of providing equal housing opportunities. It explains the company's policy against discrimination based on race, color, national origin, religion, sex, familial status, or handicap (disability) in the sale, rental, and financing of housing. The company also ensures that all of its advertising reflects this commitment to non-discrimination and fairness in housing.",
    },
    {
      title: "Accessibility Statement",
      description:
        "The Accessibility Statement subsection is dedicated to ensuring that the company's website is accessible to people with disabilities. It details the efforts made by the real estate company to improve the website's usability for everyone, following the Web Content Accessibility Guidelines (WCAG). The company invites feedback from users to help enhance the website's accessibility and provides contact information for users to report any accessibility issues they encounter.",
    },
    {
      title: "DMCA Notice",
      description:
        "This subsection provides information on the real estate company's compliance with the Digital Millennium Copyright Act (DMCA). It includes the process for submitting a notice of alleged copyright infringement occurring on the company's website. The section outlines the required information that must be included in a DMCA takedown notice, the company's response to such notices, and the counter-notification process for content providers who believe their material has been wrongly removed.",
    },
    {
      title: "Legal Disclaimer",
      description:
        "The Legal Disclaimer subsection contains important disclaimers regarding the information provided on the real estate company's website. It clarifies that the content is for informational purposes only and should not be considered legal advice. The company disclaims all warranties, expresses or implies, as to the accuracy, legality, reliability, or validity of any content on the website and assumes no responsibility for errors or omissions in the content. Users are cautioned to consult with professional legal counsel before making any real estate decisions based on the information provided.",
    },
    {
      title: "Anti-Money Laundering (AML) Policy",
      description:
        "In this subsection, the real estate company outlines its Anti-Money Laundering policy and its commitment to preventing, detecting, and reporting any suspicious activities in accordance with applicable laws and regulations. It describes the company's procedures for customer due diligence, record-keeping, and reporting of transactions that may be related to money laundering. The company also provides training to its employees to recognize and handle such activities appropriately.",
    },
    {
      title: "Contact Information",
      description:
        "This final subsection provides users with the real estate company's contact information for any legal inquiries or concerns. It includes the company's mailing address, email, and phone number. Users are encouraged to reach out with any questions regarding the legal information provided in the footer or any other legal matters related to the use of the company's services.",
    },
  ];

  return (
    <footer className="bg-white text-2E4053 p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {legalSections.map((section) => (
            <motion.div
              key={section.title}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.1 } },
              }}
              className="mb-4"
            >
              <h3
                className="text-lg font-bold cursor-pointer hover:text-1ABC9C"
                onClick={() => toggleSection(section.title)}
              >
                {section.title}
              </h3>
              {expandedSection === section.title && (
                <motion.p
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="text-sm text-5D6D7E mt-2"
                >
                  {section.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
        <div className="text-center text-sm text-5D6D7E mt-8">
          {new Date().getFullYear()} Real Estate Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterLegalInformation;
