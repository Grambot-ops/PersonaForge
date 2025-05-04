import React, { Suspense, useEffect } from "react"; // Import Suspense and useEffect
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import i18n from "./i18n"; // Import i18n instance
import { useTranslation } from "react-i18next"; // Import useTranslation

// Helper component to update HTML lang attribute
const HtmlLangUpdater: React.FC = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return null; // This component doesn't render anything
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* Wrap App with Suspense for lazy loading translations */}
    <Suspense fallback={i18n.t("loading")}>
      {" "}
      {/* Use t function for fallback */}
      <HtmlLangUpdater /> {/* Add the lang updater */}
      <App />
    </Suspense>
  </React.StrictMode>
);
