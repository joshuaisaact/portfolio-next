"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ProjectModal } from "../ui/ProjectModal";
import { ACHIEVEMENT } from "@/lib/constants/achievementConstants";

export function Achievements() {
  const [showModal, setShowModal] = useState(false);
  const achievementRef = useRef<HTMLDivElement>(null);

  // Handle intersection observer
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

    const element = achievementRef.current?.querySelector(".project-card");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Handle modal close
  const handleClose = () => {
    setShowModal(false);
  };

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    if (showModal) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <section className="py-20 pb-section">
      <h2 className="padding-medium text-center font-sans text-3xl underline decoration-[var(--theme-1)] decoration-2 underline-offset-[2px]">
        Award-Winning Project
      </h2>

      <div className="mx-auto w-4/5 mt-6" ref={achievementRef}>
        <div className="project-card flex flex-col items-center justify-between rounded bg-white dark:bg-[#333] shadow-md overflow-hidden">
          <Image
            src={ACHIEVEMENT.imageSrc}
            alt={ACHIEVEMENT.imageAlt}
            width={600}
            height={390}
            className="w-full h-[390px] object-cover"
            priority
          />

          <div className="p-6 w-full">
            <h3 className="text-2xl mb-4 text-center">{ACHIEVEMENT.title}</h3>

            <ul className="flex justify-center gap-4 mb-4">
              {ACHIEVEMENT.skills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <Image
                    src={`/media/skills/${skill.toLowerCase()}.svg`}
                    alt={skill}
                    width={30}
                    height={30}
                    sizes="30px"
                    className="skills-icon w-[30px] h-[30px]"
                    style={{ width: "auto", height: "auto" }}
                  />
                </li>
              ))}
            </ul>

            <p className="text-lg mb-6 text-center">
              {ACHIEVEMENT.description}
            </p>

            <div className="flex justify-center gap-4">
              <a
                href={ACHIEVEMENT.projectLink}
                className="btn btn-scale"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Platform
              </a>
              <a
                href={ACHIEVEMENT.submissionLink}
                className="btn btn-scale"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Details
              </a>
              <button
                className="btn btn-scale"
                onClick={() => setShowModal(true)}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <ProjectModal project={ACHIEVEMENT} onClose={handleClose} />
      )}
    </section>
  );
}
