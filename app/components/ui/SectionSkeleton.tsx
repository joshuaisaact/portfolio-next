interface SectionSkeletonProps {
  height?: "sm" | "md" | "lg" | "xl";
}

export function SectionSkeleton({ height = "lg" }: SectionSkeletonProps) {
  const heightClasses = {
    sm: "h-64",
    md: "h-80",
    lg: "h-96",
    xl: "h-[32rem]",
  };

  return (
    <div
      className={`${heightClasses[height]} animate-pulse bg-gray-100 dark:bg-gray-800 rounded-xl`}
      role="status"
      aria-label="Loading section"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
