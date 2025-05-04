import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

const Skills: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  // Skills data with proficiency level (0-100)
  const skills: Skill[] = [
    { name: "AWS Cloud Services", proficiency: 85, category: "Cloud" },
    { name: "Azure Security", proficiency: 80, category: "Cloud" },
    { name: "Network Security", proficiency: 90, category: "Security" },
    { name: "SIEM Solutions", proficiency: 75, category: "Security" },
    { name: "Threat Intelligence", proficiency: 70, category: "Security" },
    { name: "Python", proficiency: 80, category: "Programming" },
    { name: "Rust", proficiency: 60, category: "Programming" }, // Added Rust
    { name: "Infrastructure as Code", proficiency: 85, category: "DevOps" },
    { name: "Containerization", proficiency: 70, category: "DevOps" },
    { name: "Incident Response", proficiency: 65, category: "Security" },
  ];

  // Group skills by category
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        {t("skills.title")} {/* Translate title */}
      </h2>

      <div className="max-w-4xl mx-auto">
        {categories.map((category) => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-500">
              {category}
            </h3>
            <div className="space-y-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
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

      {/* Add related certifications or achievements */}
      <div className="mt-12 max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          {t("skills.certsTitle")} {/* Translate certifications title */}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h4 className="font-bold text-blue-600 dark:text-blue-400">
              LPI Certifications
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t("skills.certsCompleted", { date: "December 2023" })}{" "}
              {/* Translate completion date */}
            </p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700">
            <h4 className="font-bold">{t("skills.certsPursuing")}</h4>{" "}
            {/* Translate pursuing text */}
            <p className="text-blue-600 dark:text-blue-400">
              AWS Cloud Practitioner
            </p>
          </div>
          {/* Added Driving License */}
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg md:col-span-2">
            <h4 className="font-bold text-blue-600 dark:text-blue-400">
              Driving License
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t("skills.drivingLicenseCat", { category: "A2 (Motorcycle)" })}{" "}
              {/* Translate category */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
