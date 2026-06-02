import React from "react";
import { useTranslation } from "react-i18next";

/**
 * Hero section.
 * Targeted at SRE/Cloud/DevSecOps roles.
 */
const Hero: React.FC = () => {
  const { t } = useTranslation();
  const publicUrl = import.meta.env.BASE_URL;

  const roles = [
    t("hero.roleSre"),
    t("hero.roleK8s"),
    t("hero.roleIron"),
  ];

  return (
    <section
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-transparent min-h-[95vh] flex items-center"
      aria-labelledby="hero-title"
      id="home"
    >
      {/* Static Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 bg-grid-white bg-blueprints pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow pill */}
          <div className="inline-flex items-start sm:items-center gap-3 px-4 py-2 rounded-2xl sm:rounded-full bg-surface-raised/50 backdrop-blur-md border border-border-muted text-primary text-[10px] font-mono font-bold uppercase tracking-[0.15em] mb-10 animate-fadeIn max-w-full">
            <span className="relative flex h-2 w-2 mt-1 sm:mt-0 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-foreground">
              {t("hero.eyebrow")}
            </span>
          </div>

          {/* Main heading */}
          <h1
            id="hero-title"
            className="mb-8 text-5xl sm:text-7xl md:text-9xl text-foreground font-display font-black tracking-tighter uppercase leading-[0.85] relative break-words"
          >
            MAXIMUS
            <br />
            MUKIZA
            <span className="text-primary animate-pulse opacity-50">_</span>
          </h1>

          {/* Role chips */}
          <div className="flex flex-wrap gap-4 mb-12">
            {roles.map((role, i) => (
              <div
                key={role}
                className="px-4 py-2 bg-primary/5 border border-primary/10 rounded-lg text-primary text-xs font-mono font-bold uppercase tracking-widest animate-fadeIn"
                style={{ animationDelay: `${200 + i * 100}ms` }}
              >
                {role}
              </div>
            ))}
          </div>

          <p className="text-muted text-xl max-w-2xl leading-relaxed mb-12 font-mono opacity-80">
            <span className="text-primary">
              {t("hero.quote")}
            </span>
            <br />
            <br />
            {t("hero.bio")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-black font-mono font-bold text-sm uppercase tracking-widest hover:bg-primary-dark transition-all flex items-center justify-center gap-3 group"
            >
              {t("hero.btnDeepDive")}
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              href="#cv"
              className="px-8 py-4 bg-transparent border border-primary/20 text-foreground font-mono font-bold text-sm uppercase tracking-widest hover:border-primary/50 transition-all flex items-center justify-center gap-3"
            >
              {t("hero.btnDossier")}
              <span className="material-symbols-outlined text-sm">
                download
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll cue ───────────────────────────────── */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-muted animate-bounce opacity-40"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
