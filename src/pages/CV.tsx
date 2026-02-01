import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import cvData from "../data/cv.json"; // Import CV data

const CV: React.FC = () => {
  const { t } = useTranslation();
  const publicUrl = import.meta.env.BASE_URL; // Get BASE_URL

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 page-transition">
      <Helmet>
        <title>{t("cv.pageTitle")}</title>
        <meta name="description" content={t("cv.pageDescription")} />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          {t("cv.heading")}
        </h1>

        <div className="flex justify-end mb-6">
          <a
            href={`${publicUrl}/CV_Maximus.pdf`} // Prepend PUBLIC_URL
            download
            className="btn btn-primary flex items-center"
            aria-label={t("cv.downloadAria")}
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            {t("cv.downloadButton")}
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              {cvData.name} {/* Name might not need translation */}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              {t("cv.role")} {/* Use literal key */}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
              <span>{cvData.phone}</span>
              <span>{cvData.email}</span>
              <span>{t("cv.location")}</span>
              <a
                href={cvData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t("cv.linkedin")}
              </a>
              <a
                href={cvData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t("cv.github")}
              </a>
              <a
                href={cvData.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t("cv.portfolio")}
              </a>
            </div>
          </div>

          {/* Profile Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 dark:border-blue-500 pb-2 text-gray-800 dark:text-white">
              {t("cv.profileTitle")}
            </h3>
            {cvData.profile.map((bioKey) => (
              <p key={bioKey} className="text-gray-700 dark:text-gray-300 mb-2">
                {t(bioKey)}
              </p>
            ))}
          </div>

          {/* Education Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 dark:border-blue-500 pb-2 text-gray-800 dark:text-white">
              {t("cv.educationTitle")}
            </h3>
            {cvData.education.map((edu, index) => (
              <div
                key={index}
                className={index < cvData.education.length - 1 ? "mb-4" : ""}
              >
                <div className="flex flex-col md:flex-row justify-between mb-1 md:mb-2">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {t(edu.degreeKey)}
                  </h4>
                  <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {t(edu.dateKey)}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {t(edu.universityKey)}
                </p>
              </div>
            ))}
          </div>

          {/* Work Experience Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 dark:border-blue-500 pb-2 text-gray-800 dark:text-white">
              {t("cv.workExperienceTitle")}
            </h3>
            {cvData.workExperience.map((work, index) => (
              <div
                key={index}
                className={
                  index < cvData.workExperience.length - 1 ? "mb-6" : ""
                }
              >
                <div className="flex flex-col md:flex-row justify-between mb-1 md:mb-2">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {t(work.titleKey)}
                  </h4>
                  <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {t(work.dateKey)}
                  </span>
                </div>
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                  {t(work.companyKey)}
                </p>
                <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                  {work.details.map((detailKey) => (
                    <li key={detailKey}>{t(detailKey)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 dark:border-blue-500 pb-2 text-gray-800 dark:text-white">
              {t("cv.skillsTitle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(cvData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                    {t(
                      `cv.skills${
                        category.charAt(0).toUpperCase() + category.slice(1)
                      }`
                    )}
                  </h4>
                  <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                    {(skills as string[]).map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 dark:border-blue-500 pb-2 text-gray-800 dark:text-white">
              {t("cv.languagesTitle")}
            </h3>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
              {cvData.languages.map((langKey) => (
                <li key={langKey}>{t(langKey)}</li>
              ))}
            </ul>
          </div>

          {/* Hobbies & Certifications Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 dark:border-blue-500 pb-2 text-gray-800 dark:text-white">
                {t("cv.hobbiesTitle")}
              </h3>
              <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                {cvData.hobbies.map((hobbyKey) => (
                  <li key={hobbyKey}>{t(hobbyKey)}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 dark:border-blue-500 pb-2 text-gray-800 dark:text-white">
                {t("cv.certificationsTitle")}
              </h3>
              <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                {cvData.certifications.map((cert, index) => (
                  <li key={index}>
                    {t(cert.nameKey)} - <i>{t(cert.dateKey)}</i>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
