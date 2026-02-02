import React from "react";
import { FaCog } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CogIcon = FaCog as React.ElementType;

interface AestheticToggleProps {
  aestheticMode: boolean;
  toggleAestheticMode: () => void;
}

const AestheticToggle: React.FC<AestheticToggleProps> = ({
  aestheticMode,
  toggleAestheticMode,
}) => {
  const { t } = useTranslation();

  return (
    <button
      aria-label={
        aestheticMode
          ? t("aestheticToggle.disable", "Disable High-Fidelity Effects")
          : t("aestheticToggle.enable", "Enable High-Fidelity Effects")
      }
      title={
        aestheticMode
          ? t("aestheticToggle.disable", "Disable High-Fidelity Effects")
          : t("aestheticToggle.enable", "Enable High-Fidelity Effects")
      }
      className={`p-2 border transition-all rounded-sm flex items-center justify-center group h-10 w-10 active:scale-95 shadow-[0_0_10px_rgba(0,255,65,0.05)] focus-visible:ring-2 focus-visible:ring-primary outline-none ${
        aestheticMode
          ? "border-primary bg-primary/10 text-primary"
          : "border-primary/20 bg-background text-muted hover:border-primary hover:text-primary"
      }`}
      onClick={toggleAestheticMode}
    >
      <CogIcon
        size={14}
        className={aestheticMode ? "animate-spin-slow text-primary" : ""}
      />
    </button>
  );
};

export default AestheticToggle;
