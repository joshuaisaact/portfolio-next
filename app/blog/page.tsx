
import { posts } from "./posts";
import { Section } from "../components/ui/Section";
import { FilteredBlogList } from "../components/ui/FilteredBlogPostList";
import { Metadata } from "next";
import { generateBlogMetadata } from "@/lib/metadata-blog";

export const generateMetadata = (): Metadata => {
  return generateBlogMetadata(posts);
};

export default function BlogPage() {
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.metadata.tags)),
  ).sort();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white dark:focus:bg-gray-900 focus:text-blue-600"
      >
        Skip to main content
      </a>

      {/* Decorative background */}
      <div
        className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0_/_0.03)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255_/_0.03)_1px,transparent_0)]"
        aria-hidden="true"
      />

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-7xl px-2 sm:px-4 lg:px-8"
      >
        <Section id="blog" title="Blog">
          <p className="text-lg text-gray-700 dark:text-gray-300 py-10">
            Deep dives into technical challenges I&apos;ve tackled, from
            teaching an AI dog new tricks to wrestling with WebSockets. These
            posts explore the reality of software development - accidental
            rabbit holes and JSON-induced existential crisis.
          </p>

          <FilteredBlogList posts={posts} allTags={allTags} />
        </Section>
      </main>
    </div>
  );
}
