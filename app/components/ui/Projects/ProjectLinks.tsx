import Link from "next/link";
import Image from "next/image";
import { Newspaper, Trophy } from "lucide-react";
import { Project } from "@/types";

interface ProjectLinksProps {
  project: Project;
}

const ProjectLinks = ({ project }: ProjectLinksProps) => {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-3"
      role="list"
      aria-label="Project links"
    >
      {project.links.map((link) => {
        const commonClasses =
          "inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 rounded-lg transition-all text-sm sm:text-base";

        switch (link.type) {
          case "github":
            return (
              <Link
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${commonClasses} bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white`}
                role="listitem"
                aria-label={`View ${link.label} on GitHub`}
              >
                <div className="flex items-center justify-center">
                  <Image
                    src="/media/skills/github.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="mr-2 dark:invert"
                    aria-hidden="true"
                  />
                  <span>{link.label}</span>
                </div>
              </Link>
            );

          case "live":
            return (
              <Link
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${commonClasses} bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-sm hover:shadow`}
                role="listitem"
                aria-label={`Visit ${link.label}`}
              >
                <div className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span>{link.label}</span>
                </div>
              </Link>
            );

          case "submission":
            return (
              <Link
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${commonClasses} bg-amber-100 hover:bg-amber-200 dark:bg-amber-500/20 dark:hover:bg-amber-500/30 text-amber-600 dark:text-amber-400`}
                role="listitem"
                aria-label="View hackathon submission"
              >
                <div className="flex items-center justify-center">
                  <Trophy className="w-5 h-5 mr-2" aria-hidden="true" />
                  <span>{link.label}</span>
                </div>
              </Link>
            );

          case "blog":
            return (
              <Link
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${commonClasses} bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200`}
                role="listitem"
                aria-label="Read technical blog posts"
              >
                <div className="flex items-center justify-center">
                  <Newspaper className="w-5 h-5 mr-2" aria-hidden="true" />

                  <span>{link.label}</span>
                </div>
              </Link>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default ProjectLinks;
