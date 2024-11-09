import { BlogPost } from "@/types";

export function filterPosts(
  posts: BlogPost[],
  currentTag: string | undefined,
  sortOrder: "newest" | "oldest",
) {
  let filteredPosts = [...posts];

  if (currentTag) {
    filteredPosts = filteredPosts.filter((post) =>
      post.metadata.tags.includes(currentTag),
    );
  }

  filteredPosts.sort((a, b) => {
    const dateA = new Date(a.metadata.date);
    const dateB = new Date(b.metadata.date);
    return sortOrder === "oldest"
      ? dateA.getTime() - dateB.getTime()
      : dateB.getTime() - dateA.getTime();
  });

  return filteredPosts;
}
