import React from "react";
import { useTranslation } from "react-i18next";
import { FaFileAlt, FaFileCode, FaFileSignature } from "react-icons/fa";

const Internship: React.FC = () => {
  const { t } = useTranslation();
  const publicUrl = import.meta.env.BASE_URL;

  const documents = [
    {
      title: t("internship.projectPlan", "Project Plan"),
      description: t("internship.projectPlanDesc", "Initial scoping, timeline, and methodology."),
      icon: <FaFileAlt className="text-lg" />,
      url: `${publicUrl}documents/Project-plan_v3.txt`,
      filename: "Project-plan_v3.txt",
    },
    {
      title: t("internship.thesis", "Technical Thesis"),
      description: t("internship.thesisDesc", "Full realization and architecture documentation."),
      icon: <FaFileCode className="text-lg" />,
      url: `${publicUrl}documents/StageDocumentatieFull.md`,
      filename: "StageDocumentatieFull.md",
    },
    {
      title: t("internship.reflection", "Reflection Report"),
      description: t("internship.reflectionDesc", "Personal learning outcomes and growth."),
      icon: <FaFileSignature className="text-lg" />,
      url: `${publicUrl}documents/Reflection.txt`,
      filename: "Reflection.txt",
    },
  ];

  return (
    <section
      className="py-24 bg-card-dark relative border-t border-border-muted"
      id="internship"
      aria-labelledby="internship-heading"
    >
      {/* Subtle glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium mb-5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" aria-hidden="true" />
            Professional Internship · VanRoey (Dynamate)
          </div>
          <h2
            id="internship-heading"
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3"
          >
            {t("internship.heading", "Internship Project")}
          </h2>
          <p className="text-muted text-base max-w-2xl">
            {t("internship.subheading", "Automating SOC incident triage using Python microservices and SentinelOne.")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-background rounded-2xl border border-border-muted p-8 shadow-lg h-full">
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {t("internship.title", "Automating Incident Triage via Python & SentinelOne")}
              </h3>
              <p className="text-primary text-sm font-medium mb-6">
                VanRoey · Dynamate — 2025
              </p>

              <p className="text-muted text-sm leading-relaxed mb-4">
                {t(
                  "internship.synopsis",
                  "During my internship at VanRoey (Dynamate), I was tasked with addressing slow Mean Time to Respond (MTTR) caused by manual incident triage and heavy reliance on a single EDR vendor for Threat Intelligence.",
                )}
              </p>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {t(
                  "internship.synopsis2",
                  "After evaluating no-code platforms like SentinelOne Hyperautomation and Rewst and identifying critical limitations, I pivoted to architecting a custom resilient, asynchronous event-driven pipeline using FastAPI, RabbitMQ, Redis, and Docker.",
                )}
              </p>
              <p className="text-muted text-sm leading-relaxed">
                {t(
                  "internship.synopsis3",
                  "I integrated independent Threat Intelligence feeds (MISP, CIRCL, CCB) directly into automated workflows, automating IoC extraction and enrichment — resulting in high-fidelity Datto Autotask tickets and significantly reducing manual workload while eliminating vendor lock-in.",
                )}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {["FastAPI", "RabbitMQ", "Redis", "Docker", "Python", "SentinelOne", "MISP"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Documents sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-background rounded-2xl border border-border-muted p-6 shadow-lg">
              <h4 className="text-foreground font-semibold text-sm mb-5 flex items-center gap-2">
                <span className="w-5 h-5 bg-primary/10 border border-primary/30 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xs" aria-hidden="true">folder_open</span>
                </span>
                {t("internship.documentsTitle", "Mandatory Documents")}
              </h4>

              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <a
                    key={index}
                    href={doc.url}
                    download={doc.filename}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border-muted hover:border-primary/40 hover:bg-primary/5 transition-all group focus-visible:ring-2 focus-visible:ring-primary outline-none"
                    aria-label={`${t("internship.downloadAria", "Download")} ${doc.title}`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 rounded-lg text-primary group-hover:bg-primary group-hover:text-background transition-all flex-shrink-0">
                      {doc.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-foreground truncate">{doc.title}</p>
                      <p className="text-xs text-muted truncate">{doc.description}</p>
                    </div>
                    <span
                      className="material-symbols-outlined text-muted group-hover:text-primary transition-colors text-base flex-shrink-0"
                      aria-hidden="true"
                    >
                      download
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Internship;
