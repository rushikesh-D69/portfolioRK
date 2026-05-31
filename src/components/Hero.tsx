"use client";

import { useEffect, useRef, useState } from "react";
import { socialLinks, typewriterTexts } from "@/data/nav";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting]   = useState(false);
  const textIdx  = useRef(0);
  const charIdx  = useRef(0);

  /* particles */
  useEffect(() => {
    const init = () => {
      if (typeof window.particlesJS === "function") {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 6, density: { enable: true, value_area: 800 } },
            color:  { value: "#3b82f6" },
            shape:  { type: "polygon", polygon: { nb_sides: 6 } },
            opacity:{ value: 0.05, random: true },
            size:   { value: 160, anim: { enable: true, speed: 10, size_min: 40 } },
            line_linked: { enable: false },
            move:   { enable: true, speed: 8, out_mode: "out" },
          },
          interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
          },
          retina_detect: false,
        });
      }
    };
    // particles.js may load slightly after mount
    if (window.particlesJS) init();
    else {
      const t = setInterval(() => { if (window.particlesJS) { init(); clearInterval(t); } }, 100);
      return () => clearInterval(t);
    }
  }, []);

  /* typewriter */
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      const current = typewriterTexts[textIdx.current];
      if (isDeleting) {
        charIdx.current--;
        setDisplayText(current.substring(0, charIdx.current));
        if (charIdx.current === 0) {
          setIsDeleting(false);
          textIdx.current = (textIdx.current + 1) % typewriterTexts.length;
          timeout = setTimeout(tick, 500);
          return;
        }
        timeout = setTimeout(tick, 50);
      } else {
        charIdx.current++;
        setDisplayText(current.substring(0, charIdx.current));
        if (charIdx.current === current.length) {
          setIsDeleting(true);
          timeout = setTimeout(tick, 2000);
          return;
        }
        timeout = setTimeout(tick, 100);
      }
    };
    timeout = setTimeout(tick, 100);
    return () => clearTimeout(timeout);
  }, [isDeleting]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles */}
      <div id="particles-js" className="absolute inset-0 z-0" />

      {/* Ambient blobs */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-primary opacity-10 blur-[100px] top-[20%] left-[10%] animate-float" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-secondary opacity-10 blur-[100px] bottom-[20%] right-[10%] animate-float [animation-delay:2s]" />
        <div className="absolute w-[200px] h-[200px] rounded-full bg-accent opacity-10 blur-[100px] top-[60%] left-[60%] animate-float [animation-delay:4s]" />
      </div>

      {/* Content */}
      <div className="relative z-[2] max-w-6xl mx-auto px-8 text-center">
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold mb-4 leading-tight">
          Hi, I&apos;m <span className="gradient-text">Rushikesh</span>
        </h1>

        <div className="flex items-center justify-center gap-1 text-[clamp(1.5rem,4vw,2.5rem)] text-text-2 mb-8 min-h-[3rem]">
          <span>{displayText}</span>
          <span className="text-primary animate-blink">|</span>
        </div>

        <p className="text-lg text-text-3 max-w-[600px] mx-auto mb-12 leading-relaxed">
          ECE student with a passion for building from the ground up—be it analog
          circuits on an oscilloscope, microcontroller games, or intelligent systems
          that learn from data. I love combining hardware and software to engineer
          smart, real-time solutions.
        </p>

        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <Button onClick={() => scrollTo("projects")}>View My Work</Button>
          <Button variant="secondary" onClick={() => scrollTo("contact")}>Get In Touch</Button>
        </div>

        <div className="flex gap-4 justify-center">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-full bg-bg-2 border border-border-c flex items-center justify-center text-text-2 transition-all duration-300 hover:bg-grad-main hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-lg no-underline"
            >
              <i className={icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] animate-bounce-scroll text-text-3">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
