"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Github, ExternalLink, Calendar, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { getAssetPath } from "@/lib/utils";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { title, description, image, date, tags, github, demo, longDescription } = project;

  // Handle ESC key press to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll when modal is active
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-10 transition-opacity duration-300 animate-fade-in"
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] bg-bg-3 border border-border-c/80 rounded-2xl overflow-y-auto shadow-2xl flex flex-col transition-all duration-300 scale-95 opacity-0 animate-scale-up"
      >
        {/* Header Image/Banner */}
        <div className="relative w-full h-48 sm:h-64 md:h-80 overflow-hidden">
          <Image
            src={getAssetPath(image)}
            alt={title}
            fill
            priority
            className="object-cover brightness-[0.8]"
            sizes="(max-width: 1200px) 100vw, 1000px"
          />
          {/* Cover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-3 via-bg-3/30 to-black/50" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Contents */}
        <div className="p-6 sm:p-8 flex flex-col gap-6 -mt-8 relative z-10 bg-bg-3 rounded-t-3xl">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Calendar size={12} />
              {date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent uppercase tracking-wider">
              <Layers size={12} />
              {project.category.join(" / ")}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-none">
            {title}
          </h2>

          {/* Intro Description */}
          <p className="text-text-2 text-base sm:text-lg leading-relaxed border-l-2 border-primary/50 pl-4 py-1">
            {description}
          </p>

          {/* Detailed Points ("Tome of Knowledge") */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg border-b border-border-c/50 pb-2">
              Technical Achievements & Details
            </h3>
            <ul className="space-y-3.5">
              {longDescription && longDescription.length > 0 ? (
                longDescription.map((point, index) => (
                  <li key={index} className="text-text-3 text-sm sm:text-base pl-6 relative leading-relaxed">
                    <span className="absolute left-0 top-1 text-primary text-lg select-none">▸</span>
                    {point}
                  </li>
                ))
              ) : (
                <li className="text-text-3 text-sm pl-6 relative">
                  <span className="absolute left-0 text-primary">▸</span>
                  Bare-metal or custom application layout engineered for high durability, performance, and responsive operation.
                </li>
              )}
            </ul>
          </div>

          {/* Technologies Badges */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase opacity-80">
              Stack & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-bg-2 border border-border-c/80 text-text-2 px-3 py-1 text-xs hover:border-primary hover:text-white transition-all duration-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-border-c/50 justify-end">
            {github && (
              <Button asChild variant="secondary" className="gap-2">
                <a href={github} target="_blank" rel="noreferrer">
                  <Github size={18} />
                  Code Repository
                </a>
              </Button>
            )}
            {demo && (
              <Button asChild variant="primary" className="gap-2">
                <a href={demo} target="_blank" rel="noreferrer">
                  <ExternalLink size={18} />
                  Live Preview / Video
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
