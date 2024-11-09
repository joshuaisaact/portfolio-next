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
    <div className="relative block h-full">
      {project.award && (
        <div
          className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20
          bg-amber-500 text-white rounded-full p-1.5 sm:p-2 shadow-md
          transform transition-transform group-hover:scale-110"
        >
          <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      )}
      <Link
        onClick={() => window.scrollTo(0, 0)}
        href={`/projects/${project.slug}`}
        className="block h-full"
      >
        <Card className="group hover:-translate-y-0.5 hover:shadow-md">
          <CardImage
            src={project.videoSrc || project.imageSrc}
            alt={project.imageAlt}
            video={!!project.videoSrc}
            containerClassName="aspect-[3/2] sm:aspect-[4/3] bg-gray-100 dark:bg-gray-800"
            className={`${!project.videoSrc ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
          />
          <CardContent className="space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">
                  {project.title}
                </h3>
                {project.award && (
                  <div
                    className="flex items-center gap-1.5 px-2 py-0.5
   bg-amber-100 dark:bg-amber-500/20 rounded-full
   w-fit"
                  >
                    <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400">
                      Hackathon Winner
                    </span>
                  </div>
                )}
              </div>
            </div>

            <ul className="flex flex-wrap gap-3 sm:gap-4">
              {project.skills.slice(0, 3).map((skill) => (
                <li key={skill} className="flex items-center">
                  <Image
                    src={`/media/skills/${skill.toLowerCase()}.svg`}
                    alt={skill}
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6 opacity-75 transition-opacity group-hover:opacity-100 dark:invert-[.15]"
                    aria-label={skill}
                    title={skill}
                  />
                </li>
              ))}
            </ul>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 line-clamp-3">
              {project.description}
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
