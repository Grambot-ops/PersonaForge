import React from "react";
import { useTranslation } from "react-i18next";

/** Glass stat cards shown in the hero background (lg+ screens). */
const HERO_STATS = [
  { icon: "cloud", label: "3 Cloud Platforms", sub: "AWS · Azure · Proxmox" },
  { icon: "speed", label: "< 30s MTTR", sub: "SOC Automation Pipeline" },
  { icon: "shield", label: "DevSecOps", sub: "SOAR · Zero Trust · IaC" },
  { icon: "location_on", label: "Belgium 🇧🇪", sub: "Open to hybrid / remote" },
] as const;

/** Role chips displayed below the main heading. */
const ROLES = ["Cloud Engineering", "SRE", "DevSecOps"] as const;

/**
 * Hero section.
 * Features: animated gradient-mesh background, glass stat cards,
 * text-gradient heading, role chips, and an animated scroll cue.
 */
const Hero: React.FC = () => {
  const { t } = useTranslation();
  const publicUrl = import.meta.env.BASE_URL;

  return (
    <section
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-background min-h-[95vh] flex items-center"
      aria-labelledby="hero-title"
      id="home"
    >
      {/* ── Visual Backdrop ──────────────────────────────────── */}
      {/* Dynamic Mesh Orbs */}
      <div
        className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-primary/[0.12] dark:bg-primary/[0.08] rounded-full blur-[150px] pointer-events-none animate-float"
        aria-hidden="true"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/[0.08] dark:bg-primary/[0.05] rounded-full blur-[130px] pointer-events-none animate-float"
        aria-hidden="true"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] bg-primary/[0.05] dark:bg-primary/[0.03] rounded-full blur-[110px] pointer-events-none animate-float"
        aria-hidden="true"
        style={{ animationDelay: "-8s" }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 bg-grid-white bg-blueprints pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        aria-hidden="true"
      />

      {/* ── Glass stat cards — floating layout ───── */}
      <div
        className="hidden xl:flex flex-col gap-4 absolute top-1/2 -translate-y-1/2 right-12 2xl:right-24 z-10"
        aria-label="Quick stats"
      >
        {HERO_STATS.map((stat, index) => (
          <div
            key={stat.label}
            className="glass-card rounded-2xl px-5 py-4 flex items-center gap-4 w-64 animate-enter group hover:border-primary/30"
            style={{ animationDelay: `${400 + index * 150}ms` }}
            role="status"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <span
                className="material-symbols-outlined text-xl"
                aria-hidden="true"
              >
                {stat.icon}
              </span>
            </div>
            <div>
              <p className="text-foreground font-bold text-sm tracking-tight leading-none mb-1">
                {stat.label}
              </p>
              <p className="text-muted text-[10px] font-mono font-medium uppercase tracking-wider">
                {stat.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Main content ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-raised/50 backdrop-blur-md border border-border-muted text-accent text-[10px] font-mono font-bold uppercase tracking-[0.15em] mb-10 animate-fadeIn">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>Bachelor Capstone · IT Factory · 2026</span>
          </div>

          {/* Main heading */}
          <h1 id="hero-title" className="mb-8 text-foreground">
            {t("hero.title", "Maximus")}
            <br />
            <span className="text-gradient">Mukiza</span>
            <span className="text-primary text-glow">.</span>
          </h1>

          {/* Role chips */}
          <div
            className="flex flex-wrap gap-2.5 mb-10 animate-fadeIn"
            style={{ animationDelay: "200ms" }}
          >
            {ROLES.map((role) => (
              <span
                key={role}
                className="px-4 py-2 bg-surface/50 backdrop-blur-sm border border-border-muted text-foreground text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm hover:border-primary/40 transition-colors"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-muted mb-12 max-w-2xl leading-relaxed font-sans animate-fadeIn"
            style={{ animationDelay: "400ms" }}
          >
            {t(
              "hero.description",
              "Specializing in event-driven SOAR pipelines and GitOps-driven Kubernetes platforms. I bridge the gap between secure architecture and high-velocity engineering.",
            )}
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fadeIn"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href={`${publicUrl}CV_Maximus.pdf`}
              download="Maximus_Mukiza_CV.pdf"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold text-sm rounded-2xl hover:bg-primary-dark transition-all shadow-glow hover:scale-[1.02] active:scale-[0.98] outline-none"
            >
              <span
                className="material-symbols-outlined text-lg"
                aria-hidden="true"
              >
                download
              </span>
              Download Narrative CV
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 glass-card text-foreground font-bold text-sm rounded-2xl hover:border-primary/40 transition-all hover:bg-primary/5 active:scale-[0.98] outline-none"
            >
              Explore Projects
              <span
                className="material-symbols-outlined text-lg"
                aria-hidden="true"
              >
                arrow_forward
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
