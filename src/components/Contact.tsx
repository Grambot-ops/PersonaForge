import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {ContactForm} from '../types';

const GithubIcon = FaGithub as any;
const LinkedinIcon = FaLinkedin as any;

/** Social / info links shown in the left column. */
const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Grambot-ops',
    icon: 'github',
    sub: 'Grambot-ops',
    isCustomIcon: true,
    customIcon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/maximus-mukiza-1523a5297',
    icon: 'linkedin',
    sub: 'maximus-mukiza',
    isCustomIcon: true,
    customIcon: 'linkedin',
  },
  {
    id: 'location',
    label: 'Location',
    href: null,
    materialIcon: 'location_on',
    sub: 'Belgium 🇧🇪 · Hybrid / Remote',
  },
  {
    id: 'status',
    label: 'Availability',
    href: null,
    materialIcon: 'work',
    sub: 'Open to roles · June 2026',
  },
] as const;

/**
 * Contact section.
 * Features: 2-column layout with social links on the left and a
 * clean contact form on the right. Success state replaces the form.
 */
const Contact: React.FC = () => {
  const {t} = useTranslation();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = t('contact.errorName', 'Name is required.');
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.errorMessageRequired', 'Message is required.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t('contact.errorEmailRequired', 'Email is required.');
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('contact.errorEmailInvalid', 'Invalid email address.');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = e.target;
    setFormData((prev: ContactForm) => ({...prev, [name]: value}));
    if (errors[name]) {
      setErrors((prev) => {
        const next = {...prev};
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    /* Simulate API call — replace with real endpoint when available. */
    setTimeout(() => {
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setFormData({name: '', email: '', message: ''});
      setErrors({});
    }, 1500);
  };

  return (
    <section
      className="py-16 md:py-24 bg-background relative"
      id="contact"
      aria-labelledby="contact-heading"
    >
      {/* Background accent */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="mb-12">
          <h2
            id="contact-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-2"
          >
            {t('contact.heading', "Let's Work Together")}
          </h2>
          <p className="text-muted text-sm max-w-lg">
            {t(
              'contact.intro',
              "Looking for a Cloud Engineer or DevSecOps specialist who ships to production? I'm available from June 2026.",
            )}
          </p>
        </div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ── Left column — social + availability ─────────── */}
          <div className="space-y-6">

            {/* Availability status card */}
            <div className="bg-surface border border-border-muted rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-2 h-2 bg-primary rounded-full animate-pulse-soft"
                  aria-hidden="true"
                />
                <span className="text-primary text-sm font-semibold">
                  Available · June 2026
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                Open to Cloud Engineering &amp; DevSecOps roles
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {t(
                  'contact.availability',
                  "Based in Belgium — open to hybrid and remote positions across Europe. Graduating Bachelor IT · IT Factory · Thomas More.",
                )}
              </p>
            </div>

            {/* Social links list */}
            <div className="bg-surface border border-border-muted rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-5">
                Find Me Online
              </h3>
              <ul className="space-y-4 list-none">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.id}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-primary rounded-lg outline-none"
                      >
                        <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                          {link.id === 'github' ? (
                            <GithubIcon size={16} aria-hidden="true" />
                          ) : (
                            <LinkedinIcon size={16} aria-hidden="true" />
                          )}
                        </span>
                        <div>
                          <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">
                            {link.label}
                          </p>
                          <p className="text-muted text-xs">{link.sub}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-raised border border-border-muted text-muted flex-shrink-0">
                          <span
                            className="material-symbols-outlined text-base"
                            aria-hidden="true"
                          >
                            {'materialIcon' in link ? link.materialIcon : ''}
                          </span>
                        </span>
                        <div>
                          <p className="text-foreground font-medium text-sm">{link.label}</p>
                          <p className="text-muted text-xs">{link.sub}</p>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct email link */}
            <a
              href={`mailto:${t('contact.emailAddress', 'maximus.mukiza@student.thomasmore.be')}`}
              className="flex items-center gap-3 w-full bg-surface border border-border-muted rounded-2xl px-6 py-4 hover:border-primary/40 hover:bg-primary/5 transition-all group focus-visible:ring-2 focus-visible:ring-primary outline-none shadow-sm"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                <span className="material-symbols-outlined text-base" aria-hidden="true">mail</span>
              </span>
              <div className="min-w-0">
                <p className="text-foreground font-medium text-sm">Email</p>
                <p className="text-muted text-xs truncate">
                  {t('contact.emailAddress', 'maximus.mukiza@student.thomasmore.be')}
                </p>
              </div>
              <span
                className="ml-auto text-muted group-hover:text-primary transition-colors material-symbols-outlined text-base flex-shrink-0"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </a>
          </div>

          {/* ── Right column — contact form ──────────────────── */}
          <div className="bg-surface border border-border-muted rounded-2xl p-6 md:p-8 shadow-sm">
            <div aria-live="polite">
              {submitSuccess ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center py-16 text-center animate-fadeIn" role="status">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mb-5">
                    <span
                      className="material-symbols-outlined text-primary text-3xl"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                  </div>
                  <h3 className="text-foreground font-display font-bold text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted text-sm mb-8">
                    {t(
                      'contact.successMessage',
                      "Thanks for reaching out — I'll get back to you within 24 hours.",
                    )}
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-primary text-sm font-medium hover:underline decoration-dashed focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-2 outline-none"
                  >
                    {t('contact.sendAnother', 'Send another message')}
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h3 className="text-foreground font-display font-semibold text-lg mb-6">
                    Send a Message
                  </h3>

                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name field */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-foreground mb-2"
                      >
                        Your Name <span className="text-primary" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        required
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        placeholder="Jane Smith"
                        className={`w-full bg-background border text-foreground rounded-lg px-4 py-3 text-sm placeholder:text-muted focus:ring-2 transition-all outline-none ${
                          errors.name
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-border-muted focus:border-primary focus:ring-primary/20'
                        }`}
                      />
                      {errors.name && (
                        <span
                          id="contact-name-error"
                          className="text-red-500 text-xs mt-1.5 block animate-fadeIn"
                          role="alert"
                        >
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email field */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-foreground mb-2"
                      >
                        Email Address <span className="text-primary" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        required
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        placeholder="jane@company.com"
                        className={`w-full bg-background border text-foreground rounded-lg px-4 py-3 text-sm placeholder:text-muted focus:ring-2 transition-all outline-none ${
                          errors.email
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-border-muted focus:border-primary focus:ring-primary/20'
                        }`}
                      />
                      {errors.email && (
                        <span
                          id="contact-email-error"
                          className="text-red-500 text-xs mt-1.5 block animate-fadeIn"
                          role="alert"
                        >
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-foreground mb-2"
                    >
                      Message <span className="text-primary" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      placeholder="Tell me about the role or opportunity..."
                      className={`w-full bg-background border text-foreground rounded-lg px-4 py-3 text-sm placeholder:text-muted focus:ring-2 transition-all outline-none resize-none ${
                        errors.message
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-border-muted focus:border-primary focus:ring-primary/20'
                      }`}
                    />
                    {errors.message && (
                      <span
                        id="contact-message-error"
                        className="text-red-500 text-xs mt-1.5 block animate-fadeIn"
                        role="alert"
                      >
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-black font-semibold py-3.5 rounded-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-primary/40 outline-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                          aria-hidden="true"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <span
                          className="material-symbols-outlined text-base"
                          aria-hidden="true"
                        >
                          send
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-muted">
                    Or email me directly at{' '}
                    <a
                      href={`mailto:${t('contact.emailAddress', 'maximus.mukiza@student.thomasmore.be')}`}
                      className="text-primary hover:underline focus-visible:ring-1 focus-visible:ring-primary rounded outline-none"
                    >
                      {t('contact.emailAddress', 'maximus.mukiza@student.thomasmore.be')}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
