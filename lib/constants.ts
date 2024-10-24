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
  "sequelize.svg",
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
    skills: ["TypeScript", "React", "TailwindCSS", "Nodejs"],
    description:
      "A full-stack web app generating personalised trips and activities using the Gemini LLM API.",
      fullDescription: [
        `<p><strong>Description:</strong><br />
        Wooster is a full-stack web application designed to generate personalized travel itineraries and activity recommendations using the Gemini LLM API.
        As the sole developer, I built the app from scratch, focusing on a seamless, responsive experience for both mobile and desktop users.</p>`,

        `<p><strong>Project Highlights:</strong></p>`,

        `<ul>
          <li>Built an intuitive, responsive UI using React, TypeScript, and Tailwind for optimal performance and accessibility.</li>
          <li>Developed a robust backend with Node.js/Express and PostgreSQL (Supabase-hosted), using Drizzle ORM for database management.</li>
          <li>Integrated the Gemini API to generate personalized trip suggestions and utilized Leaflet for interactive maps.</li>
          <li>Implemented comprehensive testing with Supertest and Jest, including Dockerized test databases for CI.</li>
        </ul>`
      ],
    videoSrc: "/media/projects/videos/wooster.webm",
  },
  {
    imageSrc: "/media/projects/goss.png", // Adjust the image source as needed
    imageAlt: "Goss logo",
    title: "Goss",
    projectLink: "URL_TO_GOSS_PROJECT", // Replace with actual URL
    githubLink: "https://github.com/joshuaisaact/Goss", // Replace with actual URL
    skills: ["TypeScript", "React", "Supabase"],
    description:
      "A voice-based social media platform with real-time notifications.",
    fullDescription: [
      `<p><strong>Description:</strong><br />
    Goss is a voice-based social media platform that facilitates real-time interactions and notifications.
    I led the development of key social features, focusing on user engagement and live updates.</p>`,

    `<p><strong>Project Highlights:</strong></p>`,

    `<ul>
      <li>Developed real-time notifications and follow system using WebSockets for instant communication.</li>
      <li>Implemented state management with Tanstack Query for efficient data caching and optimistic updates.</li>
      <li>Integrated OpenAI and PlayHT APIs for voice generation and transcription, improving platform accessibility.</li>
      <li>Designed responsive, accessible UI components optimized for different device formats.</li>
    </ul>`
    ],
    videoSrc: "/media/projects/videos/goss3.webm",
  },
  {
    imageSrc: "/media/projects/atomizepro.png",
    imageAlt: "Atomize Pro logo",
    title: "Atomize Pro",
    projectLink: "URL_TO_ATOMIZE_PRO_PROJECT", // Replace with actual URL
    githubLink: "https://github.com/joshuaisaact/Atomize-refactor/",
    skills: ["TypeScript", "React", "Sequelize"],
    description:
      "A productivity app with a complete state management overhaul.",
    fullDescription: [
      `<p><strong>Description:</strong><br />
      Atomize Pro is a productivity app where I led a comprehensive state management overhaul,
      simplifying the codebase and improving performance.</p>`,

      `<p><strong>Project Highlights:</strong></p>`,

      `<ul>
        <li>Consolidated 30 state variables into 9 using the <code>useReducer</code> pattern, reducing complexity.</li>
        <li>Optimized app performance by eliminating 12 <code>useEffect</code> hooks through optimistic updates and presumptive rendering.</li>
        <li>Migrated the codebase to TypeScript for enhanced type safety, improving code reliability.</li>
        <li>Established a comprehensive test suite using Vitest, significantly boosting test coverage and quality.</li>
      </ul>`
    ],
  },
  {
    imageSrc: "/media/projects/portfoliowebsite.png",
    imageAlt: "Portfolio Website",
    title: "Portfolio Website",
    projectLink: "https://joshuaisaact.github.io/Portfolio-Website/",
    githubLink: "https://github.com/joshuaisaact/Portfolio-Website",
    skills: ["Typescript", "Nextjs", "TailwindCSS", "CSS"],
    description:
      "My portfolio website, created using a mixture of technologies, primarily Javascript for the main site, Hugo for the blog, and Express for the back-end.",
    fullDescription: [
      `<p><strong>Description:</strong><br />
      This portfolio website is a personal project built to showcase my skills and serve as a central hub for my blog and personal projects.
      The design balances form and function, focusing on a clean, minimalistic user experience.</p>`,

      `<p><strong>Project Highlights:</strong></p>`,

      `<ul>
        <li>Designed and developed a fully responsive site using Next.js, TypeScript, and TailwindCSS for fast, modern front-end performance.</li>
        <li>Integrated Hugo as a static site generator for the blog, using custom themes to compile markdown into static HTML.</li>
        <li>Focused on accessibility and design aesthetics, ensuring an intuitive user experience across devices.</li>
      </ul>`
    ],
  },
  {
    imageSrc: "/media/projects/bratquiz.png",
    imageAlt: "brat image",
    title: "Brat quiz",
    projectLink: "https://joshuaisaact.github.io/bratQuiz/",
    githubLink: "https://github.com/joshuaisaact/bratQuiz",
    skills: ["Typescript", "React",  "CSS3"],
    description:
      "An interactive binary-choice quiz website I made to practise React and Typescript, based off Charli XCX's brat album.",
    fullDescription: [
      "<p>A brat-themed quiz written in Typescript using React, HTML, and CSS. I wanted to build something that would not only help me sharpen my coding skills but also something my friends would enjoy interacting with.</p>",
      '<p>I started with the basics in Javascript, setting up the structure of the quiz. My focus was on making it user-friendly and straightforward, ensuring that each question was clear and easy to navigate. This provided a solid foundation for the project. Next, I used CSS to bring the quiz to life visually - the style of "brat" is very forgiving, so this didn\'t take me long!</p>',
      '<p>The aim was to make the quiz visually appealing without overwhelming the user — clean, modern, and in line with the "brat" theme.</p>',
      "<p>It served as a practical project to solidify my understanding of HTML, CSS, and JavaScript, while also being a fun and unique way to showcase what I’ve learned.</p>",
    ],
  },
  // {
  //   imageSrc: "/media/projects/TapMap.png",
  //   imageAlt: "TapMap logo",
  //   title: "TapMap",
  //   projectLink: "https://joshuaisaact.github.io/TapMap/",
  //   githubLink: "https://github.com/joshuaisaact/TapMap",
  //   skills: ["TailwindCSS", "Javascript", "CSS3", "HTML"],
  //   description:
  //     "A simple web application designed to allow users to mark, categorize and track pubs and breweries on a map.",
  //   fullDescription: [
  //     `<p><strong>Description:</strong><br />
  //   TapMap is a simple web app that allows users to mark, categorize, and track their favorite pubs and breweries on an interactive map.
  //   This project enhanced my skills in map-based web applications and responsive design.</p>`,

  //   `<p><strong>Project Highlights:</strong></p>`,

  //   `<ul>
  //     <li>Utilized Leaflet.js to create a dynamic map where users can pin and categorize locations.</li>
  //     <li>Implemented responsive design with TailwindCSS, ensuring the app works seamlessly across mobile and desktop platforms.</li>
  //     <li>Wrote basic unit tests using Vitest to ensure the core functionality of the app was reliable.</li>
  //   </ul>`
  //   ],
  // },
  // {
  //   imageSrc: "/media/projects/streamshuffle.jpg",
  //   imageAlt: "Stream Shuffle logo",
  //   title: "Stream Shuffle",
  //   projectLink: "https://joshuaisaact.github.io/StreamShuffle/",
  //   githubLink: "https://github.com/joshuaisaact/StreamShuffle",
  //   skills: ["Express", "Nodejs", "Javascript"],
  //   description:
  //     "My first ever full-stack project, serving a random film to stream from UK streaming services using the TMDB API",
  //   fullDescription: [
  //     `<p><strong>Description:</strong><br />
  //     Stream Shuffle is a full-stack web app that helps users discover random films available on UK streaming services using the TMDB API.
  //     This project focused on integrating external APIs and manipulating data for specific user needs.</p>`,

  //     `<p><strong>Project Highlights:</strong></p>`,

  //     `<ul>
  //       <li>Developed an async-fetch mechanism to interact with the TMDB API and filter movie recommendations based on availability on UK streaming platforms.</li>
  //       <li>Built the backend with Express.js, managing API security and data manipulation to introduce new filtering functionalities.</li>
  //       <li>This project honed my skills in working with external APIs and building full-stack applications.</li>
  //     </ul>`
  //   ],
  // },
];
