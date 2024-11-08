import { SectionHeader } from "./SectionHeader";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  singleColumn?: boolean;
}

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="relative py-16 sm:py-20 md:py-24 border-t border-gray-200 dark:border-gray-800 px-12"
    >
      <div className="space-y-8">
        <SectionHeader title={title} />
        {children}
      </div>
    </section>
  );
}
