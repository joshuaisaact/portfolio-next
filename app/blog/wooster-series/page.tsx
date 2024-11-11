import { posts } from "../posts";
import { Section } from "../../components/ui/Section";
import { BlogCard } from "../../components/ui/cards/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wooster Series | My Blog",
  description:
    "A series of blog posts documenting the creation of Wooster, an AI-powered project.",
};

export default function WoosterSeriesPage() {
  // Filter posts related to Wooster
  const woosterPosts = posts.filter(
    (post) =>
      post.metadata.title.toLowerCase().includes("wooster") ||
      post.metadata.tags.includes("Wooster"),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <main className="relative z-10 mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <Section id="wooster-series" title="How I built Wooster">
          <p className="text-lg text-gray-700 dark:text-gray-300 py-10">
            A dedicated series covering the development of Wooster, an
            AI-powered trip planning project. Explore the journey from an
            initial one-week MVP sprint, to deployment, and further feature
            implementation and refactoring.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0"
            role="list"
            aria-label="Wooster Series"
          >
            {woosterPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                role="listitem"
                metadata={post.metadata}
              />
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
