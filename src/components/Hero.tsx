import React from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative pt-32 pb-24 overflow-hidden bg-background min-h-[90vh] flex items-center"
      aria-labelledby="hero-title"
    >
      {/* Subtle glowing orb background */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Status badge — kept subtle, no terminal prompt */}
        <div
          className="hidden lg:flex absolute top-[-32px] right-8 items-center space-x-4 bg-card-dark/80 backdrop-blur border border-border-muted rounded-full px-5 py-2 text-xs font-sans shadow-lg"
          role="status"
          aria-label="System Status"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-muted">
            Available for internship · <span className="text-foreground font-medium">2026 Cohort</span>
          </span>
        </div>

        <div className="max-w-5xl">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium mb-10 animate-fadeIn">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" aria-hidden="true" />
            Bachelor Capstone Portfolio · IT Factory
          </div>

          {/* Main heading */}
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-8 text-foreground tracking-tight"
          >
            {t("hero.title", "Maximus")}{" "}
            <span className="text-primary">Mukiza</span>
            <br />
            <span className="text-foreground/50 font-light text-4xl md:text-5xl">
              Platform Engineer & SRE
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-muted mb-12 max-w-2xl leading-relaxed font-sans">
            {t(
              "hero.description",
              "Architecting resilient, automated cloud platforms with a focus on GitOps workflows, DevSecOps integration, and scalable SRE principles. Specializing in high-availability distributed systems and MLOps at the edge.",
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume_v2.pdf"
              download="Maximus_Mukiza_Resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-background font-semibold text-sm rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:shadow-xl active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-primary/40 outline-none"
              aria-label="Download Maximus Mukiza Resume PDF"
            >
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                download
              </span>
              Download CV
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border-muted text-foreground hover:text-primary hover:border-primary rounded-lg font-semibold text-sm transition-all hover:bg-primary/5 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary outline-none"
            >
              Explore Projects
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
