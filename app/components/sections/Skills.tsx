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
        "Translated quantitative trading requirements into technical specifications",
    },
    {
      name: "Enterprise Solutions",
      description:
        "Architected solutions for financial institutions while collaborating with engineering teams",
    },
  ];

  return (
    <div className="space-y-12">
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
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-6 px-4">
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
      </div>

      {/* Additional Skills */}
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          Additional Experience
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
    </div>
  );
}
