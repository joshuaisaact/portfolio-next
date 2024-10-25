"use client";

import { SKILL_FILES, SKILL_INFO } from "@/lib/constants/skillConstants";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.5 },
    );

    const skillElements = skillsRef.current?.querySelectorAll(".skills-icon");
    skillElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-10 md:py-60 pb-section">
      <h2 className="padding-medium text-3xl text-center font-sans underline decoration-[var(--theme-1)] decoration-2 underline-offset-[2px] dark:text-gray-200">
        Technologies
      </h2>

      <div
        ref={skillsRef}
        className="flex flex-wrap justify-center gap-4 sm:gap-[5%] pt-10 px-4 fade-in delay-4"
      >
        {SKILL_FILES.map((file) => (
          <a
            key={file}
            href={SKILL_INFO[file].url}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-link group relative mb-8 sm:mb-6" // Added margin-bottom for label space
          >
            <Image
              src={`/media/skills/${file}`}
              alt={SKILL_INFO[file].name}
              width={96}
              height={96}
              className="skills-icon m-2 sm:m-3 md:m-4 lg:m-6 opacity-0 translate-x-full dark:invert-[.15]
                 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24
                 transition-all duration-300"
              title={SKILL_INFO[file].name}
            />
            <span
              className={`absolute -bottom-6 sm:-bottom-2 left-1/2 -translate-x-1/2
             md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300
             ${file.includes("tanstack") ? "text-[9px]" : "text-xs"} sm:text-xs md:text-sm
             font-medium dark:text-gray-200 whitespace-nowrap`}
              style={{ color: SKILL_INFO[file].color }}
            >
              {SKILL_INFO[file].name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
