"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactData } from "@/lib/data/contact";
import { getSocialLinksFor } from "@/lib/data/site-config";
import { SocialLinkItem } from "./social-link-item";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";

const contactSocials = getSocialLinksFor("contact");

const inputClassName =
  "w-full px-3 py-2 rounded-lg bg-surface text-text border border-border focus:border-primary focus:outline-none transition-colors text-sm";

export function Contact() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${formName}`);
    const body = encodeURIComponent(
      `Name: ${formName}\nEmail: ${formEmail}\n\n${formMessage}`
    );
    const mailtoUrl = `mailto:${contactData.email}?subject=${subject}&body=${body}`;

    window.open(mailtoUrl, "_blank");

    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setIsToastVisible(true);
    toastTimerRef.current = setTimeout(() => setIsToastVisible(false), 4000);
  }

  return (
    <SectionWrapper id="contact">
      <TerminalHeading command={contactData.heading} />
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 md:p-8 w-full max-w-md"
        >
          <p className="text-text-secondary text-sm mb-6">
            {contactData.description}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm text-text-secondary mb-1"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formName}
                onChange={(event) => setFormName(event.target.value)}
                className={inputClassName}
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm text-text-secondary mb-1"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formEmail}
                onChange={(event) => setFormEmail(event.target.value)}
                className={inputClassName}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm text-text-secondary mb-1"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formMessage}
                onChange={(event) => setFormMessage(event.target.value)}
                className={`${inputClassName} resize-none`}
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2.5 bg-primary text-bg font-semibold rounded-lg glow-cyan hover:brightness-110 transition-all text-sm"
            >
              Send Message
            </button>
          </form>

          <div className="flex gap-4 justify-center mt-6 pt-4 border-t border-border">
            {contactSocials.map((link) => (
              <SocialLinkItem key={link.platform} link={link} />
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isToastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 glass rounded-lg px-4 py-3 text-sm text-primary z-50"
          >
            Message prepared — check your email client.
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
