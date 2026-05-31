import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 pt-32 bg-bg-2 min-h-screen">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-text-3 max-w-xl mx-auto text-lg">
            A showcase of my work spanning embedded systems, web development, and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="secondary">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
