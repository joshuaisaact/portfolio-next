import { Metadata } from "next";
import { AboutMe } from "./components/sections/AboutMe";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { outfit, jakarta } from "@/lib/fonts";
import { Contact } from "./components/sections/Contact";
import { Achievements } from "./components/sections/Achievements";
import { Blog } from "./components/sections/Blog";
import { Suspense } from "react";
import Header from "./components/layout/Header";
import { Section } from "./components/ui/Section";

export const metadata: Metadata = {
  title: "Joshua Tuddenham | Full-Stack Engineer",
  description:
    "Full-stack engineer specializing in modern web technologies. View my latest projects and blog posts.",
  openGraph: {
    title: "Joshua Tuddenham | Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in modern web technologies. View my latest projects and blog posts.",
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
      "Full-stack engineer specializing in modern web technologies. View my latest projects and blog posts.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <div
      className={`${jakarta.className} min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900`}
    >
      {/* Subtle dot pattern overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0_/_0.03)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255_/_0.03)_1px,transparent_0)]" />
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section
          className="relative py-12
            border-t border-gray-200 dark:border-gray-800
            dark:before:absolute dark:before:inset-0 dark:before:bg-gradient-to-b
            dark:before:from-accent-500/[0.03] dark:before:to-transparent dark:before:pointer-events-none"
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

      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Joshua Tuddenham. All rights
              reserved.
            </p>
            <a
              href="/"
              className="cursor-hand text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
