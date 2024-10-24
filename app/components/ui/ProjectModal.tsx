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
    // Prevent background scrolling when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Handle ESC key
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
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] max-h-[90vh] overflow-y-auto bg-white dark:bg-[#333] rounded-lg shadow-xl z-50">
        <button
          className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white dark:bg-[#333] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors group"
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

        <div className="p-8">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            width={800}
            height={400}
            className="rounded-lg w-full h-[300px] object-cover"
            priority
          />

          <h3 className="text-2xl font-medium text-center mt-8 mb-4">
            {project.title}
          </h3>

          <ul className="flex justify-center gap-4 my-6">
            {project.skills.map((skill) => (
              <li
                key={skill}
                className="px-3 py-1 bg-[var(--color-primary)]/10 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-8 my-8">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Visit Site
            </a>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {project.fullDescription.map((para, index) => (
              <div
                key={index}
                className="my-6 text-lg leading-relaxed"
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
