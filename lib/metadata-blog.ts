import { Metadata } from "next";

export interface PostMetadata {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  featured_image: string;
}

export interface BlogPost {
  slug: string;
  metadata: PostMetadata;
}

export const siteInfo = {
  title: "Josh Tuddenham | Full-Stack Engineer",
  name: "Josh Tuddenham",
  description:
    "Full-stack engineer specializing in modern web technologies, with expertise in enterprise software and capital markets.",
  url: "https://joshtuddenham.tech",
  image: "/og-image.jpg",
} as const;

const blogInfo = {
  title: "Blog | Josh Tuddenham",
  description:
    "Technical deep dives into software development challenges, AI experimentation, and web technology insights.",
  url: `${siteInfo.url}/blog`,
} as const;

export const generateBlogMetadata = (posts: BlogPost[]): Metadata => {
  const postKeywords = Array.from(
    new Set(posts.flatMap((post) => post.metadata.tags)),
  );

  const allKeywords = Array.from(
    new Set([
      ...postKeywords,
      "Technical Blog",
      "Software Engineering",
      "Web Development",
      "Programming Insights",
      "Tech Articles",
      "Software Development Blog",
      "Coding Tutorials",
      "Tech Deep Dives",
    ]),
  );

  return {
    title: blogInfo.title,
    description: blogInfo.description,
    metadataBase: new URL(siteInfo.url),
    applicationName: siteInfo.name,
    authors: [{ name: "Josh Tuddenham" }],
    keywords: allKeywords,
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
    },
    openGraph: {
      title: blogInfo.title,
      description: blogInfo.description,
      url: blogInfo.url,
      siteName: siteInfo.name,
      images: [
        {
          url: siteInfo.image,
          width: 1200,
          height: 630,
          alt: "Josh Tuddenham Blog",
        },
      ],
      locale: "en_GB",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blogInfo.title,
      description: blogInfo.description,
      images: [siteInfo.image],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "blog",
  };
};

export const generatePostMetadata = (post: BlogPost): Metadata => {
  return {
    title: `${post.metadata.title} | Josh Tuddenham`,
    description: post.metadata.excerpt,
    metadataBase: new URL(siteInfo.url),
    applicationName: siteInfo.name,
    authors: [{ name: "Josh Tuddenham" }],
    keywords: post.metadata.tags,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.excerpt,
      url: `${siteInfo.url}/blog/${post.slug}`,
      siteName: siteInfo.name,
      images: [
        {
          url: post.metadata.featured_image,
          width: 1200,
          height: 630,
          alt: post.metadata.title,
        },
      ],
      type: "article",
      publishedTime: new Date(post.metadata.date).toISOString(),
      authors: ["Josh Tuddenham"],
      tags: post.metadata.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.excerpt,
      images: [post.metadata.featured_image],
    },
  };
};