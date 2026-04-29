import React from "react";
import { useTranslation } from "react-i18next";

/** Core competency icon pills shown in the About section. Labels use translation keys. */
const COMPETENCIES = [
  { icon: "cloud", id: "cloud" },
  { icon: "security", id: "security" },
  { icon: "hub", id: "arch" },
  { icon: "terminal", id: "automation" },
  { icon: "policy", id: "threat" },
  { icon: "lock", id: "incident" },
] as const;

/** Languages spoken. Labels and tooltips use translation keys. */
const LANGUAGES = [
  { lang: "cv.langDutch", level: "Native" },
  { lang: "cv.langEnglish", level: "Full Professional" },
  { lang: "cv.langFrench", level: "Professional Working" },
  { lang: "cv.langKinyarwanda", level: "Native" },
] as const;

/** Professional experience timeline. Content uses translation keys. */
const TIMELINE = [
  {
    date: "Jun 2025 – Aug 2025",
    key: "tsg",
    company: "TSG Group",
  },
  {
    date: "Jul 2024 – Aug 2024",
    key: "bpac",
    company: "B-PAC BV",
  },
  {
    date: "Apr 2024 – Nov 2025",
    key: "omnimove",
    company: "OmniMove",
  },
] as const;

/**
 * About section.
 * Features: photo card with glass name badge, availability status,
 * localized bio, competency grid, and professional timeline.
 */
const About: React.FC = () => {
  const { t } = useTranslation();
  const publicUrl = import.meta.env.BASE_URL;

  return (
    <section
      className="py-16 md:py-32 bg-background relative overflow-hidden bg-dots"
      id="about"
      aria-labelledby="about-heading"
    >
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-full h-full bg-dots pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* ── Photo card ─────────────────────────────────────── */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-border-muted shadow-card bg-surface">
              <div className="max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-hidden">
                <img
                  alt="Maximus Mukiza"
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  src={`${publicUrl}images/Profile.webp`}
                  width={600}
                  height={750}
                  loading="eager"
                  // @ts-ignore
                  fetchpriority="high"
                  decoding="async"
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-black/60 via-black/20 to-transparent dark:from-black/80 dark:via-black/40"
                  aria-hidden="true"
                />
              </div>

              {/* Glass name badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl border border-white/20 bg-white/10 dark:bg-black/40 backdrop-blur-md shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white tracking-tight drop-shadow-md">
                      Maximus Mukiza
                    </h3>
                    <p className="text-white/90 text-xs font-sans font-medium uppercase tracking-widest mt-0.5">
                      Cloud Engineering | SRE | DevSecOps
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft shadow-[0_0_8px_rgba(129,140,248,0.4)]" />
                    <span className="text-white font-sans font-bold text-[10px] uppercase tracking-wider">
                      Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/20 rounded-br-3xl pointer-events-none" />
          </div>

          {/* ── Content ────────────────────────────────────────── */}
          <div className="space-y-10">
            {/* Availability pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-raised border border-border-muted text-muted text-xs font-medium shadow-sm">
              <span
                className="w-2 h-2 bg-accent rounded-full"
                aria-hidden="true"
              />
              {t("about.availability")}
            </div>

            {/* Bio */}
            <div>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 text-foreground"
                id="about-heading"
              >
                {t("about.mainTitle")}
              </h2>
              <p className="text-muted leading-relaxed text-base mb-4">
                {t("about.bio")}
              </p>
              <div className="space-y-4">
                <p className="text-muted leading-relaxed text-base">
                  {t("about.philosophy_1")}
                </p>
                <p className="text-muted leading-relaxed text-base">
                  {t("about.philosophy_2")}
                  <span className="text-primary font-bold italic">
                    “Graceful Degradation”
                  </span>
                  {t("about.philosophy_3")}
                </p>
              </div>
            </div>

            {/* Competency grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {COMPETENCIES.map((comp) => (
                <div
                  key={comp.id}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border-muted bg-background hover:border-primary/40 transition-all group"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-raised border border-border-muted group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                    <span className="material-symbols-outlined text-primary text-base">
                      {comp.icon}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-foreground">
                    {t(`about.competencies.${comp.id}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Secondary Grid (Education, Languages, Timeline) ── */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline - Spans 7 columns */}
          <div className="lg:col-span-7 bento-card h-full">
            <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">
                history
              </span>
              {t("cv.workExperienceTitle")}
            </h4>
            <div className="space-y-8">
              {TIMELINE.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l border-border-muted group"
                >
                  <div
                    className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary/20 border border-primary/40 group-hover:bg-primary transition-colors"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <p className="text-foreground font-bold text-sm group-hover:text-primary transition-colors">
                        {t(`about.experience.${item.key}.title`)}
                      </p>
                      <p className="text-primary text-xs font-medium">
                        {item.company}
                      </p>
                    </div>
                    <span className="text-muted text-[10px] font-mono whitespace-nowrap bg-surface-raised px-2 py-0.5 rounded border border-border-muted">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-muted text-xs mt-3 leading-relaxed">
                    {t(`about.experience.${item.key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages - Spans 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            {/* Languages */}
            <div className="bento-card !p-6 shadow-sm">
              <h4 className="text-foreground font-bold text-sm mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span
                    className="material-symbols-outlined text-base"
                    aria-hidden="true"
                  >
                    language
                  </span>
                </div>
                {t("cv.languagesTitle")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((item) => (
                  <div key={item.lang} className="group relative">
                    <span className="px-3 py-2 bg-surface-raised/50 border border-border-muted text-muted text-xs font-bold rounded-xl cursor-help transition-all hover:border-primary/40 hover:text-primary">
                      {t(item.lang)}
                    </span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-surface border border-border-muted rounded-lg text-[10px] font-bold text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-xl z-20">
                      {item.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Short */}
            <div className="bento-card !p-6 shadow-sm">
              <h4 className="text-foreground font-bold text-sm mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span
                    className="material-symbols-outlined text-base"
                    aria-hidden="true"
                  >
                    school
                  </span>
                </div>
                {t("cv.educationTitle")}
              </h4>
              <div className="space-y-6">
                <div className="group">
                  <p className="text-foreground font-bold text-sm group-hover:text-primary transition-colors">
                    Thomas More Hogeschool
                  </p>
                  <p className="text-muted text-[11px] font-medium mt-1">
                    {t("cv.educationDegree1")} · 2023 - 2026
                  </p>
                </div>
                <div className="group">
                  <p className="text-foreground font-bold text-sm group-hover:text-primary transition-colors">
                    KOSH Herentals
                  </p>
                  <p className="text-muted text-[11px] font-medium mt-1">
                    {t("cv.educationDegree2")} · 2018 - 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
