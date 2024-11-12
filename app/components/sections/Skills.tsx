import { SKILL_FILES, SKILL_INFO } from "@/lib/constants/skillConstants";
import Image from "next/image";

export function Skills() {
  const businessSkills = [
    {
      name: "Capital Markets",
      description:
        "5 years delivering analytics solutions to hedge funds and asset managers",
    },
    {
      name: "Complex Systems",
      description:
        "Translated complex quantitative trading requirements into actionable technical specifications",
    },
    {
      name: "Enterprise Solutions",
      description:
        "Architected tailored enterprise solutions for financial institutions while collaborating closely with engineering teams",
    },
  ];

  return (
    <section aria-label="Skills" className="space-y-6 sm:space-y-8">
      <div>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Beyond the tech stack, my background includes five years at an
          early-stage behavioral analytics fintech, working closely with
          engineering teams to deliver solutions to hedge funds. More recently,
          I helped drive enterprise feature development at a fast-growing
          expense management platform.
        </p>
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
