import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Cast the icon components to React.ElementType
const GithubIcon = FaGithub as React.ElementType;
const LinkedinIcon = FaLinkedin as React.ElementType;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border-muted bg-background text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-2 justify-center md:justify-start mb-4">
              <span className="font-mono font-bold tracking-tight text-xl text-foreground">
                MAXIMUS.SH
              </span>
              <span className="text-muted" aria-hidden="true">|</span>
              <span className="font-mono text-xs text-primary bg-primary/10 px-1 border border-primary/20">
                v2.4.0-stable
              </span>
            </div>
            <p className="text-[10px] text-muted uppercase tracking-widest font-mono">
              Engineering & Security Portfolio
            </p>
          </div>

          <nav className="flex space-x-6" aria-label="Social links">
            <a
              href="https://github.com/Grambot-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none rounded-sm p-1"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/maximus-mukiza-1523a5297"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none rounded-sm p-1"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} aria-hidden="true" />
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border-muted flex flex-col sm:flex-row justify-between items-center text-[10px] text-muted uppercase tracking-widest gap-4 font-mono">
          <p>© {currentYear} Maximus Mukiza // All Rights Reserved</p>
          <div className="flex gap-4">
            <span className="text-primary/40" aria-hidden="true">SHA256: 7f8d3...</span>
            <span>Handcrafted in Belgium</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
