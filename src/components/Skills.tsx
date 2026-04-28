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
      className="py-12 md:py-16 border-y border-border-muted bg-background relative z-20"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2
              id="skills-heading"
              className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2"
            >
              {t('skills.title', 'Technology Stack')}
            </h2>
            <p className="text-muted text-sm">
              {t('skills.intro', 'Tools and platforms used in production and internship work.')}
            </p>
          </div>

          {/* Tech highlights strip */}
          <div
            className="flex items-center gap-4 md:gap-6 bg-surface border border-border-muted px-4 md:px-5 py-3 rounded-xl shadow-sm overflow-x-auto"
            role="list"
            aria-label="Key cloud platforms"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-muted flex-shrink-0" role="listitem">
              <FaAws className="text-xl text-amber-400" aria-label="AWS" />
              <span className="whitespace-nowrap">Amazon Web Services</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted flex-shrink-0" role="listitem">
              <VscAzure className="text-xl text-sky-400" aria-label="Microsoft Azure" />
              <span className="whitespace-nowrap">Microsoft Azure</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted flex-shrink-0" role="listitem">
              <SiLinux className="text-xl text-muted" aria-label="Linux" />
              <span className="whitespace-nowrap">Linux / On-Prem</span>
            </div>
          </div>
        </div>

        {/* Grouped skill badge columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {CATEGORY_ORDER.map((category) => {
            const config = CATEGORY_MAP[category];
            const categorySkills = grouped[category];
            if (!categorySkills || categorySkills.length === 0) return null;

            return (
              <div key={category} className="flex flex-col gap-3">
                {/* Category header */}
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`material-symbols-outlined text-base ${config.color}`}
                    aria-hidden="true"
                  >
                    {config.icon}
                  </span>
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                    {t(config.key, category)}
                  </span>
                </div>

                {/* Skill pills */}
                <ul className="flex flex-col gap-2">
                  {categorySkills.map((skill) => (
                    <li
                      key={skill.id}
                      className="px-3 py-2 bg-surface-raised border border-border-muted rounded-lg text-sm text-foreground font-medium hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all cursor-default select-none"
                      aria-label={`${skill.label} — proficiency ${skill.proficiency}%`}
                    >
                      {skill.label}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
