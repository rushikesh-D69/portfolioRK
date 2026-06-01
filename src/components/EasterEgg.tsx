"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Terminal, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAssetPath } from "@/lib/utils";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

// Dialogue lines for the RPG visual novel
const DIALOGUE_LINES = [
  "SYSTEM INITIALIZED... ACCESSING HIDDEN COMPILER DATA NODES...",
  "Greetings, fellow code-wizard! You have successfully unlocked the Secret Scroll of the Konami Order! 🌸✨",
  "I am NekoCoder AI, your cybernetic assistant! I see you are a developer of culture who appreciates bare-metal ARM microcontrollers, custom analog oscillators, and high-fidelity anime dynamics!",
  "Keep refining your runes, writing clean modules, and pushing the boundaries at the intersection of hardware and software. The digital cosmos is yours to shape! 🚀🌌",
];

export default function EasterEgg() {
  const [active, setActive]           = useState(false);
  const [dialogIdx, setDialogIdx]     = useState(0);
  const [displayText, setDisplayText] = useState("");
  const keySequence                   = useRef<string[]>([]);
  const canvasRef                     = useRef<HTMLCanvasElement>(null);
  const textTimer                     = useRef<ReturnType<typeof setInterval> | null>(null);

  // 1. Konami Code Sequence Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      keySequence.current.push(key);
      if (keySequence.current.length > KONAMI_CODE.length) {
        keySequence.current.shift();
      }

      // Check match
      const isMatch = keySequence.current.every(
        (val, idx) => val.toLowerCase() === KONAMI_CODE[idx].toLowerCase()
      );

      if (isMatch) {
        setActive(true);
        setDialogIdx(0);
        keySequence.current = []; // Clear
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 2. Typewriter Effect for dialogue text
  useEffect(() => {
    if (!active) return;

    if (textTimer.current) clearInterval(textTimer.current);
    setDisplayText("");

    const targetText = DIALOGUE_LINES[dialogIdx];
    let idx = 0;

    textTimer.current = setInterval(() => {
      setDisplayText((prev) => prev + targetText.charAt(idx));
      idx++;
      if (idx >= targetText.length) {
        if (textTimer.current) clearInterval(textTimer.current);
      }
    }, 20);

    return () => {
      if (textTimer.current) clearInterval(textTimer.current);
    };
  }, [active, dialogIdx]);

  // 3. Falling Sakura Petals high-performance Canvas Animation
  useEffect(() => {
    if (!active || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let width  = (canvas.width  = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Petal class definition
    class Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      angle: number;
      angleSpeed: number;
      sway: number;
      swaySpeed: number;

      constructor() {
        this.x          = Math.random() * width;
        this.y          = Math.random() * -height - 20;
        this.size       = Math.random() * 8 + 6;
        this.speedY     = Math.random() * 1.5 + 1;
        this.speedX     = Math.random() * 1 - 0.5;
        this.angle      = Math.random() * Math.PI * 2;
        this.angleSpeed = Math.random() * 0.02 - 0.01;
        this.sway       = Math.random() * Math.PI;
        this.swaySpeed  = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.y += this.speedY;
        this.sway += this.swaySpeed;
        this.x += this.speedX + Math.sin(this.sway) * 0.5;
        this.angle += this.angleSpeed;

        // Reset if offscreen
        if (this.y > height + 20) {
          this.x      = Math.random() * width;
          this.y      = -20;
          this.speedY = Math.random() * 1.5 + 1;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.angle);

        // Draw soft cherry blossom petal shape
        c.beginPath();
        c.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
        // Sakura pink color gradient
        const grad = c.createRadialGradient(0, 0, 0, 0, 0, this.size);
        grad.addColorStop(0, "rgba(255, 182, 193, 0.95)"); // light pink
        grad.addColorStop(0.8, "rgba(255, 105, 180, 0.8)"); // hot pink
        grad.addColorStop(1, "rgba(255, 20, 147, 0)");
        c.fillStyle = grad;
        c.fill();
        c.restore();
      }
    }

    // Populate particles list
    const PETAL_COUNT = 45;
    const petals: Petal[] = [];
    for (let i = 0; i < PETAL_COUNT; i++) {
      petals.push(new Petal());
    }

    // Loop
    const run = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle retro grid background inside canvas
      ctx.strokeStyle = "rgba(139, 92, 246, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw petals
      petals.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animFrame = requestAnimationFrame(run);
    };

    run();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, [active]);

  if (!active) return null;

  const handleNext = () => {
    if (dialogIdx < DIALOGUE_LINES.length - 1) {
      setDialogIdx((prev) => prev + 1);
    } else {
      setActive(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-end bg-black/80 backdrop-blur-sm p-4 sm:p-8 animate-fade-in select-none">
      {/* Falling Sakura Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Retro Grid Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] opacity-35" />

      {/* Cyber Anime Mascot character */}
      <div className="absolute right-4 sm:right-10 md:right-24 bottom-36 sm:bottom-48 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 pointer-events-none animate-bounce" style={{ animationDuration: "3.5s" }}>
        <Image
          src={getAssetPath("/cyber_mascot.png")}
          alt="Cyber Mascot"
          width={320}
          height={320}
          priority
          className="object-contain drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]"
        />
      </div>

      {/* RPG Dialog Box */}
      <div className="relative max-w-4xl mx-auto w-full bg-bg-3/95 border-2 border-primary shadow-[0_0_25px_rgba(139,92,246,0.3)] rounded-2xl p-5 sm:p-6 mb-4 overflow-hidden">
        {/* Neon accent corner cuts */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent" />

        {/* Character Title / Speaker Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-md text-xs font-bold text-white tracking-widest uppercase border border-white/10 shadow-[0_0_10px_rgba(139,92,246,0.5)] mb-3 vt323 text-lg">
          <Terminal size={14} className="animate-pulse" />
          NekoCoder AI v1.0.5
        </div>

        {/* Close Button */}
        <button
          onClick={() => setActive(false)}
          aria-label="Close terminal"
          className="absolute top-4 right-4 text-text-3 hover:text-white hover:scale-115 transition-all duration-200"
        >
          <X size={18} />
        </button>

        {/* Typing Dialog Box Text */}
        <div className="min-h-[72px] sm:min-h-[80px] vt323 text-white text-lg sm:text-2xl leading-relaxed tracking-wider py-1 pl-1">
          {displayText}
          <span className="inline-block w-2.5 h-5 bg-accent ml-1 animate-pulse" />
        </div>

        {/* Action Controls inside the dialogue box */}
        <div className="flex justify-end gap-3 mt-4">
          <Button
            size="sm"
            onClick={handleNext}
            className="gap-1 bg-accent/20 border border-accent hover:bg-accent hover:text-black vt323 text-xl px-4 text-accent transition-all duration-200"
          >
            {dialogIdx < DIALOGUE_LINES.length - 1 ? (
              <>
                Next Dialogue <ChevronRight size={16} />
              </>
            ) : (
              "Close Interface"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
