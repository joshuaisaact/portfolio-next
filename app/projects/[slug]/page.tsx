import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/constants/projectConstants";
import Image from "next/image";
import { Metadata } from "next";
import { BackToProjects } from "@/app/components/navigation/BackToProjects";
import dynamic from "next/dynamic";
import { Trophy } from "lucide-react";
import ProjectLinks from "@/app/components/ui/Projects/ProjectLinks";
import ProjectFeatures from "@/app/components/ui/Projects/ProjectFeatures";
import ProjectArchitecture from "@/app/components/ui/Projects/ProjectArchitecture";

const LazyVideoComponent = dynamic(
  () => import("../../components/VideoComponent"),
  {
    loading: () => (
      <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl" />
    ),
  },
);

export async function generateStaticParams() {
  return PROJECTS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = PROJECTS.find((p) => p.slug === slug);

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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center h-16">
            <BackToProjects />
          </div>
        </nav>
      </header>

      <main
        id="main-content"
        className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 pb-16"
      >
        <article
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12"
          aria-labelledby="project-title"
        >
          {/* Project media */}
          <div
            className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-8"
            aria-label="Project preview"
          >
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
              <h1
                className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
                id="project-title"
              >
                {project.title}
              </h1>
              {project.award && (
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 dark:bg-amber-500/20 rounded-full"
                  aria-label={`Award: ${project.award}`}
                >
                  <Trophy
                    className="w-5 h-5 text-amber-600 dark:text-amber-400"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                    {project.award}
                  </span>
                </div>
              )}
            </div>

            <ProjectLinks project={project} />
          </div>

          {/* Project content */}
          <div className="prose dark:prose-invert max-w-none">
            {/* Overview */}
            <div
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              aria-label="Project overview"
            >
              {project.overview}
            </div>

            {/* Key Features */}
            <ProjectFeatures features={project.features} />

            {/* Technical Architecture */}
            <ProjectArchitecture architecture={project.architecture} />
          </div>
        </article>
      </main>
    </>
  );
}
