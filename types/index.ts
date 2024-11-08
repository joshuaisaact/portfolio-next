import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface Project {
  imageSrc: string;
  imageAlt: string;
  slug: string;
  title: string;
  projectLink: string;
  githubLink: string;
  submissionLink?: string;
  skills: string[];
  description: string;
  fullDescription: string[];
  videoSrc?: string;
}

export interface Achievement {
  imageSrc: string;
  slug: string;
  videoSrc?: string;
  imageAlt: string;
  title: string;
  skills: string[];
  description: string;
  projectLink?: string;
  submissionLink?: string;
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  featured_image: string;
  excerpt: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string; // We'll keep raw content as string for now
}

export interface RenderedBlogPost extends Omit<BlogPost, "content"> {
  content: MDXRemoteSerializeResult;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}
