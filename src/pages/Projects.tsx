import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import ProjectsComponent from "../components/Projects";

interface ProjectsProps {
  aestheticMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ aestheticMode }) => {
  return <ProjectsComponent aestheticMode={aestheticMode} />;
};

export default Projects;
