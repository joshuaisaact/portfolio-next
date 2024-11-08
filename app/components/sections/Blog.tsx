import { BlogCard } from "../ui/cards/BlogCard";
import { posts } from "@/app/blog/posts";

export async function Blog() {
  return (
    <>
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
    </>
  );
}
