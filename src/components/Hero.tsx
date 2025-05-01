import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 md:py-32">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-5xl font-bold mb-6 animate-fadeIn">
                        Maximus
                    </h1>
                    <h2 className="text-3xl font-semibold mb-6 opacity-90">
                        Cloud & Cybersecurity Professional
                    </h2>
                    <p className="text-xl mb-8 opacity-80 max-w-2xl">
                        I build secure cloud solutions and protect digital assets from cyber threats.
                        With expertise in Azure, AWS, and cybersecurity frameworks, I help organizations
                        navigate the complex landscape of digital security.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/projects" className="btn btn-primary px-8 py-3 text-center">
                            View My Projects
                        </Link>
                        <Link to="/contact" className="btn bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 text-center">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Background pattern */}
            <div className="absolute right-0 bottom-0 opacity-10">
                <svg width="400" height="400" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 0c15.464 0 28 12.536 28 28S43.464 56 28 56 0 43.464 0 28 12.536 0 28 0zm-4.5 14a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 003 0v-11a1.5 1.5 0 00-1.5-1.5zm9 0a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 003 0v-11a1.5 1.5 0 00-1.5-1.5z" fill="#FFF"/>
                </svg>
            </div>
        </div>
    );
};

export default Hero;