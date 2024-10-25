export const SKILL_FILES = [
  "typescript.svg",
  "nextjs.svg",
  "react.svg",
  "nodejs.svg",
  "express.svg",
  "tailwindcss.svg",
  "supabase.svg",
  "postgresql.svg",
  "drizzle.svg",
  "sequelize.svg",
  "tanstack-query.svg",
  "html5.svg",
  "css3.svg",
  "javascript.svg",
  "npm.svg",
  "vitest.svg",
  "jest.svg",
  "mongodb.svg",
  "hugo.svg",
  "github.svg",
  "git.svg",
] as const;

export type SkillFile = (typeof SKILL_FILES)[number];

export const SKILL_INFO: Record<
  SkillFile,
  {
    name: string;
    color?: string;
    textColorDark?: string;
    url: string;
  }
> = {
  "typescript.svg": {
    name: "TypeScript",
    color: "#3178C6",
    url: "https://www.typescriptlang.org/",
  },
  "nextjs.svg": {
    name: "Next.js",
    color: "#000000",
    textColorDark: "text-gray-200",
    url: "https://nextjs.org/",
  },
  "react.svg": {
    name: "React",
    color: "#61DAFB",
    url: "https://react.dev/",
  },
  "html5.svg": {
    name: "HTML5",
    color: "#E34F26",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  "css3.svg": {
    name: "CSS3",
    color: "#1572B6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  "javascript.svg": {
    name: "JavaScript",
    color: "#F7DF1E",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  "tailwindcss.svg": {
    name: "Tailwind",
    color: "#06B6D4",
    url: "https://tailwindcss.com/",
  },
  "tanstack-query.svg": {
    // TanStack Query entry
    name: "React Query",
    color: "#FF4154", // TanStack Query brand color
    url: "https://tanstack.com/query",
  },
  "nodejs.svg": {
    name: "Node.js",
    color: "#339933",
    url: "https://nodejs.org/",
  },
  "express.svg": {
    name: "Express.js",
    color: "#000000",
    textColorDark: "text-gray-200",
    url: "https://expressjs.com/",
  },
  "vitest.svg": {
    name: "Vitest",
    color: "#6E9F18",
    url: "https://vitest.dev/",
  },
  "jest.svg": {
    name: "Jest",
    color: "#C21325",
    url: "https://jestjs.io/",
  },
  "npm.svg": {
    name: "NPM",
    color: "#CB3837",
    url: "https://www.npmjs.com/",
  },
  "mongodb.svg": {
    name: "MongoDB",
    color: "#47A248",
    url: "https://www.mongodb.com/",
  },
  "postgresql.svg": {
    name: "PostgreSQL",
    color: "#4169E1",
    url: "https://www.postgresql.org/",
  },
  "sequelize.svg": {
    name: "Sequelize",
    color: "#52B0E6",
    url: "https://sequelize.org/",
  },
  "supabase.svg": {
    name: "Supabase",
    color: "#3FCF8E", // Supabase's brand green
    url: "https://supabase.com/",
  },
  "drizzle.svg": {
    name: "Drizzle",
    color: "#C5F74F", // Drizzle's lime green color
    url: "https://orm.drizzle.team/",
  },
  "hugo.svg": {
    name: "Hugo",
    color: "#FF4088",
    url: "https://gohugo.io/",
  },
  "github.svg": {
    name: "GitHub",
    color: "#181717",
    textColorDark: "text-gray-200",
    url: "https://github.com/",
  },
  "git.svg": {
    name: "Git",
    color: "#F05032",
    url: "https://git-scm.com/",
  },
} as const;
