import React from "react";
import { useTranslation } from "react-i18next";
import { FaFileAlt, FaFileCode, FaFileSignature } from "react-icons/fa";

const Internship: React.FC = () => {
  const { t } = useTranslation();
  const publicUrl = import.meta.env.BASE_URL;

  const documents = [
    {
      title: t("internship.projectPlan", "Project Plan"),
      icon: <FaFileAlt className="text-xl" />,
      url: `${publicUrl}documents/Project-plan_v3.txt`,
      filename: "Project-plan_v3.txt",
    },
    {
      title: t("internship.thesis", "Realization (Thesis)"),
      icon: <FaFileCode className="text-xl" />,
      url: `${publicUrl}documents/StageDocumentatieFull.md`,
      filename: "StageDocumentatieFull.md",
    },
    {
      title: t("internship.reflection", "Reflection"),
      icon: <FaFileSignature className="text-xl" />,
      url: `${publicUrl}documents/Reflection.txt`,
      filename: "Reflection.txt",
    },
  ];

  return (
    <section className="py-24 bg-background relative border-t border-border-muted" id="internship" aria-labelledby="internship-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start mb-16 animate-fadeIn">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-sm bg-primary/10 text-primary border border-primary/40 text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-4 shadow-[0_0_10px_rgba(0,255,65,0.1)]">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true"></span>
            <span>./EXEC_INTERNSHIP_MODULE.SH</span>
          </div>
          <h2 id="internship-heading" className="text-4xl md:text-5xl font-display font-bold text-foreground">
            <span className="text-primary font-mono text-2xl mr-4" aria-hidden="true">03.</span>
            {t("internship.heading", "Professional Internship")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8 text-muted font-mono text-sm leading-relaxed">
            <div className="bg-card-dark border border-primary/20 p-8 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)] relative overflow-hidden group transition-all hover:border-primary/50">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" aria-hidden="true"></div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
                {t("internship.title", "Automating Incident Triage via Python & SentinelOne")}
              </h3>
              <div className="text-primary/80 font-bold mb-6 text-xs uppercase tracking-widest border-b border-border-muted pb-4">
                &gt; {t("internship.summary", "Designed and implemented an asynchronous SOAR architecture using Python microservices, reducing incident triage time and eliminating vendor lock-in.")}
              </div>
              
              <div className="space-y-4 whitespace-pre-line">
                <span className="text-primary font-bold">SYNOPSIS:</span>
                {"\n"}
                {t("internship.synopsis", "During my internship at VanRoey (Dynamate), I was tasked with addressing the slow Mean Time to Respond (MTTR) caused by manual incident triage and the organization's heavy reliance on a single EDR vendor for Threat Intelligence. Initially exploring no-code platforms like SentinelOne Hyperautomation and Rewst, I identified critical limitations in error handling, API diagnostic visibility, and version control. \n\nTo overcome this, I pivoted to a custom-built solution, architecting a resilient, asynchronous event-driven pipeline using FastAPI, RabbitMQ, Redis, and Docker. I successfully integrated independent Threat Intelligence feeds (such as MISP, CIRCL, and CCB) directly into the automated workflows. By deploying Python microservices, I automated the extraction and enrichment of Indicators of Compromise (IoCs), resulting in high-fidelity, actionable tickets in Datto Autotask with deep links and integrated context. This significantly reduced manual workload for the SOC analysts and completely removed vendor lock-in for threat intelligence.")}
              </div>
            </div>
          </div>

          {/* Sidebar / Documents Area */}
          <div className="lg:col-span-1">
            <div className="bg-background border border-border-muted p-6 rounded-sm sticky top-24">
              <h4 className="text-foreground font-bold font-mono text-lg mb-6 flex items-center border-b border-border-muted pb-4">
                <span className="text-primary mr-2" aria-hidden="true">&gt;</span>
                {t("internship.documentsTitle", "Mandatory Documents")}
              </h4>
              
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <a
                    key={index}
                    href={doc.url}
                    download={doc.filename}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-4 border border-border-muted hover:border-primary/50 hover:bg-primary/5 transition-all group rounded-sm text-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary outline-none"
                    aria-label={`${t("internship.downloadAria", "Download")} ${doc.title}`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-card-dark border border-border-muted group-hover:border-primary/30 group-hover:text-primary transition-colors rounded-sm mr-4">
                      {doc.icon}
                    </div>
                    <div className="flex-1 font-mono text-sm">
                      <div className="font-bold">{doc.title}</div>
                      <div className="text-[10px] text-muted/60 uppercase tracking-wider">{doc.filename}</div>
                    </div>
                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                      &darr;
                    </div>
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
