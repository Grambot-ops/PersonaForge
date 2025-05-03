import React, { useState } from "react";
import { ContactForm } from "../types";

const Contact: React.FC = () => {
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
        let errorMessage =
          "There was an error submitting your message. Please try again.";
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
      setSubmitError(error.message || "An unexpected error occurred.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Get In Touch
      </h2>

      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
          <p>
            Thank you for your message! I'll get back to you as soon as
            possible.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="mt-2 text-sm text-green-700 underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              rows={4}
              required
            ></textarea>
          </div>

          {submitError && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200">
              {submitError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3 rounded-lg font-medium transition-all duration-200 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}

      <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
        <p>Prefer email? Reach me at:</p>
        <a
          href="mailto:maximusmukiza08@gmail.com"
          className="text-blue-600 hover:underline"
        >
          maximusmukiza08@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
