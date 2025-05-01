import React from "react";
import ContactComponent from "../components/Contact";

const Contact: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-12">
          Have a project in mind or want to discuss cybersecurity solutions?
          I'd love to hear from you. Fill out the form below.
        </p>
        
        <div className="max-w-md mx-auto">
          <ContactComponent />
        </div>
      </div>
    </div>
  );
};

export default Contact;
