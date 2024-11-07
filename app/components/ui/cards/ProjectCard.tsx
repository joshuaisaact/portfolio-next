import Image from "next/image";
import { Card, CardImage, CardContent } from "./Card";
import { Project } from "@/types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
        <CardImage
          src={project.videoSrc || project.imageSrc}
          alt={project.imageAlt}
          video={!!project.videoSrc}
        />
        <CardContent>
          <h3 className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100">
            {project.title}
          </h3>

          <ul className="flex gap-4 my-4">
            {project.skills.slice(0, 3).map((skill) => (
              <li key={skill} className="flex items-center">
                <Image
                  src={`/media/skills/${skill.toLowerCase()}.svg`}
                  alt={skill}
                  width={24}
                  height={24}
                  className="opacity-75 transition-opacity hover:opacity-100"
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
