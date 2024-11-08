import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/constants/projectConstants";
import Image from "next/image";
import { Metadata } from "next";
import { BackToProjects } from "@/app/components/navigation/BackToProjects";
import dynamic from "next/dynamic";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const LazyVideoComponent = dynamic(
  () => import("../../components/VideoComponent"),
  {
    loading: () => <div>Loading video...</div>,
  },
);

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  // Clean description by removing HTML tags
  const cleanDescription = project.description.replace(/<[^>]*>/g, "");

  return {
    title: `${project.title} | Joshua Tuddenham Portfolio`,
    description: cleanDescription,
    openGraph: {
      title: project.title,
      description: cleanDescription,
      type: "article",
      images: [
        {
          url: project.imageSrc,
          width: 1200,
          height: 630,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: cleanDescription,
      images: [project.imageSrc],
    },
    keywords: [...project.skills, "portfolio", "project", "development"],
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);
  if (!project) notFound();

  return (
    <>
      {/* Back button header */}
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
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg
                  bg-gray-100 hover:bg-gray-200
                  dark:bg-gray-800 dark:hover:bg-gray-700
                  text-gray-900 dark:text-white
                  transition-all duration-200 ease-in-out"
              >
                <Image
                  src="/media/skills/github.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2 dark:invert"
                />
                View Code
              </a>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg
                  bg-blue-600 hover:bg-blue-700
                  dark:bg-blue-500 dark:hover:bg-blue-600
                  text-white
                  transition-all duration-200 ease-in-out
                  shadow-sm hover:shadow"
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
                Visit Live Site
              </a>
            </div>
          </header>

          {/* Project content */}
          <div className="prose dark:prose-invert max-w-none">
            {/* Overview */}
            <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {project.fullDescription[0].replace(
                "<strong>Description:</strong><br />",
                "",
              )}
            </div>

            {/* Highlights */}
            <div className="my-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-6">Project Highlights</h2>
              <ul className="space-y-4">
                {project.fullDescription[2]
                  .replace(/<ul>|<\/ul>/g, "")
                  .split("<li>")
                  .filter(Boolean)
                  .map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{highlight.replace("</li>", "")}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center px-4 py-2
                      bg-gray-100 dark:bg-gray-800
                      text-gray-900 dark:text-gray-200
                      rounded-lg"
                  >
                    <Image
                      src={`/media/skills/${skill.toLowerCase()}.svg`}
                      alt=""
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
