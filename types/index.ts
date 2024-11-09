import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface Project {
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  videoSrc?: string;
  award?: string;
  skills: string[];
  overview: string;
  features: string[];
  architecture: {
    frontend: string;
    backend: string;
    infrastructure: string;
  };
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
  metadata: {
    title: string;
    date: string;
    featured_image: string;
    excerpt: string;
    tags: string[];
  };
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

export interface NavLink {
  href: string;
  label: string;
  id: string;
}

export interface SocialLink {
  href: string;
  icon: string;
  label: string;
  id: string;
}
