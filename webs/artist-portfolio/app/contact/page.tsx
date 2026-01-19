import { Metadata } from "next";
import { profile } from "@/lib/data";
import { clsxMerge } from "@/lib/utils";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from "react-icons/hi";
import {
  SiArtstation,
  SiLinkedin,
  SiInstagram,
  SiYoutube,
  SiVimeo,
} from "react-icons/si";

export const metadata: Metadata = {
  title: `Contact | ${profile.name}`,
  description: `Get in touch with ${profile.name} for freelance projects, collaborations, and studio positions.`,
};

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  artstation: SiArtstation,
  linkedin: SiLinkedin,
  instagram: SiInstagram,
  youtube: SiYoutube,
  vimeo: SiVimeo,
};

const socialNames: Record<string, string> = {
  artstation: "ArtStation",
  linkedin: "LinkedIn",
  instagram: "Instagram",
  youtube: "YouTube",
  vimeo: "Vimeo",
};

export default function ContactPage() {
  const socialLinks = Object.entries(profile.socialLinks).filter(
    ([, url]) => url
  );

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            <span className="text-gradient">Get in Touch</span>
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
            I&apos;m currently available for freelance projects, film collaborations,
            and studio positions. Let&apos;s discuss how I can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div
              className={clsxMerge(
                "p-7 rounded-xl",
                "bg-[var(--color-surface)] border border-[var(--color-border)]"
              )}
            >
              <h2 className="text-xl font-bold mb-7">Contact Details</h2>
              <div className="space-y-5">
                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className={clsxMerge(
                    "flex items-center gap-4 p-4 rounded-lg",
                    "bg-[var(--color-bg)] border border-[var(--color-border)]",
                    "hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
                    "transition-colors"
                  )}
                >
                  <div className="p-3 rounded-lg bg-[var(--color-primary)]/10">
                    <HiOutlineMail className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">Email</p>
                    <p className="font-medium">{profile.email}</p>
                  </div>
                </a>

                {/* Location */}
                <div
                  className={clsxMerge(
                    "flex items-center gap-4 p-4 rounded-lg",
                    "bg-[var(--color-bg)] border border-[var(--color-border)]"
                  )}
                >
                  <div className="p-3 rounded-lg bg-[var(--color-accent)]/10">
                    <HiOutlineLocationMarker className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">Location</p>
                    <p className="font-medium">{profile.location}</p>
                  </div>
                </div>

                {/* Response Time */}
                <div
                  className={clsxMerge(
                    "flex items-center gap-4 p-4 rounded-lg",
                    "bg-[var(--color-bg)] border border-[var(--color-border)]"
                  )}
                >
                  <div className="p-3 rounded-lg bg-yellow-500/10">
                    <HiOutlineClock className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Response Time
                    </p>
                    <p className="font-medium">Within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div
              className={clsxMerge(
                "p-7 rounded-xl",
                "bg-[var(--color-surface)] border border-[var(--color-border)]"
              )}
            >
              <h2 className="text-xl font-bold mb-7">Connect on Social</h2>
              <div className="space-y-4">
                {socialLinks.map(([platform, url]) => {
                  const Icon = socialIcons[platform];
                  if (!Icon) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsxMerge(
                        "flex items-center gap-4 p-4 rounded-lg",
                        "bg-[var(--color-bg)] border border-[var(--color-border)]",
                        "hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
                        "transition-colors"
                      )}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="font-medium">
                        {socialNames[platform] || platform}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div
            className={clsxMerge(
              "p-8 lg:p-10 rounded-xl",
              "bg-[var(--color-surface)] border border-[var(--color-border)]"
            )}
          >
            <h2 className="text-xl font-bold mb-8">Send a Message</h2>
            <form className="space-y-7">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={clsxMerge(
                    "w-full px-4 py-3 rounded-lg",
                    "bg-[var(--color-bg)] border border-[var(--color-border)]",
                    "text-[var(--color-text)]",
                    "focus:outline-none focus:border-[var(--color-primary)]",
                    "transition-colors"
                  )}
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={clsxMerge(
                    "w-full px-4 py-3 rounded-lg",
                    "bg-[var(--color-bg)] border border-[var(--color-border)]",
                    "text-[var(--color-text)]",
                    "focus:outline-none focus:border-[var(--color-primary)]",
                    "transition-colors"
                  )}
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className={clsxMerge(
                    "w-full px-4 py-3 rounded-lg",
                    "bg-[var(--color-bg)] border border-[var(--color-border)]",
                    "text-[var(--color-text)]",
                    "focus:outline-none focus:border-[var(--color-primary)]",
                    "transition-colors"
                  )}
                >
                  <option value="">Select a topic</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="fulltime">Full-time Position</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={clsxMerge(
                    "w-full px-4 py-3 rounded-lg resize-none",
                    "bg-[var(--color-bg)] border border-[var(--color-border)]",
                    "text-[var(--color-text)]",
                    "focus:outline-none focus:border-[var(--color-primary)]",
                    "transition-colors"
                  )}
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={clsxMerge(
                  "w-full px-6 py-3 rounded-lg",
                  "bg-[var(--color-primary)] text-white font-medium",
                  "hover:bg-[var(--color-primary-hover)]",
                  "transition-colors"
                )}
              >
                Send Message
              </button>

              <p className="text-xs text-center text-[var(--color-text-muted)]">
                Form submission is for demonstration purposes.
                <br />
                Please use email for actual inquiries.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
