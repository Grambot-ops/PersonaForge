import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const About: React.FC = () => {
  const { t } = useTranslation();
  const publicUrl = import.meta.env.BASE_URL;

  return (
    <section className="py-24 bg-background relative" id="about" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="relative z-10 rounded-t-lg overflow-hidden border border-border-muted shadow-2xl bg-card-dark">
              <div className="h-8 bg-card-dark flex items-center px-4 justify-between border-b border-black">
                <div className="flex space-x-2" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[10px] font-mono text-muted">
                  vim profile.py
                </div>
              </div>
              <div className="relative group-hover:border-primary/50 transition-colors border-b border-x border-border-muted max-h-[630px] overflow-hidden">
                <img
                  alt="Maximus Mukiza"
                  className="w-full h-full object-cover object-top grayscale mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 glitch-hover"
                  src={`${publicUrl}images/Profile.webp`}
                />

                {/* HUD Elements */}
                <div className="absolute top-4 left-4 flex flex-col gap-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary"></div>
                    <span className="text-[8px] font-mono text-primary font-bold">
                      IDENTITY_LOCK
                    </span>
                  </div>
                  <div className="text-[8px] font-mono text-muted">
                    POS: 51.1895° N, 4.8159° E
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 text-right pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                  <div className="text-[8px] font-mono text-primary animate-pulse">
                    RECOGNITION: 98.4%
                  </div>
                  <div className="text-[10px] font-mono text-foreground font-bold uppercase tracking-tighter">
                    Verified_Engineer
                  </div>
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)50%,rgba(0,0,0,0.25)50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity" aria-hidden="true"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background via-background/40 to-transparent" aria-hidden="true"></div>

                {/* Scanning Line Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100" aria-hidden="true">
                  <div className="w-full h-[1px] bg-primary/50 shadow-[0_0_10px_#00ff41] absolute top-1/4 animate-scan-line"></div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-6 lg:-right-12 w-[90%] bg-background/95 backdrop-blur rounded-sm border border-primary/30 p-6 font-mono text-xs text-muted shadow-2xl z-20 hidden md:block transition-colors duration-500">
              <div className="flex" aria-label="Engineer Class Definition Snippet">
                <div className="text-primary/40 mr-4 select-none text-right border-r border-border-muted pr-4" aria-hidden="true">
                  1<br />2<br />3<br />4<br />5<br />6
                </div>
                <pre className="text-xs">
                  <code className="text-foreground/90">
                    <span className="text-primary font-bold">class</span>{" "}
                    <span className="text-primary/80">Engineer</span>
                    (Infrastructure):
                    <br />
                    {"  "}
                    <span className="text-primary font-bold">def</span>{" "}
                    <span className="text-primary/60">__init__</span>(
                    <span className="text-muted">self</span>):
                    <br />
                    {"    "}
                    <span className="text-muted">self</span>.stack = {`{`}
                    <br />
                    {"      "}
                    <span className="text-primary/70">"cloud"</span>: [
                    <span className="text-primary/90">"AWS"</span>,{" "}
                    <span className="text-primary/90">"Azure"</span>],
                    <br />
                    {"      "}
                    <span className="text-primary/70">"logic"</span>: [
                    <span className="text-primary/90">"Python"</span>,{" "}
                    <span className="text-primary/90">"Bash"</span>]
                    <br />
                    {"    "}
                    {`}`}
                    <br />
                    {"    "}
                    <span className="text-muted">self</span>.focus ={" "}
                    <span className="text-primary/90">"Zero_Trust"</span>
                    <br />
                    {"  "}
                    <span className="text-primary font-bold">def</span>{" "}
                    <span className="text-primary/60">build</span>(
                    <span className="text-muted">self</span>):
                    <br />
                    {"    "}
                    <span className="text-primary font-bold">return</span>{" "}
                    <span className="text-primary/90">"Resilient Systems"</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <h2 id="about-heading" className="text-3xl font-display font-bold mb-6 text-foreground">
              <span className="text-primary font-mono text-lg mr-2" aria-hidden="true">02.</span>
              Engineering Philosophy
            </h2>
            <div className="text-lg text-muted mb-8 leading-relaxed font-mono text-sm">
              <p className="mb-4">
                &gt;{" "}
                {t(
                  "about.philosophy_1",
                  "I approach cloud architecture not just as resource allocation, but as constructing defensive perimeters.",
                )}
              </p>
              <p>
                &gt; {t("about.philosophy_2", "My work focuses on the ")}
                <span className="text-foreground bg-primary/20 px-1 font-bold">
                  "Assume Breach"
                </span>
                {t(
                  "about.philosophy_3",
                  " mentality—building systems that remain resilient even when individual components are compromised.",
                )}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 border-t border-border-muted pt-8">
              <div>
                <h3 className="text-primary font-mono font-bold uppercase text-xs tracking-widest mb-4 flex items-center">
                  <span className="material-symbols-outlined text-sm mr-2" aria-hidden="true">
                    memory
                  </span>
                  Core Competencies
                </h3>
                <ul className="space-y-3 text-xs font-mono text-muted">
                  <li className="flex items-center">
                    <span className="text-primary mr-3" aria-hidden="true">&gt;</span>Cloud
                    Governance (IaC)
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3" aria-hidden="true">&gt;</span>Site Reliability Engineering
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3" aria-hidden="true">&gt;</span>DevSecOps Lifecycle
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-mono font-bold uppercase text-xs tracking-widest mb-4 flex items-center">
                  <span className="material-symbols-outlined text-sm mr-2" aria-hidden="true">
                    shield
                  </span>
                  Strategic Focus
                </h3>
                <ul className="space-y-3 text-xs font-mono text-muted">
                  <li className="flex items-center">
                    <span className="text-primary mr-3" aria-hidden="true">&gt;</span>Zero Trust Networking
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3" aria-hidden="true">&gt;</span>Confidential Computing
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3" aria-hidden="true">&gt;</span>GitOps Flow Control
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
