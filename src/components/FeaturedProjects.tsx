import Link from "next/link";
import {
  flagshipProject,
  showcaseProjects,
  groupProjectsByCategory,
} from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FlagshipProject from "./FlagshipProject";
import { Button } from "@/components/ui/button";
import SectionHeader from "./motion/SectionHeader";
import StaggerChildren, { StaggerItem } from "./motion/StaggerChildren";
import FadeUp from "./motion/FadeUp";

const showcaseGroups = groupProjectsByCategory(showcaseProjects);

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section-padding border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeader
          label="Systems Archive"
          title={
            <>
              <span className="block">Built Systems</span>
              <span className="gradient-text block">By Technical Domain</span>
            </>
          }
          description="Tiered by domain — flagship research system first, then embedded, analog, and application-layer work."
        />

        <FadeUp>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-text-3 text-xs font-mono tracking-widest">LVL 01</span>
            <p className="section-label text-[0.65rem] mb-0">Flagship Research System</p>
          </div>
        </FadeUp>
        <FlagshipProject project={flagshipProject} />

        {showcaseGroups.map(({ tier, projects }) => (
          <div key={tier.value} className="mb-20 md:mb-28">
            <FadeUp>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10 md:mb-12 pb-6 border-b border-[rgba(255,255,255,0.06)]">
                <div className="flex items-baseline gap-4">
                  <span className="text-text-3 text-xs font-mono tracking-widest">
                    LVL {tier.level}
                  </span>
                  <div>
                    <h3 className="text-white font-bold text-xl md:text-2xl tracking-tight">
                      {tier.label}
                    </h3>
                    <p className="text-text-3 text-sm mt-1 font-light">{tier.description}</p>
                  </div>
                </div>
                <span className="text-text-3 text-xs uppercase tracking-widest">
                  {projects.length} {projects.length === 1 ? "system" : "systems"}
                </span>
              </div>
            </FadeUp>

            <StaggerChildren
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              stagger={0.08}
            >
              {projects.map((project) => (
                <StaggerItem key={project.title}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        ))}

        <FadeUp>
          <div className="text-center pt-12 border-t border-[rgba(255,255,255,0.06)]">
            <p className="text-text-2 mb-8 subtitle-lg font-light">Full archive with filters</p>
            <Button asChild variant="secondary">
              <Link href="/projects">Explore All Projects</Link>
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
