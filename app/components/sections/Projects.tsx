"use client";

import { PROJECTS } from "@/lib/constants/projectConstants";
import { ProjectCard } from "../ui/cards/ProjectCard";

export function Projects() {
  return (
    <section aria-label="Projects" className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Drawing on my enterprise software background, I build applications
          that solve real problems at scale. From a DEI transparency platform
          that won at JumpStart, to a full-stack AI travel planner, these
          projects showcase my transition from working with engineering teams to
          building production-ready solutions myself.
        </p>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        role="list"
        aria-label="Project list"
      >
        {PROJECTS.map((project) => (
          <div key={project.title} role="listitem">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
