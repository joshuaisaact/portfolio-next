import Link from "next/link";
import Image from "next/image";
import { posts } from "./posts";
import { Section } from "../components/ui/Section";

export default function BlogPage() {
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

      <main id="main-content" className="relative mx-auto max-w-4xl px-6">
        <Section id="blog" title="Blog">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Deep dives into technical challenges I&apos;ve tackled, from
            teaching an AI dog new tricks to wrestling with WebSockets. These
            posts explore the reality of software development - accidental
            rabbit holes and JSON-induced existential crisis.
          </p>
          <div
            className="grid gap-8 md:grid-cols-2"
            role="feed"
            aria-label="Blog posts"
          >
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative"
                aria-labelledby={`article-${post.slug}`}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative block overflow-hidden rounded-lg bg-white/50 transition-all hover:-translate-y-1 dark:bg-gray-900/50"
                >
                  <div
                    className="absolute inset-0 rounded-lg border border-gray-200 dark:border-gray-800"
                    aria-hidden="true"
                  />
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={post.metadata.featured_image}
                      alt="" // Decorative image, title is in heading
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 dark:to-black/10"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="relative space-y-3 p-6">
                    <div
                      className="flex items-center justify-between"
                      aria-label={`Published on ${new Date(post.metadata.date).toLocaleDateString()}`}
                    >
                      <time
                        dateTime={post.metadata.date}
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        {new Date(post.metadata.date).toLocaleDateString()}
                      </time>
                      <div
                        className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent mx-4 dark:from-gray-800"
                        aria-hidden="true"
                      />
                    </div>
                    <h2
                      id={`article-${post.slug}`}
                      className="text-xl font-semibold text-gray-900 dark:text-white"
                    >
                      {post.metadata.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-2 dark:text-gray-300">
                      {post.metadata.excerpt}
                    </p>
                    <div
                      className="flex flex-wrap gap-2 pt-2"
                      aria-label="Tags"
                    >
                      {post.metadata.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Section>
      </main>

      <footer
        className="mt-16 border-t border-gray-200/50 dark:border-gray-800/50"
        role="contentinfo"
      >
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Joshua Tuddenham. All rights
              reserved.
            </p>
            <Link
              href="/"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Return to homepage"
            >
              Back to home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
