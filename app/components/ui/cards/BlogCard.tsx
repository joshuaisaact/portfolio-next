import Link from "next/link";
import { Card, CardImage, CardContent } from "./Card";
import { formatDate } from "@/app/components/utils/formatDate";

interface BlogCardProps {
  slug: string;
  metadata: {
    title: string;
    date: string;
    excerpt: string;
    featured_image: string;
    tags: string[];
  };
  role?: string;
}

export function BlogCard({ slug, metadata, role }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block h-full"
      onClick={() => window.scrollTo(0, 0)}
    >
      <Card
        className="group hover:-translate-y-0.5 hover:shadow-md h-full flex flex-col"
        role={role}
      >
        <CardImage
          src={metadata.featured_image}
          alt={metadata.title}
          containerClassName="aspect-[3/2] sm:aspect-[4/3] bg-gray-100 dark:bg-gray-800"
          className="transition-transform duration-500 group-hover:scale-105 object-contain"
        />
        <CardContent>
          {/* Date and tags row */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <time
              dateTime={metadata.date}
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              {formatDate(metadata.date)}
            </time>
            <div
              className="flex flex-wrap gap-1.5 sm:gap-2"
              role="list"
              aria-label="Article tags"
            >
              {metadata.tags.map((tag) => (
                <span
                  key={tag}
                  role="listitem"
                  className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h2
            className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100
            group-hover:text-blue-600 dark:group-hover:text-blue-400
            transition-colors line-clamp-2 mb-2"
          >
            {metadata.title}
          </h2>
          <p
            className="text-sm sm:text-base text-gray-600 dark:text-gray-300
            line-clamp-3 mb-4 flex-grow"
          >
            {metadata.excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
