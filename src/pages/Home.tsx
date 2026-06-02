import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "./About";
import Internship from "../components/Internship";

// Lazy load components that contain heavy libraries (like React Flow in Projects)
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const CV = lazy(() => import("./CV"));

// Loading fallback component
const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page bg-transparent">
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

      <div id="internship">
        <Internship />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
      </div>

      <div id="cv">
        <Suspense fallback={<SectionLoader />}>
          <CV />
        </Suspense>
      </div>

      <div id="contact">
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
