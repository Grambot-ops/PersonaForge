import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import ContactComponent from "../components/Contact";

const Contact: React.FC = () => {
  return (
    <div id="contact-wrapper" className="bg-background">
      <ContactComponent />
    </div>
  );
};

export default Contact;
