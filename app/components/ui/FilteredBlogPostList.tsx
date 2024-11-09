"use client";

import { useState } from "react";
import { BlogCard } from "../ui/cards/BlogCard";
import { BlogFilters } from "./BlogFilters";
import { filterPosts } from "../utils/filterPosts";
import { BlogPost } from "@/types";

interface FilteredBlogListProps {
  posts: BlogPost[];
  allTags: string[];
}

export function FilteredBlogList({ posts, allTags }: FilteredBlogListProps) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleFiltersChange = (
    tag: string | undefined,
    sort: "newest" | "oldest",
  ) => {
    setFilteredPosts(filterPosts(posts, tag, sort));
  };

  return (
    <>
      <BlogFilters allTags={allTags} onFiltersChange={handleFiltersChange} />

      <div
        className="grid gap-8 md:grid-cols-2"
        role="list"
        aria-label="Blog posts"
      >
        {filteredPosts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            metadata={post.metadata}
            role="listitem"
          />
        ))}
      </div>
    </>
  );
}
