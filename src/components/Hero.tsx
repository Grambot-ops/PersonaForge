import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section 
      className="relative pt-32 pb-20 overflow-hidden bg-background min-h-[90vh] flex items-center"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 terminal-grid opacity-20" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="hidden lg:flex absolute top-[-40px] right-8 items-center space-x-4 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-sm px-4 py-2 text-[10px] font-mono shadow-[0_0_15px_rgba(0,255,65,0.05)]" role="status" aria-label="System Status">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-muted tracking-tight">
              SYS_STATUS:{" "}
              <span className="text-primary font-bold uppercase">
                Operational
              </span>
            </span>
          </div>
          <span className="text-primary/20" aria-hidden="true">|</span>
          <span className="text-muted uppercase">
            Nodes:{" "}
            <span className="text-foreground/70">AWS // AZURE // ON-PREM</span>
          </span>
          <span className="text-primary/20" aria-hidden="true">|</span>
          <span className="text-muted uppercase">
            Last_Deploy: <span className="text-foreground/70">2H AGO</span>
          </span>
        </div>

        <div className="max-w-6xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-sm bg-primary/10 text-primary border border-primary/40 text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-8 animate-fadeIn shadow-[0_0_10px_rgba(0,255,65,0.1)]">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true"></span>
            <span>ROOT@MAXIMUS:~/PORTFOLIO# ./BOOT_SEQUENCE.SH</span>
          </div>

          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-12 text-foreground tracking-tight">
            <span className="text-primary mr-2 md:mr-4 tracking-tighter">&gt; Success:</span>
            <span className="text-muted/40 font-light">{t("hero.title", "Maximus")}</span>
            <span className="border-b-[6px] border-primary pb-1 ml-2 md:ml-4 inline-block">
              Platform
            </span>
            <div className="flex flex-wrap items-center mt-4">
              <span className="border-b-[6px] border-primary pb-1 mr-4 lg:mr-8 inline-block">
                Engineering
              </span>
              <span className="text-muted/20 mr-4 lg:mr-8 hidden md:inline-block" aria-hidden="true">|</span>
              <span className="border-b-[6px] border-primary pb-1 mr-4 lg:mr-8 inline-block">SRE</span>
              <span className="text-muted/20 mr-4 lg:mr-8 hidden md:inline-block" aria-hidden="true">|</span>
              <span className="border-b-[6px] border-primary pb-1 inline-block">DevSecOps</span>
            </div>
          </h1>

          <p className="text-base md:text-lg text-muted mb-12 max-w-3xl leading-relaxed font-mono border-l-2 border-primary/20 pl-8 box-decoration-clone">
            <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-2" aria-hidden="true">
              [ Output Log ]
            </span>
            {t(
              "hero.description",
              "Architecting resilient, automated cloud platforms with a focus on GitOps workflows, DevSecOps integration, and scalable SRE principles. Specializing in high-availability distributed systems and MLOps at the edge.",
            )}
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="/resume_v2.pdf"
              download="Maximus_Mukiza_Resume.pdf"
              className="group relative px-8 py-4 overflow-hidden focus-visible:ring-4 focus-visible:ring-primary/50 outline-none rounded-sm transition-all"
              aria-label="Download Maximus Mukiza Resume PDF"
            >
              <div className="absolute inset-0 bg-primary transition-transform duration-300 group-hover:scale-105"></div>
              <div className="relative flex items-center justify-center gap-3 text-black font-bold text-xs font-mono uppercase tracking-[0.2em]">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  download
                </span>
                EXECUTE_DL_RESUME
              </div>
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-8 py-4 border border-primary/30 text-primary hover:text-foreground rounded-sm font-bold text-xs font-mono flex items-center justify-center transition-all hover:bg-primary/5 hover:border-primary uppercase tracking-[0.2em] relative focus-visible:ring-2 focus-visible:ring-primary outline-none"
            >
              <span className="mr-3 opacity-50 transition-transform group-hover:translate-x-1" aria-hidden="true">
                &gt;
              </span>
              cd /engineering_projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
