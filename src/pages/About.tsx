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
                <span className="block text-blue-700 font-bold">04-2024 - 11-2024</span>
                <span className="block text-gray-600">Fitness Instructor / Assistant</span>
              </div>
              <div className="md:w-3/4 border-l-0 md:border-l-2 md:pl-6 border-blue-200">
                <h3 className="font-bold mb-2">OmniMove - Health, Wellbeing & Performance coaching</h3>
                <ul className="text-gray-700 list-disc pl-5">
                  <li>Developed and delivered more than 20 personalized fitness programs tailored to individual client needs</li>
                  <li>Provided expert advice on training techniques and program follow-up, improving client results</li>
                  <li>Assisted with sales by promoting and selling fitness subscriptions, contributing to revenue growth</li>
                  <li>Managed client registrations and ensured a smooth onboarding process</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="md:w-1/4 mb-4 md:mb-0 md:pr-6">
                <span className="block text-blue-700 font-bold">07-2024 - 08-2024</span>
                <span className="block text-gray-600">IT Assistant (Student)</span>
              </div>
              <div className="md:w-3/4 border-l-0 md:border-l-2 md:pl-6 border-blue-200">
                <h3 className="font-bold mb-2">B-PAC BV, Grobbendonk</h3>
                <ul className="text-gray-700 list-disc pl-5">
                  <li>Revamped the sales website, optimizing navigation for customers and improving customer retention</li>
                  <li>Created and carefully selected product photos, ensuring an attractive online presence</li>
                  <li>Enhanced user experience by aligning website design with customer preferences and company objectives</li>
                  <li>Effectively collaborated with a diverse team of various ages, strengthening communication and collaboration skills</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="md:w-1/4 mb-4 md:mb-0 md:pr-6">
                <span className="block text-blue-700 font-bold">Education</span>
                <span className="block text-gray-600">Certifications</span>
              </div>
              <div className="md:w-3/4 border-l-0 md:border-l-2 md:pl-6 border-blue-200">
                <h3 className="font-bold mb-2">Professional Development</h3>
                <ul className="text-gray-700 list-disc pl-5">
                  <li>LPI Certifications (12-2023)</li>
                  <li>Driver's License (12-2024)</li>
                  <li>Bachelor's degree in CyberSecurity/Computer Forensics and Counterterrorism (in progress)</li>
                  <li>Secondary Degree in Information Technology from KOSH (2018-2022)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
