import { outfit } from "@/lib/fonts";

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2
      className={`${outfit.className} relative block text-3xl font-semibold sm:text-4xl`} // Changed inline-block to block
    >
      <span className="relative z-10 bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300">
        {title}
      </span>
      <span className="absolute inset-0 -z-10 translate-y-1 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0_/_0.05)_1px,transparent_0)] [background-size:16px_16px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255_/_0.05)_1px,transparent_0)]" />
    </h2>
  );
}
