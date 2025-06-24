
import { Project } from "@/types";
import { ProjectCard } from "../ui/cards/ProjectCard";


interface ProjectsProps {
  projects: Project[];
  introText: string;
  cardType?: 'full' | 'minimal';
}

export function Projects({ projects, introText, cardType }: ProjectsProps) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section aria-label="Projects Section" className="space-y-6 sm:space-y-8">
      {introText && (
        <div>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {introText}
          </p>
        </div>
      )}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        role="list"
        aria-label="Project list"
      >
        {projects.map((project) => (
          <div key={project.slug} role="listitem" className="w-full">
            <ProjectCard project={project} variant={cardType} />
          </div>
        ))}
      </div>
    </section>
  );
}