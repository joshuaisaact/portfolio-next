"use client";

import { PROJECTS } from "@/lib/constants/projectConstants";
import { ProjectCard } from "../ui/cards/ProjectCard";

export function Projects() {
  return (
    <section aria-label="Projects" className="space-y-6 sm:space-y-8">
      <div>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Drawing on my enterprise software background, I build applications
          that solve real problems at scale. From a DEI transparency platform
          that won at JumpStart, to a full-stack AI travel planner, these
          projects showcase my transition from working with engineering teams to
          building production-ready solutions myself.
        </p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0"
        role="list"
        aria-label="Project list"
      >
        {PROJECTS.map((project) => (
          <div key={project.title} role="listitem" className="w-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
