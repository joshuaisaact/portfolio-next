interface PostMetadata {
  title: string;
  date: string;
  featured_image: string;
  excerpt: string;
  tags: string[];
}

export function generateMetadataFromPost(post: PostMetadata) {
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Josh Tuddenham"],
      images: [
        {
          url: post.featured_image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featured_image],
    },
  };
}