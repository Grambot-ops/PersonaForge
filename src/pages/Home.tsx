import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Maximus Mukiza - Home | Cyber Security & IT Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Maximus Mukiza. Explore projects in cyber security, IT, and web development."
        />
      </Helmet>
      <Hero />

      <section id="about" className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <About />
        </div>
      </section>

      <section id="projects" className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <Projects />
          <div className="mt-8 text-center">
            <Link to="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
