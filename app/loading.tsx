export default function Loading() {
  return (
    <div
      className="site-background flex items-center justify-center min-h-screen"
      role="status"
      aria-label="Loading content"
    >
      <div
        className="w-16 h-16 border-4 border-[var(--theme-1)] border-t-transparent rounded-full animate-spin"
        aria-hidden="true"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
