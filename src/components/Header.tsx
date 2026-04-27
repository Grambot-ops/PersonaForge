import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: "home", label: t("header.home") },
    { id: "about", label: t("header.about") },
    { id: "internship", label: t("header.internship") },
    { id: "projects", label: t("header.projects") },
    { id: "contact", label: t("header.contact") },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-primary/20 bg-background/80 backdrop-blur-md">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main Navigation"
      >
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-all"
            aria-label="Maximus Portfolio - Back to top"
          >
            <div
              className="w-8 h-8 bg-primary/10 border border-primary text-primary rounded-lg flex items-center justify-center font-bold font-mono text-sm group-hover:bg-primary group-hover:text-background transition-all"
              aria-hidden="true"
            >
              M
            </div>
            <span className="font-sans font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
              Maximus.
            </span>
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors p-2 focus-visible:ring-2 focus-visible:ring-primary rounded-lg outline-none"
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <FaTimes size={20} aria-hidden="true" />
              ) : (
                <FaBars size={20} aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-sans font-medium list-none">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className={`transition-colors focus-visible:text-primary focus-visible:outline-none font-medium ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Dropdown */}
          {isMenuOpen && (
            <div
              id="mobile-menu"
              className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-2xl py-6 px-4 animate-in slide-in-from-top-2 duration-300"
              role="region"
              aria-label="Mobile Navigation Menu"
            >
              <ul className="flex flex-col space-y-2 mb-8 list-none">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        scrollToSection(item.id);
                        setIsMenuOpen(false);
                      }}
                      aria-current={
                        activeSection === item.id ? "page" : undefined
                      }
                      className={`w-full text-left px-4 py-3 text-sm font-sans font-medium transition-all rounded-lg ${
                        activeSection === item.id
                          ? "text-primary bg-primary/10"
                          : "text-muted hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col space-y-4 pt-4 border-t border-primary/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans text-muted uppercase">
                    Language
                  </span>
                  <div
                    className="flex border border-primary/30 rounded-lg overflow-hidden text-xs font-sans"
                    role="group"
                    aria-label="Select Language"
                  >
                    <button
                      onClick={() => changeLanguage("en")}
                      aria-pressed={i18n.language.startsWith("en")}
                      className={`px-4 py-2 transition-all ${
                        i18n.language.startsWith("en")
                          ? "bg-primary text-background font-bold"
                          : "text-muted"
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => changeLanguage("nl")}
                      aria-pressed={i18n.language.startsWith("nl")}
                      className={`px-4 py-2 transition-all ${
                        i18n.language.startsWith("nl")
                          ? "bg-primary text-background font-bold"
                          : "text-muted"
                      }`}
                    >
                      NL
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans text-muted uppercase">
                    Theme
                  </span>
                  <div
                    className="flex space-x-2"
                    role="group"
                    aria-label="Theme Settings"
                  >
                    <ThemeToggle />
                  </div>
                </div>

                <button
                  onClick={() => {
                    scrollToSection("contact");
                    setIsMenuOpen(false);
                  }}
                  className="w-full py-3 bg-primary text-background text-center rounded-lg font-sans font-bold text-sm shadow-md"
                >
                  Contact Me
                </button>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div
              className="hidden sm:flex border border-primary/30 rounded-lg overflow-hidden text-xs font-sans h-9"
              role="group"
              aria-label="Select Language"
            >
              <button
                onClick={() => changeLanguage("en")}
                aria-pressed={i18n.language.startsWith("en")}
                className={`px-3 py-1 flex items-center justify-center transition-all focus-visible:bg-primary/20 outline-none ${
                  i18n.language.startsWith("en")
                    ? "bg-primary text-background font-medium"
                    : "text-muted hover:text-primary"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("nl")}
                aria-pressed={i18n.language.startsWith("nl")}
                className={`px-3 py-1 flex items-center justify-center transition-all focus-visible:bg-primary/20 outline-none ${
                  i18n.language.startsWith("nl")
                    ? "bg-primary text-background font-medium"
                    : "text-muted hover:text-primary"
                }`}
              >
                NL
              </button>
            </div>

            <div
              className="flex items-center space-x-2"
              role="group"
              aria-label="Theme Settings"
            >
              <ThemeToggle />
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="hidden lg:flex bg-primary text-background h-9 px-5 items-center justify-center rounded-lg font-bold text-sm hover:bg-primary-dark transition-all shadow-md active:scale-95 focus-visible:ring-2 focus-visible:ring-primary outline-none"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
