import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaAws } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiPulumi, SiLinux } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { Project } from "../types";
import projectDataImport from "../data/projects.json";
import Mermaid from "./Mermaid";

const projectData: Project[] = projectDataImport as Project[];

interface ProjectsProps {
  aestheticMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ aestheticMode }) => {
  const { t } = useTranslation();
  const publicUrl = import.meta.env.BASE_URL;
  const [modalData, setModalData] = useState<{
    type: "image" | "mermaid";
    content: string;
    title: string;
  } | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalData(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      className={`py-24 bg-background relative ${aestheticMode ? "crt-flicker" : ""}`}
      id="projects"
      aria-labelledby="projects-heading"
    >
      {/* Lightbox Modal */}
      {modalData && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-2 md:p-10"
          onClick={() => setModalData(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={`relative ${modalData.type === "mermaid" ? "max-w-[98vw] lg:max-w-[95vw]" : "max-w-6xl"} w-full max-h-[92vh] flex flex-col items-center animate-in zoom-in duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="modal-title" className="sr-only">
              {modalData.title} Snapshot
            </h2>
            <button
              className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-background/50 px-3 py-1 border border-white/10 focus-visible:ring-2 focus-visible:ring-primary outline-none"
              onClick={() => setModalData(null)}
              aria-label="Close dialog"
            >
              [ CLOSE ]
              <span className="material-symbols-outlined text-sm" aria-hidden="true">close</span>
            </button>

            {modalData.type === "image" ? (
              <img
                src={modalData.content}
                alt={`${modalData.title} Full View`}
                className="max-w-full max-h-[85vh] object-contain border border-border-muted shadow-2xl bg-card-dark"
              />
            ) : (
              <div className="w-full h-full min-h-[80vh] flex flex-col bg-card-dark border border-border-muted p-4 md:p-8 overflow-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                <div className="min-w-max py-8">
                  <Mermaid chart={modalData.content} responsive={false} />
                </div>
              </div>
            )}

            <div className="mt-4 font-mono text-[11px] text-muted uppercase tracking-wider bg-background/50 px-4 py-1.5 border border-border-muted flex flex-wrap items-center gap-4" aria-hidden="true">
              <span>
                Source Snapshot //{" "}
                {modalData.type === "image"
                  ? "Full Resolution View"
                  : "Architectural Schema"}
              </span>
              {modalData.type === "mermaid" && (
                <span className="text-primary/60 border-l border-border-muted pl-4">
                  [ Use Scrollbars / Pinch to Zoom ]
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9ImIiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHBhdGggZD0iTTEgMGgwLTI1YzAtMS41Mi40OC0zIDEuNTItM3YzeiIgZmlsbD0iIzIyYzU1ZSIgb3BhY2l0eT0iLjEiLz48L3BhdHRlcm4+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2IpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-20 pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 border-b border-border-muted flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 id="projects-heading" className="text-4xl font-display font-bold mb-4 text-foreground">
              <span className="text-primary font-mono text-lg mr-2" aria-hidden="true">03.</span>
              {t("projects.heading", "Engineering Case Studies")}
            </h2>
            <div className="flex space-x-1 mt-8" role="tablist" aria-label="Deployment Filters">
              <div className="px-6 py-3 bg-primary/10 border-t-2 border-primary text-primary font-mono text-xs font-bold cursor-default tracking-wider" role="tab" aria-selected="true">
                {"// ACTIVE_DEPLOYMENTS"}
              </div>
            </div>
          </div>
        </div>

        <ul className="flex flex-col gap-16">
          {projectData.map((project) => (
            <li
              key={project.id}
              className="group flex flex-col lg:flex-row bg-card-dark rounded-sm border border-border-muted overflow-hidden hover:border-primary transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(0,255,65,0.1)]"
            >
              <div className="relative lg:w-3/5 h-[350px] lg:h-[480px] border-r border-border-muted overflow-hidden flex items-center justify-center bg-background">
                {project.videoUrl ? (
                  <div className="w-full h-full aspect-video">
                    <iframe
                      src={project.videoUrl.replace(
                        "youtube.com",
                        "youtube-nocookie.com",
                      )}
                      title={t(`projects.p${project.id}.title`, project.title)}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                ) : project.mermaid ? (
                  <button
                    className="w-full h-full p-4 overflow-hidden flex items-center justify-center bg-card-dark cursor-zoom-in group/btn focus-visible:ring-2 focus-visible:ring-primary outline-none"
                    onClick={() =>
                      setModalData({
                        type: "mermaid",
                        content: project.mermaid!,
                        title: t(`projects.p${project.id}.title`, project.title)
                      })
                    }
                    aria-label={`View documentation for ${t(`projects.p${project.id}.title`, project.title)}`}
                  >
                    <div className="w-full h-full max-h-full overflow-hidden flex items-center justify-center transform scale-90 group-hover/btn:scale-100 transition-transform duration-500 pointer-events-none">
                      <Mermaid chart={project.mermaid} />
                    </div>
                  </button>
                ) : (
                  <button
                    className="relative w-full h-full cursor-zoom-in group/img focus-visible:ring-2 focus-visible:ring-primary outline-none overflow-hidden"
                    onClick={() => {
                      setModalData({
                        type: "image",
                        content: `${publicUrl}projects/${project.image}`,
                        title: t(`projects.p${project.id}.title`, project.title)
                      });
                    }}
                    aria-label={`View deployment image for ${t(`projects.p${project.id}.title`, project.title)}`}
                  >
                    <img
                      alt=""
                      className="w-full h-full object-contain grayscale opacity-60 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-500"
                      src={`${publicUrl}projects/${project.image}`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/800x600/0a0a0a/00ff41?text=Deployment+Snapshot";
                      }}
                    />
                    <div className="absolute inset-0 bg-background/40 group-hover/img:bg-transparent transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary/20 backdrop-blur-sm border border-primary/50 text-primary px-4 py-2 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm" aria-hidden="true">
                          zoom_in
                        </span>
                        Enlarge Snapshot
                      </div>
                    </div>
                  </button>
                )}

                <div className="absolute top-4 right-4 bg-background/95 backdrop-blur text-primary text-[10px] px-3 py-1.5 rounded-sm font-mono border border-primary/30 uppercase z-20 flex items-center gap-2 shadow-[0_0_20px_rgba(0,0,0,0.5)]" aria-label="Tech Stack">
                  {project.id === 7 ? (
                    <>
                      <SiKubernetes aria-label="Kubernetes" />
                      <SiLinux aria-label="Talos Linux" />
                      <FaAws aria-label="AWS" />
                      <span className="ml-1 border-l border-primary/20 pl-2">
                        HYBRID // GITOPS
                      </span>
                    </>
                  ) : project.id === 6 ? (
                    <>
                      <SiTerraform aria-label="Terraform" />
                      <FaAws aria-label="AWS" />
                      <VscAzure aria-label="Azure" />
                      <span className="ml-1 border-l border-primary/20 pl-2">
                        MULTI-CLOUD
                      </span>
                    </>
                  ) : project.id === 2 ? (
                    <>
                      <FaAws aria-label="AWS" />
                      <SiTerraform aria-label="OpenTofu" />
                      <span className="ml-1 border-l border-primary/20 pl-2">
                        AWS // 3-TIER // IAC
                      </span>
                    </>
                  ) : project.id === 8 ? (
                    <>
                      <FaAws aria-label="AWS" />
                      <SiPulumi aria-label="Pulumi" />
                      <span className="ml-1 border-l border-primary/20 pl-2">
                        AWS // SRE // PULUMI
                      </span>
                    </>
                  ) : project.id === 3 ? (
                    <>
                      <VscAzure aria-label="Azure" />
                      <span className="ml-1 border-l border-primary/20 pl-2">
                        AZURE // BICEP // DOCKER
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                        sensors
                      </span>
                      <span>IOT // SEC // AI</span>
                    </>
                  )}
                </div>
              </div>

              <div className="lg:w-2/5 p-8 flex flex-col">
                <div className="mb-4">
                  <div className="inline-flex items-center px-2 py-1 mb-3 rounded-sm bg-primary/10 border border-primary/40 text-primary text-[10px] font-bold font-mono tracking-wider" role="status">
                    <span className="material-symbols-outlined text-sm mr-1" aria-hidden="true">
                      check_circle
                    </span>
                    KEY ACHIEVEMENT: VERIFIED
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {t(`projects.p${project.id}.title`, project.title)}
                  </h3>
                  <p className="font-mono text-xs text-muted uppercase">
                    {`ID: EXT-PROJ-0${project.id} // STATUS: STABLE`}
                  </p>
                </div>

                <p className="text-muted mb-6 text-sm leading-relaxed font-mono">
                  {t(
                    `projects.p${project.id}.description`,
                    project.description,
                  )}
                </p>

                <div className="bg-background rounded-sm border border-border-muted mb-6 overflow-hidden shadow-inner group/vim" aria-label="Deployment Specification">
                  <div className="bg-card-dark px-3 py-1.5 flex justify-between items-center border-b border-border-muted">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs text-primary" aria-hidden="true">
                        description
                      </span>
                      <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
                        deployment_spec.yaml - VIM
                      </span>
                    </div>
                    <div className="flex gap-1.5" aria-hidden="true">
                      <div className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/40"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500/20 border border-green-500/40"></div>
                    </div>
                  </div>
                  <div className="p-4 bg-background overflow-x-auto scrollbar-thin scrollbar-thumb-primary/10">
                    <pre className="font-mono text-[11px] leading-relaxed">
                      <code>
                        <div className="flex">
                          <span className="text-muted/40 border-r border-border-muted pr-4 mr-4 select-none text-right font-light" aria-hidden="true">
                            1<br />2<br />3<br />4
                          </span>
                          <div className="text-foreground/90">
                            <span className="text-primary font-bold">
                              Problem:
                            </span>{" "}
                            <span className="text-muted">
                              "
                              {t(
                                `projects.p${project.id}.context`,
                                project.context,
                              )}
                              "
                            </span>
                            {"\n"}
                            <span className="text-primary font-bold">
                              Outcome:
                            </span>{" "}
                            <span className="text-muted">
                              "
                              {t(
                                `projects.p${project.id}.realizations`,
                                project.realizations,
                              )}
                              "
                            </span>
                            {"\n"}
                            <span className="text-primary font-bold">
                              Metrics:
                            </span>{" "}
                            <span className="text-muted">
                              "
                              {t(
                                `projects.p${project.id}.metrics`,
                                project.metrics,
                              )}
                              "
                            </span>
                            {"\n"}
                            <span className="text-primary font-bold underline decoration-primary/30">
                              Status:
                            </span>{" "}
                            <span className="text-primary animate-pulse font-bold">
                              VALIDATED
                            </span>
                          </div>
                        </div>
                      </code>
                    </pre>
                  </div>
                  <div className="bg-primary/5 px-3 py-1 flex justify-between items-center border-t border-border-muted font-mono text-[9px] text-muted/60 uppercase tracking-tighter" aria-hidden="true">
                    <span>-- INSERT --</span>
                    <span>UTF-8 | YAML | L: 4 C: 20</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-black py-3 rounded-sm text-xs font-mono font-bold flex items-center justify-center hover:bg-primary/80 transition-colors uppercase tracking-wider focus-visible:ring-4 focus-visible:ring-primary/50 outline-none"
                    >
                      <span className="material-symbols-outlined mr-2 text-base" aria-hidden="true">
                        terminal
                      </span>{" "}
                      Source Code
                    </a>
                  ) : (
                    <button className="flex-1 bg-card-dark text-muted/50 py-3 rounded-sm text-xs font-mono font-bold flex items-center justify-center cursor-not-allowed uppercase tracking-wider border border-border-muted focus-visible:ring-2 focus-visible:ring-primary outline-none">
                      <span className="material-symbols-outlined mr-2 text-base" aria-hidden="true">
                        lock
                      </span>{" "}
                      Internal
                    </button>
                  )}
                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-primary py-3 rounded-sm text-xs font-mono font-bold flex items-center justify-center hover:bg-primary hover:text-black transition-colors text-primary uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-primary outline-none"
                    >
                      <span className="material-symbols-outlined mr-2 text-base" aria-hidden="true">
                        play_circle
                      </span>{" "}
                      Watch Demo
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
