"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowLeft } from "lucide-react";
import { projects, filterCategories, groupProjectsByCategory } from "@/data/projects";
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

  const grouped = groupProjectsByCategory(filtered);
  const showGrouped = activeFilter === "all" && !search;

  return (
    <section id="projects" className="min-h-screen pt-28 pb-24 bg-bg-base">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="text-center mb-16 space-y-4">
          <p className="section-label">Full Archive</p>
          <h2 className="section-title text-white">All Built Systems</h2>
          <p className="text-text-2 max-w-xl mx-auto text-lg font-light">
            Complete project archive grouped by technical domain
          </p>
        </div>

        <div className="flex flex-col gap-5 mb-12">
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

        {filtered.length > 0 ? (
          showGrouped ? (
            <div className="space-y-16 mb-16">
              {grouped.map(({ group, projects: groupProjects }) => (
                <div key={group.value}>
                  <div className="mb-8 pb-4 border-b border-[rgba(255,255,255,0.06)]">
                    <h3 className="text-white font-bold text-lg tracking-tight">{group.label}</h3>
                    <p className="text-text-3 text-sm mt-0.5">{group.description}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groupProjects.map((project) => (
                      <ProjectCard key={project.title} project={project} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filtered.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          )
        ) : (
          <div className="text-center mt-16 mb-12 p-12 rounded-2xl semi-flat-card">
            <h3 className="vt323 text-5xl text-primary mb-4">
              The Tome of Projects is Empty... For Now!
            </h3>
            <p className="vt323 text-2xl text-text-2">
              But fear not, young wizard! The runes are aligning and new scrolls of knowledge shall appear soon.
            </p>
          </div>
        )}

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
