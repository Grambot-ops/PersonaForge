import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation

const About: React.FC = () => {
  const { t } = useTranslation();
  const publicUrl = process.env.PUBLIC_URL || "";

  return (
    <section className="py-24 bg-black relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="relative z-10 rounded-t-lg overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <div className="h-8 bg-slate-800 flex items-center px-4 justify-between border-b border-black">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  vim profile.py
                </div>
              </div>
              <div className="relative group-hover:border-primary/50 transition-colors border-b border-x border-slate-800 max-h-[630px] overflow-hidden">
                <img
                  alt="Maximus Mukiza"
                  className="w-full h-full object-cover object-top grayscale mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 glitch-hover"
                  src={`${publicUrl}/images/Profile.webp`}
                />

                {/* HUD Elements */}
                <div className="absolute top-4 left-4 flex flex-col gap-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary"></div>
                    <span className="text-[8px] font-mono text-primary font-bold">
                      IDENTITY_LOCK
                    </span>
                  </div>
                  <div className="text-[8px] font-mono text-slate-400">
                    POS: 51.1895° N, 4.8159° E
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 text-right pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-[8px] font-mono text-primary animate-pulse">
                    RECOGNITION: 98.4%
                  </div>
                  <div className="text-[10px] font-mono text-white font-bold uppercase tracking-tighter">
                    Verified_Engineer
                  </div>
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)50%,rgba(0,0,0,0.25)50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Scanning Line Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100">
                  <div className="w-full h-[1px] bg-primary/50 shadow-[0_0_10px_#00ff41] absolute top-1/4 animate-scan-line"></div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-6 lg:-right-12 w-[90%] bg-black/90 backdrop-blur rounded border border-primary/30 p-6 font-mono text-xs text-slate-300 shadow-[0_0_30px_rgba(0,0,0,0.8)] z-20 hidden md:block">
              <div className="flex">
                <div className="text-slate-600 mr-4 select-none text-right">
                  1<br />2<br />3<br />4<br />5<br />6
                </div>
                <pre className="text-xs">
                  <code>
                    <span className="text-purple-400">class</span>{" "}
                    <span className="text-yellow-300">Engineer</span>
                    (Infrastructure):
                    <br />
                    {"  "}
                    <span className="text-purple-400">def</span>{" "}
                    <span className="text-blue-400">__init__</span>(
                    <span className="text-red-400">self</span>):
                    <br />
                    {"    "}
                    <span className="text-red-400">self</span>.stack = [
                    <span className="text-green-400">"AWS"</span>,{" "}
                    <span className="text-green-400">"Azure"</span>,{" "}
                    <span className="text-green-400">"Python"</span>]<br />
                    {"    "}
                    <span className="text-red-400">self</span>.focus ={" "}
                    <span className="text-green-400">"Security"</span>
                    <br />
                    {"  "}
                    <span className="text-purple-400">def</span>{" "}
                    <span className="text-blue-400">build</span>(
                    <span className="text-red-400">self</span>):
                    <br />
                    {"    "}
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-green-400">"Resilient Systems"</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl font-display font-bold mb-6 text-white">
              <span className="text-primary font-mono text-lg mr-2">02.</span>
              Engineering Philosophy
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-mono text-sm">
              &gt;{" "}
              {t(
                "about.philosophy_1",
                "I approach cloud architecture not just as resource allocation, but as constructing defensive perimeters.",
              )}
              <br />
              <br />
              &gt; {t("about.philosophy_2", "My work focuses on the ")}
              <span className="text-white bg-slate-800 px-1">
                "Assume Breach"
              </span>
              {t(
                "about.philosophy_3",
                " mentality—building systems that remain resilient even when individual components are compromised.",
              )}
            </p>

            <div className="grid sm:grid-cols-2 gap-8 border-t border-slate-800 pt-8">
              <div>
                <h3 className="text-primary font-mono font-bold uppercase text-xs tracking-widest mb-4 flex items-center">
                  <span className="material-symbols-outlined text-sm mr-2">
                    memory
                  </span>
                  Core Competencies
                </h3>
                <ul className="space-y-3 text-xs font-mono text-slate-400">
                  <li className="flex items-center">
                    <span className="text-primary mr-3">&gt;</span>Cloud
                    Governance (IaC)
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">&gt;</span>Threat
                    Detection
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">&gt;</span>Automated
                    Compliance
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-mono font-bold uppercase text-xs tracking-widest mb-4 flex items-center">
                  <span className="material-symbols-outlined text-sm mr-2">
                    rocket_launch
                  </span>
                  Trajectory
                </h3>
                <p className="text-xs font-mono text-slate-500 leading-relaxed">
                  {t(
                    "about.trajectory",
                    "Currently architecting lab environments that simulate real-world APT scenarios to test detection logic in Wazuh and Sentinel.",
                  )}
                </p>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <Link
                to="/cv"
                className="px-6 py-3 bg-white text-black font-bold text-xs font-mono rounded-sm hover:bg-primary transition-colors uppercase tracking-widest"
              >
                View Dossier
              </Link>
              <a
                href={`${publicUrl}/CV_Maximus.pdf`}
                download
                className="px-6 py-3 border border-slate-700 text-slate-300 font-bold text-xs font-mono rounded-sm hover:border-primary hover:text-primary transition-all uppercase tracking-widest"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
