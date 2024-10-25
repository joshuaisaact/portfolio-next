"use client";

import { SKILL_FILES, SKILL_INFO } from "@/lib/constants";
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
    <section className="py-20 pb-section">
      <h2 className="padding-medium text-3xl text-center font-sans underline decoration-[var(--theme-1)] decoration-2 underline-offset-[2px] dark:text-gray-200">
        Technologies
      </h2>

      <div
        ref={skillsRef}
        className="flex flex-wrap justify-center gap-[5%] pt-10"
      >
        {SKILL_FILES.map((file, index) => (
          <a
            key={file}
            href={SKILL_INFO[file].url}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-link group relative"
          >
            <Image
              src={`/media/skills/${file}`}
              alt={SKILL_INFO[file].name}
              width={75}
              height={75}
              className="skills-icon m-6 opacity-0 translate-x-full dark:invert-[.15]"
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
              title={SKILL_INFO[file].name}
            />
            <span
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium dark:text-gray-200"
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
