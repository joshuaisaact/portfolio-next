"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="padding-medium text-center underline decoration-[var(--color-primary)] decoration-2 underline-offset-[2px]">
        Something went wrong!
      </h2>
      <button onClick={() => reset()} className="btn">
        Try again
      </button>
    </div>
  );
}
