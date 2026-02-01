import React from "react";
import projectData from "../data/projects.json"; // Keep this for IDs and video URLs

const Projects: React.FC = () => {
  const publicUrl = import.meta.env.BASE_URL;

  return (
    <section className="py-24 bg-black relative" id="projects">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9ImIiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHBhdGggZD0iTTEgMGgwLTI1YzAtMS41Mi40OC0zIDEuNTItM3YzeiIgZmlsbD0iIzIyYzU1ZSIgb3BhY2l0eT0iLjEiLz48L3BhdHRlcm4+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2IpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 border-b border-slate-800 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4 text-white">
              <span className="text-primary font-mono text-lg mr-2">03.</span>
              Engineering Case Studies
            </h2>
            <div className="flex space-x-1 mt-8">
              <div className="px-6 py-3 bg-primary/10 border-t-2 border-primary text-primary font-mono text-xs font-bold cursor-default tracking-wider">
                {"// ACTIVE_DEPLOYMENTS"}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col lg:flex-row bg-[#080808] rounded-sm border border-slate-800 overflow-hidden hover:border-primary transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(0,255,65,0.1)]"
            >
              <div className="relative lg:w-3/5 min-h-[300px] border-r border-slate-800 overflow-hidden">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  src={`${publicUrl}/projects/project${project.id}.png`}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 right-4 bg-black/90 backdrop-blur text-primary text-[10px] px-3 py-1.5 rounded-sm font-mono border border-primary/30 uppercase">
                  {project.id === 6
                    ? "AWS // SIEM // SOC"
                    : project.id === 3
                      ? "AZURE // BICEP // DOCKER"
                      : "CLOUD // SEC // DEVOPS"}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              <div className="lg:w-2/5 p-8 flex flex-col">
                <div className="mb-4">
                  <div className="inline-flex items-center px-2 py-1 mb-3 rounded-sm bg-primary/10 border border-primary/40 text-primary text-[10px] font-bold font-mono tracking-wider">
                    <span className="material-symbols-outlined text-sm mr-1">
                      check_circle
                    </span>
                    KEY ACHIEVEMENT: VERIFIED
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-slate-500 uppercase">
                    {`ID: EXT-PROJ-0${project.id} // STATUS: STABLE`}
                  </p>
                </div>

                <p className="text-slate-400 mb-6 text-sm leading-relaxed font-mono">
                  {project.description}
                </p>

                <div className="bg-[#1e1e1e] rounded-sm border border-slate-700 mb-6 overflow-hidden shadow-inner">
                  <div className="bg-[#2d2d2d] px-3 py-1 flex justify-between items-center border-b border-slate-700">
                    <span className="text-[10px] font-mono text-slate-400">
                      deployment_spec.yaml - VIM
                    </span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                    </div>
                  </div>
                  <div className="p-3 bg-[#1e1e1e] overflow-x-auto">
                    <pre className="font-mono text-[10px] text-slate-300 leading-tight">
                      <code>
                        <div className="flex">
                          <span className="text-slate-600 border-r border-slate-700 pr-3 mr-3 select-none text-right">
                            1<br />2<br />3
                          </span>
                          <div>
                            <span className="text-purple-400">Context:</span>{" "}
                            <span className="text-yellow-400">
                              "{project.context}"
                            </span>
                            {"\n"}
                            <span className="text-purple-400">
                              Outcome:
                            </span>{" "}
                            <span className="text-green-400">
                              "{project.realizations}"
                            </span>
                            {"\n"}
                            <span className="text-blue-400">Status:</span>{" "}
                            <span className="text-green-400">VALIDATED</span>
                          </div>
                        </div>
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  <button className="flex-1 bg-white text-black py-3 rounded-sm text-xs font-mono font-bold flex items-center justify-center hover:bg-slate-200 transition-colors uppercase tracking-wider">
                    <span className="material-symbols-outlined mr-2 text-base">
                      terminal
                    </span>{" "}
                    Tech Stack
                  </button>
                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-slate-700 py-3 rounded-sm text-xs font-mono font-bold flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-slate-400 uppercase tracking-wider"
                    >
                      <span className="material-symbols-outlined mr-2 text-base">
                        play_circle
                      </span>{" "}
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
