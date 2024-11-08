import { Metadata } from "next";
import { AboutMe } from "./components/sections/AboutMe";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Contact } from "./components/sections/Contact";
import { Achievements } from "./components/sections/Achievements";
import { Blog } from "./components/sections/Blog";
import { Suspense } from "react";
import Header from "./components/layout/Header";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

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
      id="top"
      className={`${jakarta.className} min-h-[calc(100vh-4rem)] w-full bg-white dark:bg-gray-950`}
    >
      {/* Subtle dot pattern overlay */}
      <div className="fixed inset-0 bg-dot-pattern [background-size:24px_24px] opacity-50 dark:opacity-[0.07]" />

      {/* Subtle gradient overlays */}
      <div className="fixed inset-0 bg-gradient-radial from-green-500/[0.03] to-transparent dark:from-green-500/[0.02]" />

      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section
          className="relative py-12 md:py-16
            border-t border-gray-200 dark:border-gray-800
            dark:before:absolute dark:before:inset-0 dark:before:bg-gradient-to-b
            dark:before:from-accent-500/[0.03] dark:before:to-transparent dark:before:pointer-events-none"
        >
          <AboutMe />
        </section>

        {/* Achievements Section */}
        <section
          id="achievements"
          className="relative py-12 md:py-16
            before:absolute before:inset-0 before:bg-gradient-to-b
            before:from-accent-500/[0.03] before:to-transparent before:pointer-events-none"
        >
          <div className="relative z-10">
            <h2
              className={`${outfit.className} text-3xl font-semibold
              bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent
              sm:text-4xl`}
            >
              Achievements
            </h2>
            <Achievements />
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-12 md:py-16 border-t border-gray-100 dark:border-gray-800"
          aria-label="My technical skills"
        >
          <div className="space-y-6">
            <h2
              className={`${outfit.className} text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl`}
            >
              Skills
            </h2>
            <Skills />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="relative py-12 md:py-16
            before:absolute before:inset-0 before:bg-gradient-to-b
            before:from-accent-500/[0.03] before:to-transparent before:pointer-events-none"
        >
          <div className="relative z-10">
            <h2
              className={`${outfit.className} text-3xl font-semibold
              bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent
              sm:text-4xl`}
            >
              Projects
            </h2>
            <Projects />
          </div>
        </section>

        {/* Blog Section */}
        <section
          id="blog"
          className="py-12 md:py-16 border-t border-gray-100 dark:border-gray-800"
          aria-label="My blog posts"
        >
          <div className="space-y-6">
            <h2
              className={`${outfit.className} text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl`}
            >
              Blog
            </h2>
            <Suspense
              fallback={
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                  <div className="h-48 bg-white dark:bg-gray-800 rounded-lg shadow-sm ring-1 ring-gray-900/5" />
                  <div className="h-48 bg-white dark:bg-gray-800 rounded-lg shadow-sm ring-1 ring-gray-900/5" />
                </div>
              }
            >
              <Blog />
            </Suspense>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-12 md:py-16 border-t border-gray-100 dark:border-gray-800"
          aria-label="Contact form"
        >
          <div className="space-y-6">
            <h2
              className={`${outfit.className} text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl`}
            >
              Get in Touch
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm ring-1 ring-gray-900/5 p-8">
              <Contact />
            </div>
          </div>
        </section>
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
