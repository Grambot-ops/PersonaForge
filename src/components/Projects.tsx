import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../types";
import projectDataImport from "../data/projects.json";
import Mermaid from "./Mermaid";

const projectData: Project[] = projectDataImport;

/** Tag a project's categories from its content. */
const PROJECT_TAGS: Record<number, string[]> = {
  7: ["SRE", "Cloud", "GitOps / IaC", "Security"],
  6: ["SRE", "Cloud", "GitOps / IaC"],
  2: ["SRE", "Cloud", "Security", "GitOps / IaC"],
  8: ["SRE", "Cloud", "Security", "Automation"],
  5: ["Automation", "AI / MLOps"],
  3: ["SRE", "Cloud", "GitOps / IaC"],
  1: ["Security", "Automation"],
};

/** Filter tabs shown above the project grid. */
const FILTER_TABS = [
  "All",
  "SRE",
  "Cloud",
  "Security",
  "GitOps / IaC",
  "Automation",
] as const;
type FilterTab = (typeof FILTER_TABS)[number];

/**
 * Projects section.
 * Features: filter tabs, featured first project (glass card), masonry grid,
 * lightbox modal for Mermaid diagrams and images.
 */
const Projects: React.FC = () => {
  const { t } = useTranslation();
  const publicUrl = import.meta.env.BASE_URL;
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");
  const [modalData, setModalData] = useState<{
    type: "image" | "mermaid";
    content: string;
    title: string;
  } | null>(null);

  /** Close modal on Escape key. */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalData(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  /** Returns true if this project matches the active filter. */
  const matchesFilter = useCallback(
    (project: Project): boolean => {
      if (activeFilter === "All") return true;
      return (PROJECT_TAGS[project.id] ?? []).includes(activeFilter);
    },
    [activeFilter],
  );

  const filtered = projectData.filter(matchesFilter);

  return (
    <section
      className="py-20 md:py-32 bg-background relative overflow-hidden"
      id="projects"
      aria-labelledby="projects-heading"
    >
      {/* Decorative background mesh */}
      <div
        className="absolute top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-primary/[0.03] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Lightbox modal ───────────────────────────────────── */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md p-4 md:p-10"
            onClick={() => setModalData(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className={`relative ${
                modalData.type === "mermaid" ? "max-w-[95vw]" : "max-w-5xl"
              } w-full max-h-[90vh] flex flex-col`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-foreground font-display font-bold text-lg">
                  {modalData.title}
                </h2>
                <button
                  className="flex items-center gap-2 text-muted hover:text-primary transition-all bg-surface border border-border-muted px-4 py-2 rounded-xl cursor-pointer"
                  onClick={() => setModalData(null)}
                >
                  <span className="material-symbols-outlined text-base">
                    close
                  </span>
                  <span className="text-sm font-semibold">Close</span>
                </button>
              </div>

              {modalData.type === "image" ? (
                <img
                  src={modalData.content}
                  alt={modalData.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-border shadow-2xl bg-surface"
                />
              ) : (
                <div className="w-full h-[65vh] md:h-[75vh] bg-surface border border-border rounded-2xl relative overflow-hidden select-none">
                  <Mermaid chart={modalData.content} responsive={false} interactive={true} />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-6">
              <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />
              Featured Work
            </div>
            <h2
              id="projects-heading"
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight leading-[1.1]"
            >
              {t("projects.heading", "Engineering Projects")}
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Cloud architecture, security orchestration, and automation
              pipelines built for high-scale enterprise environments.
            </p>
          </div>

          {/* Filter buttons */}
          <div
            className="flex flex-wrap gap-2 p-1.5 bg-surface/50 backdrop-blur-md border border-border-muted rounded-2xl shadow-sm"
            aria-label={t("projects.filterAria", "Filter projects")}
          >
            {FILTER_TABS.map((tab) => {
              const displayLabel = t(
                `projects.${tab.toLowerCase().split(" / ")[0].split(" ")[0]}`,
                tab,
              );
              return (
                <button
                  key={tab}
                  aria-pressed={activeFilter === tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                    activeFilter === tab
                      ? "bg-primary text-white shadow-glow"
                      : "text-muted hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {displayLabel}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="relative">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bento-card justify-center items-center py-32 text-center w-full"
              >
                <span className="material-symbols-outlined text-5xl text-primary/20 mb-4">
                  search_off
                </span>
                <p className="text-muted font-medium">
                  No projects found for this category.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full"
              >
                {filtered.map((project, index) => {
                  // Featured logic: first item in 'All' view, or first 2 items for visual interest
                  const isFeatured =
                    (activeFilter === "All" && index === 0) ||
                    (index === 0 && filtered.length > 2);
                  const gridClass = isFeatured
                    ? "lg:col-span-8 lg:row-span-2"
                    : "lg:col-span-4";

                  return (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      publicUrl={publicUrl}
                      t={t}
                      onOpenModal={setModalData}
                      featured={isFeatured}
                      index={index}
                      className={gridClass}
                    />
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Project Card ──────────────────────────────────────────── */

interface ProjectCardProps {
  project: Project;
  publicUrl: string;
  t: (key: string, fallback: string) => string;
  onOpenModal: (data: {
    type: "image" | "mermaid";
    content: string;
    title: string;
  }) => void;
  featured: boolean;
  index: number;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  publicUrl,
  t,
  onOpenModal,
  featured,
  index,
  className,
}) => {
  const title = t(`projects.p${project.id}.title`, project.title);
  const description = t(
    `projects.p${project.id}.description`,
    project.description,
  );
  const metrics = t(`projects.p${project.id}.metrics`, project.metrics);
  const tags = PROJECT_TAGS[project.id] ?? [];

  const openMedia = () => {
    if (project.mermaid) {
      onOpenModal({ type: "mermaid", content: project.mermaid, title });
    } else if (project.image) {
      onOpenModal({
        type: "image",
        content: `${publicUrl}projects/${project.image}`,
        title,
      });
    }
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
        y: { duration: 0.25 },
        layout: { type: "spring", stiffness: 300, damping: 30 }
      }}
      className={`bento-card group ${className}`}
    >
      <div className="flex flex-col h-full">
        {/* Media area for featured cards or cards with media */}
        {(featured || project.mermaid || project.image || project.videoUrl) && (
          <div
            className={`relative mb-6 rounded-xl overflow-hidden bg-background/50 border border-border-muted ${featured ? "h-64 sm:h-80 md:h-[450px]" : "h-48"}`}
          >
            <button
              className="w-full h-full flex items-center justify-center cursor-zoom-in group-hover:scale-105 transition-transform duration-700"
              onClick={openMedia}
              disabled={!project.mermaid && !project.image}
            >
              {project.videoUrl ? (
                <iframe
                  src={project.videoUrl.replace(
                    "youtube.com",
                    "youtube-nocookie.com",
                  )}
                  title={title}
                  className="w-full h-full border-0 pointer-events-none"
                  loading="lazy"
                />
              ) : project.mermaid ? (
                <div className="w-full h-full p-6 flex items-center justify-center pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                  <Mermaid chart={project.mermaid} />
                </div>
              ) : project.image ? (
                <img
                  alt={`${title} — ${description}`}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                  src={`${publicUrl}projects/${project.image}`}
                  loading="lazy"
                  width={600}
                  height={400}
                  decoding="async"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-primary/20">
                  <span className="material-symbols-outlined text-5xl">
                    architecture
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Internal Arch
                  </span>
                </div>
              )}
            </button>

            <div className="absolute top-4 right-4 flex gap-2">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-surface/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub size={16} />
                </a>
              )}
              {(project.mermaid || project.image) && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openMedia();
                  }}
                  className="w-8 h-8 rounded-lg bg-surface/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all shadow-lg"
                >
                  <span className="material-symbols-outlined text-sm">
                    fullscreen
                  </span>
                </button>
              )}
            </div>
          </div>
        )}

        <div className="flex-grow flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-primary/5 border border-primary/10 text-primary text-[9px] font-mono font-bold uppercase tracking-tight rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3
            className={`font-display font-bold text-foreground mb-3 leading-tight ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}
          >
            {title}
          </h3>

          <p
            className={`text-muted leading-relaxed mb-6 flex-grow ${featured ? "text-base md:text-lg lg:max-w-3xl" : "text-sm line-clamp-3"}`}
          >
            {description}
          </p>

          <div
            className={`mt-auto pt-6 border-t border-border-muted ${featured ? "flex flex-col md:flex-row md:items-center justify-between gap-6" : ""}`}
          >
            {project.metrics && (
              <div
                className={`flex flex-col gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10 ${featured ? "md:min-w-[400px]" : "w-full"}`}
              >
                <p className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.1em] flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">
                    analytics
                  </span>
                  Technical Outcome
                </p>
                <p
                  className={`font-mono font-semibold text-foreground leading-snug ${featured ? "text-base" : "text-[11px]"}`}
                >
                  {metrics}
                </p>
              </div>
            )}

            {featured && project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:shadow-glow hover:-translate-y-1 transition-all group/btn"
              >
                <FaGithub size={20} />
                <span>View Repository</span>
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;
