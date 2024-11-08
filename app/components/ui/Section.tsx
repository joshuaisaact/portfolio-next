import { SectionHeader } from "./SectionHeader";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  singleColumn?: boolean;
}

export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="relative py-8 sm:py-16 md:py-20 border-t border-gray-200 dark:border-gray-800 px-4 sm:px-8 md:px-12" // Adjusted padding
    >
      <div className="space-y-6 sm:space-y-8">
        <SectionHeader title={title} id={headingId} />
        <div role="region" aria-label={title}>
          {children}
        </div>
      </div>
    </section>
  );
}
