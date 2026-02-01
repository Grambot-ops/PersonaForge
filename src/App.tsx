import React, { useEffect } from "react"; // Import useEffect
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Import Helmet
import { useTranslation } from "react-i18next"; // Import useTranslation
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation hook
  const basename = import.meta.env.BASE_URL;

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
        <Router
          basename={basename} // Add basename prop here
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/cv" element={<CV />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <BackToTop />
            <Footer />
          </div>
        </Router>
      </div>
    </HelmetProvider>
  );
};

export default App;
