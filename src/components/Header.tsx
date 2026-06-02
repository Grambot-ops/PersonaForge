import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";

/**
 * Main site navigation header.
 * - Fixed, glassmorphic on scroll.
 * - Active section tracked via IntersectionObserver.
 * - Mobile: full-height slide-over panel from the right.
 */
const Header: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /** Change i18n language. */
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  /** Smooth-scroll to a named section and update active state. */
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  }, []);

  /** Add border + blur after user scrolls past the hero fold. */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** Track the currently visible section via IntersectionObserver. */
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "internship",
      "skills",
      "projects",
      "contact",
    ];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  /** Close slide-over on Escape key. */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    { id: "home", label: t("header.home", "Home") },
    { id: "about", label: t("header.about", "About") },
    { id: "internship", label: t("header.internship", "Internship") },
    { id: "projects", label: t("header.projects", "Projects") },
    { id: "contact", label: t("header.contact", "Contact") },
  ];

  return (
    <>
      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-black focus:rounded-xl focus:shadow-glow focus:font-bold transition-all"
      >
        Skip to content
      </a>

      {/* ── Fixed header bar ──────────────────────────────────── */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-border-muted bg-surface/70 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main Navigation"
        >
          <div className="flex justify-between items-center h-16">
            {/* Logo wordmark */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-all"
              aria-label="Maximus Mukiza Portfolio — Back to top"
            >
              {/* K8s Heartbeat Indicator */}
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent/80 shadow-[0_0_8px_rgba(0,240,255,0.5)]"></span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                Maximus<span className="text-primary">.</span>
              </span>
            </button>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-muted hover:text-foreground transition-colors p-2 focus-visible:ring-2 focus-visible:ring-primary rounded-lg outline-none"
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

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center space-x-8 text-sm font-sans font-medium list-none">
              {navItems.map((item) => (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    aria-current={
                      activeSection === item.id ? "page" : undefined
                    }
                    className={`transition-colors focus-visible:text-primary focus-visible:outline-none font-medium pb-1 ${
                      activeSection === item.id
                        ? "text-primary"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {/* Sliding underline indicator */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                        activeSection === item.id ? "w-full" : "w-0"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop right controls */}
            <div className="hidden md:flex items-center space-x-5">
              {/* Language switcher — plain text toggle */}
              <div
                className="flex items-center gap-1 text-xs font-sans font-medium"
                role="group"
                aria-label="Select Language"
              >
                <button
                  onClick={() => changeLanguage("en")}
                  aria-pressed={i18n.language.startsWith("en")}
                  className={`px-2 py-1 rounded-md transition-all focus-visible:ring-2 focus-visible:ring-primary outline-none ${
                    i18n.language.startsWith("en")
                      ? "text-primary font-semibold"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  EN
                </button>
                <span className="text-border-muted text-xs" aria-hidden="true">
                  ·
                </span>
                <button
                  onClick={() => changeLanguage("nl")}
                  aria-pressed={i18n.language.startsWith("nl")}
                  className={`px-2 py-1 rounded-md transition-all focus-visible:ring-2 focus-visible:ring-primary outline-none ${
                    i18n.language.startsWith("nl")
                      ? "text-primary font-semibold"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  NL
                </button>
              </div>

              <ThemeToggle />

              <button
                onClick={() => scrollToSection("contact")}
                id="header-contact-cta"
                className="bg-primary text-black h-9 px-5 flex items-center justify-center rounded-lg font-semibold text-sm hover:bg-primary-dark transition-all shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-primary outline-none"
              >
                Contact
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Mobile slide-over panel ───────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`md:hidden fixed inset-y-0 right-0 z-50 w-72 bg-surface shadow-2xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-border-muted">
          <span className="font-display font-bold text-lg text-foreground">
            Maximus<span className="text-primary">.</span>
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-muted hover:text-foreground p-2 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none"
            aria-label="Close navigation menu"
          >
            <FaTimes size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col py-4 px-3 list-none">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={`w-full text-left px-4 py-3 text-sm font-sans font-medium transition-all rounded-lg ${
                  activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted hover:text-foreground hover:bg-surface-raised"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Bottom controls */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-border-muted space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-sans text-muted uppercase tracking-wider">
              Language
            </span>
            <div
              className="flex gap-1"
              role="group"
              aria-label="Select Language"
            >
              {["en", "nl"].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  aria-pressed={i18n.language.startsWith(lng)}
                  className={`px-3 py-1.5 text-xs rounded-md transition-all font-medium ${
                    i18n.language.startsWith(lng)
                      ? "bg-primary text-black"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-sans text-muted uppercase tracking-wider">
              Theme
            </span>
            <ThemeToggle />
          </div>

          <button
            onClick={() => {
              scrollToSection("contact");
              setIsMenuOpen(false);
            }}
            className="w-full py-3 bg-primary text-black text-center rounded-lg font-sans font-semibold text-sm shadow-sm"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Backdrop for mobile slide-over */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
