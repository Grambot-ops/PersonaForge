import React from "react";


import { useTranslation } from "react-i18next"; // Import useTranslation
import AboutComponent from "../components/About";
const About: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {t("header.about")} {/* Reuse header translation */}
        </h1>
        <AboutComponent />
      </div>
    </div>
  );
};

export default About;
