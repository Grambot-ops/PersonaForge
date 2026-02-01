import React, { useEffect } from "react"; // Import useEffect
import { Helmet, HelmetProvider } from "react-helmet-async"; // Import Helmet
import { useTranslation } from "react-i18next"; // Import useTranslation
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";

const App: React.FC = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation hook

  // Update html lang attribute whenever language changes
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <HelmetProvider>
      {/* Default Helmet settings */}
      <Helmet
        defaultTitle={t("app.defaultTitle")}
        titleTemplate={`%s - ${t("app.defaultTitle")}`}
      >
        <html lang={i18n.language} /> {/* Set lang attribute */}
        <meta name="description" content={t("app.metaDescription")} />
        <meta name="keywords" content={t("app.metaKeywords")} />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={t("app.ogTitle")} />
        <meta property="og:description" content={t("app.ogDescription")} />
        {/* Twitter */}
        <meta property="twitter:title" content={t("app.ogTitle")} />{" "}
        {/* Reusing OG title */}
        <meta
          property="twitter:description"
          content={t("app.ogDescription")}
        />{" "}
        {/* Reusing OG description */}
      </Helmet>
      <div className="scanlines"></div>
      <div className="min-h-screen bg-background text-slate-300 selection:bg-primary selection:text-black">
        <div className="flex flex-col min-h-screen">
          <Header />
            <main className="flex-grow">
              <Home />
            </main>
          <BackToTop />
        <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default App;
