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
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="text-center">
          <h1 className="text-6xl font-display font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            {t("notFound.heading")}
          </h2>
          <p className="mt-4 text-lg text-muted font-mono">
            {t("notFound.message")}
          </p>
          <a
            href="/"
            className="mt-8 inline-block px-8 py-3 bg-primary text-background font-bold font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-foreground transition-colors"
          >
            {t("notFound.goHome")}
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
