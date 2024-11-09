"use client";

import { useState } from "react";

interface BlogFiltersProps {
  allTags: string[];
  onFiltersChange: (tag: string | undefined, sort: "newest" | "oldest") => void;
}

export function BlogFilters({ allTags, onFiltersChange }: BlogFiltersProps) {
  const [currentTag, setCurrentTag] = useState<string>();
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const handleTagChange = (tag: string | undefined) => {
    setCurrentTag(tag);
    onFiltersChange(tag, sortOrder);
  };

  const handleSortChange = (sort: "newest" | "oldest") => {
    setSortOrder(sort);
    onFiltersChange(currentTag, sort);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Filter by tag:
        </span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleTagChange(undefined)}
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
              !currentTag
                ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
                currentTag === tag
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Sort by:
        </span>
        <button
          onClick={() => handleSortChange("newest")}
          className={`text-sm transition-colors ${
            sortOrder === "newest"
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          }`}
        >
          Newest
        </button>
        <span className="text-gray-400">|</span>
        <button
          onClick={() => handleSortChange("oldest")}
          className={`text-sm transition-colors ${
            sortOrder === "oldest"
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          }`}
        >
          Oldest
        </button>
      </div>
    </div>
  );
}
