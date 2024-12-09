import { Project } from "@/types"; // Import your types

export const PROJECTS: Project[] = [
  {
    title: "Wooster",
    slug: "wooster",
    description:
      "Full-stack AI travel planner built with React/TypeScript and Node.js. Features custom itinerary generation, production-grade auth, and automated CI/CD. Live at trywooster.live",
    imageSrc: "/media/projects/wooster-poster.png",
    imageAlt: "Wooster logo",
    links: [
      {
        type: "github",
        url: "https://github.com/joshuaisaact/Wooster",
        label: "Front-End GitHub",
      },
      {
        type: "github",
        url: "https://github.com/joshuaisaact/wooster-server",
        label: "Back-End GitHub",
      },
      {
        type: "live",
        url: "https://trywooster.live",
        label: "Deployed Site",
      },
      {
        type: "blog",
        url: "https://joshtuddenham.tech/blog/wooster-series",
        label: "Technical blog",
      },
    ],
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
    overview: `Wooster is a sophisticated AI travel planning platform built with reliability and scalability at its core.
It combines LLM technology with robust distributed architecture, comprehensive monitoring, and thorough testing infrastructure to deliver personalized travel experiences.`,
    features: [
      "AI-powered itinerary generation with type-safe prompt system",
      "Token-based rate limiting with configurable time windows",
      "Structured logging system with request correlation",
      "Comprehensive error handling with sanitized production traces",
      "Dockerized test environment with transaction rollbacks",
      "Service layer abstraction with dependency injection",
      "Custom middleware chain for auth and validation",
    ],
    architecture: {
      frontend: `Built type-safe React application with TanStack Query for state management.
        Implemented accessible component system with ARIA compliance.
    Developed error boundaries with fallback UI for graceful degradation.
    Created modular prompt engineering interface with validation schemas.`,

      backend: `Designed service layer abstraction with dependency injection patterns.
    Implemented PostgreSQL database with versioned migrations and rollback support.
    Built custom middleware chain for auth, request validation, and response caching.
    Developed regex-based JSON sanitization for malformed LLM responses.
        Created token-based rate limiting with configurable time windows.`,

      testing: `Implemented dockerized PostgreSQL environment with transaction rollbacks.
        Built mock LLM client with typed responses and configurable failure scenarios.
        Designed retry mechanism for flaky integration tests with custom matchers.
        Created reusable test fixtures with factory patterns for complex data scenarios.`,

      infrastructure: `Deployed distributed system on DigitalOcean with GitHub Actions.
        Implemented structured logging with request correlation and context propagation.
        Built custom error hierarchy with environment-aware error responses.
        Created fallback mechanisms for AI service degradation.
        Set up Nginx reverse proxy with SSL/HTTPS and response caching.`,
    },
    videoSrc: "/media/projects/videos/wooster.webm",
    videoPreviewSrc: "/media/projects/videos/wooster-preview.webm",
    posterImage: "/media/projects/wooster-poster.png",
  },
  {
    title: "Foundations",
    slug: "foundations",
    description:
      "Led frontend development of a diversity data transparency platform, transforming raw pay gap data into actionable insights. Built and deployed in 24 hours, winning Best in Category at JumpStart Hackathon.",
    imageSrc: "/media/achievements/foundations-win.jpg",
    imageAlt: "Foundations Platform Preview",
    skills: ["Nextjs", "React", "TypeScript", "TailwindCSS"],
    links: [
      {
        type: "github",
        url: "https://github.com/joshuaisaact/dei-dashboard",
        label: "View Code",
      },
      {
        type: "live",
        url: "https://foundations-app.vercel.app/",
        label: "Visit Live Site",
      },
      {
        type: "submission",
        url: "https://www.hackathonparty.com/hackathons/6/projects/98",
        label: "Hackathon Submission",
      },
    ],
    award: "Best in Category - JumpStart Hackathon",
    overview: `At JumpStart Hackathon, our team tackled a crucial challenge: making workplace diversity data more
      transparent and actionable. In just 24 hours, we built Foundations, a platform that transforms complex
      gender pay gap statistics into clear insights. Leading the frontend development, I worked with a team of four
      to turn this idea into reality, ultimately winning Best in Category against 20+ competing teams.

      The platform analyzes data from over 11,000 UK companies, making it easy for stakeholders to understand
      and act on diversity metrics that are often buried in complex reports.`,
    features: [
      "Interactive dashboard visualizing gender pay gap data for 11,000+ UK companies",
      "Real-time data filtering and comparison tools",
      "Company profile pages with detailed metrics and trends",
      "Responsive design optimized for both desktop and mobile",
      "Demo company profiles showcasing full platform capabilities",
      "Data visualization pipeline for complex statistical analysis",
    ],
    architecture: {
      frontend: `Built with Next.js and TypeScript for type safety and improved developer experience. Implemented responsive UI using Tailwind CSS and shadcn/ui components.
      React Query for efficient data fetching and caching.
        Implemented custom hooks for shared business logic.`,

      backend: `Serverless architecture using Next.js API routes.
        Implemented data transformation pipeline to process and normalize raw pay gap statistics.
        Built type-safe API endpoints with proper error handling and validation.`,

      infrastructure: `Deployed on Vercel with automated CI/CD pipeline.
        Implemented comprehensive error monitoring and logging.
        Set up automatic preview deployments for pull requests.
        Optimized for handling large datasets with 11,000+ companies.`,
    },
    videoSrc: "/media/projects/videos/foundations.webm",
    videoPreviewSrc: "/media/projects/videos/foundations.webm",
  },
  {
    title: "Goss",
    slug: "goss",
    description:
      "Architected a robust real-time social platform featuring WebSocket notifications, social graph management, and file handling. Built with Next.js, TypeScript, and Supabase.",
    imageSrc: "/media/projects/goss-poster.png",
    imageAlt: "Goss logo",
    links: [
      {
        type: "github",
        url: "https://github.com/joshuaisaact/Goss",
        label: "View Code",
      },
    ],
    skills: [
      "Nextjs",
      "TypeScript",
      "Supabase",
      "TanStack-Query",
      "TailwindCSS",
    ],
    overview: `I took on the technical challenge of building a voice-first social platform that
required real-time capabilities and complex data relationships. I led the development of key infrastructure
components, focusing on creating a scalable backend while ensuring a smooth user experience.

      The project showcases my ability to architect complex systems, from implementing real-time WebSocket
      notifications to designing efficient database schemas for social relationships. Working within a team
      environment, I delivered enterprise-grade features that formed the backbone of the platform.`,
    features: [
      "Real-time notification system using WebSockets and Supabase Realtime for instant updates",
      "Custom social graph implementation with bidirectional friend connections in PostgreSQL",
      "RESTful API layer with optimistic updates for responsive friend operations",
      "Secure file upload system integrated with Supabase storage",
      "Robust authentication flow with multiple providers",
      "WebSocket connection management with automatic reconnection handling",
    ],
    architecture: {
      frontend: `Integrated the backend services with the team's Next.js/React frontend.
      Implemented Tanstack Query for efficient state management and optimistic updates, significantly improving perceived performance.
        Built reusable hooks for WebSocket management and real-time data synchronization.`,

      backend: `Architected and implemented a real-time notification system using WebSockets and Supabase
        Realtime, ensuring reliable message delivery across multiple client sessions.
        Designed an efficient social graph schema in PostgreSQL, optimizing friend relationship queries and management.
        Built RESTful APIs with comprehensive validation and error handling.`,

      infrastructure: `Implemented a secure authentication flow using Supabase, supporting multiple providers and session management.
      Built a scalable file upload system with proper access controls and storage optimization.
  Set up WebSocket infrastructure with connection pooling and automatic recovery.`,
    },
    videoSrc: "/media/projects/videos/goss3.webm",
    videoPreviewSrc: "/media/projects/videos/goss-preview.webm",
    posterImage: "/media/projects/goss-poster.png",
  },
  {
    title: "Atomize Pro",
    slug: "atomize-pro",
    description:
      "Led complete state management redesign of a productivity app, reducing complexity by 70% while improving performance through optimistic updates.",
    imageSrc: "/media/projects/atomic-icon.svg",
    imageAlt: "Atomize Pro logo",
    links: [
      {
        type: "github",
        url: "https://github.com/joshuaisaact/Atomize-refactor",
        label: "View Code",
      },
      {
        type: "blog",
        url: "https://joshtuddenham.tech/blog/atomize-pro",
        label: "Technical blog",
      },
    ],
    skills: [
      "TypeScript",
      "React",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Vitest",
      "TailwindCSS",
    ],
    overview: `At Codeworks, I took on the challenge of refactoring Atomize Pro's state management system.
      The app was functional but complex, with state scattered across numerous variables and effects.
      I saw an opportunity to significantly improve both the codebase and user experience through modern
      React patterns and TypeScript.

      Through careful architecture and implementation, I reduced state complexity by 70% while making the
      app feel more responsive through optimistic updates. This project showcases my ability to improve
      existing codebases and implement modern React best practices.`,
    features: [
      "Consolidated state management using useReducer pattern, reducing variables from 30 to 9",
      "Implemented optimistic updates, eliminating 12 useEffect hooks",
      "Full TypeScript migration for improved type safety",
      "Comprehensive test suite with Vitest",
      "Improved error handling and recovery flows",
      "Enhanced performance through presumptive rendering",
    ],
    architecture: {
      frontend: `Redesigned state architecture using useReducer pattern for predictable state updates.
        Implemented optimistic updates to improve perceived performance, replacing effect-based state updates with presumptive rendering. Led TypeScript migration, establishing proper type definitions and interfaces across the application.`,

      backend: `Optimized API endpoints to support optimistic updates, ensuring data consistency with proper error handling and rollback mechanisms.
        Added TypeScript support to API layer for end-to-end type safety.`,

      infrastructure: `Established comprehensive testing infrastructure using Vitest, focusing on state management and critical user flows. Implemented continuous integration to ensure code quality and prevent regressions.`,
    },
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "A modern, accessible portfolio built with Next.js 14, featuring responsive design and smooth animations.",
    imageSrc: "/media/projects/portfoliowebsite.png",
    imageAlt: "Portfolio Website",
    links: [
      {
        type: "github",
        url: "https://github.com/joshuaisaact/portfolio-next",
        label: "View Code",
      },
      {
        type: "live",
        url: "https://www.joshtuddenham.tech/",
        label: "Visit Site",
      },
    ],
    skills: ["Typescript", "Nextjs", "TailwindCSS", "CSS3", "HTML5"],
    overview: `You're looking at it! I wanted my portfolio to be more than just a showcase - it needed to
      demonstrate my commitment to clean code, performance, and thoughtful user experience. Built with Next.js 14
      and TypeScript, this site combines modern web practices with careful attention to accessibility and performance.

      While it might be a simpler project than some others in my portfolio, it represents my approach to
      development: clean, efficient, and focused on the user experience.`,
    features: [
      "Server-side rendering with Next.js 14 for optimal performance",
      "Responsive design with fluid typography and layouts",
      "Carefully crafted animations using CSS transitions",
      "Dark mode with system preference detection",
      "Accessibility features including proper ARIA labels and keyboard navigation",
      "SEO optimization with Next.js metadata API",
    ],
    architecture: {
      frontend: `Built with Next.js 14's App Router for optimal static generation.
        Implemented WCAG-compliant accessible design patterns.
         Created reusable components with TypeScript for type safety.`,

      backend: `Leveraged Next.js API routes for static generation.
      Implemented efficient asset optimization and delivery.`,

      infrastructure: `Deployed on Vercel with automatic previews for all changes.
      Set up proper meta tags and SEO optimization for all pages.`,
    },
  },
  {
    title: "Brat Quiz",
    slug: "brat-quiz",
    description:
      "A playful React quiz app inspired by Charli XCX's aesthetic, built to explore TypeScript and testing practices.",
    imageSrc: "/media/projects/bratquiz.png",
    imageAlt: "brat image",
    links: [
      {
        type: "github",
        url: "https://github.com/joshuaisaact/bratQuiz",
        label: "View Code",
      },
      {
        type: "live",
        url: "https://joshuaisaact.github.io/brat-quiz/",
        label: "Take the Quiz",
      },
    ],
    skills: ["Typescript", "React", "CSS3", "HTML5"],
    overview: `Not every project needs to change the world! Built as a fun way to explore React and TypeScript,
      this personality quiz is inspired by Charli XCX's 'BRAT' aesthetic. What started as a learning exercise
      turned into an entertaining way to practice TypeScript, state management, and testing in React.

      It's a reminder that learning new technologies can (and should!) be fun.`,
    features: [
      "Interactive quiz flow with binary choice mechanism",
      "Custom animations and transitions for question changes",
      "Result calculation and sharing functionality",
      "Responsive design for mobile and desktop",
      "TypeScript implementation for type safety",
      "Local storage for saving progress",
    ],
    architecture: {
      frontend: `Built with React and TypeScript, focusing on clean component architecture.
        Implemented custom hooks for quiz state management.
        Created reusable animation components for consistent transitions.`,

      backend: `Static deployment with quiz data stored in TypeScript interfaces.
      Implemented local storage integration for progress saving.`,

      infrastructure: `Deployed on GitHub Pages with automatic deployments.
      Set up development environment with proper TypeScript configurations.`,
    },
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
