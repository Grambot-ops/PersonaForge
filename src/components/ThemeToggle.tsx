import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SunIcon = FaSun as React.ElementType;
const MoonIcon = FaMoon as React.ElementType;

const ThemeToggle: React.FC = () => {
  const { t } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Initial sync
    const savedTheme = localStorage.getItem("theme");
    const isDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      aria-label={
        isDarkMode
          ? t("themeToggle.switchToLight", "Switch to Light Mode")
          : t("themeToggle.switchToDark", "Switch to Dark Mode")
      }
      className="p-2 border border-primary/20 bg-primary/5 text-primary hover:bg-primary/20 transition-all rounded-sm flex items-center justify-center group h-10 w-10 shadow-[0_0_10px_rgba(0,255,65,0.05)] active:scale-95 focus-visible:ring-2 focus-visible:ring-primary outline-none"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <SunIcon
          size={14}
          className="group-hover:rotate-180 transition-transform duration-700 ease-in-out"
        />
      ) : (
        <MoonIcon
          size={14}
          className="group-hover:-rotate-12 transition-transform duration-500 ease-in-out"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
