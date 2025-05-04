import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next"; // Import useTranslation
import ProjectsComponent from "../components/Projects";

const Projects: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="py-16 bg-gray-50">
      <Helmet>
        <title>{t("projects.pageTitle")}</title> {/* Translate title */}
        <meta name="description" content={t("projects.pageDescription")} />{" "}
        {/* Translate description */}
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {t("projects.heading")} {/* Translate heading */}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
          {t("projects.intro")} {/* Translate intro */}
        </p>
        <ProjectsComponent />
      </div>
    </div>
  );
};

export default Projects;
