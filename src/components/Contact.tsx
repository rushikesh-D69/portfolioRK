"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Loader2, CheckCircle, FileText } from "lucide-react";
import { socialLinks } from "@/data/nav";
import { resumeUrl } from "@/data/experience";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "./motion/SectionHeader";
import FadeUp from "./motion/FadeUp";

type Status = "idle" | "sending" | "sent";

interface ContactItem {
  Icon: typeof Mail;
  label: string;
  value: string;
  href:  string | null;
}

const contactItems: ContactItem[] = [
  { Icon: Mail,      label: "Email",    value: "drushikesh0105@gmail.com",  href: "mailto:drushikesh0105@gmail.com" },
  { Icon: MapPin,    label: "Location", value: "Bengaluru, India",           href: null },
];

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { alert("Enter a valid email."); return; }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1800);
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
          {/* Left — Info & CTA links */}
          <FadeUp>
            <div className="space-y-10">
              <div>
                <h3 className="text-white font-semibold text-2xl mb-4">Let&apos;s Connect</h3>
                <p className="text-text-2 leading-relaxed font-light text-lg">
                  I&apos;m always interested in hearing about new projects and opportunities, especially those that involve innovative hardware and software solutions.
                </p>
              </div>

              <div className="space-y-5">
                {contactItems.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl border border-[rgba(255,255,255,0.08)] flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-text-3 text-xs font-medium mb-1 uppercase tracking-widest">{label}</h4>
                      {href ? (
                        <a href={href} className="text-text-2 hover:text-white transition-colors font-light no-underline text-base">
                          {value}
                        </a>
                      ) : (
                        <span className="text-text-2 font-light text-base">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social + Resume CTA */}
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

          {/* Right — Form */}
          <FadeUp delay={0.15}>
            <div className="glass-card rounded-2xl p-8 md:p-10 border-glow">
              <form className="flex flex-col gap-5" onSubmit={onSubmit} suppressHydrationWarning>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-text-3 text-xs font-medium uppercase tracking-widest">Name</label>
                    <Input id="name" name="name" required value={form.name} onChange={onChange} placeholder="Your name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-text-3 text-xs font-medium uppercase tracking-widest">Email</label>
                    <Input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="you@example.com" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-text-3 text-xs font-medium uppercase tracking-widest">Subject</label>
                  <Input id="subject" name="subject" required value={form.subject} onChange={onChange} placeholder="Project inquiry" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-text-3 text-xs font-medium uppercase tracking-widest">Message</label>
                  <Textarea id="message" name="message" rows={5} required value={form.message} onChange={onChange} placeholder="Tell me about your project..." />
                </div>

                <Button type="submit" disabled={status === "sending"} className="mt-2">
                  {status === "idle"    && <><Send    size={16} /> Send Message</>}
                  {status === "sending" && <><Loader2 size={16} className="animate-spin" /> Sending...</>}
                  {status === "sent"    && <><CheckCircle size={16} /> Message Sent!</>}
                </Button>
              </form>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
