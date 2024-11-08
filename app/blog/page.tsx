import Link from "next/link";
import Image from "next/image";
import { posts } from "./posts";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

interface Post {
  slug: string;
  metadata: {
    title: string;
    date: string;
    featured_image: string;
    excerpt: string;
    tags: string[];
  };
}

export default function BlogPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full bg-white dark:bg-gray-950">
      {/* Subtle dot pattern overlay */}
      <div className="fixed inset-0 bg-dot-pattern [background-size:24px_24px] opacity-50 dark:opacity-[0.07]" />

      {/* Subtle gradient overlays */}
      <div className="fixed inset-0 bg-gradient-radial from-green-500/[0.03] to-transparent dark:from-green-500/[0.02]" />

      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section
          className="py-12 md:py-16 border-t border-gray-100 dark:border-gray-800"
          aria-label="My blog posts"
        >
          <div className="space-y-6">
            <h2
              className={`${outfit.className} text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl`}
            >
              Blog
            </h2>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {posts.map((post) => (
                <article key={post.slug} className="group relative">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block bg-white dark:bg-gray-800 rounded-lg shadow-sm ring-1 ring-gray-900/5 overflow-hidden hover:-translate-y-1 transition-all"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={post.metadata.featured_image}
                        alt={post.metadata.title}
                        width={800}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {post.metadata.title}
                      </h2>
                      <time className="text-sm text-gray-500 dark:text-gray-400 mb-4 block">
                        {new Date(post.metadata.date).toLocaleDateString()}
                      </time>
                      <p className="text-gray-600 dark:text-gray-300">
                        {post.metadata.excerpt}
                      </p>
                      <div className="flex gap-2 mt-4">
                        {post.metadata.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
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
            <Link
              href="/"
              className="cursor-hand text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
