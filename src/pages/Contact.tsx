import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next"; // Import useTranslation
import ContactComponent from "../components/Contact";

const Contact: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="py-16 bg-gray-50">
      <Helmet>
        <title>{t("contact.pageTitle")}</title> {/* Translate title */}
        <meta name="description" content={t("contact.pageDescription")} />{" "}
        {/* Translate description */}
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {t("contact.heading")} {/* Translate heading */}
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-12">
          {t("contact.intro")} {/* Translate intro */}
        </p>

        <div className="max-w-md mx-auto">
          <ContactComponent />
        </div>
      </div>
    </div>
  );
};

export default Contact;
