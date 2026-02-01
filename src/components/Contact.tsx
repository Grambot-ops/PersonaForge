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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
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
    <section className="py-24 bg-black relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-display font-bold mb-4 text-white">
            <span className="text-primary font-mono text-lg mr-2">04.</span>Establish Secure Connection
          </h2>
          <p className="text-slate-500 font-mono text-sm leading-relaxed">
            {t("contact.intro")}
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-[#0a0a0a] p-8 rounded-sm border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
          
          {submitSuccess ? (
            <div className="py-12 text-center animate-fadeIn">
              <span className="material-symbols-outlined text-primary text-6xl mb-4">check_circle</span>
              <h3 className="text-white font-mono font-bold text-xl mb-2 uppercase tracking-widest">Handshake Complete</h3>
              <p className="text-slate-500 font-mono text-xs">{t("contact.successMessage")}</p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="mt-8 text-primary font-mono text-xs hover:underline decoration-dashed"
              >
                &gt; {t("contact.sendAnother")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 font-mono">&gt; User_ID</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-slate-700 text-slate-300 rounded-sm px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary text-xs font-mono placeholder-slate-800" 
                    placeholder="ENTER_NAME" 
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 font-mono">&gt; Return_Path</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-slate-700 text-slate-300 rounded-sm px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary text-xs font-mono placeholder-slate-800" 
                    placeholder="ENTER_EMAIL" 
                    type="email"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 font-mono">&gt; Payload_Data</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-slate-700 text-slate-300 rounded-sm px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary text-xs font-mono placeholder-slate-800" 
                  placeholder="// Describe technical requirements or inquiry..." 
                  rows={4}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-black font-bold py-4 rounded-sm hover:bg-white transition-all flex items-center justify-center font-mono text-xs uppercase tracking-widest group disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(0,255,65,0.2)]"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">./transmitting_handshake...</span>
                ) : (
                  <>
                    <span className="mr-2">./execute_send.sh</span> 
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">send</span>
                  </>
                )}
              </button>

              <div className="text-center font-mono text-[10px] text-slate-500 mt-4 border-t border-slate-800 pt-4">
                <span className="text-green-500 font-bold">200 OK</span>: Endpoints secure. 
                <span className="mx-2">|</span>
                <a href={`mailto:${t("contact.emailAddress")}`} className="text-primary hover:underline decoration-dashed">
                  {t("contact.emailAddress")}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
