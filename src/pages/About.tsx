import React from "react";
import { Helmet } from "react-helmet-async";
import AboutComponent from "../components/About";

const About: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <Helmet>
        <title>About Maximus Mukiza | Cyber Security Professional</title>
        <meta
          name="description"
          content="Learn more about Maximus Mukiza, a passionate cyber security professional with experience in IT support, web development, and fitness coaching."
        />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <AboutComponent />

        {/* Removed detailed Professional Journey section to avoid duplication with CV page */}
      </div>
    </div>
  );
};

export default About;
