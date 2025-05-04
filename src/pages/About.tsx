import React from "react";
import { Helmet } from "react-helmet-async";

import { useTranslation } from "react-i18next"; // Import useTranslation
import AboutComponent from "../components/About";
import Skills from "../components/Skills";

const About: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="py-16 bg-white dark:bg-gray-800">
      <Helmet>
        <title>{t("about.pageTitle")}</title> {/* Translate title */}
        <meta name="description" content={t("about.pageDescription")} />{" "}
        {/* Translate description */}
        <meta name="keywords" content={t("about.pageKeywords")} />{" "}
        {/* Translate keywords */}
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {t("header.about")} {/* Reuse header translation */}
        </h1>
        <AboutComponent />

        <div className="my-12">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
