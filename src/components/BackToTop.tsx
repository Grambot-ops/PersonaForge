import React, { useState, useEffect } from "react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

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

  if (!isVisible) return null;

  return (
    <button
      className="fixed bottom-6 right-6 w-10 h-10 bg-card-dark text-foreground rounded-sm flex items-center justify-center hover:bg-primary hover:text-black transition-all z-50 border border-border-muted animate-fadeIn"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <span className="material-symbols-outlined text-sm">
        keyboard_arrow_up
      </span>
    </button>
  );
};

export default BackToTop;
