"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowLeft } from "lucide-react";
import { projects, filterCategories } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AllProjects() {
  const [activeFilter, setFilter] = useState("all");
  const [search, setSearch]       = useState("");

  const filtered = projects.filter((p) => {
    const matchCat    = activeFilter === "all" || p.category.includes(activeFilter);
    const q           = search.toLowerCase();
    const matchSearch = !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <section id="projects" className="min-h-screen pt-28 pb-20 bg-bg-2">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold gradient-text mb-4">
            All My Projects
          </h2>
          <p className="text-text-3 max-w-xl mx-auto text-lg">
            A comprehensive showcase of my work spanning various domains
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Search */}
          <div className="relative max-w-lg mx-auto w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-3" size={16} />
            <Input
              id="project-search"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-11"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {filterCategories.map(({ label, value }) => (
              <Button
                key={value}
                variant={activeFilter === value ? "filter-active" : "filter"}
                size="sm"
                onClick={() => setFilter(value)}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid or empty state */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-16 mb-12 p-12 rounded-2xl border-2 border-accent bg-[#111827] shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <h3 className="vt323 text-5xl text-accent mb-4" style={{ textShadow: "0 0 10px rgba(6,182,212,0.7)" }}>
              The Tome of Projects is Empty... For Now!
            </h3>
            <p className="vt323 text-2xl text-white" style={{ textShadow: "0 0 5px rgba(255,255,255,0.3)" }}>
              But fear not, young wizard! The runes are aligning and new scrolls of knowledge shall appear soon.
            </p>
          </div>
        )}

        {/* Back */}
        <div className="text-center">
          <Button asChild variant="secondary">
            <Link href="/">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
