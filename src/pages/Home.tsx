// ... imports
import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import CV from "./CV";

interface HomeProps {
  aestheticMode: boolean;
}

const Home: React.FC<HomeProps> = ({ aestheticMode }) => {
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

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects aestheticMode={aestheticMode} />
      </div>

      <div id="cv">
        <CV />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
