"use client";

import { ArrowLeft } from "lucide-react";

export function BackToProjects() {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      href="/#projects"
      className="group inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer"
      aria-label="Back to projects section"
    >
      <ArrowLeft
        className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-0.5"
        aria-hidden="true"
      />
      <span>Back to Projects</span>
    </a>
  );
}
