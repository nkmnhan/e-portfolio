"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contactData } from "@/lib/data/contact";
import { siteConfig } from "@/lib/data/site-config";
import { socialIcons } from "./social-icons";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";

export function Contact() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const contactSocials = siteConfig.socialLinks.filter(
    (link) => !link.showIn || link.showIn.includes("contact")
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${formName}`);
    const body = encodeURIComponent(
      `Name: ${formName}\nEmail: ${formEmail}\n\n${formMessage}`
    );
    const mailtoUrl = `mailto:${contactData.email}?subject=${subject}&body=${body}`;

    window.open(mailtoUrl, "_blank");

    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 4000);
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
                className="w-full px-3 py-2 rounded-lg bg-surface text-text border border-border focus:border-primary focus:outline-none transition-colors text-sm"
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
                className="w-full px-3 py-2 rounded-lg bg-surface text-text border border-border focus:border-primary focus:outline-none transition-colors text-sm"
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
                className="w-full px-3 py-2 rounded-lg bg-surface text-text border border-border focus:border-primary focus:outline-none transition-colors text-sm resize-none"
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
            {contactSocials.map((link) => {
              const Icon = socialIcons[link.platform];
              return Icon ? (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.platform !== "email" ? "_blank" : undefined}
                  rel={
                    link.platform !== "email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={link.label}
                  className="text-text-muted hover:text-primary transition-colors p-2"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ) : null;
            })}
          </div>
        </motion.div>
      </div>

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
    </SectionWrapper>
  );
}
