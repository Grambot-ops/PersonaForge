import React, { Suspense } from "react"; // Import Suspense
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import "./i18n"; // Import i18n instance - Ensure this is imported before App

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* Wrap App with Suspense for lazy loading translations */}
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
