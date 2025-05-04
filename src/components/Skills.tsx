import React from "react";
import { useTranslation } from "react-i18next";
import skillsData from "../data/skills.json"; // Import skills data

interface Skill {
  id: string; // Use ID for translation key
  proficiency: number;
  category: string;
}

const Skills: React.FC = () => {
  const { t } = useTranslation();

  // Use imported skills data
  const skills: Skill[] = skillsData;

  // Group skills by category
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  // Helper function to get category translation key
  const getCategoryKey = (category: string): string => {
    switch (category.toLowerCase()) {
      case "cloud":
        return "skills.categoryCloud";
      case "security":
        return "skills.categorySecurity";
      case "programming":
        return "skills.categoryProgramming";
      case "devops":
        return "skills.categoryDevOps";
      default:
        return category; // Fallback if category not found
    }
  };

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        {t("skills.title")}
      </h2>

      <div className="max-w-4xl mx-auto">
        {categories.map((category) => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-500">
              {t(getCategoryKey(category))} {/* Translate category */}
            </h3>
            <div className="space-y-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                        {t(`skills.${skill.id}`)}{" "}
                        {/* Translate skill name using ID */}
                      </span>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.proficiency}%`,
                          animation: `growWidth 1.5s ease-out ${index * 0.2}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="mt-12 max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          {t("skills.certsTitle")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* LPI Cert */}
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h4 className="font-bold text-blue-600 dark:text-blue-400">
              {t("skills.certLpi")}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t("skills.certLpiDate")}
            </p>
          </div>
          {/* Pursuing Cert */}
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700">
            <h4 className="font-bold">{t("skills.certsPursuing")}</h4>
            <p className="text-blue-600 dark:text-blue-400">
              {t("skills.certAws")}
            </p>
          </div>
          {/* Driving License */}
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg md:col-span-2">
            <h4 className="font-bold text-blue-600 dark:text-blue-400">
              {t("skills.certDriving")}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t("skills.certDrivingCat")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
