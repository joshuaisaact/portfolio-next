import type { MDXComponents } from "mdx/types";
import { Figure } from "./app/components/mdx/Figure";
import { BlogHeader } from "./app/components/mdx/BlogHeader";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlogMetadata {
  title: string;
  date: string;
  featured_image?: string;
  excerpt?: string;
  tags?: string[];
}

function BlogLayout({
  children,
  metadata,
}: {
  children: React.ReactNode;
  metadata?: BlogMetadata;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white dark:focus:bg-gray-900 focus:text-blue-600"
      >
        Skip to main content
      </a>

      <div
        className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0_/_0.03)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255_/_0.03)_1px,transparent_0)]"
        aria-hidden="true"
      />

      <main id="main-content" className="relative mx-auto max-w-4xl px-6 py-12">
        <nav aria-label="Back to blog">
          <Link
            href="/blog"
            className="group mb-8 inline-flex items-center text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Return to blog listing"
          >
            <ArrowLeft
              className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back to blog
          </Link>
        </nav>

        <article
          className="prose-quoteless prose prose-gray mx-auto max-w-none dark:prose-invert"
          aria-labelledby="article-title"
        >
          {metadata && (
            <BlogHeader
              title={metadata.title}
              date={metadata.date}
              featured_image={metadata.featured_image}
              tags={metadata.tags}
            />
          )}
          <div className="mt-8 rounded-lg bg-white/80 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-900/5 dark:bg-gray-900/80 dark:ring-white/5">
            {children}
          </div>
        </article>
      </main>
    </div>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: (props) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { metadata } = props as any;
      return <BlogLayout metadata={metadata}>{props.children}</BlogLayout>;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: (props: any) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="my-8 rounded-lg ring-1 ring-gray-900/5 dark:ring-white/5"
        width={600}
        height={200}
        alt={props.alt || ""}
        {...props}
      />
    ),
    Figure,

    h1: (props) => (
      <h1
        id="article-title"
        className="relative z-10 bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-gray-100 dark:to-gray-300"
      >
        {props.children}
      </h1>
    ),
    h2: (props) => (
      <h2
        className="relative z-10 bg-gradient-to-b from-gray-800 to-gray-600 bg-clip-text text-3xl font-semibold tracking-tight text-transparent dark:from-gray-200 dark:to-gray-400"
        id={`heading-${props.children?.toString().toLowerCase().replace(/\s+/g, "-")}`}
      >
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3
        className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
        id={`subheading-${props.children?.toString().toLowerCase().replace(/\s+/g, "-")}`}
      >
        {props.children}
      </h3>
    ),
    h4: (props) => (
      <h4
        className="text-xl font-semibold text-gray-800 dark:text-gray-200"
        id={`subheading-${props.children?.toString().toLowerCase().replace(/\s+/g, "-")}`}
      >
        {props.children}
      </h4>
    ),

    p: (props) => (
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {props.children}
      </p>
    ),

    ul: (props) => (
      <ul
        role="list"
        className="list-disc list-outside ml-6 space-y-2 text-gray-700 dark:text-gray-300"
      >
        {props.children}
      </ul>
    ),
    ol: (props) => (
      <ol
        role="list"
        className="list-decimal list-outside ml-6 space-y-2 text-gray-700 dark:text-gray-300"
      >
        {props.children}
      </ol>
    ),
    li: (props) => (
      <li role="listitem" className="pl-2 leading-relaxed">
        {props.children}
      </li>
    ),

    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-gray-200 pl-6 italic text-gray-700 dark:border-gray-700 dark:text-gray-400"
        role="quote"
      >
        {props.children}
      </blockquote>
    ),

    pre: (props) => (
      <pre
        className="rounded-lg bg-gray-50/50 p-4 shadow-sm ring-1 ring-gray-900/5 backdrop-blur-sm dark:bg-gray-800/50 dark:ring-white/5"
        role="region"
        aria-label="Code example"
      >
        {props.children}
      </pre>
    ),
    code: (props) => (
      <code className="rounded bg-gray-100/70 px-1.5 py-0.5 text-sm font-mono text-gray-800 dark:bg-gray-800/70 dark:text-gray-200">
        {props.children}
      </code>
    ),

    hr: () => (
      <hr
        className="my-12 border-t border-gray-200 dark:border-gray-800"
        role="separator"
      />
    ),

    a: (props) => (
      <a
        {...props}
        className="text-gray-900 underline decoration-gray-300 underline-offset-2 transition-colors hover:decoration-gray-700 dark:text-gray-100 dark:decoration-gray-700 dark:hover:decoration-gray-400"
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={
          props.href?.startsWith("http")
            ? `${props.children} (opens in new tab)`
            : undefined
        }
      />
    ),

    ...components,
  };
}
