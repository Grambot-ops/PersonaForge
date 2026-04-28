import React from 'react';
import {useTranslation} from 'react-i18next';

/** Glass stat cards shown in the hero background (lg+ screens). */
const HERO_STATS = [
  {icon: 'cloud', label: '3 Cloud Platforms', sub: 'AWS · Azure · Proxmox'},
  {icon: 'speed', label: '< 30s MTTR', sub: 'SOC Automation Pipeline'},
  {icon: 'shield', label: 'DevSecOps', sub: 'SOAR · Zero Trust · IaC'},
  {icon: 'location_on', label: 'Belgium 🇧🇪', sub: 'Open to hybrid / remote'},
] as const;

/** Role chips displayed below the main heading. */
const ROLES = ['Cloud Engineering', 'SRE', 'DevSecOps'] as const;

/**
 * Hero section.
 * Features: animated gradient-mesh background, glass stat cards,
 * text-gradient heading, role chips, and an animated scroll cue.
 */
const Hero: React.FC = () => {
  const {t} = useTranslation();
  const publicUrl = import.meta.env.BASE_URL;

  return (
    <section
      className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-background min-h-[92vh] flex items-center"
      aria-labelledby="hero-title"
      id="hero"
    >
      {/* ── Animated gradient mesh — two emerald orbs ──────────── */}
      <div
        className="absolute -top-32 -left-24 w-[700px] h-[700px] bg-primary/[0.07] rounded-full blur-[140px] pointer-events-none animate-float"
        aria-hidden="true"
        style={{animationDelay: '0s'}}
      />
      <div
        className="absolute -bottom-32 -right-24 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[120px] pointer-events-none animate-float"
        aria-hidden="true"
        style={{animationDelay: '-5s'}}
      />

      {/* ── Glass stat cards — right side, large screens only ───── */}
      <div
        className="hidden lg:flex flex-col gap-3 absolute top-1/2 -translate-y-1/2 right-8 xl:right-20 z-10"
        aria-label="Quick stats"
      >
        {HERO_STATS.map((stat, index) => (
          <div
            key={stat.label}
            className="glass rounded-xl px-4 py-3 flex items-center gap-3 w-56 animate-enter"
            style={{animationDelay: `${300 + index * 120}ms`}}
            role="status"
            aria-label={stat.label}
          >
            <span
              className="material-symbols-outlined text-primary text-xl flex-shrink-0"
              aria-hidden="true"
            >
              {stat.icon}
            </span>
            <div>
              <p className="text-foreground font-semibold text-sm leading-tight">{stat.label}</p>
              <p className="text-muted text-xs mt-0.5">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Main content ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl xl:max-w-3xl">

          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold mb-8 md:mb-10 animate-fadeIn">
            <span
              className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 animate-pulse-soft"
              aria-hidden="true"
            />
            <span>Bachelor Capstone Portfolio · IT Factory — 2026</span>
          </div>

          {/* Main heading */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-5 md:mb-6 tracking-tight text-foreground"
          >
            {t('hero.title', 'Maximus')}{' '}
            <span className="text-gradient">Mukiza</span>
          </h1>

          {/* Role chips */}
          <div className="flex flex-wrap gap-2 mb-8" aria-label="Specialisations">
            {ROLES.map((role) => (
              <span
                key={role}
                className="px-3 py-1.5 bg-surface border border-border-muted text-foreground text-sm font-medium rounded-full shadow-sm"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg text-muted mb-10 md:mb-12 max-w-xl leading-relaxed font-sans">
            {t(
              'hero.description',
              'Building automated, secure cloud infrastructure — from event-driven SOAR microservices and threat intelligence pipelines to GitOps-driven Kubernetes platforms. Graduating Bachelor Applied IT at IT Factory · Thomas More.',
            )}
          </p>

          {/* CTA buttons — stack on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={`${publicUrl}CV_Maximus.pdf`}
              download="Maximus_Mukiza_CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary-dark transition-all shadow-sm hover:shadow-glow active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-primary/40 outline-none"
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
                document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'});
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 border border-border-muted text-foreground hover:text-primary hover:border-primary rounded-lg font-semibold text-sm transition-all hover:bg-primary/5 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary outline-none"
            >
              Explore Projects
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Animated scroll cue ───────────────────────────────── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted animate-bounce"
        aria-hidden="true"
      >
        <span className="material-symbols-outlined text-xl">keyboard_arrow_down</span>
      </div>
    </section>
  );
};

export default Hero;
