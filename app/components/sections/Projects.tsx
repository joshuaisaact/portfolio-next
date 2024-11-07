"use client";

import { PROJECTS } from "@/lib/constants/projectConstants";
import { ProjectCard } from "../ui/cards/ProjectCard";

export function Projects() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
