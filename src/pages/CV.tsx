import React from "react";
import { useTranslation } from "react-i18next";
import cvData from "../data/cv.json"; // Import CV data

const CV: React.FC = () => {
  const { t } = useTranslation();
  const publicUrl = import.meta.env.BASE_URL; // Get BASE_URL

  return (
    <div className="py-24 bg-background page-transition flex flex-col items-center justify-center min-h-[60vh]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-display font-bold mb-4 text-foreground uppercase tracking-tighter">
          {t("cv.heading", "Curriculum Vitae")}
        </h1>
        <p className="text-muted font-mono text-sm mb-12 max-w-lg mx-auto">
          &gt;{" "}
          {t(
            "cv.dossier_ready",
            "Technical dossier is compiled and ready for retrieval. Download the PDF for complete engineering history and certifications.",
          )}
        </p>

        <div className="flex justify-center">
          <a
            href={`${publicUrl}CV_Maximus.pdf`}
            download
            className="group px-10 py-5 bg-primary/10 border border-primary text-primary font-mono text-sm font-bold hover:bg-primary hover:text-black transition-all rounded-sm uppercase tracking-widest shadow-[0_0_30px_rgba(0,255,65,0.1)] flex items-center"
            aria-label={t("cv.downloadAria", "Download CV")}
          >
            <span className="material-symbols-outlined mr-3 group-hover:animate-bounce">
              download
            </span>
            {t("cv.downloadButton", "Download Full Dossier (PDF)")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CV;
