import type { Metadata } from "next";
import AllProjects from "@/components/AllProjects";

export const metadata: Metadata = {
  title: "All Projects – Rushikesh D",
  description: "Full collection of projects by Rushikesh D spanning embedded systems, ML, analog, and app development.",
};

export default function ProjectsPage() {
  return <AllProjects />;
}
