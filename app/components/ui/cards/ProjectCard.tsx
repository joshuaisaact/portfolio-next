import Image from "next/image";
import { Card, CardImage, CardContent } from "./Card";
import { Project } from "@/types";
import Link from "next/link";
import { Github, Trophy } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  variant?: 'full' | 'minimal';
}

export function ProjectCard({ project, variant = 'full' }: ProjectCardProps) {
  const isMinimal = variant === 'minimal';

  const cardLinkHref = isMinimal && project.links.find(link => link.type === 'github')
    ? project.links.find(link => link.type === 'github')!.url
    : `/projects/${project.slug}`;

  const linkTarget = isMinimal && project.links.find(link => link.type === 'github') ? "_blank" : "_self";

  return (
    <div className={`relative block h-full ${isMinimal ? 'group' : ''}`}>
      {/* Award badge - maybe only for 'full' variant or if explicitly present */}
      {project.award && !isMinimal && ( // Example: only show award prominently on full card
        <div
          className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20
          bg-amber-500 text-white rounded-full p-1.5 sm:p-2 shadow-md
          transform transition-transform group-hover:scale-110"
        >
          <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      )}

      <Link href={cardLinkHref} target={linkTarget} rel={linkTarget === "_blank" ? "noopener noreferrer" : undefined} className="block h-full">
        <Card className={`group ${isMinimal ? 'hover:bg-gray-50 dark:hover:bg-gray-800/60' : 'hover:-translate-y-0.5 hover:shadow-md'}`}>
          {/* Image/Video Section - Conditional based on variant */}
          {!isMinimal && (project.videoPreviewSrc || project.imageSrc) && (
            <CardImage
              src={project.videoPreviewSrc || project.imageSrc!} // Non-null assertion as we check existence
              alt={project.imageAlt || project.title}
              video={!!project.videoSrc}
              containerClassName="aspect-[3/2] sm:aspect-[4/3] bg-gray-100 dark:bg-gray-800"
              className={`${!project.videoSrc ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
            />
          )}

          <CardContent className={`space-y-3 sm:space-y-4 ${isMinimal ? 'py-4 px-4 sm:py-5 sm:px-5' : ''}`}>
            <div className="space-y-2">
              <div className={`flex ${isMinimal ? 'flex-col items-start sm:flex-row sm:items-center sm:justify-between' : 'flex-col sm:flex-row sm:items-center'} gap-2`}>
                <h3 className={`text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 ${isMinimal ? 'line-clamp-2' : 'line-clamp-1'}`}>
                  {project.title}
                </h3>
                {/* Award text - smaller for minimal, or integrated differently */}
                {project.award && isMinimal && (
                  <span className="text-xs text-amber-600 dark:text-amber-400 mt-1 sm:mt-0">(Hackathon Winner)</span>
                )}
                {project.award && !isMinimal && (
                  <div
                    className="flex items-center gap-1.5 px-2 py-0.5
                    bg-amber-100 dark:bg-amber-500/20 rounded-full w-fit"
                  >
                    <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400">
                      Hackathon Winner
                    </span>
                  </div>
                )}
                {/* GitHub link icon for minimal variant */}
                {isMinimal && project.links.find(link => link.type === 'github') && (
                  <Github className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors sm:ml-auto" />
                )}
              </div>
            </div>

            {/* Skills - show more for minimal if less other content? Or keep consistent */}
            <ul className="flex flex-wrap gap-x-3 gap-y-2 sm:gap-x-4">
              {project.skills.slice(0, isMinimal ? 4 : 3).map((skill) => ( // Show more skills for minimal?
                <li key={skill} className="flex items-center" title={skill}>
                  <Image
                    // Ensure skill names are consistently cased for image paths
                    src={`/media/skills/${skill.toLowerCase().replace(/\s+/g, '-')}.svg`} // Handle spaces in skill names if any
                    alt="" // Decorative, title attribute provides info
                    width={isMinimal ? 20 : 24}
                    height={isMinimal ? 20 : 24}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${isMinimal ? 'opacity-60' : 'opacity-75 group-hover:opacity-100'} dark:invert-[.15] transition-opacity`}
                    aria-hidden="true"
                  />
                  {isMinimal && ( // Optionally show skill text for minimal variant
                    <span className="ml-1.5 text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">{skill}</span>
                  )}
                </li>
              ))}
            </ul>

            <p className={`text-sm ${isMinimal ? 'text-gray-500 dark:text-gray-400 line-clamp-2 sm:line-clamp-3' : 'text-gray-600 dark:text-gray-300 line-clamp-3'}`}>
              {project.description}
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}