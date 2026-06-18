"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getCategoryLabel, type Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { assetPath } from "@/lib/site";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, date, tags, github, demo } = project;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="group glass-card rounded-2xl overflow-hidden flex flex-col cursor-pointer h-full card-lift"
      >
        {/* Image */}
        <div className="relative w-full pb-[58%] overflow-hidden bg-bg-3">
          <Image
            src={assetPath(image)}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-[rgba(5,5,5,0.7)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] text-text-2 uppercase tracking-wider">
              {getCategoryLabel(project.category[0] ?? "featured")}
            </span>
          </div>

          {/* Hover overlay actions */}
          <div className="absolute inset-0 flex items-end justify-between p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <div className="flex gap-2">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.5)] flex items-center justify-center text-white hover:text-primary no-underline"
                >
                  <Github size={16} />
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Live Demo"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.5)] flex items-center justify-center text-white hover:text-primary no-underline"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4 flex-grow">
          <p className="text-xs text-primary font-medium uppercase tracking-widest">{date}</p>

          <h3 className="text-white font-semibold text-[1.25rem] leading-snug tracking-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <p className="text-text-2 text-sm leading-relaxed flex-grow line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[rgba(255,255,255,0.06)]">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="primary">{tag}</Badge>
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-text-3 self-center">+{tags.length - 3}</span>
            )}
          </div>

          <div className="flex gap-3 pt-2" onClick={(e) => e.stopPropagation()}>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-text-2 hover:text-primary transition-colors no-underline"
              >
                <Github size={13} /> GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-text-2 hover:text-primary transition-colors no-underline"
              >
                <ExternalLink size={13} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
