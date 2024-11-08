import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogHeaderProps {
  title: string;
  date: string;
  featured_image?: string;
  tags?: string[];
}

export function BlogHeader({
  title,
  date,
  featured_image,
  tags,
}: BlogHeaderProps) {
  return (
    <div className="mb-8">
      <Link
        href="/blog"
        className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to blog
      </Link>

      <h1 className="text-4xl font-bold mb-4 dark:text-gray-200 tracking-tight">
        {title}
      </h1>

      <div className="flex items-center gap-4 mb-6">
        <time className="text-sm text-gray-500 dark:text-gray-400">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        {tags && tags.length > 0 && (
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {featured_image && (
        <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
          <Image
            src={featured_image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </div>
  );
}