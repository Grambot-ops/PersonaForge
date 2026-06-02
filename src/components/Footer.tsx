import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const GithubIcon = FaGithub as any;
const LinkedinIcon = FaLinkedin as any;

/** Footer navigation links. Labels use translation keys. */
const NAV_LINKS = [
  { key: "header.home", id: "home" },
  { key: "header.about", id: "about" },
  { key: "header.internship", id: "internship" },
  { key: "header.projects", id: "projects" },
  { key: "header.contact", id: "contact" },
] as const;

/**
 * Site footer.
 * Clean logotype, short nav row, social links, and localized credit.
 */
const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  /** Smooth-scroll helper used inline for footer nav. */
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maximus Mukiza",
    url: "https://maximus.sh",
    jobTitle: "SRE & DevSecOps Engineer",
    knowsAbout: [
      "Cloud Engineering",
      "DevSecOps",
      "SRE",
      "Automation",
      "Security Orchestration",
    ],
    sameAs: [
      "https://github.com/Grambot-ops",
      "https://linkedin.com/in/maximus-mukiza-1523a5297",
    ],
  };

  return (
    <footer className="py-10 md:py-12 border-t border-border-muted bg-background text-muted">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row — stacks on mobile */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start mb-8 md:mb-10">
          {/* Brand + tagline */}
          <div>
            <p className="font-display font-bold text-xl text-foreground mb-1">
              Maximus <span className="text-primary">Mukiza</span>
            </p>
            <p className="text-sm text-muted">
              {t("footer.tagline", "SRE · DevSecOps · Cloud Automation")}
            </p>
          </div>

          {/* Footer navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-muted hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none rounded"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <nav className="flex space-x-4" aria-label="Social links">
            <a
              href="https://github.com/Grambot-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none rounded p-1"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/maximus-mukiza-1523a5297"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none rounded p-1"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} aria-hidden="true" />
            </a>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="pt-5 md:pt-6 border-t border-border-muted flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center text-xs text-muted">
          <p>{t("footer.copyright", { year: currentYear })}</p>
          <p>Handcrafted in Belgium 🇧🇪</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
