"use client";

import { useState } from "react";
import Image from "next/image";
import { FileText, Github, Maximize2 } from "lucide-react";
import { researchItems } from "@/data/research";
import { researchProjects, type Project } from "@/data/projects";
import { assetPath } from "@/lib/site";
import SectionHeader from "./motion/SectionHeader";
import StaggerChildren, { StaggerItem } from "./motion/StaggerChildren";
import ProjectModal from "./ProjectModal";

const kindLabel = {
  collaboration: "Industry Research",
  project: "Open Research",
  publication: "Conference Paper",
} as const;

export default function Research() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  /** Match a researchItem by title to its corresponding Project object */
  function getProject(title: string): Project | undefined {
    return researchProjects.find((p) => p.title === title);
  }

  return (
    <>
      <section id="research" className="section-padding border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <SectionHeader
            label="Research"
            title={
              <>
                <span className="block">Applied Research</span>
                <span className="gradient-text block">&amp; Technical Work</span>
              </>
            }
            description="Samsung PRISM NTN collaboration, exoplanet scheduling research, and peer-reviewed VLSI design work."
          />

          <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6" stagger={0.1}>
            {researchItems.map(
              ({ title, org, period, description, tags, kind, href, paperHref, image, logos }) => {
                const project = getProject(title);
                return (
                  <StaggerItem key={title}>
                    <article
                      onClick={() => project && setActiveProject(project)}
                      className="surface-elevated rounded-2xl overflow-hidden flex flex-col border border-[rgba(255,255,255,0.06)] hover:border-[rgba(59,130,246,0.25)] transition-all duration-300 cursor-pointer group relative"
                    >
                      {/* "Click to expand" hint on hover */}
                      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-white/70">
                          <Maximize2 size={10} />
                          Details
                        </div>
                      </div>

                      {image && (
                        <div className="relative w-full h-40 sm:h-44 bg-[#0a0a0a] border-b border-[rgba(255,255,255,0.06)]">
                          <Image
                            src={assetPath(image)}
                            alt={title}
                            fill
                            className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        </div>
                      )}

                      <div className="p-5 sm:p-6 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div className="flex-1 min-w-0">
                            {logos.some((logo) => logo.wide) ? (
                              <div className="relative w-full h-11 rounded-lg overflow-hidden bg-[#ececec]">
                                {logos.map((logo) => (
                                  <Image
                                    key={logo.alt}
                                    src={assetPath(logo.src)}
                                    alt={logo.alt}
                                    fill
                                    className="object-contain p-1.5"
                                    sizes="320px"
                                  />
                                ))}
                              </div>
                            ) : (
                              <div className="flex items-center gap-3 flex-wrap">
                                {logos.map((logo) => (
                                  <div
                                    key={logo.alt}
                                    className={`relative shrink-0 ${
                                      logo.src.includes("nasa")
                                        ? "h-8 w-8"
                                        : logo.src.includes("amrita")
                                          ? "h-8 w-24 rounded-md overflow-hidden bg-[#ececec]"
                                          : logo.src.includes("samsung")
                                            ? "h-7 w-24 rounded-md overflow-hidden bg-white"
                                            : "h-7 w-7"
                                    }`}
                                  >
                                    <Image
                                      src={assetPath(logo.src)}
                                      alt={logo.alt}
                                      fill
                                      className={`${
                                        logo.src.includes("amrita")
                                          ? "object-contain p-0.5"
                                          : "object-contain object-left"
                                      }`}
                                      sizes="96px"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          <span className="text-[0.55rem] font-bold uppercase tracking-[0.14em] text-text-3 whitespace-nowrap pt-1">
                            {kindLabel[kind]}
                          </span>
                        </div>

                        <p className="section-label text-[0.6rem] mb-2">{org}</p>
                        <h3 className="text-white font-bold text-base sm:text-lg tracking-tight leading-snug mb-2 line-clamp-3 group-hover:text-primary transition-colors duration-200">
                          {title}
                        </h3>
                        <p className="text-primary text-[0.65rem] font-semibold uppercase tracking-widest mb-3">
                          {period}
                        </p>

                        <p className="text-text-2 text-sm leading-relaxed font-light line-clamp-4 mb-4">
                          {description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-3 border-t border-[rgba(255,255,255,0.06)] mb-4 mt-auto">
                          {tags.map((tag) => (
                            <span key={tag} className="tech-tag">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {(href || paperHref) && (
                          <div className="flex flex-wrap gap-4" onClick={(e) => e.stopPropagation()}>
                            {href && (
                              <a
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-white transition-colors no-underline"
                              >
                                <Github size={14} />
                                View on GitHub
                              </a>
                            )}
                            {paperHref && (
                              <a
                                href={assetPath(paperHref)}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary hover:text-white transition-colors no-underline"
                              >
                                <FileText size={14} />
                                Read Paper
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </article>
                  </StaggerItem>
                );
              }
            )}
          </StaggerChildren>
        </div>
      </section>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}
