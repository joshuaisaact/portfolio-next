export const PROJECTS = [
  {
    imageSrc: "/media/projects/wooster.png", // Adjust the image source as needed
    imageAlt: "Wooster logo",
    title: "Wooster",
    projectLink: "https://github.com/joshuaisaact/Wooster", // Replace with actual URL
    githubLink: "https://github.com/joshuaisaact/Wooster", // Replace with actual URL
    skills: [
      "React",
      "Express",
      "TypeScript",
      "TailwindCSS",
      "Nodejs",
      "PostgreSQL",
      "Supabase",
      "Drizzle",
      "Vitest",
      "Jest",
    ],
    description:
      "An AI-powered travel companion that creates personalized trip itineraries using Google's Gemini API.",
    fullDescription: [
      `I built Wooster to solve a problem I kept running into - spending hours planning trips instead of enjoying them.
       Using Google's Gemini API, it creates personalized travel plans that actually make sense, taking into account your
       interests, budget, and time constraints.`,

      `<p><strong>Project Highlights:</strong></p>`,

      `<ul>
          <li>Created a snappy, intuitive UI with React and TypeScript that works great on both phones and desktops</li>
          <li>Built a robust backend using Node.js and PostgreSQL, with Supabase handling the heavy lifting for auth and storage</li>
          <li>Integrated Gemini API to generate smart, contextual travel suggestions and used Leaflet for interactive maps</li>
          <li>Set up a proper testing pipeline with Jest and Docker, because nobody likes unexpected surprises in production!</li>
        </ul>`,
    ],
    videoSrc: "/media/projects/videos/wooster.webm",
  },
  {
    imageSrc: "/media/projects/goss.png", // Adjust the image source as needed
    imageAlt: "Goss logo",
    title: "Goss",
    projectLink: "https://github.com/joshuaisaact/Goss", // Replace with actual URL
    githubLink: "https://github.com/joshuaisaact/Goss", // Replace with actual URL
    skills: [
      "Nextjs",
      "TypeScript",
      "Supabase",
      "TanStack-Query",
      "TailwindCSS",
    ],
    description:
      "A voice-first social platform that brings the joy of real conversation back to social media.",
    fullDescription: [
      `Goss started with a simple idea: what if social media felt more like actually talking to friends?
       I built a platform where voice is the star, making social interactions feel more natural and engaging.`,

      `<p><strong>Project Highlights:</strong></p>`,

      `<ul>
        <li>Built a real-time notification system using WebSockets that actually works (and won't drain your battery!)</li>
        <li>Used TanStack Query for state management - making the app feel lightning-fast with optimistic updates</li>
        <li>Integrated OpenAI and PlayHT to handle voice generation and transcription, making the platform accessible to everyone</li>
        <li>Designed the UI to be intuitive across all devices - because social media should work wherever you are</li>
      </ul>`,
    ],
    videoSrc: "/media/projects/videos/goss3.webm",
  },
  {
    imageSrc: "/media/projects/atomic-icon.svg",
    imageAlt: "Atomize Pro logo",
    title: "Atomize Pro",
    projectLink: "https://github.com/joshuaisaact/Atomize-refactor", // Replace with actual URL
    githubLink: "https://github.com/joshuaisaact/Atomize-refactor/",
    skills: [
      "TypeScript",
      "React",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Vitest",
      "TailwindCSS",
    ],
    description:
      "A productivity app that got a complete makeover in performance and user experience.",
    fullDescription: [
      `When I joined the Atomize Pro team, I saw an opportunity to make something good even better.
       I led a complete overhaul of the app's state management, making it faster and more reliable without sacrificing features.`,

      `<p><strong>Project Highlights:</strong></p>`,

      `<ul>
        <li>Streamlined state management by consolidating 30 state variables into 9 using useReducer - less code, fewer bugs!</li>
        <li>Boosted performance by replacing 12 useEffect hooks with optimistic updates - making the app feel instant</li>
        <li>Added TypeScript support throughout the codebase because catching bugs early is better than debugging late</li>
        <li>Built a comprehensive test suite that actually helps catch issues before they reach users</li>
      </ul>`,
    ],
  },
  {
    imageSrc: "/media/projects/portfoliowebsite.png",
    imageAlt: "Portfolio Website",
    title: "Portfolio Website",
    projectLink: "https://www.joshtuddenham.tech/",
    githubLink: "https://github.com/joshuaisaact/portfolio-next",
    skills: ["Typescript", "Nextjs", "TailwindCSS", "CSS3", "HTML5"],
    description:
      "You're looking at it! A clean, modern portfolio built with Next.js and TypeScript.",
    fullDescription: [
      `I wanted my portfolio to reflect my approach to development - clean, efficient, and enjoyable to use.
       Built with Next.js and TypeScript, it focuses on performance while maintaining a seamless user experience.`,

      `<p><strong>Project Highlights:</strong></p>`,

      `<ul>
        <li>Leveraged Next.js and TypeScript for a fast, modern site that's easy to maintain and extend</li>
        <li>Implemented responsive design principles to ensure a great experience on any device</li>
        <li>Added smooth animations and transitions to make browsing projects more engaging</li>
        <li>Focused on accessibility because great websites should work for everyone</li>
      </ul>`,
    ],
  },
  {
    imageSrc: "/media/projects/bratquiz.png",
    imageAlt: "brat image",
    title: "Brat quiz",
    projectLink: "https://github.com/joshuaisaact/brat-quiz",
    githubLink: "https://github.com/joshuaisaact/bratQuiz",
    skills: ["Typescript", "React", "CSS3", "HTML5"],
    description:
      "A binary-choice quiz where you decide if things are 'brat' or 'not brat', inspired by Charli XCX's aesthetic.",
    fullDescription: [
      `Not every project needs to change the world! I built this personality quiz based on Charli XCX's 'BRAT' album
         as a way to learn React while creating something my friends would actually want to use. It turned into a great
         playground for trying out TypeScript and testing practices.`,

      `<p><strong>Project Highlights:</strong></p>`,

      `<ul>
           <li>Built an interactive quiz flow in React where every answer poses the eternal question: brat or not brat?</li>
      <li>Added TypeScript support because even silly projects deserve type safety</li>
        </ul>`,
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
