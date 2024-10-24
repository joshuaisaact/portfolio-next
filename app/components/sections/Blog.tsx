"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface BlogPost {
  title: string;
  content_text: string;
  featured_image: string;
  url: string;
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const res = await fetch(
          "https://joshuaisaact.github.io/Portfolio-Website/blog/index.json",
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setPosts(data.items);
      } catch (e) {
        console.error("Error fetching blog posts:", e);
      }
    }

    fetchBlogPosts();
  }, []);

  return (
    <section className="py-20 pb-section" id="blog">
      <h2 className="text-center p-4 underline decoration-[var(--theme-1)] decoration-2 underline-offset-2 text-3xl">
        Blog
      </h2>

      <div className="blog-grid grid grid-cols-1 lg:grid-cols-2 gap-20 mx-auto w-4/5 mt-6">
        {posts.map((post, index) => (
          <div key={index} className="blog-card flex flex-col">
            <Image
              src={post.featured_image}
              alt={post.title}
              width={380}
              height={195}
              className="blog-image rounded-lg object-cover"
            />
            <h1 className="blog-title text-xl font-medium mt-4">
              {post.title}
            </h1>
            <p className="blog-card-overview my-4">{post.content_text}</p>
            <a href={post.url} className="btn self-start">
              read
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
