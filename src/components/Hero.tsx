"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import FadeUp from "./motion/FadeUp";
import Typewriter from "./Typewriter";
import CredibilityStrip from "./CredibilityStrip";
import { heroTypewriterTexts } from "@/data/nav";

const HeroScene = dynamic(() => import("./hero/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[min(280px,32dvh)] sm:h-[min(340px,36dvh)] lg:h-[min(420px,42dvh)] rounded-2xl surface-clean" />
  ),
});

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative overflow-x-hidden">
      <div className="hero-section relative z-10 max-w-content mx-auto px-6 md:px-10 flex items-center pt-[5.25rem] pb-4 md:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 items-center w-full">
          <FadeUp delay={0} className="order-2 lg:order-1">
            <HeroScene />
          </FadeUp>

          <div className="order-1 lg:order-2 space-y-5 md:space-y-6">
            <FadeUp delay={0.05}>
              <p className="section-label">// Research · Systems · Engineering</p>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="hero-title text-white">
                Rushikesh D
              </h1>
            </FadeUp>

            <FadeUp delay={0.12}>
              <Typewriter phrases={heroTypewriterTexts} />
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="text-base md:text-lg leading-[1.7] text-text-2 max-w-[34rem] font-light">
                ECE student with a passion for building from the ground up—be it analog circuits on an oscilloscope, microcontroller games, or intelligent systems that learn from data. I love combining hardware and software to engineer smart, real-time solutions.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex flex-wrap gap-3 pt-1">
                <Button onClick={() => scrollTo("projects")}>View My Work</Button>
                <Button onClick={() => scrollTo("contact")} variant="secondary">Get In Touch</Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="flex gap-5">
                {[
                  { href: "https://github.com/rushikesh-d", Icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/rushikesh-d", Icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:drushikesh0105@gmail.com", Icon: Mail, label: "Email" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={label}
                    className="text-text-2 hover:text-white transition-colors no-underline"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      <CredibilityStrip />

      <div className="hidden lg:block absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-text-3 opacity-30 pointer-events-none">
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
