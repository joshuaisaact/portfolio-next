"use client";

import { BlogCard } from "../ui/cards/BlogCard";
import { posts } from "@/app/blog/posts";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { PaginationLink } from "../ui/PaginationLink";

const POSTS_PER_PAGE = 6;

export function Blog() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const filteredPosts = posts;
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <section id="blog" aria-label="Blog" className="space-y-6 sm:space-y-8">
      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Deep dives into technical challenges I&apos;ve tackled, from teaching an
        AI dog new tricks to wrestling with WebSockets. These posts explore the
        reality of software development - accidental rabbit holes and
        JSON-induced existential crisis.
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        role="list"
        aria-label="Article list"
      >
        {paginatedPosts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            role="listitem"
            metadata={post.metadata}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          className="flex justify-center gap-2 mt-8"
          aria-label="Blog posts pagination"
        >
          <PaginationLink
            href={createPageURL(Math.max(currentPage - 1, 1))}
            isDisabled={currentPage === 1}
            ariaLabel="Previous page"
          >
            Previous
          </PaginationLink>

          <span className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>

          <PaginationLink
            href={createPageURL(Math.min(currentPage + 1, totalPages))}
            isDisabled={currentPage === totalPages}
            ariaLabel="Next page"
          >
            Next
          </PaginationLink>
        </nav>
      )}

      <div className="text-center mt-8">
        <Link
          href="/blog"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          View All Posts
        </Link>
      </div>
    </section>
  );
}
