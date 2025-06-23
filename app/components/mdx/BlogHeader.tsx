import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogHeaderProps {
  title: string;
  date: string;
  featured_image?: string;
  featured_video?: string;
  tags?: string[];
}

export function BlogHeader({
  title,
  date,
  featured_image,
  featured_video,
  tags,
}: BlogHeaderProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mb-8">
      <nav aria-label="Back to blog navigation">
        <Link
          href="/blog"
          aria-label="Back to blog posts"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 mb-6 group"
        >
          <ArrowLeft
            className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
          Back to blog
        </Link>
      </nav>

      <h1 className="text-4xl font-bold mb-4 dark:text-gray-200 tracking-tight">
        {title}
      </h1>

      <div className="flex items-center gap-4 mb-6">
        <time
          dateTime={new Date(date).toISOString()}
          className="text-sm text-gray-500 dark:text-gray-400"
          aria-label={`Published on ${formattedDate}`}
        >
          {formattedDate}
        </time>
        {tags && tags.length > 0 && (
          <div
            className="flex flex-wrap gap-1.5 sm:gap-2"
            role="list"
            aria-label="Article tags"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                role="listitem"
                className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {(featured_image || featured_video) && (
        <div
          className={`relative overflow-hidden rounded-lg mb-8 ${featured_video
            ? "aspect-square bg-black flex items-center justify-center"
            : "aspect-video"
            }`}
          aria-hidden="true"
        >
          {featured_video ? (
            <video
              src={featured_video}
              autoPlay
              loop
              muted
              playsInline
              className="max-w-full max-h-full object-contain"
              aria-label={`Video for ${title}`}
            />
          ) : featured_image ? (
            <Image
              src={featured_image}
              alt={title}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) calc(100vw - 2rem),
              (max-width: 768px) calc(100vw - 4rem),
              672px"
            />
          ) : null}
        </div>
      )}
    </div>
  );
}
