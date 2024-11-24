import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface Project {
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  links: ProjectLink[];
  videoSrc?: string;
  videoPreviewSrc?: string;
  posterImage?: string;
  award?: string;
  skills: string[];
  overview: string;
  features: string[];
  architecture: {
    frontend: string;
    backend: string;
    infrastructure: string;
    testing?: string;
  };
}

export const LinkTypes = {
  github: "github",
  live: "live",
  submission: "submission",
  blog: "blog",
} as const;

export type LinkType = (typeof LinkTypes)[keyof typeof LinkTypes];

export interface ProjectLink {
  type: LinkType;
  url: string;
  label: string;
}

export interface ProjectLinksProps {
  project: Pick<Project, "links">;
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
