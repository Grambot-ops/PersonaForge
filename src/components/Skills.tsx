import React from "react";
import { useTranslation } from "react-i18next";
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
    return "text-slate-500";
  };

  return (
    <section
      className="py-12 border-y border-slate-800 bg-black relative z-20"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest font-mono flex items-center">
            <span className="material-symbols-outlined text-primary mr-2 text-base">
              dns
            </span>
            System Services Status
          </h3>
          <div className="flex items-center space-x-4 text-[10px] font-mono text-slate-500">
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>{" "}
              OPERATIONAL
            </span>
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-accent-warn rounded-full mr-2"></span>{" "}
              DEGRADED
            </span>
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>{" "}
              OFFLINE
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#0a0a0a] border border-slate-800 p-3 rounded-sm flex items-center justify-between group hover:border-primary/40 transition-all cursor-default"
            >
              <span className="text-xs font-mono text-slate-300 uppercase tracking-tight">
                {t(`skills.${skill.id}`, skill.id.toUpperCase())}
              </span>
              <span
                className={`text-[10px] font-mono tracking-wider ${getStatusColor(skill.proficiency)}`}
              >
                {getStatus(skill.proficiency)}
              </span>
            </div>
          ))}
          {/* Static entries for flavor */}
          <div className="bg-[#0a0a0a] border border-slate-800 p-3 rounded-sm flex items-center justify-between group hover:border-primary/40 transition-all">
            <span className="text-xs font-mono text-slate-300">
              GITHUB ACTIONS
            </span>
            <span className="text-[10px] text-primary font-mono tracking-wider">
              IDLE
            </span>
          </div>
          <div className="bg-[#0a0a0a] border border-slate-800 p-3 rounded-sm flex items-center justify-between group hover:border-primary/40 transition-all">
            <span className="text-xs font-mono text-slate-300">BASH</span>
            <span className="text-[10px] text-primary font-mono tracking-wider">
              READY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
