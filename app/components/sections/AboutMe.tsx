import Link from "next/link";
import { ColorCycler } from "../ColourCycler";

export function AboutMe() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center lg:justify-items-end py-8 sm:py-12 md:py-16 lg:py-24 sm:mx-8">
      <div className="order-2 lg:order-1 p-2 sm:p-4 justify-self-center lg:justify-self-end space-y-6">
        <div className="space-y-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-gray-200 leading-normal">
            Hi! 👋 I&apos;m{" "}
            <span className="text-[var(--theme-1)] font-bold">Josh</span>, a{" "}
            <span className="font-semibold">full-stack engineer.</span>
          </h1>
        </div>

        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            I build reliable applications that tackle real business challenges.
            My enterprise SaaS background shapes how I approach solutions, from
            award-winning hackathon projects to AI-powered platforms.
          </p>

          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            I work with React, TypeScript, and Node.js, focusing on testing and
            production reliability. Currently exploring AI applications and
            writing about tech.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="#projects"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white bg-[var(--theme-1)] rounded-md hover:opacity-90 transition-opacity"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white bg-[var(--theme-1)] rounded-md hover:opacity-90 transition-opacity"
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white bg-[var(--theme-1)] rounded-md hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2 flex justify-center">
        <ColorCycler />
      </div>
    </section>
  );
}

export default AboutMe;
