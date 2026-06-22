"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Loader2, CheckCircle, FileText, AlertCircle } from "lucide-react";
import { socialLinks } from "@/data/nav";
import { resumeUrl } from "@/data/experience";
import {
  contactEmail,
  contactFormEndpoint,
  contactFormUrl,
  formActivateUrl,
  contactMailto,
} from "@/data/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "./motion/SectionHeader";
import FadeUp from "./motion/FadeUp";

type Status = "idle" | "sending" | "sent" | "pending" | "error";

interface ContactItem {
  Icon: typeof Mail;
  label: string;
  value: string;
  href: string | null;
}

const contactItems: ContactItem[] = [
  { Icon: Mail, label: "Email", value: contactEmail, href: contactMailto },
  { Icon: MapPin, label: "Location", value: "Bengaluru, India", href: null },
];

function buildMailtoFallback(form: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const subject = encodeURIComponent(`[Portfolio] ${form.subject}`);
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  );
  return `${contactMailto}?subject=${subject}&body=${body}`;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMessage("Enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `Portfolio inquiry from ${form.name}: ${form.subject}`,
          _template: "table",
          _url: contactFormUrl,
        }),
      });

      const data = (await response.json()) as { success?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Delivery failed");
      }

      if (data.success === "false") {
        const needsActivation = /activation|activate/i.test(data.message ?? "");
        if (needsActivation) {
          setStatus("pending");
          return;
        }
        throw new Error(data.message ?? "Delivery failed");
      }

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      window.location.href = buildMailtoFallback(form);
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="section-padding bg-bg-base border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeader
          label="Get In Touch"
          title={
            <>
              <span className="block">Let&apos;s</span>
              <span className="gradient-text block">Create Together</span>
            </>
          }
          description="Whether you have a project in mind, want to collaborate, or just want to discuss ideas — I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-5xl mx-auto">
          <FadeUp>
            <div className="space-y-10">
              <div>
                <h3 className="text-white font-semibold text-2xl mb-4">Let&apos;s Connect</h3>
                <p className="text-text-2 leading-relaxed font-light text-lg">
                  I&apos;m always interested in hearing about new projects and opportunities,
                  especially those that involve innovative hardware and software solutions.
                </p>
              </div>

              <div className="space-y-5">
                {contactItems.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl border border-[rgba(255,255,255,0.08)] flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-text-3 text-xs font-medium mb-1 uppercase tracking-widest">
                        {label}
                      </h4>
                      {href ? (
                        <a
                          href={href}
                          className="text-text-2 hover:text-white transition-colors font-light no-underline text-base"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-text-2 font-light text-base">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[rgba(255,255,255,0.08)]">
                <h4 className="text-white font-semibold mb-5">Follow Along</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[rgba(255,255,255,0.08)] text-text-2 hover:text-white hover:border-[rgba(255,255,255,0.16)] text-sm no-underline transition-colors"
                    >
                      <i className={icon} />
                      {label}
                    </a>
                  ))}
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[rgba(255,255,255,0.08)] text-text-2 hover:text-white hover:border-[rgba(255,255,255,0.16)] text-sm no-underline transition-colors"
                  >
                    <FileText size={14} />
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="glass-card rounded-2xl p-8 md:p-10 border-glow">
              <form className="flex flex-col gap-5" onSubmit={onSubmit} suppressHydrationWarning>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-text-3 text-xs font-medium uppercase tracking-widest">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-text-3 text-xs font-medium uppercase tracking-widest">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-text-3 text-xs font-medium uppercase tracking-widest">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={onChange}
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-text-3 text-xs font-medium uppercase tracking-widest">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status === "error" && errorMessage && (
                  <p className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle size={14} />
                    {errorMessage}
                  </p>
                )}

                {status === "pending" && (
                  <p className="text-sm text-amber-300/90 leading-relaxed">
                    FormSubmit needs one-time activation. Check{" "}
                    <strong className="text-white font-medium">{contactEmail}</strong>{" "}
                    (Spam, Promotions, All Mail) for an email from FormSubmit and click{" "}
                    <strong className="text-white font-medium">Activate Form</strong>.
                    Still nothing?{" "}
                    <a
                      href={formActivateUrl}
                      className="text-primary hover:text-white underline underline-offset-2"
                    >
                      Open the activation page
                    </a>{" "}
                    and submit once.
                  </p>
                )}

                {status === "sent" && (
                  <p className="text-sm text-emerald-400">
                    Message sent — I&apos;ll get back to you soon.
                  </p>
                )}

                <Button type="submit" disabled={status === "sending"} className="mt-2">
                  {status === "idle" && (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <CheckCircle size={16} /> Message Sent!
                    </>
                  )}
                  {status === "pending" && (
                    <>
                      <Mail size={16} /> Check Email to Activate
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <Send size={16} /> Try Again
                    </>
                  )}
                </Button>
              </form>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
