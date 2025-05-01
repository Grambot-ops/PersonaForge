import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    const hobbies = [
        "Gym",
        "Homelab (VPNs, Minecraft server hosting)",
        "Rust Development",
        "Cloud Architecture"
    ];

    return (
        <section className="py-10 px-5">
            <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
                <img 
                    src="/profile.jpg" 
                    alt="Maximus" 
                    className="rounded-full w-48 h-48 object-cover mb-8 md:mb-0 md:mr-10 shadow-lg border-4 border-white"
                />
                <div className="md:flex-1">
                    <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                        Hello! I'm Maximus, a passionate Cloud & Cybersecurity Professional with a strong foundation in 
                        Applied Electronics-ICT. I chose this field because it combines my love for technology with 
                        practical applications in security. The crossover between hardware understanding and software 
                        implementation gives me an edge in building secure systems from the ground up.
                    </p>
                    
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3 text-blue-700">Hobbies:</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {hobbies.map((hobby, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                                    {hobby}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3 text-blue-700">Education:</h3>
                        <p className="text-gray-700 leading-relaxed">
                            I pursued Applied Electronics-ICT because it offers a perfect blend of hardware and software knowledge,
                            preparing me for the complex challenges of modern cybersecurity. The technical foundation has been
                            invaluable in understanding system vulnerabilities at both the hardware and software levels.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-blue-700">Professional Ambitions:</h3>
                        <p className="text-gray-700 leading-relaxed">
                            My goal is to become a leading expert in cloud security architecture, helping organizations 
                            build secure and resilient infrastructure. I'm particularly interested in developing zero-trust 
                            frameworks that can adapt to evolving threats while maintaining operational efficiency.
                        </p>
                    </div>

                    <div className="mt-6">
                        <Link to="/cv" className="btn btn-primary inline-block">View Full CV</Link>
                        <a href="/CV_Maximus.pdf" download className="btn btn-outline ml-4 inline-block">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;