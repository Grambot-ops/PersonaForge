import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Cast the icon components to React.ElementType
const GithubIcon = FaGithub as React.ElementType;
const LinkedinIcon = FaLinkedin as React.ElementType;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-800 bg-black text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-2 justify-center md:justify-start mb-4">
              <span className="font-mono font-bold tracking-tight text-xl text-white">
                MAXIMUS.SH
              </span>
              <span className="text-slate-700">|</span>
              <span className="font-mono text-xs text-primary bg-primary/10 px-1 border border-primary/20">
                v2.4.0-stable
              </span>
            </div>
            <p className="text-[10px] text-slate-600 uppercase tracking-widest font-mono">
              Engineering & Security Portfolio
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Grambot-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/maximus-mukiza-1523a5297"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-widest gap-4 font-mono">
          <p>© {currentYear} Maximus Mukiza. All rights reserved.</p>
          <p>
            Latency: <span className="text-primary">12ms</span> {"//"} Region:{" "}
            <span className="text-white">eu-central-1</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
