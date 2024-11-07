"use client";

import { SKILL_FILES, SKILL_INFO } from "@/lib/constants/skillConstants";
import Image from "next/image";

export function Skills() {
  return (
    <section className="py-10  pb-section">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-[5%] pt-10 px-4 ">
        {SKILL_FILES.map((file) => (
          <a
            key={file}
            href={SKILL_INFO[file].url}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-link group relative mb-8 sm:mb-6"
          >
            <Image
              src={`/media/skills/${file}`}
              alt={SKILL_INFO[file].name}
              width={96}
              height={96}
              className="skills-icon m-2 sm:m-3 md:m-4 lg:m-6 dark:invert-[.15]
                 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24
                 "
              title={SKILL_INFO[file].name}
            />
            <span
              className={`absolute -bottom-6 sm:-bottom-2 left-1/2 transform -translate-x-1/2 text-center
                md:opacity-0 md:group-hover:opacity-100
                ${file.includes("tanstack") ? "text-[9px]" : "text-xs"} sm:text-xs md:text-sm
                font-medium whitespace-nowrap text-skill-${file.split(".")[0]} dark:text-gray-200`}
            >
              {SKILL_INFO[file].name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
