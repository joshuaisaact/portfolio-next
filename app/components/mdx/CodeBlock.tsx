"use client";

import * as React from "react";
import { useState } from "react";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

const CopyButton = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="absolute right-3 top-3 rounded bg-gray-700/50 hover:bg-gray-600/50 px-2 py-1 text-xs text-gray-200 transition-colors backdrop-blur-sm"
    >
      {isCopied ? "✓ Copied!" : "Copy"}
    </button>
  );
};

export const CodeBlock = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractTextFromNode = (node: any): string => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(extractTextFromNode).join("");
    if (node?.props?.children) return extractTextFromNode(node.props.children);
    return "";
  };

  const textContent = React.isValidElement(props.children)
    ? extractTextFromNode(props.children)
    : "";

  return (
    <div className="relative">
      <pre
        {...props}
        className="rounded-lg bg-gray-50/50 p-4 shadow-sm ring-1 ring-gray-900/5 backdrop-blur-sm dark:bg-gray-800/50 dark:ring-white/5
          overflow-x-auto whitespace-pre
          max-sm:!pl-4"
      >
        {props.children}
      </pre>
      <CopyButton code={textContent} />
    </div>
  );
};
