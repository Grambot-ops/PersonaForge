import React from 'react';

const About: React.FC = () => {
    return (
        <section className="py-10 px-5">
            <h2 className="text-3xl font-bold mb-5">About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
                <img 
                    src="/path/to/your/photo.jpg" 
                    alt="Your Name" 
                    className="rounded-full w-32 h-32 mb-5 md:mb-0 md:mr-5"
                />
                <div>
                    <p className="mb-3">
                        Hello! I'm [Your Name], a passionate [Your Profession] with a love for [Your Hobbies/Interests]. 
                        I enjoy creating [what you enjoy creating] and constantly strive to improve my skills.
                    </p>
                    <h3 className="text-xl font-semibold">Hobbies:</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>Hobby 1</li>
                        <li>Hobby 2</li>
                        <li>Hobby 3</li>
                    </ul>
                    <h3 className="text-xl font-semibold">Professional Ambitions:</h3>
                    <p>
                        I aim to [Your Professional Ambitions], and I'm excited about the opportunities that lie ahead.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;