import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaSun, FaMoon } from "react-icons/fa";

// Cast the icon components to React.ElementType
const SunIcon = FaSun as React.ElementType;
const MoonIcon = FaMoon as React.ElementType;

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      // Check for saved theme preference or system preference
      const savedTheme = localStorage.getItem("theme");
      return (
        savedTheme === "dark" ||
        (!savedTheme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <button
        aria-label={
          isDarkMode ? "Switch to light theme" : "Switch to dark theme"
        }
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          // Use the casted icon component
          <SunIcon size={18} aria-hidden="true" />
        ) : (
          // Use the casted icon component
          <MoonIcon size={18} aria-hidden="true" />
        )}
      </button>
    </IconContext.Provider>
  );
};

export default ThemeToggle;
