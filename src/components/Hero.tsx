import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background min-h-[85vh] flex items-center">
      <div className="absolute inset-0 terminal-grid opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="hidden lg:flex absolute top-[-60px] right-0 items-center space-x-3 bg-black border border-primary/30 rounded-sm px-4 py-2 text-[10px] font-mono shadow-[0_0_15px_rgba(0,255,65,0.1)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-slate-400">
            SYS_STATUS:{" "}
            <span className="text-primary font-bold uppercase tracking-wider">
              Operational
            </span>
          </span>
          <span className="text-slate-700">|</span>
          <span className="text-slate-400">
            LAST_DEPLOY: <span className="text-white">2H AGO</span> VIA{" "}
            <span className="text-white">GITHUB ACTIONS</span>
          </span>
        </div>

        <div className="max-w-5xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-primary/5 text-primary border border-primary/20 text-xs font-mono font-bold uppercase tracking-wider mb-6 animate-fadeIn">
            <span className="material-symbols-outlined text-sm">terminal</span>
            <span>ROOT@MAXIMUS:~/PORTFOLIO# ./BOOT_SEQUENCE.SH</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8 text-white">
            <span className="text-primary mr-4">&gt; Success:</span>
            {t("hero.title", "Architecting Resilient Cloud Infrastructure & ")}
            <span className="text-slate-500 decoration-primary decoration-2 underline-offset-4 underline">
              {t("hero.subtitle", "Automated Security Pipelines.")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl leading-relaxed font-mono border-l-2 border-primary/30 pl-6">
            <span className="text-primary font-bold">Output:</span>{" "}
            {t(
              "hero.description",
              "Architecting decision-driven IAM governance frameworks and enforcing Zero Trust principles across distributed systems. Operationalizing resilience through self-healing infrastructure and automated threat remediation pipelines.",
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/resume_v2.pdf"
              download="Maximus_Mukiza_Resume.pdf"
              className="group px-8 py-4 bg-primary text-black rounded-sm font-bold text-sm font-mono flex items-center justify-center hover:bg-white transition-colors uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,65,0.2)]"
            >
              <span className="material-symbols-outlined mr-2">download</span>{" "}
              EXECUTE_DL_RESUME
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 border border-slate-700 text-slate-300 rounded-sm font-bold text-sm font-mono flex items-center justify-center hover:border-primary hover:text-primary transition-colors bg-black cursor-pointer"
            >
              <span className="mr-2">&gt;</span> cd /engineering_projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
