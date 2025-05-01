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
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Maximus</h2>
            <p className="text-lg text-gray-600 mb-2">Cloud & Cybersecurity Professional</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>maximus@example.com</span>
              <span>San Francisco, CA</span>
              <span>(555) 123-4567</span>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Education</h3>
            <div className="mb-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="font-semibold text-lg">Bachelor of Science - Applied Electronics-ICT</h4>
                <span className="text-gray-600">2018 - 2022</span>
              </div>
              <p className="text-gray-700">Thomas More University of Applied Sciences</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700">
                <li>Specialized in cybersecurity and cloud infrastructure</li>
                <li>Completed senior project on secure cloud architectures</li>
                <li>Graduated with distinction</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Professional Experience</h3>
            
            <div className="mb-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="font-semibold text-lg">Senior Cloud Security Architect</h4>
                <span className="text-gray-600">2020 - Present</span>
              </div>
              <p className="font-medium text-gray-800 mb-2">Enterprise Security Solutions</p>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Lead architect for cloud security solutions for Fortune 500 clients</li>
                <li>Designed and implemented zero-trust architectures across multi-cloud environments</li>
                <li>Developed security frameworks compliant with NIST and ISO 27001 standards</li>
                <li>Led a team of 5 security engineers in delivering enterprise-scale solutions</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="font-semibold text-lg">Cloud Security Engineer</h4>
                <span className="text-gray-600">2017 - 2020</span>
              </div>
              <p className="font-medium text-gray-800 mb-2">TechSecure Inc.</p>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Designed and implemented security solutions for AWS and Azure environments</li>
                <li>Led a team of security analysts in developing automated compliance monitoring</li>
                <li>Integrated security controls into CI/CD pipelines for automated security validation</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Technical Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Cloud Platforms</h4>
                <p className="text-gray-700">AWS, Azure, Google Cloud Platform</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Security</h4>
                <p className="text-gray-700">Zero-Trust Architecture, SIEM, WAF, IDS/IPS</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Infrastructure as Code</h4>
                <p className="text-gray-700">Terraform, AWS CloudFormation, Azure Bicep</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Programming</h4>
                <p className="text-gray-700">Python, Rust, JavaScript, Bash</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Containers & Orchestration</h4>
                <p className="text-gray-700">Docker, Kubernetes, ECS</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Compliance</h4>
                <p className="text-gray-700">NIST CSF, ISO 27001, GDPR, HIPAA</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Certifications</h3>
            <ul className="list-disc ml-5 text-gray-700">
              <li>AWS Certified Security Specialty</li>
              <li>Microsoft Certified: Azure Security Engineer Associate</li>
              <li>Certified Information Systems Security Professional (CISSP)</li>
              <li>Certified Cloud Security Professional (CCSP)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV; 