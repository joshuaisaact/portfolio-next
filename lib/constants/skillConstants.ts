export const SKILL_FILES = [
  // Core Stack
  "typescript.svg",
  "react.svg",
  "nextjs.svg",
  "nodejs.svg",
  "express.svg",

  // Frontend
  "tailwindcss.svg",
  "tanstack-query.svg",
  "graphql.svg",
  "apollo.svg",

  // Backend/Data
  "postgresql.svg",
  "supabase.svg",
  "drizzle.svg",

  // Testing
  "playwright.svg",
  "vitest.svg",
  "jest.svg",
  "msw.svg",

  // DevOps/Infrastructure
  "docker.svg",
  "github-actions.svg",
  "digitalocean.svg",

  // Version Control
  "git.svg",
  "github.svg",
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
  // Core Stack
  "typescript.svg": {
    name: "TypeScript",
    color: "#3178C6",
    url: "https://www.typescriptlang.org/",
  },
  "react.svg": {
    name: "React",
    color: "#61DAFB",
    url: "https://react.dev/",
  },
  "nextjs.svg": {
    name: "Next.js",
    color: "#000000",
    textColorDark: "text-gray-200",
    url: "https://nextjs.org/",
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

  // Frontend
  "tailwindcss.svg": {
    name: "Tailwind",
    color: "#06B6D4",
    url: "https://tailwindcss.com/",
  },
  "tanstack-query.svg": {
    name: "React Query",
    color: "#FF4154",
    url: "https://tanstack.com/query",
  },
  "graphql.svg": {
    name: "GraphQL",
    color: "#E10098",
    url: "https://graphql.org/",
  },
  "apollo.svg": {
    name: "Apollo",
    color: "#311C87",
    url: "https://www.apollographql.com/",
  },

  // Backend/Data
  "postgresql.svg": {
    name: "PostgreSQL",
    color: "#4169E1",
    url: "https://www.postgresql.org/",
  },
  "supabase.svg": {
    name: "Supabase",
    color: "#3FCF8E",
    url: "https://supabase.com/",
  },
  "drizzle.svg": {
    name: "Drizzle",
    color: "#C5F74F",
    url: "https://orm.drizzle.team/",
  },

  // Testing
  "playwright.svg": {
    name: "Playwright",
    color: "#2EAD33",
    url: "https://playwright.dev/",
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
  "msw.svg": {
    name: "Mock Service Worker",
    color: "#FF6A33",
    url: "https://mswjs.io/",
  },

  // DevOps/Infrastructure
  "docker.svg": {
    name: "Docker",
    color: "#2496ED",
    url: "https://www.docker.com/",
  },
  "github-actions.svg": {
    name: "GitHub Actions",
    color: "#2088FF",
    url: "https://github.com/features/actions",
  },
  "digitalocean.svg": {
    name: "DigitalOcean",
    color: "#0080FF",
    url: "https://www.digitalocean.com/",
  },

  // Version Control
  "git.svg": {
    name: "Git",
    color: "#F05032",
    url: "https://git-scm.com/",
  },
  "github.svg": {
    name: "GitHub",
    color: "#181717",
    textColorDark: "text-gray-200",
    url: "https://github.com/",
  },
} as const;
