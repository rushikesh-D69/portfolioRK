"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { socialLinks } from "@/data/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    <section id="contact" className="py-24 bg-bg-2 min-h-screen">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-text-3 max-w-xl mx-auto text-lg">
            I&apos;m always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Let&apos;s Connect</h3>
            <p className="text-text-2 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say
              hello, I&apos;d love to hear from you.
            </p>

            <div className="space-y-5 mb-8">
              {contactItems.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-grad-main flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-0.5">{label}</h4>
                    {href ? (
                      <a href={href} className="text-text-2 text-sm hover:text-primary transition-colors no-underline">
                        {value}
                      </a>
                    ) : (
                      <span className="text-text-2 text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Find me on</h4>
              <div className="flex gap-3">
                {socialLinks.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-full bg-bg-3 border border-border-c flex items-center justify-center text-text-2 transition-all duration-300 hover:bg-grad-main hover:text-white hover:border-transparent hover:-translate-y-1 no-underline"
                  >
                    <i className={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-bg-3 border border-border-c rounded-2xl p-8">
            <form className="flex flex-col gap-5" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-text-2 text-sm font-medium">Name</label>
                  <Input id="name" name="name" required value={form.name} onChange={onChange} placeholder="Rushikesh D" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-text-2 text-sm font-medium">Email</label>
                  <Input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="you@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-text-2 text-sm font-medium">Subject</label>
                <Input id="subject" name="subject" required value={form.subject} onChange={onChange} placeholder="Project Collaboration" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-text-2 text-sm font-medium">Message</label>
                <Textarea id="message" name="message" rows={6} required value={form.message} onChange={onChange} placeholder="Tell me about your project..." />
              </div>

              <Button type="submit" disabled={status === "sending"} className="mt-1">
                {status === "idle"    && <><Send    size={16} /> Send Message</>}
                {status === "sending" && <><Loader2 size={16} className="animate-spin" /> Sending...</>}
                {status === "sent"    && <><CheckCircle size={16} /> Message Sent!</>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
