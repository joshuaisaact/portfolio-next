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
      className="relative py-16 sm:py-20 md:py-24 border-t border-gray-200 dark:border-gray-800 px-12"
    >
      <div className="space-y-8">
        <SectionHeader title={title} id={headingId} />
        <div role="region" aria-label={title}>
          {children}
        </div>
      </div>
    </section>
  );
}
