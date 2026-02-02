import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ContactForm } from "../types";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: ContactForm) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section className="py-24 bg-background relative" id="contact" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 id="contact-heading" className="text-3xl font-display font-bold mb-4 text-foreground">
            <span className="text-primary font-mono text-lg mr-2" aria-hidden="true">04.</span>
            Establish Secure Connection
          </h2>
          <p className="text-muted font-mono text-sm leading-relaxed">
            {t("contact.intro")}
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-card-dark p-8 rounded-sm border border-border-muted shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" aria-hidden="true"></div>

          <div aria-live="polite">
            {submitSuccess ? (
              <div className="py-12 text-center animate-fadeIn" role="status">
                <span className="material-symbols-outlined text-primary text-6xl mb-4" aria-hidden="true">
                  check_circle
                </span>
                <h3 className="text-foreground font-mono font-bold text-xl mb-2 uppercase tracking-widest">
                  Handshake Complete
                </h3>
                <p className="text-muted font-mono text-xs">
                  {t("contact.successMessage")}
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-8 text-primary font-mono text-xs hover:underline decoration-dashed rounded-sm p-1 focus-visible:ring-2 focus-visible:ring-primary outline-none"
                >
                  &gt; {t("contact.sendAnother")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 font-mono">
                      &gt; User_ID
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background border border-border-muted text-muted rounded-sm px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary text-xs font-mono placeholder-muted focus-visible:ring-2 focus-visible:ring-primary outline-none"
                      placeholder="ENTER_NAME"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 font-mono">
                      &gt; Return_Path
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background border border-border-muted text-muted rounded-sm px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary text-xs font-mono placeholder-muted focus-visible:ring-2 focus-visible:ring-primary outline-none"
                      placeholder="ENTER_EMAIL"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 font-mono">
                    &gt; Payload_Data
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background border border-border-muted text-muted rounded-sm px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary text-xs font-mono placeholder-muted focus-visible:ring-2 focus-visible:ring-primary outline-none"
                    placeholder="// Describe technical requirements or inquiry..."
                    rows={4}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-black font-bold py-4 rounded-sm hover:bg-foreground hover:text-background transition-all flex items-center justify-center font-mono text-xs uppercase tracking-widest group disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(0,255,65,0.2)] focus-visible:ring-4 focus-visible:ring-primary/50 outline-none"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">
                      ./transmitting_handshake...
                    </span>
                  ) : (
                    <>
                      <span className="mr-2">./execute_send.sh</span>
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true">
                        send
                      </span>
                    </>
                  )}
                </button>

                <div className="text-center font-mono text-[10px] text-muted mt-4 border-t border-border-muted pt-4">
                  <span className="text-green-500 font-bold" role="status">200 OK</span>:
                  Endpoints secure.
                  <span className="mx-2" aria-hidden="true">|</span>
                  <a
                    href={`mailto:${t("contact.emailAddress")}`}
                    className="text-primary hover:underline decoration-dashed rounded-sm px-1 focus-visible:ring-2 focus-visible:ring-primary outline-none"
                  >
                    {t("contact.emailAddress")}
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
