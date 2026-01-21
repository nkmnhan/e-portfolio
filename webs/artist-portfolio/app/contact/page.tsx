import { Metadata } from "next";
import { getProfile } from "@/lib/services";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";
import {
  Card,
  PageHeader,
  InfoCard,
  SocialLinks,
  FormInput,
  FormTextarea,
  FormSelect,
  Button,
} from "../components/ui";

const profile = getProfile();

export const metadata: Metadata = {
  title: `Contact | ${profile.name}`,
  description: `Get in touch with ${profile.name} for freelance projects, collaborations, and studio positions.`,
};

const subjectOptions = [
  { value: "freelance", label: "Freelance Project" },
  { value: "fulltime", label: "Full-time Position" },
  { value: "collaboration", label: "Collaboration" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="I'm currently available for freelance projects, film collaborations, and studio positions. Let's discuss how I can bring your vision to life."
        gradient
      />

      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <h2 className="text-xl font-bold mb-7">Contact Details</h2>
                <div className="space-y-5">
                  <InfoCard
                    icon={<HiOutlineMail className="w-6 h-6" />}
                    iconColor="primary"
                    subtitle="Email"
                    title={profile.email}
                    href={`mailto:${profile.email}`}
                  />
                  <InfoCard
                    icon={<HiOutlineLocationMarker className="w-6 h-6" />}
                    iconColor="accent"
                    subtitle="Location"
                    title={profile.location}
                  />
                  <InfoCard
                    icon={<HiOutlineClock className="w-6 h-6" />}
                    iconColor="warning"
                    subtitle="Response Time"
                    title="Within 24-48 hours"
                  />
                </div>
              </Card>

              {/* Social Links */}
              <Card>
                <h2 className="text-xl font-bold mb-7">Connect on Social</h2>
                <SocialLinks links={profile.socialLinks} variant="full" size="md" />
              </Card>
            </div>

            {/* Contact Form */}
            <Card padding="lg">
              <h2 className="text-xl font-bold mb-8">Send a Message</h2>
              <form className="space-y-7">
                <FormInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                />
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                />
                <FormSelect
                  label="Subject"
                  name="subject"
                  options={subjectOptions}
                  placeholder="Select a topic"
                />
                <FormTextarea
                  label="Message"
                  name="message"
                  placeholder="Tell me about your project..."
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
                <p className="text-xs text-center text-[var(--color-text-muted)]">
                  Form submission is for demonstration purposes.
                  <br />
                  Please use email for actual inquiries.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
