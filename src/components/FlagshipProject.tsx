"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import FadeUp from "./motion/FadeUp";

interface FlagshipProjectProps {
  project: Project;
}

export default function FlagshipProject({ project }: FlagshipProjectProps) {
  const [open, setOpen] = useState(false);
  const impact =
    project.longDescription?.[0] ??
    project.description;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
  <>
    <FadeUp>
      <article className="glass-card rounded-2xl overflow-hidden mb-24 md:mb-32 group">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-0">
          <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-[480px] bg-bg-3 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505]/90 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent lg:hidden" />
            <div className="absolute top-6 left-6">
              <span className="section-label text-[0.65rem] px-3 py-1.5 rounded-full border border-primary/25 bg-[rgba(5,5,5,0.6)] backdrop-blur-sm">
                Flagship Research
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
            <p className="section-label mb-5">{project.date}</p>
            <h3 className="text-white font-extrabold text-[clamp(1.75rem,3vw,2.75rem)] tracking-[-0.04em] leading-[1.05] mb-6">
              {project.title}
            </h3>
            <p className="body-lg text-text-2 font-light mb-8 max-w-xl">
              {project.description}
            </p>

            <div className="mb-8">
              <p className="section-label text-[0.65rem] mb-3">Impact</p>
              <p className="text-text-2 text-base leading-[1.75] border-l-2 border-primary/40 pl-5">
                {impact}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="primary">{tag}</Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.github && (
                <Button asChild variant="secondary" size="sm">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github size={16} /> Repository
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button asChild size="sm">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </Button>
              )}
              <button
                type="button"
                onClick={() => setOpen(true)}
                suppressHydrationWarning
                className="inline-flex items-center gap-2 text-sm text-text-2 hover:text-white transition-colors bg-transparent border-0 cursor-pointer"
              >
                Full case study <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </article>
    </FadeUp>

    {open && (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
        onClick={() => setOpen(false)}
      >
        <div
          className="glass-card max-w-2xl w-full rounded-2xl p-8 md:p-10 max-h-[85vh] overflow-y-auto animate-scale-up"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="section-label mb-3">Research Summary</p>
          <h4 className="text-2xl font-bold text-white mb-6 tracking-tight">{project.title}</h4>
          <ul className="space-y-4 mb-8">
            {(project.longDescription ?? [project.description]).map((point) => (
              <li key={point} className="text-text-2 text-base leading-[1.75] pl-4 border-l border-[rgba(255,255,255,0.1)]">
                {point}
              </li>
            ))}
          </ul>
          <Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>
        </div>
      </div>
    )}
  </>
  );
}
