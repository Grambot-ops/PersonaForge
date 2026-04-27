import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  const publicUrl = import.meta.env.BASE_URL;

  const competencies = [
    { icon: "cloud", label: "Cloud Governance (IaC)" },
    { icon: "monitoring", label: "Site Reliability Engineering" },
    { icon: "security", label: "DevSecOps Lifecycle" },
  ];

  const strategicFocus = [
    { icon: "lock", label: "Zero Trust Networking" },
    { icon: "memory", label: "Confidential Computing" },
    { icon: "account_tree", label: "GitOps Flow Control" },
  ];

  return (
    <section
      className="py-24 bg-background relative"
      id="about"
      aria-labelledby="about-heading"
    >
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Photo Card — clean glassmorphic style */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-border-muted shadow-2xl bg-card-dark">
              <div className="max-h-[600px] overflow-hidden">
                <img
                  alt="Maximus Mukiza"
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  src={`${publicUrl}images/Profile.webp`}
                />
                {/* Subtle gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-card-dark to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Name badge overlaid at bottom */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/80 backdrop-blur-md rounded-xl border border-border-muted px-5 py-4 shadow-xl">
                  <p className="font-display font-bold text-foreground text-lg">Maximus Mukiza</p>
                  <p className="text-primary text-sm font-medium">Platform Engineer · SRE · DevSecOps</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-4 lg:mt-0 space-y-8">
            <div>
              <h2
                id="about-heading"
                className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground"
              >
                About Me
              </h2>
              <p className="text-muted leading-relaxed text-base mb-6">
                {t(
                  "about.bio",
                  "Hello! I'm Maximus, a Platform Engineer and SRE specialist focused on building robust, automated infrastructure. I thrive on solving complex distributed systems challenges and implementing GitOps workflows into every layer of the stack.",
                )}
              </p>
              <p className="text-muted leading-relaxed text-base mb-8">
                {t(
                  "about.philosophy_1",
                  "I approach cloud architecture not just as resource allocation, but as constructing defensive perimeters — building systems that remain resilient even when individual components are compromised.",
                )}
              </p>

              <a
                href="/resume_v2.pdf"
                download="Maximus_Mukiza_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-background transition-all rounded-lg font-semibold text-sm focus-visible:ring-2 focus-visible:ring-primary outline-none"
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">download</span>
                {t("about.downloadCvButton", "Download CV")}
              </a>
            </div>

            {/* Competencies */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-border-muted">
              <div>
                <h3 className="text-foreground font-semibold text-sm mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 bg-primary/10 border border-primary/30 rounded-md flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xs" aria-hidden="true">memory</span>
                  </span>
                  Core Competencies
                </h3>
                <ul className="space-y-2.5">
                  {competencies.map((item) => (
                    <li key={item.label} className="flex items-center gap-2.5 text-sm text-muted">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" aria-hidden="true" />
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-foreground font-semibold text-sm mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 bg-primary/10 border border-primary/30 rounded-md flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xs" aria-hidden="true">shield</span>
                  </span>
                  Strategic Focus
                </h3>
                <ul className="space-y-2.5">
                  {strategicFocus.map((item) => (
                    <li key={item.label} className="flex items-center gap-2.5 text-sm text-muted">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" aria-hidden="true" />
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
