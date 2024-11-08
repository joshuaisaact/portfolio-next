"use client";

import { SKILL_FILES, SKILL_INFO } from "@/lib/constants/skillConstants";
import Image from "next/image";

export function Skills() {
  return (
    <section className="py-10 pb-section">
      <div className="flex flex-wrap justify-center gap-6 pt-10 px-4">
        {SKILL_FILES.map((file) => (
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
              width={64}
              height={64}
              className="skills-icon m-2 dark:invert-[.15] w-16 h-16"
              title={SKILL_INFO[file].name}
            />
            <span
              className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-center
                opacity-0 group-hover:opacity-100 transition-opacity
                text-xs font-medium whitespace-nowrap text-skill-${file.split(".")[0]} dark:text-gray-200`}
            >
              {SKILL_INFO[file].name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
