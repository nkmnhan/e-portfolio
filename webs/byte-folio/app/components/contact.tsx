"use client";

import { useState, useRef, useEffect } from "react";
import { contactData } from "@/lib/data/contact";
import { getSocialLinksFor } from "@/lib/data/site-config";
import { SocialLinkItem } from "./social-link-item";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";
import { useInView, useAnimatedPresence } from "@/app/hooks";

const contactSocials = getSocialLinksFor("contact");

const inputClassName =
  "w-full px-3 py-2 rounded-lg bg-surface text-text border border-border focus:border-primary focus:outline-none transition-colors text-sm";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [toastMessage, setToastMessage] = useState("");
  const toastTimerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const { ref: formRef, isInView: formInView } = useInView();
  const isToastVisible = status === "success" || status === "error";
  const { shouldRender: toastShouldRender, isVisible: toastIsVisible } = useAnimatedPresence(isToastVisible);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formName,
          email: formEmail,
          message: formMessage,
          subject: `Portfolio contact from ${formName}`,
          from_name: "Byte-Folio Contact Form",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setToastMessage("Message sent successfully!");
        setFormName("");
        setFormEmail("");
        setFormMessage("");
      } else {
        setStatus("error");
        setToastMessage("Failed to send. Please try again.");
      }
    } catch {
      setStatus("error");
      setToastMessage("Network error. Please try again.");
    }

    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <SectionWrapper id="contact">
      <TerminalHeading command={contactData.heading} />
      <div className="flex justify-center">
        <div
          ref={formRef}
          className={`glass rounded-xl p-6 md:p-8 w-full max-w-md view-hidden ${formInView ? "view-visible" : ""}`}
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

            {/* Honeypot for spam bots */}
            <input type="checkbox" name="botcheck" className="hidden" />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-4 py-2.5 bg-primary text-bg font-semibold rounded-lg glow-primary hover:brightness-110 transition-[filter] duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="flex gap-4 justify-center mt-6 pt-4 border-t border-border">
            {contactSocials.map((link) => (
              <SocialLinkItem key={link.platform} link={link} />
            ))}
          </div>
        </div>
      </div>

      {toastShouldRender && (
        <div
          className={`fixed bottom-6 right-6 glass rounded-lg px-4 py-3 text-sm z-50 presence-fade ${toastIsVisible ? "presence-visible" : ""} ${status === "success" ? "text-primary" : "text-error"}`}
          style={{ transform: toastIsVisible ? "translateY(0)" : "translateY(20px)" }}
        >
          {toastMessage}
        </div>
      )}
    </SectionWrapper>
  );
}
