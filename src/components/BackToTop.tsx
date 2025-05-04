import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import useTranslation

// Cast the icon component to React.ElementType
const ArrowUpIcon = FaArrowUp as React.ElementType;

const BackToTop: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <button
        className={`back-to-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label={t("backToTop.label")} // Translate aria-label
        title={t("backToTop.label")} // Translate title
      >
        {/* Use the casted icon component */}
        <ArrowUpIcon aria-hidden="true" />
      </button>
    </IconContext.Provider>
  );
};

export default BackToTop;
