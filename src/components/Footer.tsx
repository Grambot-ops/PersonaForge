import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import useTranslation

// Cast the icon components to React.ElementType
const GithubIcon = FaGithub as React.ElementType;
const LinkedinIcon = FaLinkedin as React.ElementType;

const Footer: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook - Removed unused i18n
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Maximus
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t("hero.subtitle")} {/* Reuse subtitle translation */}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
              {t("footer.quickLinks")} {/* Translate Quick Links */}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary-color)] dark:hover:text-[var(--primary-color)] transition-colors"
                >
                  {t("footer.aboutMe")} {/* Translate About Me */}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary-color)] dark:hover:text-[var(--primary-color)] transition-colors"
                >
                  {t("footer.projects")} {/* Translate Projects */}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary-color)] dark:hover:text-[var(--primary-color)] transition-colors"
                >
                  {t("footer.contact")} {/* Translate Contact */}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
              {t("footer.connect")} {/* Translate Connect */}
            </h3>
            <IconContext.Provider value={{ className: "react-icons" }}>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Grambot-ops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary-color)] dark:hover:text-[var(--primary-color)] transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={24} aria-hidden="true" />{" "}
                </a>
                <a
                  href="https://linkedin.com/in/maximus-mukiza-1523a5297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary-color)] dark:hover:text-[var(--primary-color)] transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={24} aria-hidden="true" />{" "}
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
          <p>{t("footer.copyright", { year: currentYear })}</p>{" "}
          {/* Translate copyright */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
