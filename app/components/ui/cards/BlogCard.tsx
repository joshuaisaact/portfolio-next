import Link from "next/link";
import { Card, CardImage, CardContent } from "./Card";

interface BlogCardProps {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  role: string;
}

export function BlogCard({ slug, title, image, excerpt }: BlogCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardImage
        src={image}
        alt={title}
        containerClassName="sm:aspect-[16/9] md:aspect-[2/1]"
        className="transition-transform duration-500"
      />
      <CardContent>
        <Link
          href={`/blog/${slug}`}
          className="block text-lg sm:text-xl font-semibold
          hover:text-blue-600 dark:hover:text-blue-400
          transition-colors line-clamp-2 mb-2"
        >
          {title}
        </Link>
        <p
          className="text-sm sm:text-base text-gray-600 dark:text-gray-300
          line-clamp-3 mb-4 flex-grow"
        >
          {excerpt}
        </p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium
          text-blue-600 dark:text-blue-400
          bg-blue-50 dark:bg-blue-900/20
          hover:bg-blue-100 dark:hover:bg-blue-900/30
          rounded-md transition-colors
          self-start"
        >
          Read Article
        </Link>
      </CardContent>
    </Card>
  );
}
