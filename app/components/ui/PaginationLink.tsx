"use client";

import Link from "next/link";

type PaginationLinkProps = {
  href: string;
  isDisabled: boolean;
  ariaLabel: string;
  children: React.ReactNode;
};

export const PaginationLink = ({
  href,
  isDisabled,
  ariaLabel,
  children,
}: PaginationLinkProps) => (
  <Link
    href={href}
    scroll={false}
    className={`px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 ${
      isDisabled ? "pointer-events-none opacity-50" : ""
    }`}
    aria-label={ariaLabel}
    onClick={() => {
      document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    {children}
  </Link>
);
