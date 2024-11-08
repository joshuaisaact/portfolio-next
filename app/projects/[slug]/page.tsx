import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/constants/projectConstants";
import Image from "next/image";
import { Metadata } from "next";
import { BackToProjects } from "@/app/components/navigation/BackToProjects";
import dynamic from "next/dynamic";
import { Trophy } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}
interface ProjectLink {
  type: "github" | "live" | "submission";
  url: string;
  label: string;
}

const LazyVideoComponent = dynamic(
  () => import("../../components/VideoComponent"),
  { loading: () => <div>Loading video...</div> },
);

export async function generateStaticParams() {
  return PROJECTS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const item = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!item) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${item.title} | Joshua Tuddenham Portfolio`,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      type: "article",
      images: [
        {
          url: item.imageSrc,
          width: 1200,
          height: 630,
          alt: item.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      images: [item.imageSrc],
    },
    keywords: [...item.skills, "portfolio", "project", "development"],
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);
  if (!project) notFound();

  return (
    <>
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <BackToProjects />
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          {/* Project media */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
            {project.videoSrc ? (
              <LazyVideoComponent videoSrc={project.videoSrc} />
            ) : (
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                className="object-cover"
                priority
                fill
                sizes="(min-width: 1280px) 896px, (min-width: 1040px) calc(85.71vw - 48px), (min-width: 780px) calc(100vw - 48px), calc(100vw - 32px)"
              />
            )}
          </div>

          {/* Project header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
              {project.award && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 dark:bg-amber-500/20 rounded-full">
                  <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                    {project.award}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {project.links.map((link) => {
                switch (link.type) {
                  case "github":
                    return (
                      <a
                        key={link.type}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-all"
                      >
                        <Image
                          src="/media/skills/github.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="mr-2 dark:invert"
                        />
                        {link.label}
                      </a>
                    );
                  case "live":
                    return (
                      <a
                        key={link.type}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-all shadow-sm hover:shadow"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        {link.label}
                      </a>
                    );
                  case "submission":
                    return (
                      <a
                        key={link.type}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-100 hover:bg-amber-200 dark:bg-amber-500/20 dark:hover:bg-amber-500/30 text-amber-600 dark:text-amber-400 transition-all"
                      >
                        <Trophy className="w-5 h-5 mr-2" />
                        {link.label}
                      </a>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>

          {/* Project content */}
          <div className="prose dark:prose-invert max-w-none">
            {/* Overview */}
            <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {project.overview}
            </div>

            {/* Key Features */}
            <section className="my-12">
              <h2 className="text-xl font-semibold mb-6">Key Features</h2>
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8">
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Technical Architecture */}
            <section className="my-12">
              <h2 className="text-xl font-semibold mb-6">
                Technical Architecture
              </h2>
              <div className="space-y-8">
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                    Frontend
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.architecture.frontend}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                    Backend
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.architecture.backend}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                    Infrastructure
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.architecture.infrastructure}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
