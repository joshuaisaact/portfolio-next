import type { MDXComponents } from "mdx/types";
import { Figure } from "./app/components/mdx/Figure";
import { BlogHeader } from "./app/components/mdx/BlogHeader";
import Image from "next/image";
import { CodeBlock } from "./app/components/mdx/CodeBlock";
import { ReactNode } from "react";

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
  children: ReactNode;
  metadata?: BlogMetadata;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
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

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 lg:py-10"
      >
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
          <div className="mt-8 rounded-lg bg-white/80 p-2 sm:p-4 md:p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-900/5 dark:bg-gray-900/80 dark:ring-white/5">
            <div className="p-2 sm:p-4 md:p-8">{children}</div>
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
        className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
      >
        {props.children}
      </h1>
    ),
    h2: (props) => (
      <h2
        className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-200"
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
        className="text-lg list-disc list-outside ml-6 space-y-2 text-gray-700 dark:text-gray-300"
      >
        {props.children}
      </ul>
    ),
    ol: (props) => (
      <ol
        role="list"
        className="text-lg list-decimal list-outside ml-6 space-y-2 text-gray-700 dark:text-gray-300"
      >
        {props.children}
      </ol>
    ),
    li: (props) => (
      <li role="listitem" className="text-lg pl-2 leading-relaxed">
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

    pre: CodeBlock,
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
