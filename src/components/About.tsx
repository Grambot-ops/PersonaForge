import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const hobbies = [
    "Gym",
    "Homelabbing",
    "Rust Development",
    "Cloud Architecture",
  ];

  return (
    <section className="py-10 px-5">
      {/* Adjusted container for better alignment and spacing */}
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto gap-8 md:gap-16">
        {/* Increased image size and margin */}
        <img
          src="/images/Profile.png"
          alt="Profile of Maximus"
          className="rounded-full w-56 h-56 object-cover mb-4 md:mb-0 shadow-lg border-4 border-white flex-shrink-0" // Increased size, added flex-shrink-0
        />
        {/* Adjusted text container width */}
        <div className="flex-grow">
          {" "}
          {/* Changed from md:flex-1 to flex-grow */}
          <p className="text-lg mb-6 text-gray-700 leading-relaxed max-w-prose">
            {" "}
            {/* Added max-w-prose */}I am a motivated IT student with a broad
            passion for technology. After completing two years of ICT studies at
            KOSH in secondary education, I am now pursuing a bachelor's degree
            in Cyber/Computer Forensics and Counterterrorism at Thomas More
            University of Applied Sciences. Through various internships and
            student jobs, I have gained valuable foundational experience in IT
            as well as in other sectors. I am a proactive and curious team
            player, always eager to take initiative and contribute actively to
            problem-solving. I have strong communication skills and a continuous
            drive to learn new technologies and concepts.
          </p>
          <div className="mb-6 max-w-prose">
            {" "}
            {/* Added max-w-prose */}
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              Hobbies:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {hobbies.map((hobby, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  {hobby}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6 max-w-prose">
            {" "}
            {/* Added max-w-prose */}
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              Education:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I pursued Applied Electronics-ICT because it offers a perfect
              blend of hardware and software knowledge, preparing me for the
              complex challenges of modern cybersecurity. The technical
              foundation has been invaluable in understanding system
              vulnerabilities at both the hardware and software levels.
            </p>
          </div>
          <div className="max-w-prose">
            {" "}
            {/* Added max-w-prose */}
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              Professional Ambitions:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              My goal is to grow into a leading expert in cloud security
              architecture, helping organizations build secure and resilient
              infrastructure. I'm particularly interested in learning about and
              developing zero-trust frameworks that can adapt to evolving
              threats while maintaining operational efficiency.
            </p>
          </div>
          <div className="mt-8">
            {" "}
            {/* Adjusted margin-top */}
            <Link to="/cv" className="btn btn-primary inline-block">
              View Full CV
            </Link>
            <a
              href="/CV_Maximus.pdf"
              download
              className="btn btn-outline ml-4 inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
