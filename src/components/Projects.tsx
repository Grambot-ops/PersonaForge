import React from 'react';

const projects = [
    {
        title: 'Project One',
        context: 'This project was developed to solve problem X.',
        background: 'The background of this project involves...',
        realizations: 'During the development, I realized...',
        learnings: 'I learned about A, B, and C through this project.'
    },
    {
        title: 'Project Two',
        context: 'This project focuses on addressing issue Y.',
        background: 'The background of this project includes...',
        realizations: 'I discovered that...',
        learnings: 'Key learnings from this project were...'
    },
    // Add more projects as needed
];

const Projects: React.FC = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="space-y-6">
                {projects.map((project, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="mt-2"><strong>Context:</strong> {project.context}</p>
                        <p><strong>Background:</strong> {project.background}</p>
                        <p><strong>Realizations:</strong> {project.realizations}</p>
                        <p><strong>Learnings:</strong> {project.learnings}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;