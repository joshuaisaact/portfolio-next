import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { BlogPost, BlogFrontmatter } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(BLOG_DIR);

  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(".mdx", "");
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const { frontmatter } = await compileMDX<BlogFrontmatter>({
        source: fileContent,
        options: { parseFrontmatter: true },
      });

      return {
        slug,
        frontmatter,
        content: fileContent,
      };
    }),
  );

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
}
