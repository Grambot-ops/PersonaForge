import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="home-page">
      <Helmet>
        <title>{t("home.pageTitle")}</title> {/* Translate title */}
        <meta name="description" content={t("home.pageDescription")} />{" "}
        {/* Translate description */}
      </Helmet>
      <Hero />

      <section id="about" className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("home.aboutSectionTitle")} {/* Translate section title */}
          </h2>
          <About />
        </div>
      </section>

      <section id="projects" className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("home.projectsSectionTitle")} {/* Translate section title */}
          </h2>
          <Projects />
          <div className="mt-8 text-center">
            <Link to="/projects" className="btn btn-outline">
              {t("home.viewAllProjectsButton")} {/* Translate button text */}
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("home.contactSectionTitle")} {/* Translate section title */}
          </h2>
          <div className="max-w-2xl mx-auto">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
