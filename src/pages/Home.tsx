import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import BackToTop from "../components/BackToTop";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page bg-background">
      <Helmet>
        <title>
          {t("home.pageTitle", "MAXIMUS.SH | Engineering Narrative Portfolio")}
        </title>
        <meta
          name="description"
          content={t(
            "home.pageDescription",
            "Portfolio of Maximus Mukiza, showcasing cybersecurity and cloud projects.",
          )}
        />
      </Helmet>

      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />

      <BackToTop />
    </div>
  );
};

export default Home;
