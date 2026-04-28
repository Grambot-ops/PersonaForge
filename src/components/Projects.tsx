import React, {useState, useEffect, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {FaGithub} from 'react-icons/fa';
import {Project} from '../types';
import projectDataImport from '../data/projects.json';
import Mermaid from './Mermaid';

const projectData: Project[] = projectDataImport as Project[];

/** Tag a project's categories from its content. */
const PROJECT_TAGS: Record<number, string[]> = {
  7: ['SRE', 'Cloud', 'GitOps / IaC', 'Security'],
  6: ['SRE', 'Cloud', 'GitOps / IaC'],
  2: ['SRE', 'Cloud', 'Security', 'GitOps / IaC'],
  8: ['SRE', 'Cloud', 'Security', 'Automation'],
  5: ['Automation', 'AI / MLOps'],
  3: ['SRE', 'Cloud', 'GitOps / IaC'],
  1: ['Security', 'Automation'],
};

/** Filter tabs shown above the project grid. */
const FILTER_TABS = ['All', 'SRE', 'Cloud', 'Security', 'GitOps / IaC', 'Automation'] as const;
type FilterTab = (typeof FILTER_TABS)[number];

/**
 * Projects section.
 * Features: filter tabs, featured first project (glass card), masonry grid,
 * lightbox modal for Mermaid diagrams and images.
 */
const Projects: React.FC = () => {
  const {t} = useTranslation();
  const publicUrl = import.meta.env.BASE_URL;
  const [activeFilter, setActiveFilter] = useState<FilterTab>('All');
  const [modalData, setModalData] = useState<{
    type: 'image' | 'mermaid';
    content: string;
    title: string;
  } | null>(null);

  /** Close modal on Escape key. */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalData(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  /** Returns true if this project matches the active filter. */
  const matchesFilter = useCallback(
    (project: Project): boolean => {
      if (activeFilter === 'All') return true;
      return (PROJECT_TAGS[project.id] ?? []).includes(activeFilter);
    },
    [activeFilter],
  );

  const filtered = projectData.filter(matchesFilter);
  const [featured, ...rest] = filtered;

  return (
    <section
      className="py-16 md:py-24 bg-background relative"
      id="projects"
      aria-labelledby="projects-heading"
    >
      {/* Subtle background accent */}
      <div
        className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Lightbox modal ───────────────────────────────────── */}
      {modalData && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setModalData(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={`relative ${
              modalData.type === 'mermaid' ? 'max-w-[95vw]' : 'max-w-5xl'
            } w-full max-h-[90vh] flex flex-col animate-enter`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="modal-title" className="sr-only">
              {modalData.title}
            </h2>

            {/* Close button */}
            <div className="flex justify-between items-center mb-3">
              <p className="text-muted text-xs font-sans">{modalData.title}</p>
              <button
                className="flex items-center gap-1.5 text-muted hover:text-foreground transition-colors text-sm font-medium bg-surface border border-border-muted px-3 py-1.5 rounded-lg focus-visible:ring-2 focus-visible:ring-primary outline-none"
                onClick={() => setModalData(null)}
                aria-label="Close dialog"
              >
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  close
                </span>
                Close
              </button>
            </div>

            {modalData.type === 'image' ? (
              <img
                src={modalData.content}
                alt={`${modalData.title} — full view`}
                className="max-w-full max-h-[80vh] object-contain rounded-xl border border-border-muted shadow-2xl bg-surface"
              />
            ) : (
              <div className="w-full min-h-[70vh] flex flex-col bg-surface border border-border-muted rounded-xl p-4 md:p-8 overflow-auto">
                <div className="min-w-max py-4">
                  <Mermaid chart={modalData.content} responsive={false} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="mb-10 md:mb-12">
          <h2
            id="projects-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-2"
          >
            {t('projects.heading', 'Engineering Projects')}
          </h2>
          <p className="text-muted text-sm mb-8">
            Cloud, security, and automation case studies built during the Bachelor programme.
          </p>

          {/* Filter tabs */}
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {FILTER_TABS.map((tab) => {
              const displayLabel = t(`projects.${tab.toLowerCase().split(' / ')[0].split(' ')[0]}`, tab);
              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeFilter === tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all focus-visible:ring-2 focus-visible:ring-primary outline-none ${
                    activeFilter === tab
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-surface border border-border-muted text-muted hover:text-foreground hover:border-primary/40'
                  }`}
                >
                  {displayLabel}
                </button>
              );
            })}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted">
            <span className="material-symbols-outlined text-4xl mb-3 block" aria-hidden="true">
              search_off
            </span>
            <p>No projects match this filter.</p>
          </div>
        ) : (
          <>
            {/* ── Featured project ─────────────────────────────── */}
            {featured && (
              <div className="mb-8 md:mb-10">
                <ProjectCard
                  project={featured}
                  publicUrl={publicUrl}
                  t={t}
                  onOpenModal={setModalData}
                  featured
                />
              </div>
            )}

            {/* ── Project grid ─────────────────────────────────── */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                {rest.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    publicUrl={publicUrl}
                    t={t}
                    onOpenModal={setModalData}
                    featured={false}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

/* ─── Project Card ──────────────────────────────────────────── */

interface ProjectCardProps {
  project: Project;
  publicUrl: string;
  /** i18n translate function passed from parent. */
  t: (key: string, fallback: string) => string;
  onOpenModal: (data: {type: 'image' | 'mermaid'; content: string; title: string}) => void;
  featured: boolean;
}

/**
 * Individual project card.
 * Featured cards use a horizontal split layout.
 * Grid cards use a vertical stacked layout.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({project, publicUrl, t, onOpenModal, featured}) => {
  const title = t(`projects.p${project.id}.title`, project.title);
  const description = t(`projects.p${project.id}.description`, project.description);
  const metrics = t(`projects.p${project.id}.metrics`, project.metrics);
  const tags = PROJECT_TAGS[project.id] ?? [];

  /** Open the media viewer. */
  const openMedia = () => {
    if (project.mermaid) {
      onOpenModal({type: 'mermaid', content: project.mermaid, title});
    } else if (project.image) {
      onOpenModal({type: 'image', content: `${publicUrl}projects/${project.image}`, title});
    }
  };

  if (featured) {
    return (
      <article
        className="group relative flex flex-col lg:flex-row rounded-2xl border border-border-muted overflow-hidden bg-surface shadow-card hover:border-primary/30 hover:shadow-glow transition-all duration-300"
        aria-label={`Featured project: ${title}`}
      >
        {/* Media area */}
        <button
          className="relative lg:w-3/5 h-64 sm:h-80 lg:h-auto bg-background overflow-hidden flex items-center justify-center cursor-zoom-in focus-visible:ring-2 focus-visible:ring-primary outline-none"
          onClick={openMedia}
          aria-label={`View architecture diagram for ${title}`}
          disabled={!project.mermaid && !project.image}
        >
          {project.videoUrl ? (
            <iframe
              src={project.videoUrl.replace('youtube.com', 'youtube-nocookie.com')}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          ) : project.mermaid ? (
            <div className="w-full h-full p-6 overflow-hidden flex items-center justify-center transform scale-90 group-hover:scale-95 transition-transform duration-500 pointer-events-none">
              <Mermaid chart={project.mermaid} />
            </div>
          ) : project.image ? (
            <>
              <img
                alt=""
                className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                src={`${publicUrl}projects/${project.image}`}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-primary/20 backdrop-blur-sm border border-primary/40 text-primary px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">zoom_in</span>
                  Enlarge
                </span>
              </div>
            </>
          ) : null}
        </button>

        {/* Content area */}
        <div className="lg:w-2/5 p-6 md:p-8 flex flex-col">
          {/* Featured badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/25 text-primary text-xs font-semibold rounded-full">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" aria-hidden="true" />
              Featured Project
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 leading-tight">
            {title}
          </h3>

          <p className="text-muted text-sm leading-relaxed mb-5 flex-1">{description}</p>

          {/* Metrics highlight */}
          {project.metrics && (
            <div className="bg-background rounded-xl border border-border-muted px-4 py-3 mb-5">
              <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
                Key Outcome
              </p>
              <p className="text-sm text-foreground font-medium">{metrics}</p>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Project categories">
            {tags.map((tag) => (
              <span
                key={tag}
                role="listitem"
                className="px-2.5 py-1 bg-surface-raised border border-border-muted text-muted text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-all focus-visible:ring-2 focus-visible:ring-primary outline-none active:scale-[0.98]"
              >
                <FaGithub size={15} aria-hidden="true" />
                Source Code
              </a>
            ) : (
              <button
                disabled
                className="flex-1 flex items-center justify-center gap-2 bg-surface-raised border border-border-muted text-muted py-2.5 px-5 rounded-lg text-sm font-medium cursor-not-allowed"
                aria-label="Source code is internal / private"
              >
                <span className="material-symbols-outlined text-sm" aria-hidden="true">lock</span>
                Internal
              </button>
            )}
            {(project.mermaid || project.image) && (
              <button
                onClick={openMedia}
                className="flex-1 flex items-center justify-center gap-2 border border-border-muted text-muted hover:border-primary/40 hover:text-primary py-2.5 px-5 rounded-lg text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-primary outline-none active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-sm" aria-hidden="true">schema</span>
                Architecture
              </button>
            )}
          </div>
        </div>
      </article>
    );
  }

  /* ── Grid card (non-featured) ───────────────────────────────── */
  return (
    <article
      className="group flex flex-col rounded-2xl border border-border-muted bg-surface overflow-hidden hover:border-primary/30 hover:shadow-card transition-all duration-300"
      aria-label={`Project: ${title}`}
    >
      {/* Media thumbnail */}
      <button
        className="relative h-44 bg-background overflow-hidden flex items-center justify-center cursor-zoom-in focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary outline-none"
        onClick={openMedia}
        aria-label={`View diagram for ${title}`}
        disabled={!project.mermaid && !project.image}
      >
        {project.videoUrl ? (
          <iframe
            src={project.videoUrl.replace('youtube.com', 'youtube-nocookie.com')}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        ) : project.mermaid ? (
          <div className="w-full h-full p-3 overflow-hidden flex items-center justify-center transform scale-75 group-hover:scale-80 transition-transform duration-500 pointer-events-none">
            <Mermaid chart={project.mermaid} />
          </div>
        ) : project.image ? (
          <img
            alt=""
            className="w-full h-full object-contain opacity-60 group-hover:opacity-90 transition-opacity duration-500 p-2"
            src={`${publicUrl}projects/${project.image}`}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <span
            className="material-symbols-outlined text-muted text-4xl"
            aria-hidden="true"
          >
            code_blocks
          </span>
        )}

        {/* Hover zoom hint */}
        {(project.mermaid || project.image) && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/30">
            <span className="bg-surface/80 backdrop-blur-sm border border-border-muted text-foreground px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-primary" aria-hidden="true">zoom_in</span>
              View diagram
            </span>
          </div>
        )}
      </button>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3" role="list" aria-label="Project categories">
          {tags.map((tag) => (
            <span
              key={tag}
              role="listitem"
              className="px-2 py-0.5 bg-surface-raised border border-border-muted text-muted text-[11px] font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-base font-display font-bold text-foreground mb-2 leading-snug">
          {title}
        </h3>

        <p className="text-muted text-xs leading-relaxed mb-4 flex-1 line-clamp-3">{description}</p>

        {/* Metrics */}
        {project.metrics && (
          <p className="text-primary text-xs font-medium mb-4 leading-relaxed">{metrics}</p>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-primary/10 border border-primary/25 text-primary py-2 px-4 rounded-lg text-xs font-semibold hover:bg-primary hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-primary outline-none active:scale-[0.98]"
            >
              <FaGithub size={13} aria-hidden="true" />
              Code
            </a>
          ) : (
            <span className="flex-1 flex items-center justify-center gap-1.5 border border-border-muted text-muted py-2 px-4 rounded-lg text-xs font-medium cursor-not-allowed">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">lock</span>
              Internal
            </span>
          )}
          {(project.mermaid || project.image) && !project.videoUrl && (
            <button
              onClick={openMedia}
              className="flex items-center justify-center gap-1.5 border border-border-muted text-muted hover:border-primary/40 hover:text-primary py-2 px-3 rounded-lg text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-primary outline-none active:scale-[0.98]"
              aria-label={`Open architecture diagram for ${title}`}
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">schema</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Projects;
