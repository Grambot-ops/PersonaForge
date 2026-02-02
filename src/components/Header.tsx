import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import AestheticToggle from "./AestheticToggle";
import { FaBars, FaTimes } from "react-icons/fa";

interface HeaderProps {
  aestheticMode: boolean;
  toggleAestheticMode: () => void;
}

const Header: React.FC<HeaderProps> = ({
  aestheticMode,
  toggleAestheticMode,
}) => {
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
    { id: "home", label: "[01] Home" },
    { id: "about", label: "[02] About" },
    { id: "projects", label: "[03] Projects" },
    { id: "contact", label: "[04] Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-primary/20 bg-background/90 backdrop-blur-md">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main Navigation"
      >
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm transition-all"
            aria-label="Maximus Portfolio - Back to top"
          >
            <div
              className="w-8 h-8 bg-primary/10 border border-primary text-primary rounded-sm flex items-center justify-center font-bold font-mono text-sm group-hover:bg-primary group-hover:text-black transition-all"
              aria-hidden="true"
            >
              &gt;_
            </div>
            <span className="font-mono font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
              MAXIMUS.SH
              <span className="animate-cursor-blink text-primary">_</span>
            </span>
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors p-2 focus-visible:ring-2 focus-visible:ring-primary rounded-sm outline-none"
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
          <ul className="hidden md:flex items-center space-x-8 text-xs font-mono font-medium tracking-widest uppercase list-none">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className={`transition-colors focus-visible:text-primary focus-visible:outline-none font-bold ${
                    activeSection === item.id
                      ? "text-primary border-b border-primary"
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
              className="md:hidden absolute top-full left-0 w-full bg-background border-b border-primary/20 shadow-2xl py-6 px-4 animate-in slide-in-from-top-2 duration-300"
              role="region"
              aria-label="Mobile Navigation Menu"
            >
              <ul className="flex flex-col space-y-4 mb-8 list-none">
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
                      className={`w-full text-left px-4 py-3 text-sm font-mono font-bold tracking-[0.2em] uppercase transition-all rounded-sm ${
                        activeSection === item.id
                          ? "text-primary bg-primary/10 border-l-4 border-primary"
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
                  <span className="text-[10px] font-mono text-muted uppercase">
                    Language
                  </span>
                  <div
                    className="flex border border-primary/30 rounded-sm overflow-hidden text-[10px] font-mono"
                    role="group"
                    aria-label="Select Language"
                  >
                    <button
                      onClick={() => changeLanguage("en")}
                      aria-pressed={i18n.language.startsWith("en")}
                      className={`px-4 py-2 transition-all ${
                        i18n.language.startsWith("en")
                          ? "bg-primary text-black font-bold"
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
                          ? "bg-primary text-black font-bold"
                          : "text-muted"
                      }`}
                    >
                      NL
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted uppercase">
                    Interface
                  </span>
                  <div
                    className="flex space-x-2"
                    role="group"
                    aria-label="Interface Settings"
                  >
                    <AestheticToggle
                      aestheticMode={aestheticMode}
                      toggleAestheticMode={toggleAestheticMode}
                    />
                    <ThemeToggle />
                  </div>
                </div>

                <button
                  onClick={() => {
                    scrollToSection("contact");
                    setIsMenuOpen(false);
                  }}
                  className="w-full py-4 bg-primary text-black text-center rounded-sm font-mono font-bold text-xs uppercase tracking-widest shadow-[0_4px_10px_rgba(0,255,65,0.2)]"
                >
                  ./EXEC_CONTACT
                </button>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <div
              className="hidden sm:flex border border-primary/30 rounded-sm overflow-hidden text-[10px] font-mono h-10"
              role="group"
              aria-label="Select Language"
            >
              <button
                onClick={() => changeLanguage("en")}
                aria-pressed={i18n.language.startsWith("en")}
                className={`px-3 py-1 flex items-center justify-center transition-all focus-visible:bg-primary/20 outline-none ${
                  i18n.language.startsWith("en")
                    ? "bg-primary text-black font-bold"
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
                    ? "bg-primary text-black font-bold"
                    : "text-muted hover:text-primary"
                }`}
              >
                NL
              </button>
            </div>

            <div
              className="flex items-center space-x-2"
              role="group"
              aria-label="Interface Settings"
            >
              <AestheticToggle
                aestheticMode={aestheticMode}
                toggleAestheticMode={toggleAestheticMode}
              />
              <ThemeToggle />
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="hidden lg:flex bg-primary/10 border border-primary text-primary h-10 px-6 items-center justify-center rounded-sm font-bold text-[10px] hover:bg-primary hover:text-black transition-all font-mono uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(0,255,65,0.1)] active:scale-95 focus-visible:ring-2 focus-visible:ring-primary outline-none"
            >
              ./EXEC_CONTACT
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
