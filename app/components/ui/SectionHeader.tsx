interface SectionHeaderProps {
  title: string;
  id: string;
}

export function SectionHeader({ title, id }: SectionHeaderProps) {
  return (
    <h2 id={id} className={`relative text-3xl font-semibold sm:text-4xl`}>
      <span className="relative z-10 bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300">
        {title}
      </span>
      <span
        className="absolute inset-0 -z-10 translate-y-1 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0_/_0.05)_1px,transparent_0)] [background-size:16px_16px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255_/_0.05)_1px,transparent_0)]"
        aria-hidden="true"
      />
    </h2>
  );
}
