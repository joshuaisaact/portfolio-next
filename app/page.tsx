import { Metadata } from "next";
import { AboutMe } from "./components/sections/AboutMe";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Blog } from "./components/sections/Blog";
import { Section } from "./components/ui/Section";

export const metadata: Metadata = {
  metadataBase: new URL("https://joshuatuddenham.com"),
  title: "Joshua Tuddenham | Full-Stack Engineer",
  description:
    "Full-stack engineer specializing in modern web technologies, with expertise in enterprise software and capital markets.",
  openGraph: {
    title: "Joshua Tuddenham | Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in modern web technologies, with expertise in enterprise software and capital markets.",
    url: "https://joshuatuddenham.com",
    siteName: "Joshua Tuddenham",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joshua Tuddenham Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Tuddenham | Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in modern web technologies, with expertise in enterprise software and capital markets.",
    images: ["/og-image.jpg"],
  },
  keywords: [
    "Full-Stack Engineer",
    "Software Developer",
    "React",
    "TypeScript",
    "Node.js",
    "Enterprise Software",
    "Capital Markets Technology",
  ],
};

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white dark:focus:bg-gray-900 focus:text-blue-600"
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-7xl px-2 sm:px-4 lg:px-8"
        role="main"
      >
        {/* Hero Section */}
        <section
          className="relative py-8 sm:py-12 border-t border-gray-200 dark:border-gray-800"
          aria-label="Introduction"
        >
          <AboutMe />
        </section>

        {/* Skills Section */}
        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects">
          <Projects />
        </Section>

        {/* Blog Section */}
        <Section id="blog" title="Blog">
          <Blog />
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>
    </>
  );
}
