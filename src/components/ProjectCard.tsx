import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, date, tags, github, demo } = project;

  return (
    <div className="group bg-bg-2 border border-border-c rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary">
      {/* Image */}
      <div className="relative w-full pb-[60%] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
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
  );
}
