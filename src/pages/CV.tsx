import React from "react";

const CV: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Curriculum Vitae</h1>
        
        <div className="flex justify-end mb-6">
          <a 
            href="/CV_Maximus.pdf" 
            download 
            className="btn btn-primary flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download CV
          </a>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Maximus Mukiza</h2>
            <p className="text-lg text-gray-600 mb-2">Bachelor Student at Thomas More University of Applied Sciences</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>0456190617</span>
              <span>Vorselaar, Flemish Region</span>
              <a href="https://linkedin.com/in/maximus-mukiza-1523a5297" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Profile</h3>
            <p className="text-gray-700 mb-2">
              Motivated IT student with a broad interest in technology. I studied ICT for two years in secondary education (KOSH) 
              and am currently pursuing a bachelor's degree in Cyber/Computer Forensics and Counterterrorism at Thomas More University of Applied Sciences.
            </p>
            <p className="text-gray-700">
              During various internships and student jobs, I gained basic experience in both IT and other sectors. 
              I'm an eager team player who likes to take initiative and actively contributes to problem-solving. 
              Strong in communication and always willing to learn new technologies and concepts.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Education</h3>
            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="font-semibold text-lg">Bachelor's degree, CyberSecurity/Computer Forensics and Counterterrorism</h4>
                <span className="text-gray-600">09-2023 - 09-2026</span>
              </div>
              <p className="text-gray-700">Thomas More University of Applied Sciences</p>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="font-semibold text-lg">Secondary Degree, Information Technology</h4>
                <span className="text-gray-600">09-2018 - 05-2022</span>
              </div>
              <p className="text-gray-700">KOSH</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Work Experience</h3>
            
            <div className="mb-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="font-semibold text-lg">Fitness Instructor / Assistant</h4>
                <span className="text-gray-600">04-2024 - 11-2024</span>
              </div>
              <p className="font-medium text-gray-800 mb-2">OmniMove - Health, Wellbeing & Performance coaching, Belgium</p>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Developed and delivered more than 20 personalized fitness programs tailored to individual client needs</li>
                <li>Provided expert advice on training techniques and program follow-up, improving client results</li>
                <li>Assisted with sales by promoting and selling fitness subscriptions, contributing to revenue growth</li>
                <li>Managed client registrations and ensured a smooth onboarding process</li>
                <li>Acted as the first point of contact for clients, answering questions and providing fitness advice</li>
              </ul>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="font-semibold text-lg">IT Assistant (Student)</h4>
                <span className="text-gray-600">07-2024 - 08-2024</span>
              </div>
              <p className="font-medium text-gray-800 mb-2">B-PAC BV, Grobbendonk, Vlaanderen, België</p>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Revamped the sales website, optimizing navigation for customers and improving customer retention</li>
                <li>Created and carefully selected product photos, ensuring an attractive online presence</li>
                <li>Enhanced user experience by aligning website design with customer preferences and company objectives</li>
                <li>Effectively collaborated with a diverse team of various ages, strengthening communication and collaboration skills</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Skills</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Adaptation</li>
                <li>Management</li>
                <li>Customer Satisfaction</li>
                <li>Problem Solving</li>
                <li>Communication</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Languages</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Nederlands</li>
                <li>Frans</li>
                <li>Engels</li>
                <li>Kinyarwanda</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Hobbies & Interests</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Cycling</li>
                <li>Environment Virtualization</li>
                <li>Homelab (VPNs, Minecraft server hosting)</li>
                <li>Rust Development</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Certifications</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>LPI Certifications (12-2023)</li>
                <li>Driver's License (12-2024)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV; 