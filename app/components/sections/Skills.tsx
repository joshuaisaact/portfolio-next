import { SKILL_FILES, SKILL_INFO } from "@/lib/constants/skillConstants";
import Image from "next/image";

export function Skills() {
  const businessSkills = [
    {
      name: "Capital Markets",
      description:
        "Deep understanding of fintech and capital markets, with experience in developing analytical tools to support investment strategies.",
    },
    {
      name: "Complex Systems",
      description:
        "Proven ability to architect and implement solutions for intricate trading systems and multifaceted business requirements.",
    },
    {
      name: "Enterprise Solutions",
      description:
        "Delivering robust, scalable applications for enterprise clients, focusing on performance, security, and integration.",
    },
  ];

  return (
    <section aria-label="Skills" className="space-y-6 sm:space-y-8">
      <div>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
          My approach to technical challenges is shaped by a diverse background in both early-stage fintech (building behavioural analytics for hedge funds) and rapidly growing enterprise platforms. This blend of experiences gives me a unique perspective on building robust and scalable solutions.        </p>
      </div>

      {/* Technical Skills */}
      <div className="space-y-4 sm:space-y-6">
        <h3 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-gray-100">
          Tech Stack
        </h3>
        <div
          className="flex flex-wrap justify-center gap-3 sm:gap-6 px-2 sm:px-4"
          role="list"
          aria-label="Technical skills"
        >
          {SKILL_FILES.map((file) => (
            <div key={file} role="listitem">
              <a
                href={SKILL_INFO[file].url}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-link group relative block"
                aria-label={`Learn more about ${SKILL_INFO[file].name}`}
              >
                <Image
                  src={`/media/skills/${file}`}
                  alt=""
                  width={64}
                  height={64}
                  className="skills-icon m-1 sm:m-2 dark:invert-[.15] w-12 h-12 sm:w-16 sm:h-16"
                  aria-hidden="true"
                />
                <span
                  className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center
                  opacity-0 group-hover:opacity-100 transition-opacity
                  text-xs font-medium whitespace-nowrap text-skill-${file.split(".")[0]} dark:text-gray-200`}
                >
                  {SKILL_INFO[file].name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Skills */}
      <div className="space-y-6">
        <h3 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-gray-100">
          Additional Experience
        </h3>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          role="list"
          aria-label="Business experience"
        >
          {businessSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              role="listitem"
            >
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                {skill.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
