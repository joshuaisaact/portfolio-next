import Image from "next/image";
import { Card, CardImage, CardContent } from "./Card";
import { Project } from "@/types";
import Link from "next/link";
import { Trophy } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      href={`/projects/${project.slug}`}
    >
      <Card className="group hover:-translate-y-0.5 hover:shadow-md relative">
        {project.award && (
          <div
            className="absolute -top-3 -right-3 z-10 bg-amber-500 text-white rounded-full p-2 shadow-md
            transform transition-transform group-hover:scale-110"
          >
            <Trophy className="w-5 h-5" />
          </div>
        )}
        <CardImage
          src={project.videoSrc || project.imageSrc}
          alt={project.imageAlt}
          video={!!project.videoSrc}
        />
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              {project.award && (
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-amber-100 dark:bg-amber-500/20 rounded-full">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                    Hackathon Winner
                  </span>
                </div>
              )}
            </div>
          </div>

          <ul className="flex gap-4 my-4">
            {project.skills.slice(0, 3).map((skill) => (
              <li key={skill} className="flex items-center">
                <Image
                  src={`/media/skills/${skill.toLowerCase()}.svg`}
                  alt={skill}
                  width={24}
                  height={24}
                  className="opacity-75 transition-opacity group-hover:opacity-100"
                  aria-label={skill}
                  title={skill}
                />
              </li>
            ))}
          </ul>

          <p className="text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
