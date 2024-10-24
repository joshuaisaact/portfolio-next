"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { PROJECTS } from "@/lib/constants";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const projectElements =
      projectsRef.current?.querySelectorAll(".project-card");
    projectElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle modal close with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section className="py-20 pb-section">
      <h2 className="padding-medium text-center font-sans text-3xl underline decoration-[var(--theme-1)] decoration-2 underline-offset-[2px]">
        Projects
      </h2>

      <div
        ref={projectsRef}
        className="grid grid-cols-2 gap-20 mx-auto w-4/5 mt-6"
      >
        {PROJECTS.map((project, index) => (
          <div
            key={project.title}
            className="project-card flex flex-col items-center justify-between rounded bg-white dark:bg-[#333] shadow-md overflow-hidden"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {project.videoSrc ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                width={300}
                height={195}
                className="w-full h-[195px] object-cover"
              >
                <source src={project.videoSrc} type="video/mp4" />
                <source
                  src={project.videoSrc.replace(".mp4", ".webm")}
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                width={300}
                height={195}
                className="w-full h-[195px] object-cover"
              />
            )}

            <a
              href={project.projectLink}
              className="mt-4 text-xl hover:underline decoration-[var(--color-primary)]"
            >
              <h3>{project.title}</h3>
            </a>

            <div className="p-6 w-full">
              {/* Display skills as icons */}
              <ul className="flex justify-center gap-4 mb-4">
                {project.skills.slice(0, 3).map((skill) => (
                  <li key={skill} className="flex items-center">
                    <Image
                      src={`/media/skills/${skill.toLowerCase()}.svg`} // Adjust the path as per your file names
                      alt={skill}
                      width={30}
                      height={30}
                      className="skills-icon"
                      aria-label={skill}
                      title={skill}
                    />
                  </li>
                ))}
              </ul>
              <p className="text-lg mb-6">{project.description}</p>
              <button
                className="btn w-full btn-scale"
                onClick={() => setSelectedProject(project)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <>
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 modal-backdrop ${isClosing ? "closing" : ""}`}
            onClick={handleClose}
          />
          <div
            className={`fixed top-1/2 left-1/2 w-[60%] max-h-[90vh] overflow-y-auto
              bg-white dark:bg-[#333] rounded-lg shadow-xl z-50 modal-content
              ${isClosing ? "closing" : ""}`}
          >
            <button
              className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white
                dark:bg-[#333] border-2 border-[var(--color-primary)] btn-scale
                hover:bg-[var(--color-primary)] hover:text-white transition-colors group"
              onClick={handleClose}
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
                src={selectedProject.imageSrc}
                alt={selectedProject.imageAlt}
                width={800}
                height={400}
                className="rounded-lg w-full h-[300px] object-cover"
                priority
              />

              <ul className="flex justify-center gap-4 my-6">
                {selectedProject.skills.map((skill) => (
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
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-scale"
                >
                  Github
                </a>
                <a
                  href={selectedProject.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-scale"
                >
                  Visit Site
                </a>
              </div>

              <div className="space-y-6">
                {selectedProject.fullDescription.map((para, index) => (
                  <div
                    key={index}
                    className="text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
