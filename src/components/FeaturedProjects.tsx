import Link from "next/link";
import {
  flagshipProject,
  showcaseProjects,
} from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FlagshipProject from "./FlagshipProject";
import { Button } from "@/components/ui/button";
import SectionHeader from "./motion/SectionHeader";
import StaggerChildren, { StaggerItem } from "./motion/StaggerChildren";

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
          description="Flagship TARA hardware ADAS plus featured work across embedded, analog, ML, and application-layer engineering."
        />

        <FlagshipProject project={flagshipProject} />

        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          stagger={0.08}
        >
          {showcaseProjects.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="text-center pt-16 border-t border-[rgba(255,255,255,0.06)] mt-20 md:mt-28">
          <p className="text-text-2 mb-8 subtitle-lg font-light">Full archive with filters</p>
          <Button asChild variant="secondary">
            <Link href="/projects">Explore All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
