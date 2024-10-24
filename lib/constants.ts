export const SITE_CONFIG = {
  title: "Joshua Tuddenham",
  description: "Full-stack engineer portfolio",
  author: "Joshua Tuddenham",
  url: "https://joshuatuddenham.com",
  githubUrl: "https://github.com/joshuaisaact",
  linkedinUrl: "https://www.linkedin.com/in/joshuatuddenham/",
} as const;

export const SKILL_FILES = [
  "typescript.svg",
  "nextjs.svg",
  "react.svg",
  "nodejs.svg",
  "express.svg",
  "tailwindcss.svg",
  "supabase.svg",
  "postgresql.svg",
  "drizzle.png",
  "html5.svg",
  "css3.svg",
  "javascript.svg",
  "npm.svg",
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
    color: "#000000", // Next.js uses black as its primary color
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
    name: "Tailwind CSS",
    color: "#06B6D4",
    url: "https://tailwindcss.com/",
  },
  "nodejs.svg": {
    name: "Node.js",
    color: "#339933",
    url: "https://nodejs.org/",
  },
  "express.svg": {
    name: "Express.js",
    color: "#000000",
    url: "https://expressjs.com/",
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
  "supabase.svg": {
    name: "Supabase",
    color: "#3FCF8E", // Supabase's brand green
    url: "https://supabase.com/",
  },
  "drizzle.png": {
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
    url: "https://github.com/",
  },
  "git.svg": {
    name: "Git",
    color: "#F05032",
    url: "https://git-scm.com/",
  },
} as const;

export const THEME_COLORS = [
  "#e07a14",
  "#723e5a",
  "#9c852a",
  "#C589A3",
  "#42d499",
  "#5459de",
  "#481682",
  "#3e7256",
] as const;

export const PROJECTS = [
  {
    imageSrc: "/media/projects/wooster.png", // Adjust the image source as needed
    imageAlt: "Wooster logo",
    title: "Wooster",
    projectLink: "URL_TO_WOOSTER_PROJECT", // Replace with actual URL
    githubLink: "https://github.com/joshuaisaact/Wooster", // Replace with actual URL
    skills: ["React", "Tailwind", "TypeScript", "Node.js"],
    description:
      "A full-stack web app generating personalised trips and activities using the Gemini LLM API.",
    fullDescription: [
      "<p>Sole developer of a full-stack web app generating personalised trips and activities using the Gemini LLM API.</p>",
      "<p>Built a responsive UI with React, Tailwind, and TypeScript, optimised for both mobile and desktop.</p>",
      "<p>Developed a Node.js/Express backend with PostgreSQL (Supabase-hosted) and Drizzle ORM.</p>",
      "<p>Implemented Supertest and Jest for integration testing, with Dockerized test database setup for CI.</p>",
      "<p>Integrated the Gemini API for personalised activity suggestions and Leaflet-powered interactive maps.</p>",
    ],
  },
  {
    imageSrc: "/media/projects/atomizepro.png",
    imageAlt: "Atomize Pro logo",
    title: "Atomize Pro",
    projectLink: "URL_TO_ATOMIZE_PRO_PROJECT", // Replace with actual URL
    githubLink: "https://github.com/joshuaisaact/Atomize-refactor/",
    skills: ["TypeScript", "React", "State Management"],
    description:
      "A productivity app with a complete state management overhaul.",
    fullDescription: [
      "<p>Architected and implemented complete state management overhaul, consolidating 30 state variables into 9 using useReducer pattern.</p>",
      "<p>Eliminated 12 useEffect hooks through optimistic updates and presumptive rendering, significantly reducing complexity.</p>",
      "<p>Led TypeScript migration for enhanced type safety across the codebase.</p>",
      "<p>Established comprehensive test suite using Vitest, improving code reliability.</p>",
    ],
  },
  {
    imageSrc: "/media/projects/goss.png", // Adjust the image source as needed
    imageAlt: "Goss logo",
    title: "Goss",
    projectLink: "URL_TO_GOSS_PROJECT", // Replace with actual URL
    githubLink: "https://github.com/joshuaisaact/Goss", // Replace with actual URL
    skills: ["WebSockets", "React", "Supabase"],
    description:
      "A voice-based social media platform with real-time notifications.",
    fullDescription: [
      "<p>Led development of core social features including follow system and real-time notifications using WebSockets.</p>",
      "<p>Implemented state management using Tanstack Query for efficient data caching and optimistic updates.</p>",
      "<p>Owned full-stack development of the follow and notification features, leveraging WebSockets for live updates.</p>",
      "<p>Integrated OpenAI and PlayHT APIs for voice generation and transcription.</p>",
      "<p>Designed and implemented authentication and file upload systems using Supabase.</p>",
      "<p>Developed responsive, accessible UI components optimised across all device formats.</p>",
    ],
    videoSrc: "/media/projects/goss.mp4",
  },
  {
    imageSrc: "/media/projects/portfoliowebsite.png",
    imageAlt: "Portfolio Website",
    title: "Portfolio Website",
    projectLink: "https://joshuaisaact.github.io/Portfolio-Website/",
    githubLink: "https://github.com/joshuaisaact/Portfolio-Website",
    skills: ["Nextjs", "Typescript", "TailwindCSS", "CSS"],
    description:
      "My portfolio website, created using a mixture of technologies, primarily Javascript for the main site, Hugo for the blog, and Express for the back-end.",
    fullDescription: [
      "<p>A portfolio website to host my blog, covering my stream-of-consciousness thoughts and work on personal projects, as well as a way of demonstrating where I am currently at, in terms of front-end development</p>",
      "<p>The general design philosophy was that most portfolio websites are either form or function, but rarely both - I wanted to design something that was quite minimalistic and easy to parse on first visit, but with a ton of themes that really played with form.</p>",
      "<p>The majority of the site is built from scratch using JS, HTML and CSS, with various themes using additional libraries as required, however the blog is built using Hugo, a static site generator that auto-compiles html static sites from markdown files. This is using custom Hugo themes I built.</p>",
      "<p>You can read more about the design philosophy and process of my portfolio site on my blog.</p>",
    ],
    videoSrc: null,
  },
  {
    imageSrc: "/media/projects/bratquiz.png",
    imageAlt: "brat image",
    title: "Brat quiz",
    projectLink: "https://joshuaisaact.github.io/bratQuiz/",
    githubLink: "https://github.com/joshuaisaact/bratQuiz",
    skills: ["React", "Typescript", "CSS3"],
    description:
      "An interactive binary-choice quiz website I made to learn CSS and Javascript, based off Charli XCX's brat album.",
    fullDescription: [
      "<p>A brat-themed quiz created using HTML, CSS, and JavaScript. I wanted to build something that would not only help me sharpen my coding skills but also something my friends would enjoy interacting with.</p>",
      '<p>I started with the basics in Javascript, setting up the structure of the quiz. My focus was on making it user-friendly and straightforward, ensuring that each question was clear and easy to navigate. This provided a solid foundation for the project. Next, I used CSS to bring the quiz to life visually - the style of "brat" is very forgiving, so this didn\'t take me long!</p>',
      '<p>The aim was to make the quiz visually appealing without overwhelming the user — clean, modern, and in line with the "brat" theme.</p>',
      "<p>It served as a practical project to solidify my understanding of HTML, CSS, and JavaScript, while also being a fun and unique way to showcase what I’ve learned.</p>",
    ],
  },
  {
    imageSrc: "/media/projects/TapMap.png",
    imageAlt: "TapMap logo",
    title: "TapMap",
    projectLink: "https://joshuaisaact.github.io/TapMap/",
    githubLink: "https://github.com/joshuaisaact/TapMap",
    skills: ["TailwindCSS", "Javascript", "CSS3", "HTML"],
    description:
      "A simple web application designed to allow users to mark, categorize and track pubs and breweries on a map.",
    fullDescription: [
      "<p>TapMap is a simple web application designed to allow users to mark and track pubs and breweries on a map. </p>",
      "<p>This project was built using Leaflet.js for mapping, Tailwind CSS for styling, and Vitest for testing. The main purpose of this project is to enhance my familiarity with Leaflet for interactive maps, Tailwind for responsive design, and writing basic unit tests using Vitest.</p>",
      "<p>The application is also responsive, with different layouts for mobile and desktop</p>",
    ],
  },
  {
    imageSrc: "/media/projects/streamshuffle.jpg",
    imageAlt: "Stream Shuffle logo",
    title: "Stream Shuffle",
    projectLink: "https://joshuaisaact.github.io/StreamShuffle/",
    githubLink: "https://github.com/joshuaisaact/StreamShuffle",
    skills: ["Express", "Nodejs", "Javascript"],
    description:
      "My first ever full-stack project, serving a random film to stream from UK streaming services using the TMDB API",
    fullDescription: [
      "<p>A static website built to practise using async fetch API within Javascript, and to practise working with an API key to filter and manipulate JSON files.</p>",
      "<p>The website interacts with an express.js server hosted on Render that contains a private API key, that it uses to redirect data to the client.</p>",
      "<p>The TMDB API doesn't let ypu filter by films available on UK streaming services, so data manipulation was required to introduce this new functionality</p>",
    ],
  },
];
