import React from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet
import { useTranslation } from "react-i18next"; // Import useTranslation

const NotFound: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <>
      <Helmet>
        <title>{t("notFound.pageTitle")}</title> {/* Translate title */}
      </Helmet>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500">
            {t("notFound.heading")} {/* Translate heading */}
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            {t("notFound.message")} {/* Translate message */}
          </p>
          <a
            href="/"
            className="mt-6 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            {t("notFound.goHome")} {/* Translate button text */}
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
