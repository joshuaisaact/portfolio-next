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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.joshtuddenham.tech"; // Ensure this is set in your .env


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
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const item = PROJECTS.find((p) => p.slug === slug);

  if (!item) {
    return {
      title: "Project Not Found | Joshua Tuddenham Portfolio",
      description: "The project you are looking for could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const title = item.title || "Untitled Project";
  const description = item.description || "A project by Joshua Tuddenham.";
  const skills = item.skills || [];

  const ogImages = [];
  const twitterImages = [];

  if (item.imageSrc) {
    const fullImageUrl = item.imageSrc.startsWith("http")
      ? item.imageSrc
      : `${SITE_URL}${item.imageSrc.startsWith("/") ? "" : "/"}${item.imageSrc}`;

    ogImages.push({
      url: fullImageUrl,
      width: 1200,
      height: 630,
      alt: item.imageAlt || title,
    });
    twitterImages.push(fullImageUrl);
  } else {
    console.log("No image found for project:", item.title);
  }


  return {
    title: `${title} | Joshua Tuddenham Portfolio`,
    description: description,
    keywords: [...skills, "portfolio", "project", "development", title].filter(Boolean),
    openGraph: {
      title: title,
      description: description,
      url: `${SITE_URL}/projects/${item.slug}`,
      siteName: "Joshua Tuddenham Portfolio",
      type: "article",
      images: ogImages.length > 0 ? ogImages : undefined,
    },
    twitter: {
      card: ogImages.length > 0 ? "summary_large_image" : "summary",
      title: title,
      description: description,
      images: twitterImages.length > 0 ? twitterImages : undefined,
    },
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

  const projectTitle = project.title || "Untitled Project";
  const projectOverview = project.overview || "";
  const projectImageAlt = project.imageAlt || projectTitle;

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
          {(project.videoSrc || project.imageSrc) && (
            <div
              className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-8"
              aria-label="Project preview"
            >
              {project.videoSrc ? (
                <LazyVideoComponent videoSrc={project.videoSrc} />
              ) : project.imageSrc ? ( // Check again ensures imageSrc is defined here
                <Image
                  src={project.imageSrc}
                  alt={projectImageAlt}
                  className="object-cover"
                  priority // Consider if priority is needed if it's not the LCP for all project types
                  fill
                  sizes="(min-width: 1280px) 896px, (min-width: 1040px) calc(85.71vw - 48px), (min-width: 780px) calc(100vw - 48px), calc(100vw - 32px)"
                />
              ) : null}
            </div>
          )}

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
          <div className="prose dark:prose-invert max-w-none space-y-8"> {/* Added space-y-8 for consistent spacing */}
            {/* Overview: Render only if overview has content */}
            {projectOverview && (
              <div
                className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                aria-label="Project overview"
              >
                {/* If project.overview can contain HTML, use dangerouslySetInnerHTML with caution
                    or parse markdown to HTML. Assuming plain text for now. */}
                <p>{projectOverview}</p>
              </div>
            )}

            {/* Key Features: Conditionally render ProjectFeatures */}
            {project.features && project.features.length > 0 && (
              <ProjectFeatures features={project.features} />
            )}

            {/* Technical Architecture: Conditionally render ProjectArchitecture */}
            {project.architecture && (
              <ProjectArchitecture architecture={project.architecture} />
            )}
          </div>
        </article>
      </main>
    </>
  );
}