import React from "react";
import { Helmet } from "react-helmet-async";
import ContactComponent from "../components/Contact";

const Contact: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <Helmet>
        <title>Contact Maximus Mukiza | Get In Touch</title>
        <meta
          name="description"
          content="Contact Maximus Mukiza to discuss cyber security, cloud projects, or potential collaborations. Fill out the contact form or email directly."
        />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-12">
          Interested in discussing cybersecurity, cloud projects, or potential
          collaborations? As a student passionate about this field, I'd love to
          hear from you. Fill out the form below.
        </p>

        <div className="max-w-md mx-auto">
          <ContactComponent />
        </div>
      </div>
    </div>
  );
};

export default Contact;
