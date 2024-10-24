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
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[60%] max-h-[90vh] overflow-y-auto bg-white dark:bg-[#444] rounded-lg shadow-2xl z-50 transition-transform transform duration-300">
        <button
          className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white dark:bg-[#555] border-2 border-[var(--theme-1)] hover:bg-[var(--color-primary)] hover:text-white transition-colors group shadow-md"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            className="group-hover:stroke-white transition-colors"
          >
            <line x1="30" y1="30" x2="70" y2="70" />
            <line x1="70" y1="30" x2="30" y2="70" />
          </svg>
        </button>

        <div className="p-6 sm:p-8">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            width={800}
            height={400}
            className="rounded-lg w-full h-[300px] object-cover shadow-md mb-6"
            priority
          />

          <h3 className="text-2xl underline decoration-[var(--theme-1)] font-bold text-center mt-4 mb-4 text-gray-800 dark:text-white">
            {project.title}
          </h3>

          <ul className="flex justify-center gap-4 my-4 flex-wrap">
            {project.skills.map((skill) => (
              <li key={skill} className="flex items-center border border-[var(--theme-1)] rounded-full px-3 py-1">
                <Image
                  src={`/media/skills/${skill.toLowerCase()}.svg`}
                  alt={skill}
                  width={30}
                  height={30}
                  className="skills-icon"
                  aria-label={skill}
                  title={skill}
                />
                <span className="ml-2 font-medium">{skill}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-8 my-6">
          <a
  href={project.githubLink}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center bg-gray-800 text-white hover:bg-gray-900 transition duration-300 rounded-lg px-5 py-2 shadow"
>
  <Image
    src="/media/skills/github.svg"
    alt="GitHub"
    width={24}
    height={24}
    className="mr-2"
  />
  GitHub
</a>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-600 text-white hover:bg-green-700 transition duration-300 rounded-lg px-4 py-2 shadow"
            >
              Visit Site
            </a>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {project.fullDescription.map((para, index) => (
              <div
                key={index}
                className="my-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}
