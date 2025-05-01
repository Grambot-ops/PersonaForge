import React from "react";
import ProjectsComponent from "../components/Projects";

const Projects: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
          Here are some of the key projects I've worked on throughout my career. 
          Each project represents unique challenges and valuable learning experiences
          in the field of cybersecurity and cloud computing.
        </p>
        <ProjectsComponent />
      </div>
    </div>
  );
};

export default Projects;
