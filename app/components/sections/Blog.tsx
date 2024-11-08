import { BlogCard } from "../ui/cards/BlogCard";
import { posts } from "@/app/blog/posts";

export async function Blog() {
  return (
    <div className="space-y-8">
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Deep dives into technical challenges I've tackled, from teaching an AI
        dog new tricks to wrestling with WebSockets. These posts explore the
        reality of software development - accidental rabbit holes and
        JSON-induced existential crisis.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.metadata.title}
            image={post.metadata.featured_image}
            excerpt={post.metadata.excerpt}
          />
        ))}
      </div>
    </div>
  );
}
