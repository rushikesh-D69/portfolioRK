"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  X,
  Github,
  ExternalLink,
  Calendar,
  Layers,
  FileText,
  FlaskConical,
  Images,
  ChevronDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCategoryLabel, getResearchKindLabel, type Project } from "@/data/projects";
import { assetPath } from "@/lib/site";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function buildGalleryImages(project: Project): string[] {
  const list = project.screenshots?.length ? [...project.screenshots] : [project.image];
  const seen = new Set<string>();
  const unique: string[] = [];

  for (const src of list) {
    if (!seen.has(src)) {
      seen.add(src);
      unique.push(src);
    }
  }

  if (!seen.has(project.image)) {
    unique.unshift(project.image);
  } else {
    const index = unique.indexOf(project.image);
    if (index > 0) {
      unique.splice(index, 1);
      unique.unshift(project.image);
    }
  }

  return unique;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { title, description, image, date, tags, github, demo, longDescription } = project;
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);

  const galleryImages = useMemo(() => buildGalleryImages(project), [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxSrc) setLightboxSrc(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, lightboxSrc]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 48;
    setShowScrollHint(!nearBottom && el.scrollHeight > el.clientHeight + 24);
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6 md:p-10 animate-fade-in"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative flex w-full max-w-4xl max-h-[min(92vh,920px)] flex-col overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#050505] shadow-2xl animate-scale-up"
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            suppressHydrationWarning
            className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:border-primary hover:bg-primary/90 sm:right-4 sm:top-4"
          >
            <X size={20} />
          </button>

          <div
            onScroll={handleScroll}
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
          >
            <div className="relative h-44 w-full overflow-hidden sm:h-56 md:h-64">
              <Image
                src={assetPath(image)}
                alt={title}
                fill
                priority
                className="object-cover brightness-[0.85]"
                sizes="(max-width: 1200px) 100vw, 1000px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-black/40" />
            </div>

            <div className="relative z-10 -mt-6 flex flex-col gap-6 rounded-t-3xl bg-[#050505] px-5 pb-8 pt-2 sm:px-8 sm:pb-10">
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.isResearch && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/30 bg-secondary/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary">
                    <FlaskConical size={12} />
                    Research · {getResearchKindLabel(project.researchKind)}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Calendar size={12} />
                  {date}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  <Layers size={12} />
                  {project.category.map(getCategoryLabel).join(" / ")}
                </span>
              </div>

              {project.isResearch && project.org && (
                <p className="-mt-2 text-sm font-medium text-text-3">{project.org}</p>
              )}

              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                {title}
              </h2>

              <p className="border-l-2 border-primary/50 py-1 pl-4 text-base leading-relaxed text-text-2 sm:text-lg">
                {description}
              </p>

              {galleryImages.length > 0 && (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3 border-b border-border-c/50 pb-2">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                      <Images size={18} className="text-primary" />
                      Project Gallery
                    </h3>
                    <span className="rounded-full border border-border-c/60 bg-bg-2 px-2.5 py-0.5 text-xs text-text-3">
                      {galleryImages.length} {galleryImages.length === 1 ? "image" : "images"}
                    </span>
                  </div>

                  {galleryImages.length > 1 && (
                    <div className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory">
                      {galleryImages.map((src, index) => (
                        <button
                          key={`thumb-${src}`}
                          type="button"
                          onClick={() => setLightboxSrc(src)}
                          className="relative h-16 w-24 flex-shrink-0 snap-start overflow-hidden rounded-lg border border-border-c/60 bg-bg-3 transition-colors hover:border-primary/50 sm:h-20 sm:w-32"
                        >
                          <Image
                            src={assetPath(src)}
                            alt={`${title} preview ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="128px"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {galleryImages.map((src, index) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setLightboxSrc(src)}
                        className="group relative overflow-hidden rounded-xl border border-border-c/60 bg-bg-3 text-left transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.12)]"
                      >
                        <div className="relative aspect-[16/10] w-full">
                          <Image
                            src={assetPath(src)}
                            alt={`${title} screenshot ${index + 1}`}
                            fill
                            className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                        </div>
                        <div className="border-t border-border-c/40 px-3 py-2 text-xs text-text-3">
                          View image {index + 1}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4">
                <h3 className="border-b border-border-c/50 pb-2 text-lg font-semibold text-white">
                  {project.isResearch ? "Research Summary" : "Technical Achievements & Details"}
                </h3>
                <ul className="space-y-3.5">
                  {longDescription && longDescription.length > 0 ? (
                    longDescription.map((point, index) => (
                      <li
                        key={index}
                        className="relative pl-6 text-sm leading-relaxed text-text-3 sm:text-base"
                      >
                        <span className="absolute left-0 top-1 select-none text-lg text-primary">▸</span>
                        {point}
                      </li>
                    ))
                  ) : (
                    <li className="relative pl-6 text-sm text-text-3">
                      <span className="absolute left-0 text-primary">▸</span>
                      Bare-metal or custom application layout engineered for high durability, performance, and
                      responsive operation.
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white opacity-80">
                  Stack & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="border border-border-c/80 bg-bg-2 px-3 py-1 text-xs text-text-2 transition-all duration-200 hover:border-primary hover:text-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-2 flex flex-wrap justify-end gap-4 border-t border-border-c/50 pt-6">
                {github && (
                  <Button asChild variant="secondary" className="gap-2">
                    <a href={github} target="_blank" rel="noreferrer">
                      <Github size={18} />
                      Code Repository
                    </a>
                  </Button>
                )}
                {project.paperHref && (
                  <Button asChild variant="primary" className="gap-2">
                    <a href={assetPath(project.paperHref)} target="_blank" rel="noreferrer">
                      <FileText size={18} />
                      Read Paper
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

          {showScrollHint && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex h-16 items-end justify-center bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pb-2"
            >
              <span className="flex items-center gap-1 text-[0.65rem] font-medium uppercase tracking-widest text-text-3">
                <ChevronDown size={14} className="animate-bounce" />
                Scroll for more
              </span>
            </div>
          )}
        </div>
      </div>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setLightboxSrc(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white hover:border-primary hover:bg-primary/90"
          >
            <X size={20} />
          </button>
          <div
            className="relative h-[min(85vh,900px)] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={assetPath(lightboxSrc)}
              alt={`${title} full view`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
