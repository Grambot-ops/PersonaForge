import React from 'react';
import {useTranslation} from 'react-i18next';
import {FaAws} from 'react-icons/fa';
import {SiLinux} from 'react-icons/si';
import {VscAzure} from 'react-icons/vsc';
import skillsData from '../data/skills.json';

interface Skill {
  id: string;
  label: string;
  proficiency: number;
  category: string;
}

/** Category order and display configuration. Labels map to translation keys. */
const CATEGORY_MAP: Record<string, {key: string; icon: string; color: string}> = {
  'Cloud Platforms':          {key: 'skills.catCloud', icon: 'cloud', color: 'text-sky-400'},
  'SRE & DevSecOps':          {key: 'skills.catSreDevSecOps', icon: 'hub', color: 'text-primary'},
  'Security & Monitoring':    {key: 'skills.catSecurity', icon: 'shield', color: 'text-amber-400'},
  'Programming & Automation': {key: 'skills.catAutomation', icon: 'code', color: 'text-violet-400'},
  'SRE & Infrastructure':     {key: 'skills.catSreInfra', icon: 'account_tree', color: 'text-emerald-400'},
};

const CATEGORY_ORDER = Object.keys(CATEGORY_MAP);

/**
 * Skills section.
 * Features:
 * - A tech highlights strip (cloud providers + Linux)
 * - Grouped skill badge columns per category, fully localized.
 */
const Skills: React.FC = () => {
  const {t} = useTranslation();
  const skills: Skill[] = skillsData as Skill[];

  /** Group skills by category, preserving defined order. */
  const grouped = CATEGORY_ORDER.reduce<Record<string, Skill[]>>((acc, cat) => {
    acc[cat] = skills.filter((s) => s.category === cat);
    return acc;
  }, {});

  return (
    <section
      className="py-16 md:py-24 border-y border-border-muted bg-background relative z-20 overflow-hidden"
      id="skills"
      aria-labelledby="skills-heading"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2
              id="skills-heading"
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 tracking-tight"
            >
              {t('skills.title', 'Technology Stack')}
            </h2>
            <p className="text-muted text-base leading-relaxed">
              {t('skills.intro', 'A comprehensive overview of the tools and platforms I leverage to build secure, scalable, and automated infrastructure.')}
            </p>
          </div>

          {/* Tech highlights strip */}
          <div
            className="flex items-center gap-6 bg-surface/50 backdrop-blur-md border border-border-muted px-6 py-4 rounded-2xl shadow-card overflow-x-auto no-scrollbar"
            role="list"
            aria-label="Key cloud platforms"
          >
            <div className="flex items-center gap-3 text-sm font-semibold text-foreground flex-shrink-0" role="listitem">
              <FaAws className="text-2xl text-[#FF9900]" aria-label="AWS" />
              <span>AWS</span>
            </div>
            <div className="h-4 w-px bg-border-muted" aria-hidden="true" />
            <div className="flex items-center gap-3 text-sm font-semibold text-foreground flex-shrink-0" role="listitem">
              <VscAzure className="text-2xl text-[#0089D6]" aria-label="Microsoft Azure" />
              <span>Azure</span>
            </div>
            <div className="h-4 w-px bg-border-muted" aria-hidden="true" />
            <div className="flex items-center gap-3 text-sm font-semibold text-foreground flex-shrink-0" role="listitem">
              <SiLinux className="text-2xl text-muted" aria-label="Linux" />
              <span>Linux</span>
            </div>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {CATEGORY_ORDER.map((category, index) => {
            const config = CATEGORY_MAP[category];
            const categorySkills = grouped[category];
            if (!categorySkills || categorySkills.length === 0) return null;

            // Determine bento sizing based on category
            const isWide = category === 'SRE & DevSecOps' || category === 'Cloud Platforms' || category === 'Security & Monitoring';
            const gridClass = isWide 
              ? 'md:col-span-3 lg:col-span-6' 
              : 'md:col-span-3 lg:col-span-4';

            return (
              <div 
                key={category} 
                className={`bento-card ${gridClass} group animate-enter`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl bg-surface-raised border border-border-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span
                        className={`material-symbols-outlined text-xl ${config.color}`}
                        aria-hidden="true"
                      >
                        {config.icon}
                      </span>
                    </div>
                    <h3 className="text-[10px] font-mono font-bold text-foreground uppercase tracking-widest">
                      {t(config.key, category)}
                    </h3>
                  </div>

                  {/* Skill list */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.id}
                        className="px-3 py-1.5 bg-background/50 border border-border-muted rounded-lg text-[10px] font-mono text-muted font-medium hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all cursor-default"
                        title={`${skill.label} - ${skill.proficiency}%`}
                      >
                        {skill.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress-like decorative bar at bottom */}
                <div className="mt-6 w-full h-1 bg-border-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full opacity-20 ${config.color.replace('text-', 'bg-')}`} 
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
