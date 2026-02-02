import React from "react";
import { useTranslation } from "react-i18next";
import { FaAws } from "react-icons/fa";
import { SiLinux } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import skillsData from "../data/skills.json"; // Import skills data

interface Skill {
  id: string; // Use ID for translation key
  proficiency: number;
  category: string;
}

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const skills: Skill[] = skillsData;

  const getStatus = (proficiency: number) => {
    if (proficiency >= 85) return "OPERATIONAL";
    if (proficiency >= 75) return "SYNCED";
    if (proficiency >= 60) return "ACTIVE";
    return "IDLE";
  };

  const getStatusColor = (proficiency: number) => {
    if (proficiency >= 85) return "text-primary";
    if (proficiency >= 75) return "text-blue-400";
    if (proficiency >= 60) return "text-accent-warn";
    return "text-muted";
  };

  return (
    <section
      className="py-12 border-y border-border-muted bg-background relative z-20"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 id="skills-heading" className="text-sm font-bold text-foreground uppercase tracking-widest font-mono flex items-center mb-2">
              <span className="material-symbols-outlined text-primary mr-2 text-base" aria-hidden="true">
                dns
              </span>
              System Services Status
            </h2>
            <p className="text-[10px] text-muted font-mono uppercase tracking-tighter border-l border-primary/30 pl-3">
              Monitoring global engineering clusters & cloud provisioned nodes
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 bg-card-dark border border-border-muted p-4 rounded-sm" role="status" aria-label="Cloud Resource Latency">
            <div className="flex items-center gap-3 pr-6 border-r border-border-muted">
              <FaAws className="text-xl text-primary/80" aria-label="AWS Provider" />
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-muted">
                  REGION_01
                </span>
                <span className="text-[10px] font-mono font-bold text-foreground">
                  AWS_US_EAST
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 pr-6 border-r border-border-muted">
              <VscAzure className="text-xl text-primary/80" aria-label="Azure Provider" />
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-muted">
                  REGION_02
                </span>
                <span className="text-[10px] font-mono font-bold text-foreground">
                  AZURE_WE
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <SiLinux className="text-xl text-primary/80" aria-label="Linux/On-Prem Cluster" />
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-muted">
                  CONTROL_PLANE
                </span>
                <span className="text-[10px] font-mono font-bold text-foreground">
                  TALOS_HYBRID
                </span>
              </div>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="bg-card-dark border border-border-muted p-3 rounded-sm flex items-center justify-between group hover:border-primary/40 transition-all cursor-default"
            >
              <span className="text-xs font-mono text-muted uppercase tracking-tight">
                {t(`skills.${skill.id}`, skill.id.toUpperCase())}
              </span>
              <span
                className={`text-[10px] font-mono tracking-wider ${getStatusColor(skill.proficiency)}`}
                aria-label={`Skill status for ${skill.id}: ${getStatus(skill.proficiency)}`}
              >
                {getStatus(skill.proficiency)}
              </span>
            </li>
          ))}
          {/* Static entries for flavor */}
          <li className="bg-card-dark border border-border-muted p-3 rounded-sm flex items-center justify-between group hover:border-primary/40 transition-all">
            <span className="text-xs font-mono text-muted uppercase tracking-tight">GITHUB ACTIONS</span>
            <span className="text-[10px] text-primary font-mono tracking-wider" aria-label="Status: IDLE">
              IDLE
            </span>
          </li>
          <li className="bg-card-dark border border-border-muted p-3 rounded-sm flex items-center justify-between group hover:border-primary/40 transition-all">
            <span className="text-xs font-mono text-muted uppercase tracking-tight">BASH</span>
            <span className="text-[10px] text-primary font-mono tracking-wider" aria-label="Status: READY">
              READY
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
