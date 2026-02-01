import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

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
      
      {/* Navigation Teasers */}
      <section className="py-24 bg-black border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-8 text-white">
            <span className="text-primary font-mono text-lg mr-2">&gt;</span>
            Explore the System
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/about" className="group p-6 border border-slate-800 bg-slate-900/50 hover:border-primary transition-all">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary">About</h3>
              <p className="text-slate-400 text-sm mb-4">Engineering philosophy & core competencies.</p>
              <span className="text-primary text-xs font-mono group-hover:underline">./view_profile</span>
            </Link>
            <Link to="/projects" className="group p-6 border border-slate-800 bg-slate-900/50 hover:border-primary transition-all">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary">Projects</h3>
              <p className="text-slate-400 text-sm mb-4">Case studies in cloud & security.</p>
              <span className="text-primary text-xs font-mono group-hover:underline">./list_projects</span>
            </Link>
            <Link to="/contact" className="group p-6 border border-slate-800 bg-slate-900/50 hover:border-primary transition-all">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary">Contact</h3>
              <p className="text-slate-400 text-sm mb-4">Secure communication channels.</p>
              <span className="text-primary text-xs font-mono group-hover:underline">./open_channel</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
