import Link from "next/link";
import { Card, CardImage, CardContent } from "./Card";

interface BlogCardProps {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
}

export function BlogCard({ slug, title, image, excerpt }: BlogCardProps) {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardContent>
        <Link
          href={`/blog/${slug}`}
          className="block mt-1 text-xl font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {title}
        </Link>
        <p className="mt-4 mb-6 text-gray-600 dark:text-gray-300">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center px-4 py-2 text-sm font-medium
            text-blue-600 dark:text-blue-400
            bg-blue-50 dark:bg-blue-900/20
            hover:bg-blue-100 dark:hover:bg-blue-900/30
            rounded-md transition-colors"
        >
          Read Article
        </Link>
      </CardContent>
    </Card>
  );
}
