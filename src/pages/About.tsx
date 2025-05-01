import React from "react";
import AboutComponent from "../components/About";

const About: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <AboutComponent />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Professional Journey</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="md:w-1/4 mb-4 md:mb-0 md:pr-6">
                <span className="block text-blue-700 font-bold">2020 - Present</span>
                <span className="block text-gray-600">Senior Cloud Security Architect</span>
              </div>
              <div className="md:w-3/4 border-l-0 md:border-l-2 md:pl-6 border-blue-200">
                <h3 className="font-bold mb-2">Enterprise Security Solutions</h3>
                <p className="text-gray-700">
                  Lead architect for cloud security solutions, helping Fortune 500 clients
                  implement secure cloud infrastructures and Zero-Trust architectures.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="md:w-1/4 mb-4 md:mb-0 md:pr-6">
                <span className="block text-blue-700 font-bold">2017 - 2020</span>
                <span className="block text-gray-600">Cloud Security Engineer</span>
              </div>
              <div className="md:w-3/4 border-l-0 md:border-l-2 md:pl-6 border-blue-200">
                <h3 className="font-bold mb-2">TechSecure Inc.</h3>
                <p className="text-gray-700">
                  Designed and implemented security solutions for AWS and Azure environments.
                  Led a team of security analysts in developing automated compliance monitoring.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="md:w-1/4 mb-4 md:mb-0 md:pr-6">
                <span className="block text-blue-700 font-bold">2015 - 2017</span>
                <span className="block text-gray-600">Cybersecurity Analyst</span>
              </div>
              <div className="md:w-3/4 border-l-0 md:border-l-2 md:pl-6 border-blue-200">
                <h3 className="font-bold mb-2">SecureNet Services</h3>
                <p className="text-gray-700">
                  Conducted security assessments and penetration testing for client networks.
                  Developed security policies and incident response procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
