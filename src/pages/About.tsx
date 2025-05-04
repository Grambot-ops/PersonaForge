import React from "react";
import { Helmet } from "react-helmet-async";
import AboutComponent from "../components/About";
import Skills from "../components/Skills";

const About: React.FC = () => {
  return (
    <div className="py-16 bg-white dark:bg-gray-800">
      <Helmet>
        <title>About Maximus Mukiza | Cyber Security Professional</title>
        <meta
          name="description"
          content="Learn more about Maximus Mukiza, a passionate cyber security professional with experience in IT support, web development, and fitness coaching."
        />
        <meta
          name="keywords"
          content="Maximus Mukiza, cyber security, cloud security, AWS, Azure, portfolio, IT professional"
        />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <AboutComponent />

        <div className="my-12">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
