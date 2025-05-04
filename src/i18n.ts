import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// Remove manual basename construction - rely on build process and relative paths

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(HttpApi)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development", // Enable debug output in development
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      // Use a path relative to the PUBLIC_URL root.
      // CRA ensures files in `public` are served relative to `PUBLIC_URL`.
      // i18next-http-backend should resolve this correctly based on the app's location.
      loadPath: `/locales/{{lng}}/{{ns}}.json`,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"], // Cache the language preference
    },
  });

export default i18n;
