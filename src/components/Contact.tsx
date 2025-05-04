import React, { useState } from "react";
import { IconContext } from "react-icons";
import { ContactForm } from "../types";
import {
  FaPaperPlane,
  FaExclamationCircle,
  FaCheckCircle,
} from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import useTranslation

// Cast the icon components to React.ElementType
const PaperPlaneIcon = FaPaperPlane as React.ElementType;
const ExclamationCircleIcon = FaExclamationCircle as React.ElementType;
const CheckCircleIcon = FaCheckCircle as React.ElementType;

const Contact: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false); // Reset success state on new submission

    try {
      const response = await fetch("https://formspree.io/f/xwpolryw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" }); // Clear form on success
      } else {
        // Try to parse error from Formspree response
        let errorMessage = t("contact.submitErrorFallback"); // Use translated fallback
        try {
          const errorData = await response.json();
          if (errorData && errorData.errors && errorData.errors.length > 0) {
            errorMessage = errorData.errors
              .map((err: any) => err.message)
              .join(", ");
          } else if (errorData && errorData.error) {
            errorMessage = errorData.error;
          }
        } catch (parseError) {
          // Ignore if response is not JSON or parsing fails
          console.error("Error parsing Formspree error response:", parseError);
        }
        throw new Error(errorMessage);
      }
    } catch (error: any) {
      setSubmitError(error.message || t("contact.submitError")); // Use translated error
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 transition-colors duration-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        {t("contact.title")} {/* Translate title */}
      </h2>

      <IconContext.Provider value={{ className: "react-icons" }}>
        {submitSuccess ? (
          <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-200 px-4 py-3 rounded mb-6 animate-fadeIn">
            <div className="flex items-center mb-2">
              <CheckCircleIcon className="mr-2" aria-hidden="true" />
              <p className="font-medium">{t("contact.successTitle")}</p>{" "}
              {/* Translate success title */}
            </div>
            <p>{t("contact.successMessage")}</p>{" "}
            {/* Translate success message */}
            <button
              onClick={() => setSubmitSuccess(false)}
              className="mt-4 text-sm text-green-700 dark:text-green-300 underline focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {t("contact.sendAnother")} {/* Translate button text */}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="animate-slideInBottom">
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                htmlFor="name"
              >
                {t("contact.nameLabel")} {/* Translate label */}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
                aria-required="true"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                htmlFor="email"
              >
                {t("contact.emailLabel")} {/* Translate label */}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
                aria-required="true"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                htmlFor="message"
              >
                {t("contact.messageLabel")} {/* Translate label */}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                rows={4}
                required
                aria-required="true"
              ></textarea>
            </div>

            {submitError && (
              <div
                role="alert"
                className="mb-4 p-3 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg border border-red-200 dark:border-red-700 flex items-start"
              >
                <ExclamationCircleIcon
                  className="mt-1 mr-2 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>{submitError}</span> {/* Already translated */}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-3 rounded-lg font-medium transition-all duration-200 flex justify-center items-center ${
                isSubmitting
                  ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white"
              }`}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {t("contact.sending")} {/* Translate sending text */}
                </>
              ) : (
                <>
                  <PaperPlaneIcon className="mr-2" aria-hidden="true" />{" "}
                  {t("contact.sendMessageButton")} {/* Translate button text */}
                </>
              )}
            </button>
          </form>
        )}
      </IconContext.Provider>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>{t("contact.preferEmail")}</p> {/* Translate text */}
        <a
          href="mailto:maximusmukiza08@gmail.com"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {t("contact.emailAddress")} {/* Translate email */}
        </a>
      </div>
    </div>
  );
};

export default Contact;
