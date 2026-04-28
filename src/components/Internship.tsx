import React from 'react';
import {useTranslation} from 'react-i18next';
import {FaFileAlt, FaFileCode, FaFileSignature} from 'react-icons/fa';

/**
 * Internship section.
 * Features: Structured project plan overview, pivot narrative, architecture diagram,
 * and mandatory document download cards.
 */
const Internship: React.FC = () => {
  const {t} = useTranslation();
  const publicUrl = import.meta.env.BASE_URL;

  const projectSteps = [
    {num: 1, label: t('internship.timeline.step1'), detail: t('internship.timeline.step1Desc')},
    {num: 2, label: t('internship.timeline.step2'), detail: t('internship.timeline.step2Desc')},
    {num: 3, label: t('internship.timeline.step3'), detail: t('internship.timeline.step3Desc')},
    {num: 4, label: t('internship.timeline.step4'), detail: t('internship.timeline.step4Desc')},
    {num: 5, label: t('internship.timeline.step5'), detail: t('internship.timeline.step5Desc')},
  ];

  const documents = [
    {
      title: t('internship.projectPlan'),
      description: t('internship.projectPlanDesc', 'Objectives, business case, planning, and progress reporting.'),
      icon: <FaFileAlt className="text-lg" />,
      url: `${publicUrl}documents/Project-plan_v3.txt`,
      filename: 'Project-plan_v3.txt',
      typeLabel: 'TXT',
      typeColor: 'text-slate-400 bg-slate-400/10',
      mandatory: true,
    },
    {
      title: t('internship.thesis'),
      description: t('internship.thesisDesc', 'Full realization thesis — 5W1H approach, architecture, and outcomes.'),
      icon: <FaFileCode className="text-lg" />,
      url: `${publicUrl}documents/StageDocumentatieFull.md`,
      filename: 'StageDocumentatieFull.md',
      typeLabel: 'MD',
      typeColor: 'text-primary bg-primary/10',
      mandatory: true,
    },
    {
      title: t('internship.reflection'),
      description: t('internship.reflectionDesc', 'Personal learning outcomes, growth, and critical reflection.'),
      icon: <FaFileSignature className="text-lg" />,
      url: `${publicUrl}documents/Reflection.txt`,
      filename: 'Reflection.txt',
      typeLabel: 'TXT',
      typeColor: 'text-slate-400 bg-slate-400/10',
      mandatory: true,
    },
  ];

  const sections = [
    { id: 'context', icon: 'business', title: t('projects.context'), content: t('internship.context') },
    { id: 'objectives', icon: 'target', title: t('internship.objectivesTitle', 'Objectives'), content: t('internship.objectives') },
    { id: 'businessCase', icon: 'trending_up', title: t('internship.businessCaseTitle', 'Business Case'), content: t('internship.businessCase') },
    { id: 'methodology', icon: 'account_tree', title: t('internship.methodologyTitle', 'Methodology & Reporting'), content: t('internship.methodology') },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-surface relative border-t border-border-muted"
      id="internship"
      aria-labelledby="internship-heading"
    >
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-soft" aria-hidden="true" />
            {t('internship.badge', 'Professional Internship · VanRoey (Dynamate) — 2025')}
          </div>
          <h2
            id="internship-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
          >
            {t('internship.heading')}
          </h2>
          <p className="text-muted text-lg max-w-3xl leading-relaxed">
            {t('internship.subheading')}
          </p>
        </div>

        {/* Project Journey Steps */}
        <div className="mb-14">
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-border-muted" />
            {t('internship.projectEvolution')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {projectSteps.map((step) => (
              <div
                key={step.num}
                className="bg-background rounded-2xl border border-border-muted p-5 flex flex-col gap-3 hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-bold flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  {step.num}
                </div>
                <p className="text-foreground font-bold text-sm leading-tight">{step.label}</p>
                <p className="text-muted text-xs leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left: Structured Synopsis */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-background rounded-3xl border border-border-muted p-8 md:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
              
              <h3 className="text-2xl font-display font-bold text-foreground mb-8">
                {t('internship.title')}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {sections.map((section) => (
                  <div key={section.id} className="space-y-3">
                    <h4 className="text-foreground font-bold text-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-lg" aria-hidden="true">
                        {section.icon}
                      </span>
                      {section.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Full Synopsis / Realization Abstract */}
              <div className="mt-12 pt-10 border-t border-border-muted">
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-4 h-px bg-primary" />
                  {t('internship.synopsisTitle')}
                </h4>
                <div className="prose prose-sm prose-slate dark:prose-invert max-w-none">
                  <p className="text-muted text-sm leading-relaxed whitespace-pre-wrap">
                    {t('internship.synopsis')}
                  </p>
                </div>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {['FastAPI', 'RabbitMQ', 'Redis', 'Docker', 'Python', 'MISP', 'GraphQL', 'HAProxy'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-surface-raised border border-border-muted text-muted text-[10px] font-bold uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Visual Architecture */}
            <div className="bg-background rounded-3xl border border-border-muted p-8 shadow-sm">
              <h4 className="text-foreground font-semibold text-sm mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" aria-hidden="true">hub</span>
                {t('internship.architectureTitle')}
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  {from: 'SentinelOne (Alert)', to: 'FastAPI Webhook', arrow: '→ HTTP POST'},
                  {from: 'FastAPI Webhook', to: 'RabbitMQ Queue', arrow: '→ Publish'},
                  {from: 'RabbitMQ Queue', to: 'Enrichment Worker', arrow: '→ Consume'},
                  {from: 'Enrichment Worker', to: 'MISP / OTX', arrow: '→ Threat Intel'},
                  {from: 'Enrichment Worker', to: 'Ticketing Engine', arrow: '→ Enriched JSON'},
                  {from: 'Ticketing Engine', to: 'Datto Autotask', arrow: '→ API Create'},
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-4 text-[11px] md:text-xs">
                    <span className="w-32 md:w-40 px-3 py-2 bg-surface-raised border border-border-muted rounded-xl text-foreground font-medium text-center">
                      {row.from}
                    </span>
                    <span className="text-primary font-bold">{row.arrow}</span>
                    <span className="flex-1 px-3 py-2 bg-surface-raised border border-border-muted rounded-xl text-foreground font-medium text-center">
                      {row.to}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Documents & Metrics */}
          <div className="lg:col-span-4 space-y-6">
            {/* Mandatory Documents */}
            <div className="bg-background rounded-3xl border border-border-muted p-8 shadow-sm">
              <h4 className="text-foreground font-bold text-sm mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">folder_zip</span>
                {t('internship.documentsTitle')}
              </h4>
              <div className="space-y-4">
                {documents.map((doc, i) => (
                  <a
                    key={i}
                    href={doc.url}
                    download={doc.filename}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-4 p-4 rounded-2xl border border-border-muted hover:border-primary/40 hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                      {doc.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm text-foreground mb-1">{doc.title}</p>
                      <p className="text-[11px] text-muted leading-tight">{doc.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Results / Business Impact */}
            <div className="bg-primary/5 rounded-3xl border border-primary/20 p-8 shadow-sm">
              <h4 className="text-foreground font-bold text-sm mb-6">{t('internship.keyResults')}</h4>
              <div className="space-y-6">
                {[
                  {metric: '< 30s', label: t('internship.result1', 'Automated triage time'), sub: t('internship.result1Sub', 'Previously minutes')},
                  {metric: '€ 0', label: t('internship.result2', 'SOAR licensing cost'), sub: t('internship.result2Sub', 'Open-source stack')},
                  {metric: '100%', label: t('internship.result3', 'IoC Coverage'), sub: t('internship.result3Sub', 'Integrated MISP & OTX')},
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <div className="flex items-end justify-between">
                      <span className="text-muted text-xs font-medium">{item.label}</span>
                      <span className="text-primary font-display font-bold text-xl">{item.metric}</span>
                    </div>
                    <div className="h-1.5 bg-border-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-full opacity-30" />
                    </div>
                    <span className="text-[10px] text-muted italic">{item.sub}</span>
                  </div>
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
