import type { MDXComponents } from "mdx/types";
import { Figure } from "./app/components/mdx/Figure";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Images
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: (props: any) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="rounded-lg my-8"
        width={800}
        height={400}
        alt={props.alt || ""}
        {...props}
      />
    ),
    Figure,

    // Headings
    h1: (props) => (
      <h1 className="text-4xl font-bold mt-8 mb-6 dark:text-gray-200 tracking-tight">
        {props.children}
      </h1>
    ),
    h2: (props) => (
      <h2 className="text-3xl font-semibold mt-12 mb-6 dark:text-gray-300 tracking-tight">
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3 className="text-2xl font-semibold mt-8 mb-4 dark:text-gray-300">
        {props.children}
      </h3>
    ),
    h4: (props) => (
      <h4 className="text-xl font-semibold mt-6 mb-4 dark:text-gray-300">
        {props.children}
      </h4>
    ),

    // Paragraphs and text
    p: (props) => (
      <p className="text-lg leading-relaxed mb-6 dark:text-gray-300">
        {props.children}
      </p>
    ),
    strong: (props) => (
      <strong className="font-semibold dark:text-gray-200">
        {props.children}
      </strong>
    ),
    em: (props) => (
      <em className="italic dark:text-gray-300">{props.children}</em>
    ),

    // Lists
    ul: (props) => (
      <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-lg dark:text-gray-300">
        {props.children}
      </ul>
    ),
    ol: (props) => (
      <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-lg dark:text-gray-300">
        {props.children}
      </ol>
    ),
    li: (props) => <li className="pl-2 leading-relaxed">{props.children}</li>,

    // Blockquotes
    blockquote: (props) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 my-6 italic text-gray-700 dark:text-gray-400">
        {props.children}
      </blockquote>
    ),

    // Code blocks
    pre: (props) => (
      <pre className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
        {props.children}
      </pre>
    ),
    code: (props) => (
      <code className="bg-gray-100 dark:bg-gray-800 rounded px-1.5 py-0.5 text-sm font-mono">
        {props.children}
      </code>
    ),

    // Horizontal rule
    hr: () => (
      <hr className="my-12 border-t border-gray-200 dark:border-gray-800" />
    ),

    // Links
    a: (props) => (
      <a
        {...props}
        className="text-blue-600 dark:text-blue-400 hover:underline"
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      />
    ),

    ...components,
  };
}
