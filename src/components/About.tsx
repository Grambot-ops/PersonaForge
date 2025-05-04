import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation

const About: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  const publicUrl = process.env.PUBLIC_URL || ""; // Get PUBLIC_URL

  // Define keys for translation
  const hobbyKeys = [
    "about.hobbies.gym",
    "about.hobbies.homelabbing",
    "about.hobbies.rust",
    "about.hobbies.cloud",
  ];

  return (
    <section className="py-10 px-5">
      {/* Adjusted container for better alignment and spacing */}
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto gap-8 md:gap-16">
        {/* Increased image size and margin */}
        <img
          src={`${publicUrl}/images/Profile.png`} // Prepend PUBLIC_URL
          alt="Profile of Maximus"
          className="rounded-full w-56 h-56 object-cover mb-4 md:mb-0 shadow-lg border-4 border-white flex-shrink-0" // Increased size, added flex-shrink-0
        />
        {/* Adjusted text container width */}
        <div className="flex-grow">
          {" "}
          {/* Changed from md:flex-1 to flex-grow */}
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed max-w-prose">
            {" "}
            {/* Added dark:text-gray-300 */} {/* Added max-w-prose */}
            {t("about.bio")} {/* Translate bio */}
          </p>
          <div className="mb-6 max-w-prose">
            {" "}
            {/* Added max-w-prose */}
            <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-500">
              {" "}
              {/* Added dark:text-blue-500 */}
              {t("about.hobbiesTitle")}: {/* Translate Hobbies title */}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* Map over hobbyKeys and use t() inside the map */}
              {hobbyKeys.map((key, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  {" "}
                  {/* Added dark:text-gray-300 */}
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  {t(key)} {/* Translate hobby using its key */}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6 max-w-prose">
            {" "}
            {/* Added max-w-prose */}
            <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-500">
              {" "}
              {/* Added dark:text-blue-500 */}
              {t("about.educationTitle")}: {/* Translate Education title */}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {" "}
              {/* Added dark:text-gray-300 */}
              {t("about.educationText")} {/* Translate education text */}
            </p>
          </div>
          <div className="max-w-prose">
            {" "}
            {/* Added max-w-prose */}
            <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-500">
              {" "}
              {/* Added dark:text-blue-500 */}
              {t("about.ambitionsTitle")}: {/* Translate Ambitions title */}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {" "}
              {/* Added dark:text-gray-300 */}
              {t("about.ambitionsText")} {/* Translate ambitions text */}
            </p>
          </div>
          <div className="mt-8">
            {" "}
            {/* Adjusted margin-top */}
            <Link to="/cv" className="btn btn-primary inline-block">
              {t("about.viewCvButton")} {/* Translate button text */}
            </Link>
            <a
              href={`${publicUrl}/CV_Maximus.pdf`} // Prepend PUBLIC_URL
              download
              className="btn btn-outline ml-4 inline-block"
            >
              {t("about.downloadCvButton")} {/* Translate button text */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
