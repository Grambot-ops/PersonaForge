import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation hook
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: t("header.home") }, // Use t function for labels
    { path: "/about", label: t("header.about") },
    { path: "/projects", label: t("header.projects") },
    { path: "/cv", label: t("header.cv") },
    { path: "/contact", label: t("header.contact") },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false); // Close menu after language change on mobile
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
              Maximus
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {t("header.student")} {/* Translate "Student" */}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {" "}
            {/* Adjusted space from space-x-6 */}
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-blue-600 dark:text-blue-400" // Use standard Tailwind class for active state temporarily
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Language Switcher - Desktop */}
            <div className="flex items-center space-x-2 border-l border-gray-200 dark:border-gray-700 pl-4 ml-2">
              {" "}
              {/* Adjusted margin from ml-4 */}
              <button
                onClick={() => changeLanguage("en")}
                className={`text-sm font-medium ${
                  i18n.language === "en"
                    ? "text-blue-600 dark:text-blue-400" // Use standard Tailwind class for active state temporarily
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <button
                onClick={() => changeLanguage("nl")}
                className={`text-sm font-medium ${
                  i18n.language === "nl"
                    ? "text-blue-600 dark:text-blue-400" // Use standard Tailwind class for active state temporarily
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                aria-label="Switch to Dutch"
              >
                NL
              </button>
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary-color)] dark:hover:text-[var(--primary-color)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-blue-600 dark:text-blue-400" // Use standard Tailwind class for active state temporarily
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Language Switcher - Mobile */}
            <div className="flex items-center space-x-2 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => changeLanguage("en")}
                className={`text-sm font-medium ${
                  i18n.language === "en"
                    ? "text-blue-600 dark:text-blue-400" // Use standard Tailwind class for active state temporarily
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                aria-label="Switch to English"
              >
                English
              </button>
              <span className="text-gray-400 dark:text-gray-500">|</span>
              <button
                onClick={() => changeLanguage("nl")}
                className={`text-sm font-medium ${
                  i18n.language === "nl"
                    ? "text-blue-600 dark:text-blue-400" // Use standard Tailwind class for active state temporarily
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                aria-label="Switch to Dutch"
              >
                Nederlands
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
