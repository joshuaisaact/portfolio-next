import { BlogCard } from "../ui/cards/BlogCard";
import { posts } from "@/app/blog/posts";

export async function Blog() {
  return (
    <section aria-label="Blog" className="space-y-6 sm:space-y-8">
      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Deep dives into technical challenges I&apos;ve tackled, from teaching an
        AI dog new tricks to wrestling with WebSockets. These posts explore the
        reality of software development - accidental rabbit holes and
        JSON-induced existential crisis.
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0"
        role="list"
        aria-label="Article list"
      >
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            role="listitem"
            title={post.metadata.title}
            image={post.metadata.featured_image}
            excerpt={post.metadata.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
