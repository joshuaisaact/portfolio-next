import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t border-gray-200 dark:border-gray-800 mt-12 sm:mt-16"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Joshua Tuddenham. All rights reserved.
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
  );
}
