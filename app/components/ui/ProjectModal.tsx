import { useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return createPortal(
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%]
          max-h-[80vh] md:max-h-[85vh]
          overflow-y-auto
          bg-white dark:bg-[#444]
          rounded-lg shadow-2xl z-[51]
          transition-transform transform duration-300
         `}
      >
        <div className="sticky top-0 z-[60] bg-white dark:bg-[#444] p-4">
          <button
            className="
    absolute top-4 right-4
    w-10 h-10 sm:w-8 sm:h-8 md:w-8 md:h-8 // Increase size on mobile, default smaller for larger screens
    rounded-full
    bg-gray-100 dark:bg-gray-800
    text-gray-900 dark:text-white
    hover:bg-gray-200 dark:hover:bg-gray-700
    flex items-center justify-center
    transition-colors duration-200
    shadow-lg"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          {/* Image/Video */}
          {project.videoSrc ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover shadow-md mb-4 sm:mb-6"
            >
              <source src={project.videoSrc} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              width={800}
              height={400}
              className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover shadow-md mb-4 sm:mb-6"
              priority
            />
          )}

          {/* Title */}
          <h3
            className="text-xl sm:text-2xl underline decoration-[var(--theme-1)]
            font-bold text-center mt-2 sm:mt-4 mb-6
            text-gray-800 dark:text-white"
          >
            {project.title}
          </h3>

          {/* Description Content */}
          <div className="prose dark:prose-invert max-w-none mb-8">
            {/* Main intro */}
            <div
              className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6"
              dangerouslySetInnerHTML={{
                __html: project.fullDescription[0].replace(
                  "<strong>Description:</strong><br />",
                  "",
                ),
              }}
            />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-8 my-8">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center
                bg-gray-100 dark:bg-gray-800
                text-gray-900 dark:text-white
                hover:bg-gray-200 dark:hover:bg-gray-700
                transition duration-300 rounded-lg
                px-4 sm:px-5 py-2 shadow group"
              >
                <Image
                  src="/media/skills/github.svg"
                  alt="GitHub"
                  width={20}
                  height={20}
                  className="mr-2 dark:invert group-hover:brightness-95 dark:group-hover:brightness-125 transition-all"
                />
                GitHub
              </a>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border-2 border-[var(--theme-1)]
                text-[var(--theme-1)] dark:text-gray-200
                hover:bg-[var(--theme-1)] hover:text-white
                transition-all duration-300 rounded-lg
                px-4 sm:px-5 py-2 shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Visit Site
              </a>

              {"submissionLink" in project && (
                <a
                  href={project.submissionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border-2 border-[var(--theme-1)]
    text-[var(--theme-1)] dark:text-gray-200
    hover:bg-[var(--theme-1)] hover:text-white
    transition-all duration-300 rounded-lg
    px-4 sm:px-5 py-2 shadow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                    strokeWidth="2"
                  >
                    <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
                  </svg>
                  Project Details
                </a>
              )}
            </div>

            {/* Highlights section */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
              <div
                className="space-y-3"
                dangerouslySetInnerHTML={{
                  __html: project.fullDescription[2]
                    .replace("<ul>", '<ul class="space-y-3">')
                    .replace(
                      /<li>/g,
                      `<li class="relative pl-6 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                        <span class="absolute left-0 text-[var(--theme-1)] font-bold">•</span>`,
                    ),
                }}
              />
            </div>
          </div>

          {/* Skills at bottom with separator */}
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {project.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center
                    bg-gray-100 dark:bg-gray-800
                    text-gray-900 dark:text-white
                    hover:bg-gray-200 dark:hover:bg-gray-700
                    transition-colors duration-300
                    rounded-lg px-3 py-1.5 shadow-sm"
                >
                  <Image
                    src={`/media/skills/${skill.toLowerCase()}.svg`}
                    alt={skill}
                    width={20}
                    height={20}
                    className="skills-icon"
                  />
                  <span className="ml-2 font-medium hidden sm:inline">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}
