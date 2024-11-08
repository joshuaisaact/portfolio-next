import { Metadata } from "next";
import { AboutMe } from "./components/sections/AboutMe";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { jakarta } from "@/lib/fonts";
import { Contact } from "./components/sections/Contact";
import { Blog } from "./components/sections/Blog";

import { Section } from "./components/ui/Section";
import Link from "next/link";

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
    <div
      className={`${jakarta.className} min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white dark:focus:bg-gray-900 focus:text-blue-600"
      >
        Skip to main content
      </a>
      {/* Subtle dot pattern overlay */}
      <div
        className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0_/_0.03)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255_/_0.03)_1px,transparent_0)]"
        aria-hidden="true"
      />
      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        role="main"
      >
        {/* Hero Section */}
        <section
          className="relative py-12 border-t border-gray-200 dark:border-gray-800
            dark:before:absolute dark:before:inset-0 dark:before:bg-gradient-to-b
            dark:before:from-accent-500/[0.03] dark:before:to-transparent dark:before:pointer-events-none"
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

      <footer
        className="border-t border-gray-200 dark:border-gray-800 mt-16"
        role="contentinfo"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Joshua Tuddenham. All rights
              reserved.
            </p>
            <Link
              href="#main-content"
              className="cursor-hand text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              aria-label="Return to top of page"
            >
              Back to top
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
