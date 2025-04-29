import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to My E-Portfolio</h1>
            <p className="text-lg text-center max-w-lg">
                I am a passionate developer with a keen interest in building impactful web applications. 
                Explore my projects and learn more about my journey!
            </p>
        </div>
    );
};

export default Hero;