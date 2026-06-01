"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink, ZoomIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { getAssetPath } from "@/lib/utils";

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
        className="group bg-bg-2 border border-border-c rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary cursor-pointer"
      >
        {/* Image */}
        <div className="relative w-full pb-[60%] overflow-hidden">
          <Image
            src={getAssetPath(image)}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay with links */}
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="absolute top-3 left-3 text-xs bg-primary px-2.5 py-0.5 rounded text-white font-medium flex items-center gap-1 select-none">
              <ZoomIn size={12} /> Details
            </span>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}
                className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary hover:scale-110 transition-all duration-200 no-underline"
              >
                <Github size={18} />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                aria-label="Live Demo"
                onClick={(e) => e.stopPropagation()}
                className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary hover:scale-110 transition-all duration-200 no-underline"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-3 flex-grow">
          <h3 className="text-white font-semibold text-lg leading-tight">{title}</h3>
          <p className="text-text-2 text-sm leading-relaxed flex-grow">
            <span className="text-primary font-medium">{date}</span>
            <br />
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
